export default{
  template : ` 
  <div>
  <h3>Completed To Do List</h3>
      <div v-for="(todo, index) in delTodos" :key="index">
          <label>
              <div style="display: inline-block; width: 21vw;">
                  <input type="checkbox" v-model="todo.done">
                  <span v-bind:class="{donestyle:todo.done}">{{todo.text}}</span>
              </div>
          </label>
          </div>
      <button v-on:click="todoRemove()">영구 삭제</button>
      <router-link tag="button" v-bind:to="{name : 'todoList'}">To do List 이동</router-link>
  </div>
`,
data : function(){
  return {
    delTodos : []
  }
},
created : function(){
  this.delTodos = this.$parent.getCompleteData();
  console.log(this.delTodos);
},
methods : {
  todoRemove : function(){
    this.delTodos = this.delTodos.filter(function (val) {
      return val.done == false;
  })
   this.$parent.setCompleteData(this.delTodos);
  },
},
}