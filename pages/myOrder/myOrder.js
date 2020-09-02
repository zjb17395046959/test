// pages/myOrder/myOrder.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{
      "sign":"f4e1b7160546c77c61ac4f2853e6a5d0eab5814bd62583b47376d5ccde9e16a4",
      "result":"000",
      "queryid":"af-ace3-41da0dc3f1c8",
      "token":null,
      "data":{
          "page":1,
          "pageSize":10,
          "totalPage":5,
          "orderList":[
              {
                  "createTime":"2020.07.10 14:13",
                  "buyCount":1,
                  "orderNo":"202056007710444610",
                  "status":"已完成",
                  "amountPay":95,
                  "picSrc":"http://114.255.22.47:8081/appimages/ecard/1080002016_89339.png",
                  "showStatus":1,
                  "goodsName":"淘票票电子卡100元"
              },
              {
                  "createTime":"2020.07.10 14:03",
                  "buyCount":5,
                  "orderNo":"202055707394344610",
                  "status":"已完成",
                  "amountPay":375,
                  "picSrc":"http://114.255.22.47:8081/appimages/ecard/1080002016_89339.png",
                  "showStatus":1,
                  "goodsName":"淘票票电子卡100元"
              },
              {
                  "createTime":"2020.07.10 10:40",
                  "buyCount":5,
                  "orderNo":"202055407344044610",
                  "status":"已完成",
                  "amountPay":375,
                  "picSrc":"http://114.255.22.47:8081/appimages/ecard/1080002016_89339.png",
                  "showStatus":1,
                  "goodsName":"淘票票电子卡100元"
              },
              {
                  "createTime":"2020.07.10 10:22",
                  "buyCount":5,
                  "orderNo":"202055107606444610",
                  "status":"已完成",
                  "amountPay":375,
                  "picSrc":"http://114.255.22.47:8081/appimages/ecard/1080002016_89339.png",
                  "showStatus":1,
                  "goodsName":"淘票票电子卡100元"
              },
              {
                  "createTime":"2020.07.09 11:08",
                  "buyCount":5,
                  "orderNo":"202050907961944609",
                  "status":"已完成",
                  "amountPay":375,
                  "picSrc":"http://114.255.22.47:8081/appimages/ecard/1080002016_89339.png",
                  "showStatus":1,
                  "goodsName":"淘票票电子卡100元"
              },
              {
                  "createTime":"2020.07.09 11:07",
                  "buyCount":2,
                  "orderNo":"202050707172644609",
                  "status":"已完成",
                  "amountPay":150,
                  "picSrc":"http://114.255.22.47:8081/appimages/ecard/1080002016_89339.png",
                  "showStatus":1,
                  "goodsName":"淘票票电子卡100元"
              },
              {
                  "createTime":"2020.07.09 10:45",
                  "buyCount":5,
                  "orderNo":"202050507366044609",
                  "status":"已完成",
                  "amountPay":375,
                  "picSrc":"http://114.255.22.47:8081/appimages/ecard/1080002016_89339.png",
                  "showStatus":1,
                  "goodsName":"淘票票电子卡100元"
              },
              {
                  "createTime":"2020.07.09 10:26",
                  "buyCount":5,
                  "orderNo":"202050207473844609",
                  "status":"已完成",
                  "amountPay":375,
                  "picSrc":"http://114.255.22.47:8081/appimages/ecard/1080002016_89339.png",
                  "showStatus":1,
                  "goodsName":"淘票票电子卡100元"
              },
              {
                  "createTime":"2019.12.17 10:40",
                  "buyCount":1,
                  "orderNo":"201928912184243417",
                  "status":"已作废",
                  "amountPay":1000,
                  "picSrc":"http://114.255.22.47:8081/appimages/ecard/1060001001_77072.png",
                  "showStatus":0,
                  "goodsName":"签纸贺兑换电子券"
              },
              {
                  "createTime":"2019.12.17 10:27",
                  "buyCount":1,
                  "orderNo":"201927912629643417",
                  "status":"已作废",
                  "amountPay":500,
                  "picSrc":"http://114.255.22.47:8081/appimages/ecard/1060001001_77072.png",
                  "showStatus":0,
                  "goodsName":"签纸贺兑换电子券"
              }
          ]
      },
      "openid":"oom-W1c09azivnO8qW9tXbBxWzqY",
      "reqSource":"102",
      "msg":"成功"
  },
  details:{"sign":"b60ff4ab0ea13fa54eceb427bdfe0da91526818e255f6b47637eb5b34f926043","result":"000","queryid":"77-9312-aedd5c3e83db","token":null,"data":[{"cardNo":"60000125400003772174","goodsId":"1080002016","goodsName":"淘票票电子卡100元","expireTime":"2023-07-10","showCardNo":"7320240301018263","showCardPassword":"004749"}],"openid":"oom-W1c09azivnO8qW9tXbBxWzqY","reqSource":"102","msg":"成功"},
  iShow:false,
  isUp:false,
  sl:'上拉加载数据~',
  price:[]//初始化时，页面显示的金额，并保留两位小数
  },
  // 点击复制卡号
  fz(e){
    // console.log(e)
    var card=e.currentTarget.dataset.card;
    that.fzCom(card);
  },
  // 点击复制卡密
  fz1(e){
// console.log(e)
    var password=e.currentTarget.dataset.pas;
    that.fzCom(password);
  },
  // 复制的公共的方法
  fzCom(str){
    wx.setClipboardData({
      data: str,
      success(res){
        wx.showToast({
          title: '复制成功',
          icon:"success"
        })
      }
    })
  },
  // 点击查看卡信息，显示信息
  show(e){
    console.log(e);
    // 下标
    var index=e.currentTarget.dataset.index;
    that.data.list.data.orderList[index].isUp=true;
    that.setData({
      list:that.data.list
    })
  },
  // 点击收起
  hide(e){
    var index=e.currentTarget.dataset.index;
    that.data.list.data.orderList[index].isUp=false;
    that.setData({
      list:that.data.list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
    // 循环金额的时候，只显示最后一个，给每个金额后main加 二位小数点
    var price;
      that.data.list.data.orderList.forEach((v)=>{
        v.isUp=false;
        price=v.amountPay.toFixed(2);
        that.data.price.push(price)
      })
      that.setData({
        price:that.data.price,
        list:that.data.list
      })
      
      // console.log(price)
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
    // console.log(111)
      if(that.data.sl!="上拉加载数据~") return;
      that.data.sl=="数据加载中~";
      setTimeout(()=>{
        var obj={
          "createTime":"2019.12.17 10:27",
          "buyCount":1,
          "orderNo":"201927912629643417",
          "status":"已作废",
          "amountPay":500,
          "picSrc":"http://114.255.22.47:8081/appimages/ecard/1060001001_77072.png",
          "showStatus":0,
          "goodsName":"签纸贺兑换电子券"
      };
      that.data.price.push(obj.amountPay);
      that.data.list.data.orderList.push(obj);
      that.data.sl="我是有底线的~";
      that.setData({
        list:that.data.list,
        sl:that.data.sl,
        price:that.data.price
      })
      },1000)
      
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})