<template>
	<a-layout id="components-layout-demo-top-side-2">
		<a-layout-header class="header">
			<div class="logo">网络日志</div>
			<div class="avator">
				<a-dropdown :trigger="['click']">
					<a class="ant-dropdown-link" href="#">{{ userInfo.username }} <a-icon type="down" /> </a>
					<a-menu slot="overlay">
						<a-menu-item key="0">
							<a href="http://www.alipay.com/">1st menu item</a>
						</a-menu-item>
						<a-menu-item key="1">
							<a href="http://www.taobao.com/">2nd menu item</a>
						</a-menu-item>
						<a-menu-divider />
						<a-menu-item key="3">3rd menu item</a-menu-item>
					</a-menu>
				</a-dropdown>
			</div>
		</a-layout-header>
		<a-layout>
			<a-layout-sider width="200" style="background: #fff">
				<a-menu
					mode="inline"
					:defaultSelectedKeys="['1']"
					:defaultOpenKeys="['sub1']"
					:style="{ height: '100%', borderRight: 0 }"
				>
					<a-menu-item class="menu-item">option4</a-menu-item>
					<a-menu-divider />
					<a-menu-item class="menu-item">option4</a-menu-item>
					<a-menu-divider />
					<a-menu-item class="menu-item">option4</a-menu-item>
					<a-menu-divider />
					<a-button type="dashed" id="addBtn1" @click="showModal">添加分类</a-button>
				</a-menu>
			</a-layout-sider>
			<a-modal
				title="新建分类"
				:visible="visible"
				@ok="handleOk"
				:confirmLoading="confirmLoading"
				@cancel="handleCancel"
			>
				<a-input placeholder="请输入分类名" v-model="newCateName" />
			</a-modal>
			<a-layout style="padding: 0 24px 24px;background: #ccc">
				<a-breadcrumb style="margin: 16px 0">
					<a-breadcrumb-item>Home</a-breadcrumb-item>
					<a-breadcrumb-item>List</a-breadcrumb-item>
					<a-breadcrumb-item>App</a-breadcrumb-item>
				</a-breadcrumb>
				<div id="page" :style="{ background: '#fff', padding: '20px', margin: 0 }">
					<router-view></router-view>
				</div>
			</a-layout>
		</a-layout>
	</a-layout>
</template>
<script>
export default {
	data() {
		return {
			userInfo: this.$store.getters.getUserInfo,
			collapsed: false,
			visible: false,
			confirmLoading: false,
			newCateName: ""
		};
	},
	methods: {
		showModal() {
			this.visible = true;
		},
		handleOk(e) {
			this.ModalText = "The modal will be closed after two seconds";
			this.confirmLoading = true;
			setTimeout(() => {
				this.visible = false;
				this.confirmLoading = false;
			}, 2000);
		},
		handleCancel(e) {
			console.log("Clicked cancel button");
			this.visible = false;
		}
	}
};
</script>

<style>
#components-layout-demo-top-side-2 {
	height: 100%;
}
#components-layout-demo-top-side-2 .logo {
	width: 120px;
	height: 31px;
	background: rgba(255, 255, 255, 0.2);
	margin: 16px 28px 16px 0;
	float: left;
	line-height: 31px;
	color: #ffffff;
	text-align: center;
}
.ant-layout-has-sider {
	min-height: calc(100% - 64px);
}
.avator {
	float: right;
}
#addBtn1 {
	display: list-item !important;
	height: 30px;
	margin: auto;
	width: 150px;
	margin-top: 10px;
}
.menu-item {
	text-align: center;
}
</style>
