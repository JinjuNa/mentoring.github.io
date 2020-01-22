<template>
  <div class="mainSlider">
      <!-- <ul class="pager">
          <li><a href="#">01</a></li>
          <li><a href="#">02</a></li>
          <li><a href="#">03</a></li>
          <li><a href="#">04</a></li>
      </ul> -->

      <div class="slider">
        <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true">
          <slide>
            Slide 1 Content
          </slide>
          <slide>
            Slide 2 Content
          </slide>
          <slide>
            Slide 3 Content
          </slide>
          <slide>
            Slide 4 Content
          </slide>
        </carousel>
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
    background-color: gold;
    margin-top:500px;
    height: 520px;
    /* position: absolute; */

  }

  .mainSlider{
    width: 1170px;
    margin:0 auto;
    /* height: 1530px; */
    /* position:relative; */
  }
</style>
