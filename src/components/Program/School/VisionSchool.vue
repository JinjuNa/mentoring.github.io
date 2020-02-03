<template>
  <div class="school vision">
    <SchoolTitle v-bind:titledata = "title"></SchoolTitle>
      <!-- <p class="process">SCHOOL PROCESS</p> -->
      <!-- <h2>비전스쿨</h2>
      <img src="" alt="비전스쿨사진"> -->
      <p class="par">나의 흥미와 적성을 찾고 강점발견을 통해 직무 전문가로 살아가기</p>
      <content>
        <h3>비전스쿨 24주 과정 커리큘럼</h3>
        <p class="par">꿈과 비전을 찾는 기초훈련과정</p>
        <img src="" alt="자아-비전-멘토-수료후원 사진">
      </content>
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
