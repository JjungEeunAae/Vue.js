export default{
  template : `<header>
                <h1>영화검색사이트</h1>
                <h1>영화검색 (오늘날짜{{now}})</h1>
                <input type="date" id="date">
                <button @click="getData">검색</button>
              </header>`,
  props : ['parentData'],
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
    getData(){
      let dday = document.getElementById("date").value;
      let dday_str = dday.replace(/\-/g,'');
      fetch('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=' + dday_str)
      .then(res => res.json())
      .then(data => {
        //console.log(data.boxOfficeResult.dailyBoxOfficeList);
        this.parentData.movieList = data.boxOfficeResult.dailyBoxOfficeList;
        //console.log(this.parentData.movieList);
        this.$emit('update:parentData', this.parentData);

        this.$router.push({ name : "movieList" });
      }).catch(err => console.log(err));
    }
  },
}