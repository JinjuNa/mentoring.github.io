<template>
  <div class="menu">
    <div class="menuButton">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="gnb">
        <li v-bind:key="item.text" v-for="item in menu" ><router-link to= "/vision">{{item.text}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data : function() {
    return {
      menu : [
          {text : "VISION", url : "/vision",img : require("../assets/menu1.png")},
          {text : "HISTORY", url : "/history", img : require("../assets/menu2.png")},
          {text : "PROGRAM", url : "/program", img : require("../assets/menu3.png")},
          {text : "RECRUIT", url : "/recruit", img : require("../assets/menu4.png")},
          {text : "CONTACT", url : "/contact", img : require("../assets/menu5.png")}
      ]
    };
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menuButton span{
    width:41px;
    height: 4px;
    background-color: #000000;
    display: block;
    margin-bottom: 10px;
  }
</style>
