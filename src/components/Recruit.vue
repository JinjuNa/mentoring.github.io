<template>
  <div class="sub">
    <SubTitle v-bind:titledata = "title"></SubTitle>
    <!--  -->
    <div class="recruit">
      <div class="contents">
        <h2>월급만 필요하다면 지원하지 마세요<br>
        우리는 의미 있는 일을 하려고 합니다<br>
        대신 함께 할 수 있다면 업계 최고대우를 보장합니다.</h2>
        <p class="par">교육에 대한 열정이 남다르고 아이디어가 넘쳐나는 사람들은<br>
        <!-- p태그 클래스명 par -> far으로 바꿔야하나? -->
        절대로 현재에 머무르려고 하지 않는다고 믿습니다.<br><br>
        그래서 저희 회사에는 없는 것이 다음과 같습니다.</p>
      </div>

      <div class="icon">
        <ul class="subicon">
          <li class="char1">
            <img>
            <h2>직급이 없습니다.</h2>
            <p>동등한 관계에서만 좋은 아이디어가 나온다고 믿기 때문입니다.<br>
            그래서 모두 'oo씨'라고 부릅니다.</p>
          </li>
          
          <li class="char1">
            <img>
            <h2>야근이 없습니다.</h2>
            <p>모든 직원이 재택근무를 하기 때문에 야근이 없습니다.<br>
            대신 주어진 일을 책임 있게 해내지 못하면 불이익이 있습니다.<br>
            월 2회 전체회의 4시간은 필참입니다.</p>
          </li>
        </ul>

        <ul class="subicon">
          <li class="char2">
            <img>
            <h2>회식이 없습니다.</h2>
            <p>의무적인 회식문화 자체가 없습니다.<br>
            대표가 회식을 싫어합니다.<br>
            회식비 모았다가 해외 워크샵 갑니다.</p>
          </li>

          <li class="char2">
            <img>
            <h2>경력직이 없습니다.</h2>
            <p>모든 직원은 3년 안에 독립(창업)하는 것을 목표로 합니다.<br>
            3년 이후에는 회사를 설립하여 파트너쉽을 맺어 일을 함께 합니다.<br>
            3년 이상 일하고 싶을 때는 합당한 사유서를 제출해야 합니다.</p>
          </li>
        </ul>
      </div>
      
      <div>
        <ul>
          <li>
            <h2>교육사업부</h2>
            <p>교육사업부는</p>
          </li>
          <li>
            <h2>IT사업부</h2>
          </li>
          <li>
            <h2>경영지원부</h2>
          </li>
        </ul>
      </div>
      <a href="#">지원서 다운로드</a>
    </div>
  </div>
</template>

<script>
import SubTitle from './Sub/SubTitle'
export default {
  name: 'Recruit',
  components : {
    SubTitle
  },
  data : function() {
return {
    title : "RECRUIT"
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .icon p{
    /* text-align:center; */
    line-height:25px;
  }

  .char1{
    float:left;
  }

  .subicon:after{
    display:block;
    clear:both;
    content:'';
  }

  .char2{
    float:left;
  }

  .icon{
    width:1200px;
    margin:20px auto;
  }

  .icon li{
    width:500px;
    text-align:center;
    margin-right: 20px;
  }

  .icon li p{
    font-size:12px;
  }

</style>
