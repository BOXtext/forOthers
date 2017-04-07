<template>
  <div class="success">
    	<div class="header">
	  		<el-row>
	  		  <el-col :span="4"><el-button type="text" style="color:white;" size="small"><i class="el-icon-arrow-left"></i></el-button></el-col>
	  		  <el-col :span="16"><span style="color:white;">借钱</span></el-col>
	  		  <el-col :span="4"><span style="color:white;">完成</span></el-col>
	  		</el-row>
		</div>
    <div class="succDetails">
      <el-row>
        <el-col :span="6"><i class="el-icon-circle-check" style="font-size:100px;color:white;"></i></el-col>
        <el-col :span="12"><h1>发布成功</h1><span>您的借款已发布成功，坐等朋友借您钱吧</span></el-col>
        <el-col :span="6"><el-button type="text" @click="toDetails"><span style="font-size:20px;color:white;">明细<i class="el-icon-arrow-right
"></i></span></el-button></el-col>
      </el-row>
    </div>

   
      <div class="Obj">
        <el-row>
          <el-col :span="9"  style="padding:10px;"><span class="font-color">待借金额</span></el-col>
        <el-col :span="14" style="float:right;text-align:right;"><span class="font-color">{{money}}元</span></el-col>
        </el-row>
      </div>
      
      <div class="Date">
        <el-row>
          <el-col :span="9"  style="padding:10px;"><span class="font-color">有效期</span></el-col>
        <el-col :span="14" style="float:right;text-align:right;"><span class="font-color">剩余{{restDate}}天</span></el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'succ',
    data: function() {
      return {
        money:10,
        restDate:3
      }
    },
    methods:{
      toDetails() {
        this.$router.push({
              name:'Details',
              query:''
            })
      }
    }
  }
</script>

<style lang="less">
  .success {

  }
  .success .header{
    padding-top: 20px;
    height: 50px;
    text-align: center;
    background: #222A35;
    color: white;
  }
  .success .succDetails{
  
    color: white;
  }
  .success .succDetails{
    padding-top: 20px;
    height: 150px;
    text-align: center;
    background: #46AEFE;
  }
  .success .font-color{
    color:#97A8BE;
    font-size:18px;
    height: 44px;
  }

</style>