// pages/shopSuccess/shopSuccess.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 点击使用说明，跳转页面
  user(){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  // 复制卡号
  fz(){//点击复制的话，要将卡号等进行动态的获取
    that.fzCom('0000 000 0000 0')
  },
   // 复制密码
  fz1(){
    that.fzCom('00000')
  },
  // 复制的公共的方法
  fzCom(str){
    wx.setClipboardData({
      data:str,
      success(res){
        wx.showToast({
          title: '复制成功',
          icon:"success"
        })
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})