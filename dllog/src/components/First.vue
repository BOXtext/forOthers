<template>
  <div class="First">
    <div class="header">
  		<el-row>
  		  <el-col :span="4"><el-button type="text" style="color:white;" size="small"><i class="el-icon-close"></i></el-button></el-col>
  		  <el-col :span="16"><span style="color:white;">微粒贷</span></el-col>
  		  <el-col :span="4"><span style="color:white;"><i class="el-icon-more"></i></span></el-col>
  		</el-row>
  	</div>
  	<div class="moneyNumber">
  		<p class="text">可借额度</p>
  		<div class="money"><h1>￥{{money}}</h1></div>
  		<p class="ratio">总额度￥{{money}},日利率{{ratio}}%</p>
  	</div>

  	<div class="lend" @click="toLend">
  		<span >借钱</span>
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'First',
    data: function() {
      return {
        money:6000,
        ratio:'0.03'
      }
    },
    methods:{
    	toLend() {
    		this.$router.push({
    			name:'Home'
    		})
    	}
    }
  }
</script>

<style lang="less">
  .First {

  }
  .First .text {
	text-align: center;
	color: #D1D1D1;
	margin-top: 50px;
  }
  .First .ratio {
	text-align: center;
	color: #D1D1D1;
	margin-top: 50px;
  }
   .First .header{
  	padding-top: 20px;
  	height: 50px;
  	text-align: center;
  	background: #222A35;
  }
  .First .money{
  	text-align: center;
  	width: 80%;
  	margin-left: 10%;
  }
  
  .First .lend {
  	line-height: 100px;
  	margin: 0 auto;
  	width: 100px;
  	height: 100px;
  	border-radius: 50px;
  	background: #E8BB2C;
  	color: white;
  	text-align: center;
  }
</style>