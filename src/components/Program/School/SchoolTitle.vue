<template>
  <div class="schoolTitle">
    <p>SCHOOL PROCESS</p>
    <h3>{{titledata.text}}</h3>
    <img :src="titledata.img" :alt="titledata.text">
  </div>
</template>

<script>

export default {
  name: 'SchoolTitle',
  props : ['titledata']
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .schoolTitle{
        background-color: #eee;
    }
</style>
