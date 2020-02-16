<template>
  <div class="footer">
      <div class="footer_contents">
      <img class="footer_logo" src="../assets/footer_logo.png" alt="">
      <p class="copyright">상호 : 멘토링연구소  |  주소 : 경남 밀양시 밀성로4길 9-10, 1층 102호(내이동)  |  사업자등록번호 : 214-97-00875  |  대표자 : 윤성화<br>
ⓒ 2012 mentoring lab Co., All rights reserved</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
      height: 25vw;
      background-image: url(../assets/footer_background.png);
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: center bottom;
  }

  .footer_contents{
      width:100%;
      padding-top:10vw;
      /* position:absolute;
      left:0;
      bottom:5vw; */
      text-align: center;
      vertical-align: bottom;
      
  }

  .footer_contents p {
      margin-top:30px;
      font-size: 15px;
      color:white;
  }

  @media all and (max-width:1023px){
    .footer img{
      width: 30%;
    }

    .footer_contents p {
      margin-top:0;
    }

    .footer_contents{
      margin-top:5vh;
      background-color: #3e3a39;
    }
  }
</style>
