export default{
  template : `<div>
                <table id="list">
                  <tr>
                    <th>순위</th>
                    <th>영화제목</th>
                    <th>누적관객수</th>
                    <th>개봉날짜</th>
                    <th> </th>
                  </tr>
                  <tr v-for="item in movieArray" :key="item.movieCd">
                    <td>{{ item.rank }}</td>
                    <router-link tag="td" v-bind:to="{name : 'movieDetail', params : {'movieCd' : item.movieCd}}">{{item.movieNm}}</router-link>
                    <td>{{ item.audiAcc }} 명</td>
                    <td>{{ item.openDt }}</td>
                    <td><button v-on:click="movieDelete(item.movieCd)">삭제</button></td>
                  </tr>
                </table>
              </div>`,
  data : function(){
    return {
      // movieArray의 배열
      // v-for="item in movieArray"에서 하나씩 하나씩 꺼내쓰기 위해 배열을 선언하였다.
      movieArray : []
    }
  },
  created : function() {
    // 부모가 가지고있는 API 정보를 가져와서 사용한다
    this.movieArray = this.$parent.getParentData();
  },
  methods : {
    // 글삭제
    movieDelete : function(movieCd){
      for(let i = 0 ; i < this.movieArray.length ; i++){
        if(this.movieArray[i].movieCd == movieCd){
          this.movieArray.splice(i,1);
        }
      }

      // 부모에게 데이터를 셋팅해준다
      this.$parent.setParentData(this.movieArray);
    },
  }
}
