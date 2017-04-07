<template>
  <div class="home">
		<div class="header">
		  		<el-row>
		  		  <el-col :span="4"><el-button type="text" style="color:white;" size="small">取消</el-button></el-col>
		  		  <el-col :span="16"><span style="color:white;">高利贷宝</span></el-col>
		  		  <el-col :span="4"><span style="color:white;"><i class="el-icon-share"></i></span></el-col>
		  		</el-row>
		  	</div>
  		<div><span class="font-money">当前可借额度为{{}}元 <i class="el-icon-information"></i></span></div>

  	<el-form :model="form" ref="ruleForm2" :rules="rules">
	  	<el-form-item prop="money">
	  		<div class="ipt">
		   		<el-row>
		   		  <el-col :span="9"  style="padding:10px;"><span>￥借款金额(元)</span></el-col>
		   		  
		   		  <el-col :span="14" style="float:right;"><div>
		   		  	<el-input v-model="form.money" placeholder="请输入10的整数倍"></el-input>
		   		  </div></el-col>
		   		</el-row>
		   	</div>
	  	</el-form-item>

   
   		<el-form-item>
			 <div class="date">
		   		<el-row>
		   		  <el-col :span="9"  style="padding:10px;"><span><i class="el-icon-date" style="color:#AFDDF4;"></i>还款日期</span></el-col>
		   		  <el-col :span="14" style="float:right;">
					  <el-date-picker
				      v-model="form.SDate"
				      type="daterange"
				      placeholder="期限不超过五年" size="small" align="center">
				   	 </el-date-picker>
		   		  </el-col>
		   		</el-row>
		   	</div>
   		</el-form-item>
  
	   	<el-form-item prop="ratio">
			<div class="ratio">
		   		<el-row>
		   		  <el-col :span="9"  style="padding:10px;"><span><i class="el-icon-date" style="color:#AFDDF4;"></i>年利率(%)</span></el-col>
				  <el-col :span="14" style="float:right;"><el-input v-model="form.ratio" placeholder="年利率在0~24之间"></el-input></el-col>
		   		</el-row>
		   	</div>
	   	</el-form-item>
	</el-form>

   	<div class="font-ratio">
		<span >到期本息合计为0.00元</span>
   	</div>

   	<div class="way">
   		<el-row>
   		  <el-col :span="9"  style="padding:10px;"><span>借款用途</span></el-col>
		  <el-col :span="8" style="float:right;text-align:right;"><el-button type="text" @click=""><span style="color:#97A8BE;font-size:18px;">临时周转<i class="el-icon-arrow-right"></i></span></el-button></el-col>
   		</el-row>
   	</div>

   	<div class="Obj">
   		<el-row>
   		  <el-col :span="9"  style="padding:10px;"><span>发布对象</span></el-col>
		  <el-col :span="14" style="float:right;text-align:right;"><el-button type="text" @click=""><span style="color:#97A8BE;font-size:18px;">我的全部宝粉(含新增)<i class="el-icon-arrow-right"></i></span></el-button></el-col>
   		</el-row>
   	</div>

   	<div class="UpDate">
   		<el-row>
   		  <el-col :span="9"  style="padding:10px;"><span>借款发布期</span></el-col>
		  <el-col :span="14" style="float:right;text-align:right;"><el-button type="text" @click=""><span style="color:#97A8BE;font-size:18px;">20<i class="el-icon-arrow-right"></i></span></el-button></el-col>
   		</el-row>
   	</div>

   	<div>
   		<i class="el-icon-star-off"></i><span>已阅读相关协议</span><a href="">相关协议</a>
   	</div>

   		<el-button id="btn" type="primary" size="large" @click="submitForm('ruleForm2')">提交</el-button>
 
   	
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data: function() {
    	var checkMoney = (rule, value, callback) => {
        if (!value) {
           callback(new Error('金额不能为空'));
        }else if(value%10 != 0){
        	 callback(new Error('必须为10的倍数'));
        }else {
        	callback()
        }
     
      };
      return {
      	form:{
      		money:'',
	        SDate:'',
	        ratio:''
      	},
      	rules:{
      		money:[
      			{ validator: checkMoney, trigger: 'blur' }
      		],
      		
      		ratio:[
      			  { required: true, message: '请输入数字', trigger: 'change' }
      		]
      	}
      		
        
      }
    },
    methods: {

    	submitForm(formName) {
        var that= this;
        that.$refs[formName].validate((valid) => {
          if (valid) {
            that.$router.push({
              name:'succ',
              query:''
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="less">

  .home {
	// background: #F6F7FB;
  }
  .home .header{
  	padding-top: 20px;
  	height: 50px;
  	text-align: center;
  	background: #222A35;
  }
  .font-money{
  	color: #C3C3C3;
  	font-size: 14px;
  }
  .ipt,.date,.ratio,.way,.Obj,.UpDate {
  	margin-top: 20px;
  }
  .ipt,.way,.date,.ratio {
	border-bottom: 2px solid #F9F9F9;
  }
  .home .el-input__inner:hover {
  	border:0px;
  }
  .home .el-input__inner{
  	border:0px;
  }

 .font-ratio{color: #C3C3C3;
 	margin-top: 20px;
 	text-align: right;
 }
 #btn {
 	width: 80%;
 	margin-left: 10%;
 	margin-top: 20px;
 }
</style>