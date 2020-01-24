<template>
  <div class="school paradigm">
    <SchoolTitle v-bind:titledata = "title"></SchoolTitle>
      <p>비전스쿨 내용</p>
  </div>
</template>

<script>
import SchoolTitle from './SchoolTitle'
export default {
  name: 'ParadigmSchool',
  components : {
    SchoolTitle
  },
  data : function() {
return {
    title : {
      text : "패러다임스쿨",
      img : "paradigmschool.png"
      // 경로 수정!
    }
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
