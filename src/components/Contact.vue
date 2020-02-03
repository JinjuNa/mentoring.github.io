<template>
  <div class="sub">
    <SubTitle v-bind:titledata = "title"></SubTitle>
    <!--  -->
    <div class="recruit">
      <div class="contents">
        <h2><img src="#"></h2>
        <p>
        <span class="title">ADDRESS</span>
        서울시 마포구<br>
        <span class="title">TEL</span>
        010 0000 0000
        <span class="title">E-Mail</span>
        hello@gamil.com
        </p>
        <ul>
          <li><img src="#">페이스북</li>
          <li><img src="#">인스타</li>
          <li><img src="#"></li>
          <li><img src="#"></li>
        </ul>
        <div class="map">
          <table cellpadding="0" cellspacing="0" width="462"> <tr> <td style="border:1px solid #cecece;"><a href="https://v4.map.naver.com/?searchCoord=232c32cf1f846a336b96c00355ccb2e37c69bb19dc8b502844b52d6fe0b77d49&query=7ISc7Jq4IOuniO2PrOq1rCDshJzqtZDrj5kgMzk1LTExNyDshJzqtZDrpqzsuZjruYwgMTAy&tab=1&lng=2f3042b87b3a4f5a78bb6b8e625be630&mapMode=0&mpx=318f4d24ed5ff700f242d8cf759b4a18813f22b73ee3cdf1b25281c189d328484fbbdea775aea0dcf4b279c0f43aa7567114a65380dd29d1ae7d7d10e42a3380&lat=754ec4a3c0d2aa9b46c6fd665e04be06&dlevel=12&enc=b64&menu=location" target="_blank"><img src="http://prt.map.naver.com/mashupmap/print?key=p1580715563337_561993148" width="460" height="340" alt="지도 크게 보기" title="지도 크게 보기" border="0" style="vertical-align:top;"/></a></td> </tr> <tr> <td> <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td height="30" bgcolor="#f9f9f9" align="left" style="padding-left:9px; border-left:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="font-family: tahoma; font-size: 11px; color:#666;">2020.2.3</span>&nbsp;<span style="font-size: 11px; color:#e5e5e5;">|</span>&nbsp;<a style="font-family: dotum,sans-serif; font-size: 11px; color:#666; text-decoration: none; letter-spacing: -1px;" href="https://v4.map.naver.com/?searchCoord=232c32cf1f846a336b96c00355ccb2e37c69bb19dc8b502844b52d6fe0b77d49&query=7ISc7Jq4IOuniO2PrOq1rCDshJzqtZDrj5kgMzk1LTExNyDshJzqtZDrpqzsuZjruYwgMTAy&tab=1&lng=2f3042b87b3a4f5a78bb6b8e625be630&mapMode=0&mpx=318f4d24ed5ff700f242d8cf759b4a18813f22b73ee3cdf1b25281c189d328484fbbdea775aea0dcf4b279c0f43aa7567114a65380dd29d1ae7d7d10e42a3380&lat=754ec4a3c0d2aa9b46c6fd665e04be06&dlevel=12&enc=b64&menu=location" target="_blank">지도 크게 보기</a> </td> <td width="98" bgcolor="#f9f9f9" align="right" style="text-align:right; padding-right:9px; border-right:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="float:right;"><span style="font-size:9px; font-family:Verdana, sans-serif; color:#444;">&copy;&nbsp;</span>&nbsp;<a style="font-family:tahoma; font-size:9px; font-weight:bold; color:#2db400; text-decoration:none;" href="https://www.navercorp.com" target="_blank">NAVER Corp.</a></span> </td> </tr> </table> </td> </tr> </table>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from './Sub/SubTitle'
export default {
  name: 'Contact',
  components : {
    SubTitle
  },
  data : function() {
return {
    title : "CONTACT"
  };
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* .title{
  margin-right:10%;
} */
</style>
