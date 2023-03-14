export default{
  //배우, 감독, 장르는 detail 객체에 또 다른 객체가 존재하기 때문에 v-for를 활용하여 안에 들어있는 정보를 모두 출력한다.
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
  // movieList에 선언되어있는 파라미터 값을 받아온다.
  props : ['movieCd'],
  data : function(){
    return {
      // template에서 해당 객체를 활용하여 영화의 단건조회를 하기위함 ==> {actors : {peopleNm : A, peopleNmEn : B} , directors : {directors, peopleNmEn} }
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
