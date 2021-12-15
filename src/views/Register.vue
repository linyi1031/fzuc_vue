<template>
	<section>
		<div class="container">
			<div class="user singupBx">
				<div class="formBx">
					<div class="header">
						<h2>Register</h2>
						<br>
						<br>
					</div>
					<div class="formBx" style="margin-left: -8.5625rem;">
						<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
							class="demo-ruleForm">
							<div class="inpBox">
								<el-form-item label="Account" prop="account">
									<el-input type="Account" v-model="ruleForm.account" placeholder="Account"
										autocomplete="off"></el-input>
								</el-form-item>
							</div>
							<div class="inpBox">
								<el-form-item label="Email">
									<el-input type="email" v-model="ruleForm.email" placeholder="email"
										autocomplete="off">
									</el-input>
								</el-form-item>
							</div>
							<div class="inpBox">
								<el-form-item label="Code">
									<el-input type="code" v-model="ruleForm.code" placeholder="code" autocomplete="off" style="width: 10.9375rem;">
									</el-input>
									<el-button type="info" plain  @click="sendCode"  style="width: 78px;height: 39px;">
										{{btntxt}}</el-button>

								</el-form-item>
							</div>
							<div class=" inpBox">
								<el-form-item label="Nickname" prop="nickname">
									<el-input type="Nickname" v-model="ruleForm.nickname" placeholder="Nickname"
										autocomplete="off"></el-input>
								</el-form-item>
							</div>
							<div class=" inpBox">
								<el-form-item label="phoneNumber" prop="phoneNumber">
									<el-input type="phoneNumber" v-model="ruleForm.phoneNumber"
										placeholder="phoneNumber" autocomplete="off"></el-input>
								</el-form-item>
							</div>
							<div class="inpBox">
								<el-form-item label="Password" prop="password">
									<el-input type="password" v-model="ruleForm.password" placeholder="Password"
										autocomplete="off">
									</el-input>
								</el-form-item>
							</div>
							<div class="inpBox">
								<el-form-item label="Checkpass" prop="checkPass">
									<el-input type="password" v-model="ruleForm.checkPass" placeholder="Checkpass"
										autocomplete="off"></el-input>
								</el-form-item>
							</div>
							<div id="re">
								<el-form-item>
								
								
								
									<el-button type="primary" round @click="submitForm('ruleForm')" >Rigster now</el-button>
								</el-form-item>
							</div>
							

						</el-form>
					</div>




				</div>
			</div>
		</div>

	</section>

</template>

<script>
	import axios from "axios"
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('input pass'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('repeat pass'));
				} else if (value !== this.ruleForm.password) {
					callback(new Error('The two passwords are inconsistent'));
				} else {
					callback();
				}
			};
			var validataAccount = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('input Account'))
				} else {
					callback();
				}
			};
			var validatanickn = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('input Nickname'))
				} else {
					callback();
				}
			};
			var vaildataphoneNumber = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('input phoneNumber'))
				} else {
					callback();
				}
			}
			return {
				data: '',
				// isRun: true,
				// runTime: 60,
				// autoTimer: null,
				disabled:false,
				time : 60,
				btntxt:"Code",
				ruleForm: {
					account: '',
					password: '',
					checkPass: '',
					nickname: '',
					phoneNumber: '',
					email: '',
					code: '',

					//倒计时


				},

				rules: {
					password: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					account: [{
						validator: validataAccount,
						trigger: 'blur'
					}],
					nickname: [{
						validator: validatanickn,
						trigger: 'blur'
					}],
					phoneNumber: [{
						validator: vaildataphoneNumber,
						trigger: 'blur'
					}]
				}
			};
		},

		methods: {
			//发送验证码
			sendCode() {
				 if (this.isRun) return;
				
				console.log(this.ruleForm.email)
				this.data = {
					email: this.ruleForm.email
				}
				this.config = {
					method: 'post',
					url: 'http://47.96.236.167:8080/user/email',
					headers: {
						'Content-Type': 'application/json',
					},
					data: this.data
				}
				axios(this.config).then(function(response) {
					alert(response.data.message)
					console.log(response);
					// alert('The verification code is valid within five minutes')
					
				}).catch(function(error) {
					// alert("失败")
					console.log(error)
				});

				// 倒计时
				// this.isRun = true;
				// this.autoTimer = setInterval(() => {
				// 	if (this.runTime === 0) {
				// 		this.runTime = 60;
				// 		this.isRun = false;
				// 		clearInterval(this.autoTimer);
				// 		return;
				// 	}
				// 	this.runTime--;
				// }, 1000);
				//倒计时
				this.time = 60;
				this.timer();
				

			},
			timer(){
				if(this.time > 0){
					this.disabled = true;
					this.time--;
					this.btntxt = this.time+"s";
					setTimeout(this.timer, 1000);
				}else{
					this.time = 0;
					this.btntxt = "Code";
					this.disabled = false;
				}
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// console.log(that.ruleForm)
						// axios.post('http://416v73d685.qicp.vip:15736/user/email/', 
						// that.ruleForm).then(function(response) {
						// 	console.log(response);
						// })
					} else {
						return false;
					}
				});
				this.data = {
					account: this.ruleForm.account,
					password: this.ruleForm.password,
					nickname: this.ruleForm.nickname,
					phoneNumber: this.ruleForm.phoneNumber,
					email: this.ruleForm.email,
					code: this.ruleForm.code
				}
				this.config = {
					method: 'post',
					url: 'http://47.96.236.167:8080/user/register',
					headers: {
						'Content-Type': 'application/json'
					},
					data: this.data
				}
				axios(this.config).then(function(response) {
					console.log(response);
          if(response.data.status=='1'){
            alert("Registered successfully!")
            location.href='/'
          }else{
            alert(response.data.message)
          }
				}).catch(function(error) {
					console.log(error)
				});

			}
		}

	}
</script>

<style scoped>
	#re {
		margin-top: 2.1875rem;
		margin-left: 29.375rem;
	}
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}
	
	section {
		position: relative;
		min-height: 98vh;
		background: url(../assets/BG2.jpg);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
	
	section .container {
		position: relative;
		border-radius:0.9375rem;
		width: 62.5rem;
		height: 40.625rem;
		background: #fff;
		box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}
	
	section .container .user .formBx form .signup{
	    position: relative;
	    margin-top: 20px;
	    font-size: 12px;
	    letter-spacing: 1px;
	    color: #555;
	    text-transform: uppercase;
	    font-weight: 300;
	}
	
	section .container .user .formBx form .signup a{
	    font-weight: 600;
	    text-decoration: none;
	    color: #677eff;
	}
	
	.inpBox {
		padding: 0.625rem;
		width: 23.4375rem;
		margin-left: 38%;

	}
	.header {
		text-align: center;
	}


	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
