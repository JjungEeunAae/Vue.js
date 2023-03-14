<template>
<div>
  <button type="button" @click="seoulGetData">데이터출력</button>

  <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th>지역</th>
      <th>미세먼지 농도 / 대기질</th>
      <th>초미세먼지 농도 / 대기질</th>
    </tr>
  </thead>
  <tbody>
    <tr :key="item.MSRDT" v-for="item in seoulArray">
      <td>{{item.MSRSTE_NM}}</td>
      <td>{{item.PM10}} / {{item.PM10 <= 100 ? '좋음' : '나쁨'}}</td>
      <td>{{item.PM25}} / {{item.PM25 <= 35 ? '좋음' : '나쁨'}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>

export default{ 
  data(){
    return{
      seoulArray : {}
    };
  },
  methods : {
    seoulGetData(){
      fetch('https://cors-anywhere.herokuapp.com/http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99')
      .then(res => res.json())
      .then(data => {
        this.seoulArray = data.RealtimeCityAir.row;
        //console.log(this.seoulGetData);
      }).catch(err => console.log(err));
    }
  },
}
</script>