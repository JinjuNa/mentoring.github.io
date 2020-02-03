<template>
  <div id="app">
    <div id="logo"><a href="/"><img src="./assets/main_logo.png"></a></div>
    <Menu></Menu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Menu,
    Footer
  }
}
</script>

<style>
  * {
    margin:0;
    padding: 0;
  }
  body{
    font-size:62.5%;
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

  #logo img{
    width: 10vw;
  }

  .wrap{
    width:60%;
    margin:0 auto;
  }
  .menu{
    position:fixed;
    top:40px;
    right: 70px;
    text-align: right;
  }

  .main{
    margin:0 auto;
    padding-top: 10vw;
    background-image: url(./assets/background.png);
    padding-bottom: 460px;
    background-size: cover;
    background-position: center top;
    background-repeat:no-repeat;
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

  /* .line{
    초록색밑줄-메뉴와 동일
  } */
</style>
