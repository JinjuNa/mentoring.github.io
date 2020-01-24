<template>
  <div class="school economic">
    <SchoolTitle v-bind:titledata = "title"></SchoolTitle>
      <p>경제스쿨 내용</p>
  </div>
</template>

<script>
import SchoolTitle from './SchoolTitle'
export default {
  name: 'EcomomicSchool',
  components : {
    SchoolTitle
  },
  data : function() {
return {
    title : {
      text : "경제스쿨",
      img : "economicschool.png"
      // 경로 수정!
    }
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
