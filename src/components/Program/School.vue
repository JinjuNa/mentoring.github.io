<template>
  <div class="sub">
    <SubTitle v-bind:titledata = "title"></SubTitle>
    <!--  -->
    <div class="program school">
      <div class="contents">
        <p>history</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br>when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br>
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <ul class="schoolMenu">
          <li v-bind:key="item.text" v-for="item in menu" >
            <router-link :to="item.url">{{item.text}}</router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '../Sub/SubTitle'
export default {
  name: 'School',
  components : {
    SubTitle
  },
  data : function() {
return {
    title : "PROGRAM > SCHOOL PROCESS",
    menu : [
          {text : "비전스쿨", url : "/program/school/vision"},
          {text : "패러다임스쿨", url : "/program/school/paradigm"},
          {text : "경제스쿨", url : "/program/school/economic"},
          {text : "창업스쿨", url : "/program/school/startup"}
          // 경제스쿨, 창업스쿨 링크 설정!
      ]
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
