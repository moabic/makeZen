import {getAll} from '../../moudl/index'
const index = new getAll
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yinyong: '···',
    imgSrc:'/image/zhuanfa.jpg',
    likeImageSrc: '/image/shoucang.jpg',
    dislikeImageSrc:'/image/shoucang2.jpg',
    like:{},
    urlIndex:0
  },
  getData() {
    const getArticle = index.getArticle(this.data.urlIndex,this.data.urlInde)
    const MarkType = index.MarkType(this.data.urlIndex)
    const Recommend = index.Recommend(this.data.urlIndex)
    const arr = [getArticle,MarkType,Recommend]
    Promise.all([arr[0],arr[1],arr[2]]).then(res => {
      wx.hideLoading()      // 等数据全部加载完  就隐藏loding
      this.setData({
        getArticle: res[0].data.data,
        MarkType: res[1].data.data,
        Recommend: res[2].data.data
      })
    })
  },
  // 点击喜欢或者不喜欢
  onTap(e){
    let index = e.currentTarget.dataset.like
    let like = this.data.like
    let islike = like[index]
    like[index] = !islike    
    this.setData({
      like: like
    })
    wx.setStorageSync('like',like)
  },
  sheet(){
    wx.showActionSheet({
      itemList:[`对推荐不感兴趣`,`不喜欢推荐的内容`,`以后不再接受类似的内容`,`提交意见`],
    })
  },
  // 从后台缓存数据中调取
  attached(){
    let likeTo = wx.getStorageSync('like');
    this.setData({
      like: likeTo
    })
  },
  navTap(e){
    let index = e.detail.index
    this.setData({
      urlIndex: index
    })
    this.getData() 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()    
    wx.showLoading()      //  数据未加载完 ，显示loding
    this.attached()
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(1)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
