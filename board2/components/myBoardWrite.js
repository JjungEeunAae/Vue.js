export default{
  template : `<div>
                <table id="list">
                  <tr>
                    <td>글제목</td>
                    <td><input type="text" style="width:90%;" v-model="title"></td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <textarea style="width:100%;" v-model="content"></textarea>
                    </td>
                  </tr>
                </table>
                <router-link tag="button" style="float:right;" v-bind:to="{name : 'boardList'}">목록</router-link>
                <button style="float:right;" v-on:click="boardSave">저장</button>
              </div>`,
  data : function(){
    return {
      title : '',
      content : '',
    }
  },
  methods : {
    boardSave : function(){
      let dataList = this.$parent.getParentData();

      // 게시글 번호
      let no = 1;
      if (dataList.length != 0) {
        // 데이터가 총 3건 -> length 3 -> 배열 [3] -> 4번째를 의미한다
        let index = dataList.length - 1;
        //index를 활용하여 마지막 게시판 no를 가지고 온 뒤, 1를 증가 (마지막 게시판 번호)
        no = parseInt(dataList[index].no) + 1;
      }

      // 게시글 등록
      let boardInfo = {
        'no' : no,
        'title' : this.title,
        'content' : this.content,
        'view' : '1',
      };

      //만들어진 게시글을 부모의 dataList에 추가
      dataList.push(boardInfo);
      this.$parent.setParentData(dataList);

      //저장을 클릭하면 해당 URL로 이동하겠습니다라는 의미
      this.$router.push({ name : "boardList" });
    }
  }
}
