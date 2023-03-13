export default{
  template : `<div>
                <table id="list">
                    <!-- HEADER -->
                    <tr>
                        <th style="width:50px;">글번호</th>
                        <th>글제목</th>
                        <th style="width:50px;">조회수</th>
                        <th style="width:70px;"></th>
                    </tr>
                    <!-- DATA LIST -->
                    <tr v-for="item in object" v-bind:key="item.no">
                        <td>{{ item.no }}</td>
                        <td v-on:click="boardRead(item)">{{ item.title }}</td>
                        <td>{{ item.view }}</td>
                        <td><button v-on:click="boardDelete(item.no)">삭제</button></td>
                    </tr>
                </table>
                <button style="float:right;" v-on:click="boardWrite">글쓰기</button>
              </div>`,
    // 부모에서 object를 가져온다
    // 부모에 함수를 만들어놓고 계속 자식들이 돌려가면서 쓸 수 있음, 재사용성이 높다
    props : ['object'],
    methods : {
    boardRead : function(info){
      console.log(info); // 클릭한 게시글의 정보를 담은 매개변수
      //                      매개변수
      this.$emit('board-read', info);
      },
      boardDelete : function(no){ // 글삭제
      this.$emit('board-delete', no);
      },
      boardWrite : function(){  // 글쓰기
      this.$emit('board-write');
      }
    }
  };