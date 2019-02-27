// components/pureText2/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    minuteTitle: {
      type: String,
      value: ''
    },
    subTitle: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageTap(){
      let that = this;
      wx.previewImage({
        urls: that.properties.imgSrc
      })
    }
  }
})
