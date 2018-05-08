// component/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    fixed: Boolean,
    color: {
      type: String,
      value: '#000'
    },
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    back: {
      type: null,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isx: /iphone10|iphone x/i.test(wx.getSystemInfoSync().model),
    isAndroid: /android/i.test(wx.getSystemInfoSync().system)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    backFunction: function () {
      wx.navigateBack({
        delta: this.data.back
      })
    }
  }
})
