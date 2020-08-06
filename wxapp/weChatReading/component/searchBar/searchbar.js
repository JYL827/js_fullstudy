// component/searchBar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: []
    },
    anotherPage: {
      type: String,
      value: '书城'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showTitle: ''
  },
  lifetimes: {
    attached () {
      let i = 1;
      this.setData({
        showTitle: this.data.title[0].name
      })
      // 设置每3s更新一次搜索框内容
      setInterval(() => {
        this.setData({
          showTitle: this.data.title[i].name
        })
        i++
        if (i >= this.data.title.length) {
          i = 0
        }
      }, 3000)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
