<template>
  <div class="sub">
    <SubTitle v-bind:titledata = "title"></SubTitle>
    <!--  -->
    <div class="program">
      <div class="contents">
        <p>history</p>
        <!-- <router-view></router-view> -->
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from './Sub/SubTitle'
export default {
  name: 'Program',
  components : {
    SubTitle
  },
  data : function() {
return {
    title : "PROGRAM"
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
