<template>
  <div class="sub">
    <SubTitle v-bind:titledata = "title"></SubTitle>
    <!--  -->
    <div class="program vivaldi">
      <div class="contents">
        <h2>
          <span></span>
          <span>
            비전을<br>
            발견하고<br>
           디자인하라<br>
          </span>
          꿈과 비전을 찾아가는 사람들이 한 자리에 모여서<br>
          각자의 꿈과 비전을 어떤 방식으로 찾아가는지<br>
          혹은 지금의 고민이 무엇인지를 나누는 네트워킹 파티
        </h2>
        <p>아이스브레이킹,강연,공연,네트워킹 파티로 이어지는<br>
        알짜배기 하루를 보내고 싶다면 강력 추천합니다.<br><br>
        격월 1회로 행사가 진행되며 연령,성별,직업에 상관없이<br>
        누구든 참여 가능합니다.
        </p>
      </div>
      <a href="#">연간 멤버십 할인받기</a>
    </div>
  </div>
</template>

<script>
import SubTitle from '../Sub/SubTitle'
export default {
  name: 'Vivaldi',
  components : {
    SubTitle
  },
  data : function() {
return {
    title : "PROGRAM > 비발디"
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
