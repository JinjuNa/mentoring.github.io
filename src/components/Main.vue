<template>
  <div class="main">
    <h1><a href="/"><img src="../assets/main_logo.png" alt="메인로고"></a></h1>
    <div class="mainLink">
        <p>홈페이지이동 설명글</p>
        <div class="link">
            <a href="/">홈페이지</a>
        </div>
    </div>
    <div class="mainLink">
        <p>홈페이지이동 설명글</p>
        <div class="link">
            <a href="https://cafe.naver.com/mentoringlab">카페</a>
        </div>  
    </div>
    <Mainslider></Mainslider>
  </div>
</template>

<script>
import Mainslider from './MainSlider.vue'

export default {
  name: 'Main',
  componets : {
      Mainslider
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
