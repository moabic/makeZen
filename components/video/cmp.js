// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc:{
      type: String,
      value: ''
    },
    mainTitle: {
      type:String,
      value: ''
    },
    subTitle: {
      type: String,
      value: ''
    },
    videoSrc:{
      type: String,
      value: ''
    },
    videoId: {
      type:String,
      value: '2019224'
    },
    videoTime: {
      type:Number,
      value:330
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(){
      const id = this.properties.videoId
      let that = this
      this.setData({
        show: !that.data.show
      })
      let video = wx.createVideoContext(id,this)
      video.play()
    },
    bindended() {
      let that = this
      that.setData({
        show: !that.data.show
      })
    } 
  }
})
