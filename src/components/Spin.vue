<template>
  <div class="span-container">
    <a-spin size="large" id="spin" tip="加载中"/>
  </div>
</template>

<script>
  export default {
    name: "Spin",
    mounted() {
      this.axios.get('http://127.0.0.1:8360/cate/get', {
        params: {
          username: this.$store.getters.getUserInfo.username
        }
      }).then((response=> {
        let result = response.data.data;
        let cates = result.cates;
        this.$store.commit('updateCategory', cates);
        this.$router.replace({path: '/notebook/monitor'})
      }))
    }
  }
</script>

<style scoped>
  .span-container {
    height: 750px;
    position: relative;
  }

  #spin {
    display: block;
    width: 100%;
    height: 50%;
    position: absolute;
    top: 50%;
  }
</style>
