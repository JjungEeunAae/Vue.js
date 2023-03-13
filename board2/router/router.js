import main from '../components/main.js'
import myBoardList from '../components/myBoardList.js'
import myBoardRead from '../components/myBoardRead.js'
import myBoardWrite from '../components/myBoardWrite.js'

export default new VueRouter({
  // hash -> # + 경로 ( server로 요청을 보내지않고 페이지이동 )
  // url # 뒤에 있는 내용을 읽을 수 없다
  // history -> #를 제외하고 SPA 구현하기 위한 모드, url로 직접 접근하고자하면 오류가 뜬다
  // mode default 값 : hash
  mode : 'history',
  // 총 네가지의 컴포넌트를 연결
  routes : [
    {
      path : '/',
      name : 'main',
      component : main
    },
    //boardList
    {
      path : '/boardList',
      name : 'boardList',
      component : myBoardList
    },
    //boardRead
    {
      path : '/boardRead/:item',
      name : 'boardRead',
      component : myBoardRead,
      //모든 데이터를 가져올 수 있도록 허락
      props : true
    },
    //boardWrite
    {
      path : '/boardWrite',
      name : 'boardWrite',
      component : myBoardWrite
    },
  ]
})