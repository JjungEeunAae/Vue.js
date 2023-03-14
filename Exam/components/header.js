export default{
  template : `<header>
                <h1>영화검색사이트</h1>
                <h1>영화검색 (오늘날짜 {{now}})</h1>
                <input type="date" v-model="search">
                <button @click="getData">검색</button>
              </header>`,
  // 부모에 선언된 template의 v-bind:parentData를 가져온다
  props : ['parentData'],
  data : function(){
    return {
      // 정해진 값이 없기 때문에 빈칸
      search : ''
    }
  },
  computed : {
    // 오늘날짜
    now : function(){
      let date = new Date();
      let year = date.getFullYear();
      let month = String(date.getMonth() + 1);
      let day = String(date.getDate());

      return year + '년 ' + month + '월 ' + day + '일'
    }
  },
  methods : {
    // get : 오늘 날짜를 받아오는 함수
    get : function(){
      let date = new Date();
      date =  new Date(Date.parse(date) + 1 * 1000 * 60 * 60 * 24); // 하루 전

      let year = date.getFullYear();
      let month = String(date.getMonth() + 1);
      let day = String(date.getDate());

      //날짜포맷 맞춰주기( yyyyMMdd )
      if(month.length == 1) month = "0" + month;
      if(day.length == 1) day = "0" + day;

      let fullDate = year + month + day;

      return fullDate;
    },
    // getData : 버튼클릭이벤트
    getData : function(){
      // input type:date를 가르킴 , 받아오는 날짜 포맷 : yyyy-MM-dd
      let movieSearch = this.search;
      // 받아오는 날짜포맷 형식에서 '-'를 자르기 위해 replace를 사용
      // 날짜 포맷 변경됨 : yyyyMMdd
      movieSearch = movieSearch.replace(/\-/g,'');

      // 당일부터 그 이후의 날짜에 대한 영화정보는 보이지 않도록 한다.
      //    yyyyMmdd >= yyyyMMdd
      if(movieSearch >= this.get()){
        alert("해당 날짜는 검색할 수 없습니다.");
        // 안내문을 띄운 후 input 초기화
        this.movie = "";
        // 아래의 실행문으로 가지않는다.
        return;
      }

      //날짜를 입력하고 검색버튼을 눌렀을 때 실행
      if(movieSearch){
        // 영화API fetch 호출
        fetch('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=' + movieSearch)
        .then(res => res.json())
        .then(data => {
          // 패치로 받아온 정보 부모의 $data로 전달할 준비
          this.parentData.movieList = data.boxOfficeResult.dailyBoxOfficeList;

          // 내가(자식) 준비해둔 정보를 부모한테 준다 ( 부모와 자식의 동기화, 해당 정보를 가진 부모는 각 컴포넌트의 징검다리가 된다 )
          this.$emit('update:parentData', this.parentData);

          // 검색버튼을 누르면 강제로 movieList로 이동
          this.$router.push({ name : "movieList" });
        })
        .catch(err => console.log(err));
      } else {
        // 입력된 값이 없으면 해당 안내 띄우기
        alert("날짜를 입력해주세요");
      }
    },
  }
}
