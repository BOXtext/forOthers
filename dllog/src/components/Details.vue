<template>
  <div class="Details">

	  <div class= "body">
	      <el-row >
	      <el-col :span="24">
				<el-table :data="tableData" style="width: 100%" >
				    <el-table-column label="还款日：" min-width="180">
				    	<template scope="scope"> 
				    		 <el-icon name="time"></el-icon>
				    		  <span style="margin-left: 10px">还款日：{{ scope.row.loanDate }}</span>
				    		  <span v-if="ontime" style="float:right;">准时还款<i class="el-icon-check"></i></span>
				    		  <div class="line"></div>
				    		 <el-row>
				    		   <el-col :span="12" class="dateTime" style="">
				    		   <span >
				    		   	未还合计：￥{{scope.row.amount}}
				    		   </span>
				    			</el-col>
				    			 <el-col class="money" :span="12" style="padding-left:20px;">
				    			 	<p>已还合计：￥{{scope.row.amount}}</p>
				    			 	<hr>
				    			 	<p>本金：￥{{scope.row.amount}}</p>
				    			 	<p>利息：￥{{scope.row.amount}}</p>
				    			 	<p>逾期利息：￥{{scope.row.amount}}</p>
				    			</el-col>
				    		 </el-row>
				    	</template>
				    </el-table-column>
				    
	 			 </el-table>
	  	  </el-col>
	      </el-row>
	  </div>
</div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      activeIndex: '1',
      ontime:true,
      tableData:[
      {"amount":"10000","capital":"10000","interest":"100","loanDate":1490585630997,"memberId":"dhdkaup111aehdoapdhf","states":1},
       {"amount":"10000","capital":"10000","interest":"100","loanDate":1490585630997,"memberId":"dhdkaup111aehdoapdhf","states":1},
        {"amount":"10000","capital":"10000","interest":"100","loanDate":1490585630997,"memberId":"dhdkaup111aehdoapdhf","states":1},
         {"amount":"10000","capital":"10000","interest":"100","loanDate":1490585630997,"memberId":"dhdkaup111aehdoapdhf","states":1}
		]
    }
  },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.body  .dateTime {
		border-right:1px solid green;height:182px;text-align:center;
		line-height: 182px;
	}
	.body .money {
		height:182px;
	}
	.Details .el-table {
		font-size: 8px;
	}
</style>
