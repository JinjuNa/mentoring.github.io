<template>
  <div class="sub">
    <SubTitle v-bind:titledata = "title"></SubTitle>
    <div class="program kgongvi">
      <div class="contents">
        <h2>
          <span></span>
          <span>
            크리에이터가<br>
            공유하는<br>
            비전<br>
          </span>
          현업에 있는 직업 전문인들을 만나 테이블 인터뷰를<br>
          통해서 진짜 사회의 이야기를 듣는 시간<br>
        </h2>
        <p>반찬가게 사장님에서부터 대기업 임원에 이르기까지 직업 전문인으로 살아가는 분들을<br>
        한자리에 모셔서 간단한 토크쇼와 전담 인터뷰로 배움을 얻는 시간입니다.<br><br>
        분기별 1회로 행사가 진행되며 연령,성별,직업에 상관없이 누구든 참여 가능합니다.
        </p>
      </div>
      <a href="#">연간 멤버십 할인받기</a>
    </div>
  </div>
</template>

<script>
import SubTitle from '../Sub/SubTitle'
export default {
  name: 'Kgongvi',
  components : {
    SubTitle
  },
  data : function() {
return {
    title : "PROGRAM > 크공비"
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
