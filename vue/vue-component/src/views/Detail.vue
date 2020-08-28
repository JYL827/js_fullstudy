<template>
  <div class="detail">
    <h1>Computed 计算属性</h1>

    <div class="price">{{totalPrice}} 元</div>

    <div class="news">
      <ul>
        <li v-for="(item, index) in reverseNews" :key="index">{{item.title}} —— {{item.date}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
      num: 4,
      news: [
        {title: "十六字方针，习近平对人民警察队伍提出新期待", date: "2020/08/24"},
        {title: "美威州示威骚乱致2死1伤 17岁嫌犯称崇拜警察", date: "2020/08/25"},
        {title: "长江口两船碰撞起火事故致9死5失联 原因正在调查", date: "2020/08/26"},
        {title: "袁隆平爷爷90岁生日前去理发", date: "2020/08/27"}
      ],
    };
  },
  computed: {
    totalPrice: function () {
      return this.price * this.num;
    },
    reverseNews: function() {
        let news = this.news
        return news.reverse()
    }
  },
};
</script>

<style>
</style>