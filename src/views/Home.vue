<template>
	<div class="home">
		<div id="particles"></div>
		<div class=""></div>
		<div class="form-container">
			<div class="title">网络日志</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import particlesJs from "particles.js";
import particlesConfig from "./config.json";

export default {
	name: "home",
	components: {
		HelloWorld
	},
	mounted() {
		particlesJS("particles", particlesConfig);
	}
};
</script>

<style scoped>
/* ---- reset ---- */

body {
	margin: 0;
	font: normal 75% Arial, Helvetica, sans-serif;
}

canvas {
	display: block;
}

/* ---- particles.js container ---- */

#particles {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #69c0ff;
	background-image: url("");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50% 50%;
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
	background-color: rgba(150, 150, 150, 0.5);
	top: 50%;
	left: 50%;
	margin-top: -200px;
	margin-left: -200px;
	border-radius: 30px;
	padding: 20px;
}
.title {
	color: #fff;
	font-size: 24px;
}
</style>
