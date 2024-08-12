<template>
<div id="aa">
	<div class="zc">
		<div class="zc1">
			<el-input class="zc11" v-model="input"  placeholder="用户名"  />
			<el-input class="zc12"
				v-model="input"
				style="width: 300px ;"
				
				type="password"
				placeholder="密码"
				show-password
			/>
			
			<el-button @click="got" >登录</el-button>
			<div class="elink">
			<router-link to="/wangpan">
			<el-link class="elink1" type="primary">找回密码</el-link>
			</router-link>
			<router-link to="/zhuche">
				<el-link class="elink2" type="primary">注册账号</el-link>
			</router-link>
			
			</div>
		</div>
	</div>
</div>
</template>

<script  setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter();
const input = ref('');
const got=()=>{
	router.push('/home/fen12');
}


</script>

<style  scoped>
.elink{
	position:absolute ;
	width: 100%;
	height: 40px;
	top: 150px;
}
.elink1 {
	margin-left: 40px;
}
.elink2 {
	margin-left: 100px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
#aa{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-image: url(../img/login.jpg);
	background-size: cover;
	background-repeat: no-repeat;
}
.zc{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	
	border: 1px solid rgba(108, 105, 105, 0.5);

	background-color: rgba(255,255,255, 0.5);
	width: 500px;
	height:400px ;
}
.zc1{
	position: absolute;
	top: 55%;
	left: 50%;
	transform: translate(-50%,-50%);
}
.zc11{
	position: relative;
	top: -40px;
}
.zc12{
	position: relative;
	top: -20px;
}
button{
	position: relative;
	height: 40px;
	width: 160px;
	top: 40px;
	left: 50%;
	transform: translate(-50%,-50%);
}
</style>