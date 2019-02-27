// import {myBeh} from '../behaviors/myBehaviors'   //  es6 方法导出
// components/Jiugongge/cmp.js
Component({
  // behaviors: [myBeh],
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc: {
      type:String,
      value: [
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/8c5787bfe46c432db3604b5754262d04.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/44f295bf5f844cdb8991be7f814b3090.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/a22ee130e4294188a44984381901aa04.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/c0d74a6328b4497894a5a5d20e0f66e0.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/3eda289991664b188f70c0d3fa9112f5.gif',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/027a46ae145a4e568516254b074ca9e4.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/fdb7bdecba12438bbfe58945a0bd6b4f.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/f4de71d7c0544c08a52869e7320e3c9e.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/c9ad3a206c384901a490c7499a68cef4.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/b3cb4fd76c94474182a8ee414a281a71.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/858113f570f44a45ab6f0de76f206a33.gif',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/5a38b0ba63164001acdbbeeb8a091d9c.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/51d6593fadac4499a99701bb395e36da.gif',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/d07e5261c5114b64ab7c2ccc9b6ecd00.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/7122290d8e0f4503851e16649f589612.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/8abc0c5c245f4f55969d6048e84fd3e5.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/29d5684bbc2f49f3b612cfdb5743f160.gif',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/aeeffe550dbd41dbba090e6cd706832d.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/90014703f9f049f4b88dd896b9a62711.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/0213b3d98edd4c7f910fc2e6b5586c3f.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/188abcd511f245c092ca3bd5e2ca3296.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/14098ec1447649488f3f6b1c7b4e4f2e.jpeg',
          'http://5b0988e595225.cdn.sohucs.com/images/20181020/3430dcc84f8444cf962b539ca05c5421.jpeg'
      ]
    },
    title: {
      type: String,
      value:''
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
    // 进行图片正常切换
    onTapjiu(e) {
      let that = this;
      let index = e.currentTarget.dataset.index;
      wx.previewImage({
        urls:that.properties.imgSrc,
        current: that.properties.imgSrc[index]
      })
      
    },
    // 点击图片最后一张
    picturePages() {
      let that = this;
      let index = 8;
      wx.previewImage({
        urls:that.properties.imgSrc,
        current: that.properties.imgSrc[index]
      })
    }
  },
  
})
