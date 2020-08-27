<template>
  <div class="home">
    <!-- 接收titleChange事件并重新赋值改写方法 -->
    <p>{{title}}</p>
    <User :userName="name" @titleChange="updateTitle" @babyChange="updateBaby"></User>
    <Animal :myBaby="baby"></Animal>
  </div>
</template>

<script>
// @ is an alias to /src
import User from "@/components/User";
import Animal from "@/components/Animal";

export default {
  data() {
    return {
      name: "皮皮虾",
      title: '',
      baby: undefined
    };
  },
  components: {
    User,
    Animal
  },
  methods: {
    updateTitle(title) {
      this.title = title
    },
    updateBaby(baby) {
      this.baby = baby
      // console.log(baby)
    },
  },
};
</script>
