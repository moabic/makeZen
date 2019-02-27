// import {myBeh} from '../behaviors/myBehaviors'   //  es6 方法导出
// components/pureText/cmp.js
Component({
  // behaviors: [myBeh],     //  把通用组件放在数组里面放在数组里面
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc: {
      type: String,
      value: ''
    },
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
    // onTap(){
    //   wx.navigateTo({
    //     url: '/components/pureText2/cmp'
    //   })
    // },
    imageTap(){
      let that = this;
    }
  }
})
