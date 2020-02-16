<template>
  <div class="main">
    <div class="wrap">
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
    padding-top:10vw;
    text-align: center;
  }

  h1 img{
    width: 48%;
    height: auto;
  }
  .mainLink_wrap::after{
    display: block;
    clear:both;
    content:'';
  }

  .mainLink_wrap{
    margin-top:2vw;
    position: relative;
    /* margin: 0 auto;
    margin-top:40px;
    width: 48vw; */
  }
  .mainLink{
    width: 23vw;
    height: 23vw;
    border-radius: 50%;
    font-size: 2vw;
    /* line-height: 450px; */
    text-align: center;
    /* background-color: #493fd3; */
    transition: all 2s;
    position: absolute;
    top:0;
    left: 50%;
  }

  /* .mainLink:hover{
    width:23.5vw;
    height: 23.5vw;
    
  } */

  .blue{
    background-color: #493fd3;
    margin-right: 2vw;
    color:#c4f580;
    margin-left: -24.5vw
  }

  .green{
    background-color: #c4f580;
    color: #493fd3;
    margin-right: -24.5vw;
  }
  .mainLink p{
    position: absolute;
    top:50%;
    margin-top:-20%;
    width: 100%;
  }
  .link{
    width: 50%;
    text-align: center; 
    border-radius: 100px;
    /* display: inline-block; */
    font-size:1.5vw;
    line-height: 2;
    position: absolute;
    bottom: 50%;
    margin-bottom: -30%;
    left:50%;
    transform: translateX(-50%)
    
  }


  .blue .link{
    border: 2px solid #c4f580;
  }

  .green .link{
    border: 2px solid #493fd3;
  }

  
  @media all and (max-width:1023px) {
    body{
      background-color: gold;
    }

    .wrap{
      width:90%;
    }

    h1 img{
      display: none;
    }

    .mainLink{
      position: relative;
      top:0;
      left: 0;
      margin: 0 auto;
      width: 50vw;
      height: 50vw;
      font-size: 4vw;
    }

    .mainLink.green{
      margin-top:10%;
    }

    .link{
      width: 40%;
      font-size: 2.5vw;

    }
  }
</style>
