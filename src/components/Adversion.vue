<template>
  <div class="contianer">
    <div class="all">
    <div class="packet">
      <div class="p1">
          <img style="width:13%" src="@/assets/jingyue100.png" alt="">
          <span>景悦旅拍</span>
          <a href="javascript:;" class="btn_x" @click="hide">x</a>
      </div>
      <span class="p1">旅拍现金券</span>
      <p class="p2">2000</p>
      <input type="text" placeholder="请输入电话号码" id="inp" style="color:#000"/>
      <a href="javascript:;" id="btn" @click="success">立即领取</a>
     </div>
    </div>
    <div class="adbox">
      <div class="adbox_1">
        <div class="mar">
          <span>旅 拍 现 金 券</span>
        </div>
        <div class="mar">
          <span class="pad">RMB 2000</span>
        </div>
        <a class="adbox_btn pad" href="javascript:;"  @click="show2">立即领取</a>
      </div>
      <div class="adbox_2">
        <div class="mar">
          <span class="pad">新 人 有 礼</span>
        </div>
        <div class="mar">
          <span class="pad">九折优惠</span>
        </div>
        <a class="adbox_btn pad" href="javascirpt:;" @click="show1">立即领取</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      radio:1,
      input: ''
    }
  },
  methods:{
    show2(){
      var Bg = document.querySelector(".packet");//添加点击事件
      Bg.style.display = "block"; //点击页面出现遮罩
    },
    show1(){
      var Bg = document.querySelector(".main");//添加点击事件
      Bg.style.display = "block"; //点击页面出现遮罩
    },
    hide(){
      var packet=document.querySelector(".packet");
      // console.log(packet);
      packet.style.display="none"; 
    },
    success(){
      var packet=document.querySelector(".packet");
      // console.log(packet);
      packet.style.display="none";
      this.$message("领取成功");
    }
  }
}
</script>
<style scoped>
/* 背景图片 */
  .all{
    position: relative;
  }
  .packet{
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    left: 50%;
    top: 50%;
    margin-top:-150px;
    margin-left:-100px;
    display: none;
    width:200px;height:305px;
    background-color:#f00;
    background-image: url( '../assets/packet.jpg' );
    background-repeat:no-repeat;
		background-size:contain;
    color:#F8EDAB;
    border-radius:10px;
  }
  /* 文字样式 */
  .p1{
    text-align: center;
    font-size:25px;
    display: flex;
    justify-content: space-around;
  }
  .p2{
    text-align: center;
    font-size:35px;
    margin-top:90px;
  }
  #inp{
    display: block;
    width:79%;height:30px;
    margin:10px auto;
    border-radius:5px;
  }
  #btn{
    display: block;
    width:79%;height:30px;
    background: #F8EDAB;
    margin:10px auto;
    border-radius:5px;
    color:#f00;
    text-align: center;
    font-size:20px;
    font-weight: bold;
  }
  .btn_x{
    display: block;
    width:30px;height:30px;
    font-size:25px;
    border-radius:50%;
    background: #000;
    opacity: 0.3;
    color:#fff;
    line-height: 30px;
  }
.adbox{
  width:150px;height:300px;
  background:#000;
  position:fixed;
  right:0;top:50%;
  margin-top:-150px;
}
.contianer{
  width:100%;height:100%;
  position:relative;
}
.adbox_1{
  width:140px;height:135px;
  border:1px solid #FBF9C9;
  margin-top:15px;
  margin-left:15px;
  color:#FBF9C9;
  font-size:20px;
}
.adbox_2{
  width:140px;height:135px;
  border:1px solid #FBF9C9;
  margin-left:15px;
  color:#FBF9C9;
  font-size:20px;
}
.adbox_btn{
  display: block;
    width:110px;height:40px;
    background: #FBF9C9;
    color:#000;
    font-weight:bold;
    font-size:25px;
    margin:0 auto;
    border-radius: 3px;
    margin-top:10px;
  }
  .mar{margin-top:10px;}
  
</style>
