<template>
  <div class="menu">
    <ul class="gnb">
        <li v-bind:key="item.text" v-for="item in menu" ><a :href="'/'+item.text">{{item.text}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data : function() {
    return {
      menu : [
          {text : "VISION", img : require("../assets/menu1.png")},
          {text : "HISTORY", img : require("../assets/menu2.png")},
          {text : "PROGRAM", img : require("../assets/menu3.png")},
          {text : "RECRUIT", img : require("../assets/menu4.png")},
          {text : "CONTACT", img : require("../assets/menu5.png")}
      ]
    };
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
