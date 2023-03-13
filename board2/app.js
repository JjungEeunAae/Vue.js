// 단일 파일 컴포넌트

//외부에 있는 파일을 사용할 때 import를 사용한다
import myHeader from './components/header.js'
// import myBoardList from './components/myBoardList.js'
// import myBoardWrite from './components/myBoardWrite.js'
// import myBoardRead from './components/myBoardRead.js'
// ---> router로 옮겨서 사용할 예정
import router from './router/router.js'

// this.$data : 부모가 가진 모든 data를 자식쪽에서 가져옴
// 부모의 데이터에다가 불러온 데이터를 저장해야하므로 sync를 씀
let template = `
                <div>
                  <my-header v-bind:parentData.sync="this.$data"></my-header>
                  <router-view></router-view>
                </div>`
new Vue({
  el : '#app',
  template : template,
  //데이터를 부모의 자식인 header.js로 던져준다
  data : {
    dataArray : {}, // 파일에서 읽은 데이터
  },
  components : {
    //공통으로 사용할 기능을 header로 이동
    'my-header' : myHeader
  },
  methods : {
    //data를 주고 받을 수 있도록 데이터 관련 함수
    getParentData : function(){            //getter
      return this.dataArray['board']
    },
    setParentData : function(dataList){    //setter
      this.dataArray['board'] = dataList;
    }
  },
  router
});
