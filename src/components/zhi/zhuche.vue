<template>
	<div id="aa">
		<div class="zc">
			<div class="zc1">
				<el-form
					ref="ruleFormRef"
					style="max-width: 600px"
					:model="ruleForm"
					status-icon
					:rules="rules"
					label-width="auto"
					class="demo-ruleForm"
				>
					<el-form-item label="用户名" prop="username">
					<el-input  v-model="ruleForm.username" type="text" autocomplete="off" />
					</el-form-item>
					<el-form-item label="密码" prop="pass">
					<el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
					</el-form-item>
					<el-form-item label="确认密码" prop="checkPass">
					<el-input
						v-model="ruleForm.checkPass"
						type="password"
						autocomplete="off"
					/>
					</el-form-item>
					<el-form-item label="邀请码" prop="yqm">
					<el-input v-model.number="ruleForm.yqm" />
					</el-form-item>
					<el-form-item style="margin-left: 30px;margin-top: 30px;">
					<el-button @click="this.$router.push('/');">登录</el-button>
					<el-button type="primary" @click="submitForm(ruleFormRef)">
						注册
					</el-button>
					<el-button @click="resetForm(ruleFormRef)">清空</el-button>
					</el-form-item>
				</el-form>
				
			</div>
		</div>
	</div>
	</template>
	
	<script lang="ts" setup>
	import { reactive, ref } from 'vue'
	import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  username: '',
  pass: '',
  checkPass: '',
  yqm: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  yqm: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
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
	
	</style>