<template>
  <div class="container">
    <div class="title">{{title}}</div>
    <div class="summ">{{sum}}</div>
    <a :href="href" class="more">阅读全文</a>
    <div class="time"><a-icon type="clock-circle" /> {{time}}</div>
  </div>
</template>
<script>
  export default {
    name: 'lisiItem',
    props: {
      title: {
        required: true,
        type: String
      },
      time: {
        required: true,
        type: String
      },
      sum: {
        required: true,
        type: String
      },
      href: {
        type: String
      }
    }
  }
</script>
<style scoped>
  .container {
    margin: 20px 0;
    padding-bottom: 20px;
    padding-left: 50px;
    border-bottom: solid 1px rgb(221, 221, 221);
  }
  .title {
    font-size: 32px;
    color: #333333;
    margin-bottom: 25px;
  }
  .more {
    display: block;
    margin: 16px 0;
    font-size: 16px;
  }
</style>
