<template>
  <div class="school paradigm">
    <SchoolTitle v-bind:titledata = "title"></SchoolTitle>
      <p class="par line">인문학을 기초로 생각법을!<br>
        편집학을 기초로 DATA관리법을!</p>
      <p class="par">STEP1 VISION SCHOOL 과정을 수료한 멘티들에게만<br>
        개설되는 창의력수업 아카데미.<br>
        동서양의 철학, 인문학을 심도 있게 토론해보며<br>
        나의 생각을 정립하는 시간을 가져 보고,<br>
        현실의 수요 DATA와의 교차분석을 통해<br>
        인문학을 실제 업무에 적용하는 방법을 배웁니다.</p>
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
