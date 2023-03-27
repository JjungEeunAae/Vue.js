export default{
  template : ` 
  <div>
  <input type="text" v-model.trim="addtext"  placeholder="할 일">
  <button type="button" v-on:click="addToDo">입력</button>
  <h3>#리스트</h3>
      <div v-for="(todo, index) in todos" :key="index">
          <label>
              <div style="display: inline-block; width: 21vw;">
                  <input type="checkbox" v-model="todo.done">
                  <span v-bind:class="{donestyle:todo.done}">{{todo.text}}</span>
              </div>
          </label>
      </div>
      <p>{{ todos.length }}건 중 {{ remaining }}건 처리</p>
      <div>
      <button v-on:click="todoDelete()">완료 항목 삭제</button>
      <router-link tag="button" v-bind:to="{name : 'completeList'}">완료 항목 조회</router-link>
      </div>
  </div>
`,
data : function(){
  return {
    todos : [],
    addtext: '',
    delTodos : []
  }
},
created : function(){
  this.todos = this.$parent.getParentData();
},
methods : {
  todoDelete : function(){
    this.delTodos = this.todos.filter(function(val){
      return val.done == true;
    })
    this.$parent.setCompleteData(this.delTodos);

    this.todos = this.todos.filter(function (val) {
      return val.done == false;
  })
   this.$parent.setParentData(this.todos);
  },
  addToDo: function () {
    if(this.addtext){
   this.todos.push({
    done: false,
    text: this.addtext
   });
   this.addtext = '';
  }
  }
},
computed: {
  remaining: function () {
      return this.todos.filter(function (val) {
          return val.done == true;
      }).length;

      
  },
}
}