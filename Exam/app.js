//공통 component
import myHeader from './components/header.js'
//각각의 component를 router에 묶어둠
import router from './router/router.js'

//this.$data : 부모가 가진 모든 data를 자식쪽에서 가져옴
//부모의 데이터에다가 불러온 데이터를 저장해야하므로 sync를 씀
//렌더링할 template을 선언
let template = `<div>
                  <my-header v-bind:parentData.sync="this.$data"></my-header>
                  <router-view></router-view>
                </div>`

//new Vue 선언 (component의 부모)
new Vue({
  el : '#app',
  template : template,
  data : {
    movieList : {}    // 영화 API로 불러운 자료를 객체 형식으로 받기, 전역변수
  },
  components : {
    // 컴포넌트를 components 인스턴스 옵션으로 등록함으로써 다른 인스턴스/컴포넌트의 범위에서만 사용할 수있는 컴포넌트를 만들 수 있습니다
    // 공통으로 사용할 기능을 headerComponent로 이동
    'my-header' : myHeader
  },
  methods : {
    //data를 주고받을 수 있도록 데이터 관련 함수
    getParentData : function(){   //getter, json에서 읽어온 파일들을 저장
      return this.movieList
    },
    setParentData : function(movieList){  //setter
      this.movieList = movieList;
    }
  },
  //component가 묶여진 router를 new Vue에 추가
  router
});
