<template>
    <div id="bg">
        <div id="login_bg">
            <div class="title_btn" >
                 <div id="title">会员登录</div>
                  <el-button type="text" id="btn" @click="close">x</el-button>
            </div>
            <div id="inner">
                <div id="inner_login">
                    <div class="loginline">
                        <el-input placeholder="请输入账号" v-model="phone" clearable> </el-input>
                    </div>
                    <div class="loginline">
                        <el-input placeholder="请输入密码" v-model="upwd" show-password></el-input>
                    </div>
                    <div class="loginline">
                        <div id="isbtn" @click="login">登录</div>
                    </div>
                    <div class="loginline">
                        <div class="tip">请登录您的铂爵旅拍VIP会员号,下载您的婚纱照。</div>
                    </div>
                    <div id="loginline">
                        <!-- <div id="getpwd"> -->
                    <el-button type="text" @click="findUpwd">找回密码</el-button>
                        <!-- </div> -->
                    <!-- <div id="getregister"> -->
                     <el-button type="text" @click="register">注册</el-button>
                     <!-- </div> -->
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{  
            phone:"",
            upwd:"",
        }
    },
    methods:{
        login(){
            var reg1=/^1[3-9][0-9]{9}$/;
            var reg2=/^[0-9a-z]{3}$/
            var phone=this.phone;
            var upwd=this.upwd;
            var url="login";
            var obj={phone:this.phone,upwd:this.upwd}
            if(reg1.test(phone)&&reg2.test(upwd)){
             this.axios.get(url,{params:obj}).then(res=>{
                 console.log(res)
                if(res.data.code<0){
                this.$message("用户名不存在或密码错误");
            }else{
                this.$router.push("/index")
            }
             })
            }else if(reg1.test(phone)||reg2.test(upwd)){
                this.$message("用户名或密码格式有误")
            }
        },
        close(){
            var login_bg=document.getElementById("login_bg")
            login_bg.style.display="none"
        },
        register(){
            this.$router.push("/register")
        },
        findUpwd(){
            this.$router.push("/findUpwd")
        },
    }
    
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box
}
body{
    position: relative;
    width:100%;
    height: 100%;
}
.title_btn{
    display:flex;
    justify-content: space-between;
     height: 55px;
    line-height: 55px;
    background-color: rgb(201,201,201);
    color: #555;
    padding: 0px 20px;
}
#bg{
    position: absolute;
    background-color:rgb(38,38,38);
    width:100%;
    height:100%;
}
#login_bg{
   margin:80px auto;
    width: 440px;
    height:455px;
}
#btn{
     color: #555;
     font-size: 24px
}

#inner{
    height:400px;
    background:#fff
}
#inner_login{
    height:368px;
    color:#000;
    font:16px;
    padding:45px 55px;
}
.loginline{
    margin:20px auto
}
.loginline input {
    width: 100%;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0px 5px;
}
#isbtn {
    height: 40px;
    line-height: 40px;
    background-color: rgb(100,198,246);
    color: white;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
}
 #loginline{
    margin:20px auto;
    display:flex;
    justify-content:space-around 
 } 
</style>


