export default{
  template : `<div>
                <h3>제목 : {{detail.movieNm}}</h3>
                <ul>
                  <li>배우 : <span v-for="actor in detail.actors">{{actor.peopleNm}}</span> </li>
                  <li>감독 : <sapn v-for="director in detail.directors"> 한글 - {{director.peopleNm}} / 영문 - {{director.peopleNmEn}}</sapn></li>
                  <li>장르 : <span v-for="gen in detail.genres">{{gen.genreNm}}</span></li>
                  <li>상영시간 : {{detail.showTm}} 분</li>
                </ul>
                <router-link tag="button" style="float:right;" v-bind:to="{name : 'movieList'}">목록</router-link>
              </div>`,
  props : ['movieCd'],
  data : function(){
    return {
      detail : {}
    }
  },
  created : function(){
    //console.log(this.movieCd);
    let movieCd = this.movieCd;
    fetch('https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=' + movieCd)
    .then(res => res.json())
    .then(data => {
      this.detail = data.movieInfoResult.movieInfo;
    })
    .catch(err => console.log(err));
  }
}
