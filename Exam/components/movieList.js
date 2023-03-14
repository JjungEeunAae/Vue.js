export default{
  template : `<div>
                <table id="list">
                    <!-- HEADER -->
                    <tr>
                        <th>순위</th>
                        <th>영화제목</th>
                        <th>누적관객수</th>
                        <th>개봉날짜</th>
                        <th> </th>
                    </tr>
                    <!-- DATA LIST -->
                    <tr v-for="item in movieArray" :key="item.rank">
                        <td>{{ item.rank }}</td>
                        <td>{{ item.movieNm }}</td>
                        <td>{{ item.audiAcc }}</td>
                        <td>{{ item.openDt }}</td>
                        <td><button v-on:click="movieDelete(item.rank)">삭제</button></td>
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
    console.log(this.movieArray);
  },
  methods : {
    movieDelete : function(rank){ // 글삭제
      for(let i = 0 ; i < this.movieArray.length ; i++){
        if(this.movieArray[i].rank == rank){
          this.movieArray.splice(i,1);
        }
      }

      this.$parent.setParentData(this.movieArray);
    },
  }
}