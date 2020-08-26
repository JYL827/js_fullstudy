<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Error: 404 not found",
    };
  },

  created() {
    console.log(this.$route.params);
  },
};
</script>

<style>
</style>