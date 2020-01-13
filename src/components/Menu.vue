<template>
  <div class="menu">
    <ul>
        <li v-bind:key="item.text" v-for="item in menu" ><a href="#"><img :src="item.img" alt="">{{item.text}}</a></li>
        <img src="../assets/menu1.png" alt="">
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data : function() {
    return {
      menu : [
          {text : "vision", img : "@src/assets/menu1.png"},
          {text : "history", img : "@src/assets/menu2.png"},
          {text : "program", img : "@src/assets/menu3.png"},
          {text : "recruit", img : "@src/assets/menu4.png"},
          {text : "contact", img : "@src/assets/menu5.png"}
      ]
    };
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
