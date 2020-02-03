<template>
  <div class="sub">
    <SubTitle v-bind:titledata = "title"></SubTitle>
    <div class="program slikroad">
      <div class="contents">
        <h2>
          <span></span>
          <span>
            실력있는<br>
            크리에이터가<br>
            되는 길
          </span>
          살아가면서 필요한 지혜들을 강연을 통해 공유하고<br>
          함께 배워보는 강연 프로그램
        </h2>
        <p>인문학,철학,경제,시간관리,인간관계,공부,습관에 이르기까지...<br>
        다양한 삶의 지혜들을 윤성화 소장님의 직강을 통해 함께 공부해보는 시간입니다.<br><br>
        격월로 행사가 진행되며 연령,성별,직업에 상관없이 누구든 참여 가능합니다.
        </p>
      </div>
      <a href="#">연간 멤버십 할인받기</a>
    </div>
  </div>
</template>

<script>
import SubTitle from '../Sub/SubTitle'
export default {
  name: 'Slikroad',
  components : {
    SubTitle
  },
  data : function() {
return {
    title : "PROGRAM > 실크로드"
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
