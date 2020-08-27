<template>
  <div class="animal">
      <p>我的宠物: {{myBaby}}</p>
  </div>
</template>

<script>
export default {
    props: {
        myBaby: {
            type: String,
            default: '小白'
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>