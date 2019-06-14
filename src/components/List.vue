<template>
<div>
  <ListItem  title="你好" time="2019-06-11-12:23"  sum="1234567896"/>
  <ListItem  title="你好" time="2019-06-11-12:23"  sum="1234567896"/>
  <ListItem  title="你好" time="2019-06-11-12:23"  sum="1234567896"/>
  <ListItem  title="你好" time="2019-06-11-12:23"  sum="1234567896"/>
  <ListItem  title="你好" time="2019-06-11-12:23"  sum="1234567896"/>
</div>
</template>

<script>
  import ListItem from './ListItem.vue'
  export default {
    components: {
      ListItem
    },
    beforeMount() {
      console.log(this.$route.query.catename);
    }
  }
</script>
