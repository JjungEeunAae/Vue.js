export default{
  template : `<header>
                <h1>영화검색사이트</h1>
                <h1>영화검색 (오늘날짜{{now}})</h1>
                <input type="date" v-model="search">
                <button @click="getData">검색</button>
              </header>`,
  props : ['parentData'],
  data : function(){
    return {
      search : ''
    }
  },
  computed : {
    now : function(){
      let date = new Date();
      let year = date.getFullYear();
      let month = String(date.getMonth() + 1);
      let day = String(date.getDate());

      return year + '년' + month + '월' + day + '일'
    }
  },
  methods : {
    get : function(){
      let date = new Date();
      date =  new Date(Date.parse(date) + 1 * 1000 * 60 * 60 * 24);

      let year = date.getFullYear();
      let month = String(date.getMonth() + 1);
      let day = String(date.getDate());

      if(month.length == 1) month = "0" + month;
      if(day.length == 1) day = "0" + day;

      let fullDate = year + month + day;
      //console.log(fullDate);
      return fullDate;
    },
    getData : function(){
      let movieSearch = this.search;
      movieSearch = movieSearch.replace(/\-/g,'');

      //당일부터 그 이후의 날짜에 대한 영화정보는 보이지 않도록 한다.
      if(movieSearch >= this.get()){
        alert("해당 날짜는 검색할 수 없습니다.");
        this.movie = "";
        return;
      }

      if(movieSearch){
        // 영화API fetch 호출
        fetch('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=' + movieSearch)
        .then(res => res.json())
        .then(data => {
          this.parentData.movieList = data.boxOfficeResult.dailyBoxOfficeList;

          this.$emit('update:parentData', this.parentData);

          this.$router.push({ name : "movieList" });
        })
        .catch(err => console.log(err));
      } else {
        alert("날짜를 입력해주세요");
      }
    },
  }
}
