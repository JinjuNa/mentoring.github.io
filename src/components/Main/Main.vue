<template>
  <div class="main">
    <h1><a href="/"><img src="../../assets/logo.png" alt="메인로고"></a></h1>
    <div class="mainLink_wrap">
    <div class="mainLink blue">
        <p>Mentoring-lab에<br>대해 알고 싶으세요?</p>
        <div class="link">
            <a href="/">홈페이지</a>
        </div>
    </div>
    <div class="mainLink green">
        <p>꿈꾸는 많은 사람들과<br>소통해보고 싶으세요?</p>
        <div class="link">
            <a href="https://cafe.naver.com/mentoringlab">카페</a>
        </div>  
    </div>
    </div>
    <Mainslider></Mainslider>
  </div>
</template>

<script>
import Mainslider from './MainSlider.vue'

export default {
  name: 'Main',
  components : {
      Mainslider
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    text-align: center;
  }
  .mainLink_wrap::after{
    display: block;
    clear:both;
    content:'';
  }

  .mainLink_wrap{
    margin: 0 auto;
    margin-top:40px;
    width: fit-content;
  }
  .mainLink{
    width: 450px;
    height: 450px;
    border-radius: 50%;
    float: left;
    font-size: 40px;
    /* line-height: 450px; */
    text-align: center;
    /* background-color: #493fd3; */
    transition: all 2s;
  }

  .mainLink:hover{
    width:480px;
    height: 480px;
  }

  .blue{
    background-color: #493fd3;
    margin-right: 30px;
    color:#c4f580;
  }

  .green{
    background-color: #c4f580;
    color: #493fd3;
  }
  .mainLink p{
    margin-top:150px;
  }
  .link{
    width: 190px;
    height: 35px;
    text-align: center; 
    border-radius: 17.5px;
    display: inline-block;
    font-size: 18px;
    line-height: 35px;
    margin-top:55px;
    
  }


  .blue .link{
    border: 2px solid #c4f580;
  }

  .green .link{
    border: 2px solid #493fd3;
  }
</style>
