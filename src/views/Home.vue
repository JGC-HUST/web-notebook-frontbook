<template>
	<div class="home">
		<div id="particles"></div>
		<div class=""></div>
		<div class="form-container">
			<div class="title">网络日志</div>
			<router-view></router-view>
			<p v-if="$route.name === 'login'">
				或者
				<router-link to="/signup">注册</router-link>
			</p>
			<p v-else>
				或者
				<router-link to="/login">登录</router-link>
			</p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import particlesJs from "particles.js";
import particlesConfig from "./config.json";

export default {
	name: "home",
	components: {},
	beforeCreate() {
		this.form = this.$form.createForm(this);
	},
	mounted() {
		particlesJS("particles", particlesConfig);
	},
	methods: {
		handleClick() {
			console.log(this.$route);
		}
	}
};
</script>

<style scoped>
body {
	margin: 0;
	font: normal 75% Arial, Helvetica, sans-serif;
}

canvas {
	display: block;
}

#particles {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #69c0ff;
	z-index: -55;
}
.mask {
	width: 100%;
	height: 100%;
	z-index: -5;
}
.form-container {
	position: absolute;
	height: 400px;
	width: 400px;
	background-color: rgba(255, 255, 255, 0.2);
	top: 50%;
	left: 50%;
	margin-top: -200px;
	margin-left: -200px;
	border-radius: 30px;
	padding: 40px;
}
.title {
	color: #fff;
	font-size: 24px;
	margin-bottom: 20px;
	text-align: center;
}
</style>
