// components/time/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    time: ''
  },
  attached(){
    this.getData()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getData(){
      let monthArr = ['一月','二月','三月','四月','五月','六月','七月','八月','一九月','十月','十一月','十二月'];
      let dateArr = ['一日','二日','三日','四日','五日','六日','七日','八日','九日','十日','十一日','十二日','十三日','十四日','十五日','十六日','十七日','十八日','十九日','二十日','二十一日','二十二日','二十三日','二十四日','二十五日','二十六日','二十七日','二十八日','二十九日','三十日','三十一日'];
      let month = new Date().getMonth()
      let date = new Date().getDate()
      this.setData({
        time: monthArr[month] + dateArr[date - 1]
      })
    }
  }
})
