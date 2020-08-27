<template>
  <div class="about">
    <User :userName="name"></User>
  </div>
</template>

<script>
import User from '@/components/User'
export default {
  data() {
    return {
      name: '聪哥'
    }
  },
  components: {
    User
  }
}
</script>

<style>
  .about {
    color: aqua;
  }
</style>