<template>
	<div id="content">
		<div id="dialog">
			<p>新建日志</p>
			<a-button id="btn" type="dashed" icon="plus" @click="$router.push({ path: '/notebook/editor' })" block />
		</div>
	</div>
</template>

<style scoped>
#content {
	height: 540px;
	position: relative;
}
#dialog {
	height: 200px;
	width: 200px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -100px;
	margin-left: -100px;
	text-align: center;
	font-size: 30px;
}
#dialog #btn {
	height: 40px;
	border-color: #40a9ff;
}
</style>
