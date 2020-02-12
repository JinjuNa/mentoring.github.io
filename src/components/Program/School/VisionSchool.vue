<template>
  <div class="school vision">
    <SchoolTitle v-bind:titledata = "title"></SchoolTitle>
      <!-- <p class="process">SCHOOL PROCESS</p> -->
      <!-- <h2>비전스쿨</h2>
      <img src="" alt="비전스쿨사진"> -->
      <p class="par">나의 흥미와 적성을 찾고 강점발견을 통해 직무 전문가로 살아가기</p>
      <content>
        <h3>비전스쿨 24주 과정 커리큘럼</h3>
        <p class="par">꿈과 비전을 찾는 기초훈련과정</p>
        <section>
          
          <h2><img src="" alt="자아발견과정">자아발견과정</h2>
          <ul class="">
            <li class="blue box">
              <img src="" alt="1">
              <div class="round">감정의 5가지<br>구성요소의 이해</div>
              <p class="con">과거 사건들의<br>스토리 텔링으로<br>감정의 회복작업</p>
            </li>
            <li class="blue box">
              <img src="" alt="2">
              <div class="round">탑메모리의 정리</div>
              <p class="con">가슴 벅찼던<br>순간의 기억을<br>정리를 통한<br>자존감 회복</p>
            </li>
            <li class="blue box">
              <img src="" alt="3">
              <div class="round">강점 근원이<br>되는 흥미 찾기</div>
              <p class="con">대인미션을 통한<br>자신감 회복</p>
            </li>
            <li class="blue box">
              <img src="" alt="4">
              <div class="round">나의<br>가치관 찾기</div>
              <p class="con">마지막 2주일<br>미션으로 시간에<br>대한 가치관 정립</p>
            </li>
            <li class="blue box">
              <img src="" alt="5">
              <div class="round">나의<br>강점을 통한<br>SWOT분석</div>
              <p class="con">강점 마인드맵과<br>SWOT분석을<br>통한 강점 구체화</p>
            </li>
          </ul>

          <h2>비전발견과정<img src="" alt="비전발견과정"></h2>
          <ul class="">
            <li class="yellow box">
              <img src="" alt="1">
              <div class="round">비전선언문의<br>작성</div>
              <p class="con">사명을 위한<br>나만의 비전<br>선언문 작성</p>
            </li>
            <li class="yellow box">
              <img src="" alt="2">
              <div class="round">비전독서<br>리스트의 작성</div>
              <p class="con">비전의 실제적<br>구체화를 위한<br>연도별 버킷 리스트</p>
            </li>
            <li class="yellow box">
              <img src="" alt="3">
              <div class="round">비전정보 수립<br>및 활용전략</div>
              <p class="con">비전에 필요한<br>정보의 선점<br>시스템 구축과<br>단기비전</p>
            </li>
            <li class="yellow box">
              <img src="" alt="4">
              <div class="round">비전을 위한<br>실행전략</div>
              <p class="con">아는 정보를<br>행동으로 옮기는<br>리더들의<br>주간계획표</p>
            </li>
            <li class="yellow box">
              <img src="" alt="5">
              <div class="round">비전명함 출력<br>및 공개선언</div>
              <p class="con">비전명함<br>미션을 통해<br>동역자 세우기</p>
            </li>
          </ul>

          <h2>멘토발견과정<img src="" alt="멘토발견과정"></h2>
          <ul class="">
            <li class="blue box">
              <img src="" alt="1">
              <div class="round">비전있는<br>리더들의<br>행동철학</div>
              <p class="con">스스로 시간을<br>관리하는 시간<br>관리능력 향상</p>
            </li>
            <li class="blue box">
              <img src="" alt="2">
              <div class="round">리더들의<br>자기관리와<br>리더십</div>
              <p class="con">미래지향적<br>리더들의<br>비전로드맵<br>따라해보기</p>
            </li>
            <li class="blue box">
              <img src="" alt="3">
              <div class="round">패러다임의<br>정보화</div>
              <p class="con">단순한 DATA를<br>정보화하는 방법</p>
            </li>
            <li class="blue box">
              <img src="" alt="4">
              <div class="round">정보의<br>선점으로 인한<br>도약</div>
              <p class="con">지름길을<br>개척해내야 하는<br>퍼스트 무버</p>
            </li>
            <li class="blue box">
              <img src="" alt="5">
              <div class="round">분야별<br>멘토와의<br>만남</div>
              <p class="con">크공비를 통한<br>인터뷰,비즈니스<br>매너 및 인터뷰 기법</p>
            </li>
          </ul>

          <h2><img src="" alt="수료식 및 아동후원 결연식">수료식 및 아동후원 결연식</h2>
          <h2>12개월간의 훈련과정 전체발표 및 취약계층 아동후원 결연</h2>
          <ul>
            <li><img src="" alt="1">비전스쿨에서의 변화된 모습을 PPT로 발표</li>
            <li><img src="" alt="2">취약계층 아동과의 결연을 통해 매월 1만원 기부활동</li>
          </ul>
          
        </section>
      </content>
  </div>
</template>

<script>
import SchoolTitle from './SchoolTitle'
export default {
  name: 'VisionSchool',
  components : {
    SchoolTitle
  },
  data : function() {
return {
    title : {
      text : "비전스쿨",
      img : "assets/logo.png"
    }
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
