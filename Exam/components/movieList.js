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
      movieArray : []
    }
  },
  created : function(){
    this.movieArray = this.$parent.getParentData();
    //console.log(this.movieArray);
  },
  methods : {
    movieDelete : function(movieCd){ // 글삭제
      for(let i = 0 ; i < this.movieArray.length ; i++){
        if(this.movieArray[i].movieCd == movieCd){
          this.movieArray.splice(i,1);
        }
      }

      this.$parent.setParentData(this.movieArray);
    },
  }
}
