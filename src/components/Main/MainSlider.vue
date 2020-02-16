<template>
  <div class="mainSlider">
  <div class="mainSlider_wrap">
      <!-- <ul class="pager">
          <li><a href="#">01</a></li>
          <li><a href="#">02</a></li>
          <li><a href="#">03</a></li>
          <li><a href="#">04</a></li>
      </ul> -->

      <div class="slider">
        <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true">
          <slide>
            <img src="../../assets/slide1.png">
          </slide>
          <slide>
            <img src="../../assets/slide2.png">
          </slide>
          <slide>
            <img src="../../assets/slide3.png">
          </slide>
          <slide>
            <img src="../../assets/slide4.png">
          </slide>
        </carousel>
      </div>
  </div>
  </div>
</template>

<script>
// import mainSlider from './components/MainSlider.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Mainslider',
  components : {
    Carousel,
    Slide
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slider{
    /* background-color: gold; */
    padding-top:20vh;
    height: 80vh;
    padding-bottom: 50vh;
    /* position: absolute; */
    width:70vw;
    margin:0 auto;
  }

  .slider img{
    width:100%;
  }

  .mainSlider_wrap{
    width: 90%;
    margin:0 auto;
  }

.mainSlider{
  position: relative;
  background-color:#493fd3;
  margin-top:calc(80vh + 100px);
}
  .mainSlider:before{
    content:'';
    display: block;
    position: absolute;
    top:-100px;
    width:100%;
    height:400px;
    /* padding-top: 10vw; */
    background-image: url(../../assets/background.png);
    background-size: cover;
    background-position: center top;
    background-repeat:no-repeat;
  }

  @media all and (max-width:1023px){
    .mainSlider{
      margin-top:15vh;
    }

    .slider{
      padding-top:5vh;
      height:30vh;
      padding-bottom:0;
    }
  }
</style>
