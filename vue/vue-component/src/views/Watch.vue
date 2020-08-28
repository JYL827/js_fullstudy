<template>
  <div class="watch">
      <span style="margin-right:20px">{{temperature}}度</span>
      <span>{{suggest}}</span>
      <br/>
      <button @click="add">add</button>&nbsp;
      <button @click="reduce">reduce</button>
  </div>
</template>

<script>
// minxins
let addLog = {
    updated: function () {
        console.log('数据发生变化了，此时温度为' + this.temperature)
    }
}
let ext = {
    created() {
        console.log('我是被扩展出来的created')
    },
    methods: {
        add() {
            console.log('我是被扩展出来的add')
        }
    }
}
export default {
    data() {
        return {
            temperature: 25,
            suggest: '穿短袖'
        }
    },
    mixins: [addLog],
    extends: ext,
    methods: {
        add() {
            this.temperature += 5
        },
        reduce() {
            this.temperature -= 5
        }
    },
    watch: {
        temperature: function(newVal, oldVal) {
            console.log(newVal, oldVal)
            if (newVal >= 15) {
                this.suggest = '穿短袖'
            } else if (newVal < 15 && newVal >= 0) {
                this.suggest = '穿夹克'
            } else if (newVal < 0) {
                this.suggest = '穿羽绒服'
            }
        }
    }
}
</script>

<style>

</style>