<template>
  <div class="sub">
    <SubTitle v-bind:titledata = "title"></SubTitle>
    <div class="vision">
      <div class="contents">
        <h2>실력과 인성을 겸비한 청년들을 양성하는 곳,<br>
         여기는 MENTORING LAB 입니다.</h2>
        <div>
          <img src="../assets/vision_diagram.png">
        </div>
        <p class="par">사람들에게 잘 보이기 위한 삶에서 벗어나서<br>
        자신만의 삶을 살아가려면 자신만의 기준이 필요합니다.<br><br>
        그래서 MENTORING-LAB에서는 자기경영, 창의력, 경제교육, 창업가육성을<br>
        통해 자신의 길을 스스로 찾아가는 힘을 훈련하고 있습니다.<br><br>
        MENTORING-LAB은 나아가 유럽, 일본, 프랑스의 좋은 진로교육제도를<br>
        도입하여 국내 유일의 '진로교육대학'을 설립하기 위해 힘쓰고 있습니다.<br><br>
        모든 인생이 탁월한 인생으로 살아갈 때 까지 MENTORING-LAB의<br>
        교육실험은 계속됩니다.</p>
        <div class="download"><a href="#">회사소개서 다운로드</a></div>
        <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br>when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br>
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br>when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br>
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from './Sub/SubTitle'
export default {
  name: 'Vision',
  components : {
    SubTitle
  },
  data : function() {
return {
    title : "VISION"
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .contents{
    width: 570px;
    margin: 0 auto;
  }

  .sub{
    background-image: url(../assets/background_side.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center bottom;
  }

  .contents img{
    width: 100%;
    height: auto;
    /* text-align: center;  이렇게는 안된다.*/
  }
</style>
