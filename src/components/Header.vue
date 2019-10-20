<template>
  <div class="header">
    <div class="container">
      <router-link to="" class="header-log">
        <img src="" alt="">
      </router-link>
      <div class="header-tabbar">
        <ul>
          <li><router-link to="">首页</router-link></li>
          <li><router-link to="" class="dropdown-toggle" @click="dropdown">公司简介</router-link>
            <div class="dropdown-menu">
              <router-link to="">品牌介绍</router-link>
              <router-link to="">明星作品</router-link>
              <router-link to="">服务保障</router-link>
              <router-link to="">自选摄影师</router-link>
              <router-link to="">分店介绍</router-link>
              <router-link to="">品牌活动</router-link>
            </div>
          </li>
          <li><router-link to="">当季特惠</router-link></li>
          <li><router-link to="">旅拍城市</router-link></li>
          <li><router-link to="">客照欣赏</router-link></li>
          <li><router-link to="">客户微电影</router-link></li>
          <li><router-link to="">客户评价</router-link></li>
          <li><router-link to="">会员登录</router-link></li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return{
      list:[

      ]
    }
  },
  methods:{
    dropdown(e){
      console.log(e.target)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header{position: fixed; top: 0px; z-index: 10000; height: 80px;width: 100%;background: black}
  .container{width: 1000px;margin: 0 auto;}
  .header-log{height: 80px;width: 220px;background-color: #ccc;float: left;}
  .header-tabbar{
    display: flex;
    justify-content: center;
    height: 80px; 
    float: right;
    ul{
      margin-top: 25px;
      li{
        padding: 0px;
        color: #fff;
        float: left;
        a{
          letter-spacing: 1px;
          padding-right: 10px !important;
          padding-left: 10px !important;
          font-family: "Arial";
          font-size: 1.2rem;
          color: #ccc;
          padding-left: 20px;
        }
      }
    };
    .dropdown-menu{
      display: none;
    };
    .dropdown-toggle::after{
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
    }
  }
</style>
