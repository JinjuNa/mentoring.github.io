<template>
  <div class="school startup">
    <SchoolTitle v-bind:titledata = "title"></SchoolTitle>
      <p class="par line">실전창업을 목표로 해서<br>
        창업의 A-Z를 모두 터득하게</p>
      <p class="par">아이템 선정에서부터 사업계획서 작성, 정부지원사업 공모,<br>
        투자 IR에 이르기까지. 스타트업이 되기 위한 전 과정을<br>
        1년의 시간 동안 프로젝트를 진행해가면서 배웁니다.</p>
      <p class="par">창업에 성공한 기업들은 MENTORING-LAB의 사업파트너로서<br>
        공익과 가치실현에 대한 투자를 이어갑니다.</p>
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
