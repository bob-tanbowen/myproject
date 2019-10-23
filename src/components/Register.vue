<template>
  <div>
    <div class="container">
      <div class="head">  
        <div class="logo">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="title_">
          <span>|</span>
        </div>
        <div class="title">
          <span >注册景悦旅拍账号</span>
        </div>
      </div>
      <div class="form">
   <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
     <!-- 电话 -->
  <el-form-item label="电话" prop="phone">
    <el-input v-model.number="ruleForm.phone"></el-input>
  </el-form-item>
  <!-- 年龄 -->
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <!-- 密码 -->
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <!-- 确认 -->
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <!-- 按钮 -->
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>     
      </div>      
    </div>
  </div>
</template>
<script>
export default {
  data(){
    // 年龄
    var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
  // 用户
  var checkphone = (rule, value, callback) => {
        var reg=/^1[3-9][0-9]{9}$/
        if (!value) {
          return callback(new Error('电话不能为空'));
        }
        setTimeout(() => {
          if (!reg.test(value)) {
            callback(new Error('请输入正确的电话号码'));
          }  else {
              callback();
            }
          } ,1000);
      };
      // 密码
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      // 密码确认
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      // 数据
      return{
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
          phone:''
        },
         rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          phone:[
            {validator:checkphone,trigger:"blur"}
          ]
        },
      };
  },
  methods:{
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功');
          } else {
            console.log('注册失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box
}
.container{
    width:100%;
    height:100%;
}
.head{
    margin:20px 0px 15px 0px;
display:flex;
justify-content:space-around;
width:350px;
height:25%;
}
.logo>img{

  width:70px;
  height:70px;
  
}
.title_{
    font-size:40px;
    line-height:70px;
    color:#bbb
}
.title{
    font-size: 20px;
    /* vertical-align:middle; */
    line-height:80px;
     color:#bbb
}
.form{
    width:350px;
}
</style>


