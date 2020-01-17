<template>
  <div class="menu">
    <div class="menuButton">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="gnb">
        <li v-bind:key="item.text" v-for="item in menu" ><a :href= "'#/'+item.url">{{item.text}}<div class="underline"></div></a>
        
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data : function() {
    return {
      menu : [
          {text : "VISION", url : "vision",img : require("../assets/menu1.png")},
          {text : "HISTORY", url : "history", img : require("../assets/menu2.png")},
          {text : "PROGRAM", url : "program", img : require("../assets/menu3.png")},
          {text : "RECRUIT", url : "recruit", img : require("../assets/menu4.png")},
          {text : "CONTACT", url : "contact", img : require("../assets/menu5.png")}
      ]
    };
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menuButton{
    float:right;
    
  }
  .menuButton span{
    width:41px;
    height: 4px;
    background-color: #000000;
    display: block;
    margin-bottom: 10px;
  }
  .gnb{
    font-size: 18px;
    letter-spacing: 0.305em;
    }
  .gnb li{
    margin-bottom: 50px;
  }
  .gnb li a{
    position: relative;
    
  }
  .underline{
    width:0;
    height: 15px;
    background-color: #c4f580;
    transition: all 1s;
    position: absolute;
    bottom: -3px;
    left: -5px;
    z-index: -1;
  }

  /* 폰트 모양, 크기에 따라서 left값 조정필요 */

  .gnb li:nth-child(1):hover .underline{
    width: 92px;
  }

  .gnb li:nth-child(2):hover .underline{
    width: 117px;
  }

  .gnb li:nth-child(3):hover .underline{
    width: 130px;
  }

  .gnb li:nth-child(4):hover .underline{
    width: 117px;
  }

  .gnb li:nth-child(5):hover .underline{
    width: 130px;
  }


</style>
