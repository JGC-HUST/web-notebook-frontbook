<template>
	<a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
		<a-form-item>
			<a-input
				v-decorator="[
					'userName',
					{ rules: [{ required: true, message: '请输入用户名!' }, { min: 8, message: '用户名最短8位' }] }
				]"
				placeholder="Username"
			>
				<a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
			</a-input>
		</a-form-item>
		<a-form-item>
			<a-input
				v-decorator="[
					'password',
					{ rules: [{ required: true, message: '请输入密码!' }, { min: 8, message: '密码最短8位' }] }
				]"
				type="password"
				placeholder="Password"
			>
				<a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
			</a-input>
		</a-form-item>
		<a-form-item>
			<a-input
				v-decorator="[
					'email',
					{
						rules: [
							{
								type: 'email',
								message: '邮箱格式错误!'
							},
							{
								required: true,
								message: '请输入邮箱!'
							}
						]
					}
				]"
				type="password"
				placeholder="Email"
			>
				<a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
			</a-input>
		</a-form-item>
		<a-form-item>
			<a-button type="primary" html-type="submit" class="login-form-button">
				注册
			</a-button>
		</a-form-item>
	</a-form>
</template>

<script>
export default {
	beforeCreate() {
		this.form = this.$form.createForm(this);
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault();
			this.form.validateFields((err, values) => {
				if (!err) {
					console.log("Received values of form: ", values);
				}
			});
		}
	}
};
</script>

<style scoped>
#components-form-demo-normal-login .login-form {
	max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
	float: right;
}
#components-form-demo-normal-login .login-form-button {
	width: 100%;
	line-height: 30px;
}
.ant-form-item-control-wrapper {
	margin-top: 20px;
}
</style>
