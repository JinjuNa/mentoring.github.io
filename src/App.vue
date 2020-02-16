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
    font-size:62.51%;
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
    color:rgb(70,82,184);
    /* 색깔 정보를 알아야함. */
    margin-top:7.5em;
    margin-bottom:4.43em;
    line-height:170%;
    font-size: 231%;
  }

  .par{
    font-size: 149.3%;
    text-align:center;
    color:rgb(70,82,184);
    font-weight: bolder;
    margin-top:4.06em;
    margin-bottom: 4.06em;
    /* 내용 전체 위,아래 margin 값을 측정해야함. */
    line-height:200%;
  }

  .par:first-child{
    margin-top:0px;
  }

  .download{
    display: block;
    width: 30%;
    height: auto;    
    /* 중앙정렬 해야함 */
  }
  /* .line{
    초록색밑줄-메뉴와 동일
  } */
  @media all and (max-width:1023px){
    #logo{
      position: static;
      text-align: center;
      padding-top:5vw;
    }

    #logo img{
      width: 50vw;
    }

    .menu{
      right: 20px;
    }
  }
</style>
