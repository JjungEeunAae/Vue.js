<template>
  <div>
    <button v-on:click="loadJinju">데이터 호출</button>
    <table>
      <thead>
        <tr>
          <th>축제이름</th>
          <th>주소</th>
          <th>홈페이지</th>
          <th>사진</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <!-- item.idx : jinjuArray의 인덱스 -->
        <tr :key="item.idx" v-for="item in jinjuArray">
          <td>{{item.name}}</td>
          <td>{{item.address}}</td>
          <td>{{item.homepage}}</td>
          <td>
            <img :src=item.images[6] style="width:100px">
          </td>
          <td>{{item.phone}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default{ 
  data(){
    return{
      jinjuArray : {}
    };
  },
  methods : {
    loadJinju(){
      fetch('https://cors-anywhere.herokuapp.com/https://www.jinju.go.kr/openapi/tour/festival.do')
      .then(res => res.json())
      .then(data => {
        this.jinjuArray = data.results
        console.log(this.jinjuArray);
      }).catch(err => console.log(err));
    }
  }
}
</script>