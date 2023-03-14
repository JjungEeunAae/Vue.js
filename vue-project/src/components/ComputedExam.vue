<template>
<h1>Full Name : {{FullName}}</h1>
</template>
<script>
// 모듈 형태로 만들어서 외부에 사용가능하도록
// export default를 사용한다.
export default{ 
  data(){
    return{
      firstName : "DDOCHI",
      lastName : "GO"
    };
  },
  computed : {
    FullName(){
      return this.firstName + ' ' + this.lastName;
    }
  }
}
</script>