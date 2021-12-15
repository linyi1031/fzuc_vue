<template>
	<section>
		<div class="container">
			<div class="user singinBX">
				<div class="show">
					<img src="../assets/0.png" style="width:60% ;">
					<h3 class="mb-3 mt-lg-4">FZU_Community</h3>
					<p>
						"Share what's new and life moments with
						<br>
						your friends"
					</p>
				</div>
				<div class="formBX">
					<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
						class="demo-ruleForm">
						<div class="header" style="text-align: center;">
							<h2 class="headline">Welcome Back</h2>
							<p>Login to manage your account.</p>
							<br>
							<br>
						</div>
						<el-form-item label="Email" prop="email" style="margin-bottom: 20px">
							<el-input type="email" v-model="ruleForm.email" autocomplete="off" style="width: 15.625rem;">
							</el-input>
						</el-form-item>
						<el-form-item label="Password" prop="pass">
							<el-input type="pass" v-model="ruleForm.password" autocomplete="off" show-password>
							</el-input>
						</el-form-item>
						<br>
						<el-form-item>
							<el-button type="primary" @click="submitForm('ruleForm')" style="margin-left: 3.125rem;padding: 5px 15px 5px 15px" size="medium">Start</el-button>
						</el-form-item>
						<p class="signup" style="margin-left: 3.125rem;">
							Don't have a account <router-link to="/Register">Register</router-link>
						</p>
					</el-form>


				</div>
			</div>

		</div>
	</section>

</template>

<script>
	import axios from "axios"

	export default {
		data() {
			var validateemail = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('input email'))
				}
			};
			var validatepass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('input password'))
				}
			};
			return {
				data: '',
				ruleForm: {
					email: '',
					password: ''
				},
				rules: {
					email: [{
						validator: validateemail,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatepass,
						trigger: 'blur'
					}]
				}
			}
		},
    created() {
      this.message()
    },
    methods: {
		  message(){
		    this.data={
		      token:localStorage.token
        }
        this.config = {
          method: 'post',
          url: 'http://47.96.236.167:8080/user/message',
          headers: {
            'Content-Type': 'application/json',
            'token':localStorage.token
          },
          data:this.data
        }
        axios(this.config).then(function(response) {
          // console.log(response);
          if(response.data.status == 1){
            location.href = "/#/Off-Topic"
          }
        }).catch(function(error) {
          console.log(error)
        });
      },
			submitForm(formName) {
				// var that = this;
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('login!');
						// console.log(that.ruleForm)
						// axios.post('http://416v73d685.qicp.vip:15736/user/login',that.ruleForm).then(function(response){
						// 	console.log(response);
						// })
					} else {
						// console.log('fauile!!');
						return false;
					}
				});
				this.data = {
					email: this.ruleForm.email,
					password: this.ruleForm.password
				}
				this.config = {
					method: 'post',
					url: 'http://47.96.236.167:8080/user/login',
					headers: {
						'Content-Type': 'application/json'
					},
					data: this.data
				}
				axios(this.config).then(function(response) {
					// console.log(response);
					if(response.data.status == 1){
					  // alert('Login successfully!')
						localStorage.token = response.data.token;
						location.href = "/#/Off-Topic"
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

	.show {
		background-color: lightblue;
		color: white;
		width: 25rem;
		height: 23.4375rem;
		float: left;

	}

	section .container .show {
		position: relative;
		width: 50%;
		height: 100%;

		transition: .5s;
	}

	section .container .user {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	section .container .user .formBX {
		position: relative;
		width: 50%;
		height: 100%;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px;
		transition: .5s;
	}
	section .container .user .formBX form input{
	    position: relative;
	    width: 100%;
	    padding: 10px;
	    background: #f5f5f5;
	    color: #333;
	    border: none;
	    outline:none;
	    box-shadow:none;
	    margin: 8px 0;
	    font-size: 14px;
	    letter-spacing:1px;
	    font-weight: 300;
	}

	/* 为登录设置样式 */

	section .container .user .formBX form input[type="submit"]{
	    max-width: 12.5rem;
	    background: #677eff;
	    color:#fff;
	    cursor:pointer;
	    font-size: 14px;
	    font-weight: 500;
	    letter-spacing: 1px;
	    transition: .5s;
	}
	section .container .user .formBX form .signup{
    position: relative;
    margin-top: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    color: #555;
    text-transform: uppercase;
    font-weight: 300;
}


section .container .user .formBX form .signup{
    font-weight: 600;
    text-decoration: none;
    color: #677eff;
}
section .container .singinBx .formBx {
    left: 0;
    left: 100%;
}
.show {
	text-align: center;

}

img {
	margin-top: 9.375rem;
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
