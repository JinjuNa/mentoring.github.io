<template>
  <div id="app">
    <div id="logo"><a href="/"><img src="./assets/main_logo.png"></a></div>
    <Menu></Menu>
    <router-view></router-view>
    <!-- <Main></Main> -->
    <!-- <MainSlider></MainSlider> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Footer from './components/Footer'
// import Main from './components/Main/Main.vue'
// import MainSlider from './components/MainSlider.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Footer
    // Main
    // MainSlider
  }
}
</script>

<style>
  * {
    margin:0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
  #app{
    position:relative;
    
  }

  #logo{
    position:absolute;
    top:40px;
    left:50px;
  }
  .menu{
    position:fixed;
    top:40px;
    right: 70px;
    text-align: right;
  }

  .main{
    margin:0 auto;
    padding-top: 200px;
    background-image: url(./assets/background.png);
    padding-bottom: 460px;
  }
  .sub{
    padding-bottom: 460px;
  }
  .footer{
    width: 100%;
    position:absolute;
    bottom:0;
    left:0;
    /* height: 460px; */
    /* z-index: 100; */
  }

  .contents>h2{
    text-align:center;
    color:blue;
    /* 색깔 정보를 알아야함. */
    margin-top:50px;
    margin-bottom:50px;
    line-height:40px;
  }

  .par{
    text-align:center;
    color:blue;
    margin-top:30px;
    line-height:30px;
  }

  .par:first-child{
    margin-top:0px;
  }
</style>
