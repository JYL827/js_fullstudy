<template>
  <div class="hi">
      <p>我是hi二页面</p>
      <button @click="goBack">返回上一个页面</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goBack () {
      this.$router.push({path: '/hi', query: {name: '蜗牛'}})
    }
  }
}
</script>

<style>

</style>