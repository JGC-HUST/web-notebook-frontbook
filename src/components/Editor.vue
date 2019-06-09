<template>
	<div class="editor-container">
		<div id="content">
			<a-textarea placeholder="Basic usage" :rows="20" id="input" @change="handleInput" v-model="input" />
			<div id="preview" v-html="preview" />
		</div>
		<div id="btns">
			<h3>标题</h3>
			<a-row>
				<a-col :span="8"><a-input placeholder="日志标题"/></a-col
				><a-col :span="8" :offset="1">
					<a-button type="primary" loading>
						提交
					</a-button>
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script>
import { markdown } from "markdown";
export default {
	data() {
		return {
			input: "",
			preview: ""
		};
	},
	methods: {
		handleInput() {
			this.preview = markdown.toHTML(this.input);
		}
	}
};
</script>

<style scoped>
.editor-container {
	min-height: 100%;
	width: 100%;
	padding: 20px;
}
#content {
	/* min-height: 80%; */
	width: 100%;
	display: flex;
	justify-content: space-between;
}
#btns {
	height: 60px;
	width: 100%;
	margin-top: 10px;
}
#input,
#preview {
	min-height: 100%;
	width: 48%;
	padding: 10px;
}
#preview {
	border: solid 1px grey;
	overflow: auto;
}
</style>
