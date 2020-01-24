<template>
  <div class="school vision">
    <SchoolTitle v-bind:titledata = "title"></SchoolTitle>
      <p>비전스쿨 내용</p>
  </div>
</template>

<script>
import SchoolTitle from './SchoolTitle'
export default {
  name: 'VisionSchool',
  components : {
    SchoolTitle
  },
  data : function() {
return {
    title : {
      text : "비전스쿨",
      img : "assets/logo.png"
    }
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
