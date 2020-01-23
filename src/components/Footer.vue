<template>
  <div class="footer">
      <div class="footer_contents">
      <img class="footer_logo" src="../assets/footer_logo.png" alt="">
      <p class="copyright">ⓒ 2019 mentoring lab</p>
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
      /* width:fit-content; */
      position:absolute;
      left:50%;
      bottom:5vw;
      text-align: center;
      vertical-align: bottom;
      margin-left:-120px;
  }

  .footer_contents p {
      margin-top:30px;
      font-size: 15px;
      color:white;
  }
</style>
