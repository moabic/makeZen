// components/nav/cmp.js
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
    markArr: ['轻芒','兴趣','物质','世界','新事','灵魂'],
    markIndex:0,
    marknum: 'markZ0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e){
      let lastIndex = this.data.markIndex
      let index = e.currentTarget.dataset.index;
      this.setData({
        markIndex: index,
        marknum:`markZ${index === 0 ? 0 : index - 1}`
      })
      if(index === lastIndex) {
        return
      }
      this.triggerEvent("nav",{index})
    },
    
  }
})
