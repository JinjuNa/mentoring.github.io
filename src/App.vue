<template>
  <div id="app">
    <div id="logo"><a href="/"><img src="./assets/main_logo.png"></a></div>
    <Menu></Menu>
    <Main></Main>
    <!-- <MainSlider></MainSlider> -->
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Main from './components/Main/Main.vue'
// import MainSlider from './components/MainSlider.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Main
    // MainSlider
  }
}
</script>

<style>

</style>
