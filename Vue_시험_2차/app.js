import completeList from './components/completeList.js';
import router from './router/router.js'

let template = `<div>
                  <h1>2차 시험 문제</h1>
                  <router-view></router-view>
                </div>`

new Vue({
  el : '#app',
  template : template,
  data : {
    todoList : [{
      done: false,
      text: '빵사기'
    },
    {
      done: false,
      text: '커피사기'
    },
    {
      done: true,
      text: 'Vue 공부하기'
    },
    {
      done: true,
      text: 'Java 공부하기'
    }
  ],
  completeList : []
  },
  methods : {
    getParentData : function(){
      return this.todoList
    },
    setParentData : function(todoList){
      this.todoList = todoList;
    },
    getCompleteData : function(){
      return this.completeList
    },
    setCompleteData : function(completeList){
      this.completeList = completeList;
    }
  },
  router
});