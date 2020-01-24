<template>
  <div class="school startup">
    <SchoolTitle v-bind:titledata = "title"></SchoolTitle>
      <p>창업스쿨 내용</p>
  </div>
</template>

<script>
import SchoolTitle from './SchoolTitle'
export default {
  name: 'StartUpSchool',
  components : {
    SchoolTitle
  },
  data : function() {
return {
    title : {
      text : "창업스쿨",
      img : "startupschool.png"
      // 경로 수정!
    }
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
