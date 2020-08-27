<template>
  <div class="user">
      <p>{{userName}}</p>
      <!-- <button @click="handle">按钮</button> -->
      <button @click="changeBaby">养新的宠物</button>
  </div>
</template>

<script>
export default {
    props: ['userName'],
    data() {
        return {
            name: '皮皮虾',
            title: '我是子组件里的title',
            baby: '小黑'
        }
    },
    methods: {
        // handle() {
        //     this.$emit('titleChange', this.title)// 抛出一个titleChange的事件,并把title作为事件参数
        // },
        changeBaby() {
            this.$emit('babyChange', this.baby)
        }
    }
}
</script>

<style>

</style>