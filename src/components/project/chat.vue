<template>
  <div>
    <div id="main" class="main">
      <a href="javascript:;" class="btn_x" @click="hide">x</a>
      <ul id="content" class="content">
      <li class="msgContent left"><pre>天猫双11预售开启，婚纱照0元拍
        包接机
        包酒店 
        包专车自由行
        包双人旅拍险
        包邮费
        在享微电影
        活动爆炸进行中
        预留您的【手机号+微信号】
        登记名额和获取报价哦</pre>
      </li>
      <div style="clear:both"></div>
      <li class="msgContent left">  亲，这边先加您一个微信，不是叫您现在就拍，您可以先看看我们的客照的拍摄效果，还有套系内容~对比一下总是好的呢~​</li>
      <div style="clear:both"></div>
      <li class="msgContent right">ok</li>
      <div style="clear:both"></div>
      </ul>
      <textarea id="msg_input" class="msgInput"></textarea>
      <button id="sendbtn" class="sendbtn">发送</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
 
  methods:{
    hide(){
      var packet=document.querySelector(".main");
      // console.log(packet);
      packet.style.display="none"; 
    },
    sendMsg(){
      var input = document.getElementById('msg_input');//查找缓存
      var ul = document.getElementById('content');
    
      var newLi = document.createElement('li');
      newLi.innerHTML = input.value;
      newLi.className = 'msgContent right';
      ul.appendChild(newLi);
    
      var div = document.createElement('div');
      div.style = 'clear:both';
      ul.appendChild(div);
    
      ajax({
        url:'http://jisuznwd.market.alicloudapi.com/iqa/query?question='+input.value,
        success:function (res) {
    //    console.log(res)
        var obj = JSON.parse(res);
        console.log(obj)
        var array = obj.result.content;
    //     var zhengzhou = array[0];
        var tmp = array;
    //     var tmp = '温度:'+zhengzhou.day_air_temperature+','+zhengzhou.day_weather;
        console.log(tmp)
    
        var newLi = document.createElement('li');
        newLi.innerHTML = tmp;
        newLi.className = 'msgContent left';
        ul.appendChild(newLi);
    
        var div = document.createElement('div');
        div.style = 'clear:both';
        ul.appendChild(div);
        input.value = '';
        newLi.scrollIntoView();//将元素滚动到可见位置
        }
      })
    
      input.value = '';
      newLi.scrollIntoView();//将元素滚动到可见位置
    },
    ajax(obj) {
      //?lastCursor=6610&pageSize=10
    //   var url = 'reg.php';
      var xhr = null;
      if(window.ActiveXObject){
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
      }else{
      xhr = new XMLHttpRequest();
      }
    //  $username = $_REQUEST['username'];
    //  $password = $_REQUEST['password'];
    
      //打开与服务器的连接
      if(obj.method){
      xhr.open(obj.method,obj.url,true);
      }else{
      xhr.open('get',obj.url,true);
      }
      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      xhr.setRequestHeader("Authorization","APPCODE 3e9dfb924f464e9593a95f9d2bbf4348")
    
    
      // {username:'zhangsa',password:123123}
    //  sendData = encodeURIComponent(sendData);
    
    
      // 发送请求
      //console.log(res);
      //回调函数
      xhr.onreadystatechange = function () {
    //    console.log(xhr.readyState)
      if(xhr.readyState == 4){
        //数据接收完毕
        if(xhr.status == 200){
    //      console.log('请求成功',xhr.responseText)
        if(obj.success){
          obj.success(xhr.responseText)
        }
    
        }else{
    //      console.log(xhr.status,'请求出错')
        if(obj.failure){
          obj.failure('请求失败')
        }
        }
      }
      }
    //   var sendData = 'username=zhangsan&password=123456';
      if( obj.method == undefined ||obj.method.toLowerCase() =='get'){
      xhr.send(null);//
      }else{
      xhr.send(obj.params);//
    
      }
    }
    
  },
   created(){
     window.onclick=function(){
      var input = document.getElementById('msg_input');//查找缓存
      document.getElementById('sendbtn').onclick=function () {
      var input1 = document.getElementById('msg_input');//
      //input0
      sendMsg();
      }
    }
  }
}
</script>  
<style scoped>
  *{font-size: 14px; padding:0; margin:0;}
  .btn_x{
    display: block;
    width:30px;height:30px;
    font-size:25px;
    border-radius:50%;
    background: #000;
    opacity: 0.5;
    color:#fff;
    line-height: 30px;
    margin-left:390px;
  }
  .main{
  position: relative;
  margin: 20px auto;
  border: 1px solid steelblue;
  width: 430px;
  height: 400px;
  /* background:url('../../assets/jingyue100.png') no-repeat center center; */
  background-color: #ccc;
  }
  .msgInput{
  display: block;
  width: 406px;
  height: 60px;
  margin: 10px auto;
  
  }
  .sendbtn{
  position: absolute;
  width: 100px;
  height: 29px;
  bottom: 5px;
  right: 10px;
  }
  .content{
  list-style: none;
  width: 410px;
  height: 280px;
  margin: 5px auto;
  border: 1px dotted #D1D3D6;
  overflow-y: scroll;
  }
  .msgContent{
  width:auto;
  max-width: 250px;
  height: auto;
  word-break: break-all;
  margin: 5px;
  padding: 3px;
  border-radius: 5px;
  }
  
  .content .left{
  float: left;
  text-align: left;
  background-color: lightgrey;
  }
  .content .right{
  float: right;
  text-align: right;
  background-color: yellowgreen;
  }
 
</style>
