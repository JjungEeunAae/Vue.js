// 단일 파일 컴포넌트

//외부에 있는 파일을 사용할 때 import를 사용한다
import myHeader from './components/header.js'
import myBoardList from './components/myBoardList.js'
import myBoardWrite from './components/myBoardWrite.js'
import myBoardRead from './components/myBoardRead.js'

let template = `
                <my-header v-bind:parentData.sync="this.$data"></my-teader>
                <my-board-list v-if="listOk"
                  v-bind:object="dataArray['board']"
                  v-on:board-read="boardRead"
                  v-on:board-write="boardWrite"
                  v-on:board-delete="boardDelete"></my-board-list>
                <my-board-read v-if="readOk" 
                  v-bind:object="boardInfo"
                  v-on:board-list="boardList"></my-board-read>
                <my-board-write v-if="writeOk" 
                  v-on:board-list="boardList" 
                  v-on:board-save="boardSave"></my-board-write>`

new Vue({
  el : '#app',
  template : template,
  data : {
    listOk : false,     // 리스트를 볼건지
    readOk : false,     // 데이터를 상세하게 읽을건지
    writeOk : false,    // 게시판을 작성할건지
    dataArray : {},     // 파일에서 읽은 데이터
    boardInfo : {}      // 선택된 게시글 정보(클릭했을 때 정보를 담고있는 곳)
  },
  components : {
    //공통으로 사용할 기능을 header로 이동
    'my-header' : myHeader,
    //목록보는부분
    'my-board-list' : myBoardList,
    //단건조회
    'my-board-read' : myBoardRead,
    //글쓰기
    'my-board-write' : myBoardWrite
  },
  methods : {
    // $emit , 부모에선 아래의 메소드가 없다.
    // 자식이 가지고 있는 이벤트를 부모가 가져간다
    boardList : function(){ // 게시판 목록 조회
        this.listOk = true;
        this.readOk = false;
        this.writeOk = false;
    },
    boardWrite : function(){ // 게시판 글쓰기
        this.listOk = false;
        this.readOk = false;
        this.writeOk = true;
    },
    boardRead : function(info){ //게시판 글 조회
        //컴포넌트 생성여부
        this.listOk = false;
        this.readOk = true;
        this.writeOk = false;

        //게시판 글 상세조회
        this.boardInfo = info;

        //해당 글 조회수 증가
        for(let i=0; i<this.dataArray['board'].length; i++){
            //게시판번호와 조회하고자하는 게시판번호가 같으면
            if(this.dataArray['board'][i].no == info.no){
                this.dataArray['board'][i].view 
                    = parseInt(this.dataArray['board'][i].view)+1;
            }
        }
    },
    boardSave : function(title, content){  // 게시글 저장
        let no = 1;
        
        //게시글 번호 만드는 구문
        if(this.dataArray['board'].length != 0){
            let index = this.dataArray['board'].length-1;
            no = parseInt(this.dataArray['board'][index].no)+1;
        }

        let boardInfo = {
            'no' : no,
            'title' : title,
            'content' : content,
            'view' : '1'
        }

        this.dataArray['board'].push(boardInfo);

        this.boardList();
    },
    boardDelete : function(no){ // 게시글 삭제
        for(let i=0; i<this.dataArray['board'].length; i++){
            if(this.dataArray['board'][i].no == no){
                this.dataArray['board'].splice(i, 1);
            }
        }
    },
  }
});