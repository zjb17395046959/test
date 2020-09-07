//index.js
//获取app.js中的全局属性，可以直接写属性中的方法
const app = getApp(). globalData.http;
var that,timer;
Page({
  data: {
    list:{"sign":"2fc889a03129e192cd7e8b6ea5d1eae8b7f2f66bcc4473a0fea0b016dafbd8ee","result":"000","queryid":"15-aa96-583c68d36fa7","token":"1118242cd36b44719189f6297eb9a63bpps4mapv","data":{"brandList":[{"goodsList":[{"oldPrice":100.00,"goodsId":"1080000625","newPrice":"98.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190419/13391158483.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":200.00,"goodsId":"1080002013","newPrice":"196.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190419/19327368690.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":500.00,"goodsId":"1080002081","newPrice":"490.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20200324/72104076225.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":1000.00,"goodsId":"1080002082","newPrice":"980.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20200324/17417265856.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000}],"brand_id":30,"src":"http://api.zihexin.net/appimages/brand/20190419/70203649255.png","order_by":2,"brand_name":"盒马鲜生","brandRebate":98.00000},{"goodsList":[{"oldPrice":100.00,"goodsId":"1080002033","newPrice":"99.50","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190322/23168177060.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":99.50000},{"oldPrice":200.00,"goodsId":"1080002034","newPrice":"199.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190322/23168177060.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":99.50000},{"oldPrice":500.00,"goodsId":"1080001722","newPrice":"497.50","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190618/56839365220.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":99.50000},{"oldPrice":1000.00,"goodsId":"1080001723","newPrice":"995.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190618/98225883728.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":99.50000}],"brand_id":2,"src":"http://api.zihexin.net/appimages/brand/20190419/10113600746.png","order_by":10,"brand_name":"京东","brandRebate":99.50000},{"goodsList":[{"oldPrice":200.00,"goodsId":"1080000639","newPrice":"200.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20191028/77766775217.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":100.00000}],"brand_id":37,"src":"http://api.zihexin.net/appimages/brand/20190419/07892083061.png","order_by":12,"brand_name":"美团","brandRebate":100.00000},{"goodsList":[{"oldPrice":10.00,"goodsId":"1080001300","newPrice":"9.80","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20181017/93320609209.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":200.00,"goodsId":"1080001303","newPrice":"196.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190419/40187522793.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":500.00,"goodsId":"1080001304","newPrice":"490.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190419/15643011045.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000}],"brand_id":43,"src":"http://api.zihexin.net/appimages/brand/20190419/21505959377.png","order_by":14,"brand_name":"饿了么星选","brandRebate":98.00000},{"goodsList":[{"oldPrice":100.00,"goodsId":"1080000688","newPrice":"98.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190701/16148698904.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":200.00,"goodsId":"1080000689","newPrice":"196.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190701/38041165777.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":500.00,"goodsId":"1080002000","newPrice":"490.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190701/22909752514.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":1000.00,"goodsId":"1080001312","newPrice":"980.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190419/81616855984.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000}],"brand_id":28,"src":"http://api.zihexin.net/appimages/brand/20190419/80233539818.png","order_by":18,"brand_name":"天猫超市","brandRebate":98.00000},{"goodsList":[{"oldPrice":100.00,"goodsId":"1080001313","newPrice":"98.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190419/12235154921.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":200.00,"goodsId":"1080001315","newPrice":"196.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190419/43227512214.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":500.00,"goodsId":"1080001316","newPrice":"490.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190419/17064932777.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":1000.00,"goodsId":"1080001314","newPrice":"980.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190419/27498471558.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000}],"brand_id":29,"src":"http://api.zihexin.net/appimages/brand/20190419/63050307514.png","order_by":19,"brand_name":"网易严选","brandRebate":98.00000},{"goodsList":[{"oldPrice":50.00,"goodsId":"1080002106","newPrice":"49.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20200512/87732238984.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":100.00,"goodsId":"1080002002","newPrice":"98.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190419/71633630151.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000},{"oldPrice":200.00,"goodsId":"1080002001","newPrice":"196.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190419/69962751469.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":98.00000}],"brand_id":32,"src":"http://api.zihexin.net/appimages/brand/20190419/37192337721.png","order_by":23,"brand_name":"每日优鲜","brandRebate":98.00000},{"goodsList":[{"oldPrice":10.00,"goodsId":"1080002003","newPrice":"9.70","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190422/07176004379.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":97.00000},{"oldPrice":200.00,"goodsId":"1080000182","newPrice":"194.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190422/33249130935.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":97.00000},{"oldPrice":500.00,"goodsId":"1080000183","newPrice":"485.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190422/22186154481.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":97.00000},{"oldPrice":1000.00,"goodsId":"1080000184","newPrice":"970.00","limitNum":5,"picSrc":"http://api.zihexin.net/appimages/activitypics/20190422/85134543979.png","openId":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","brandRebate":97.00000}],"brand_id":35,"src":"http://api.zihexin.net/appimages/brand/20190419/16978219917.png","order_by":35,"brand_name":"滴滴快车","brandRebate":97.00000}],"shareText":{"content":"强推盒马、每日优鲜、美团、京东、天猫超市在线买菜送到家！","title":"在线，资和信教你在家省钱买菜！","pic":"http://api.zihexin.net/appimages/ad/20191106/21364833530.png"}},"openid":"ouEZdwcCyBytgSFzaVeVOc_eIIR0","reqSource":"102","msg":"成功"},
    pid:30,//根据左侧的数据点击每个的id判断
    obj:{brand_id:1,brand_name:"更多服务",color:'#FD404A'},
    arr:[],//右侧的数据
    num:0 ,//这是右侧的面值
    oldPrice:'',//原价
    newPrice:'',//优惠后的价钱（打折后）
    number:1,//默认购买卡张数为1
    limitNum:'',//最大的购买张数
    add:'',//合计金额
    youHui:'',//底部优惠
    isShow:false,//底部去付款是否显示
    arr1:[],//购卡面值的数组
    he:"",//动态的添加中间内容的高度
    bg:[],//左侧的右上角打折的背景色
    isGray:false,//  //是否显示秒数
    yan:'输入验证码',
    isTan:false,//是否显示弹框
    telVal:'',//手机号值
    yanVal:'',//验证码的值
    miao:'',//获取验证码的秒数
    isClick:false,
    code:''//用户登录的code
  },
  // 点击弹框的x按钮，关闭弹框
  close(){
    // 清除定时器，并将小程序中的缓存就是用户第一次输入的手机号进行清楚
    clearInterval(timer);
    // console.log(that.data.yan)
    that.setData({
      isTan:false,
      isGray:false,
      telVal:''
    })
  },
  // 点击去付款，显示提示框
  goPay(){
    // if(!that.data.list.token){
      // that.setData({
      //   isTan:true
      // })
    // }else{
    //   wx.showToast({
    //     title: '有token值',
    //   })
    // }
    // wx.login({
    //   success(res){//获取code
    //     console.log(res);
        wx.request({
          url: 'http://10.6.4.154:8081/weChat/testpay',
          data:{
            code:that.data.code,
            amount:that.data.add
          },
          success(res1){
            console.log(res1);
             wx.requestPayment({
                nonceStr: res1.data.wc_pay_data.nonceStr,
                package:  res1.data.wc_pay_data.package,
                paySign:  res1.data.wc_pay_data.paySign,
                timeStamp: res1.data.wc_pay_data.timeStamp,
                signType:  res1.data.wc_pay_data.signType,
                success(res){
                  console.log(res.errMsg);
                },fail(msg){
                  console.log(msg.errMsg);
                }
              })
          },fail(msg){
            console.log(msg);
            wx.showToast({
              title: '网络错误',
              icon:"none"
            })
          }
        })
    //   }
    // })
    // var arr={"returnCode":"SUCCESS","returnMsg":"成功","merchantId":"851110153110010","signMsg":"MIIHxgYJKoZIhvcNAQcCoIIHtzCCB7MCAQExDzANBglghkgBZQMEAgMFADCCAikGCSqGSIb3DQEHAaCCAhoEggIWeyJhcHBJZCI6Ind4NDMxNTM0ZDg5ZWFmNGEzOSIsInRpbWVTdGFtcCI6IjE1OTkyMDc5MjYiLCJub25jZVN0ciI6IjVjY2U5OWY5YzJjMDQzNDdhZTgxYTYwOTlkOTRkYjJiIiwicGFja2FnZSI6InByZXBheV9pZD13eDA0MTYyNTI1OTk5ODU1OWM5MmIzY2E1Yzk3NTY5MTAwMDAiLCJzaWduVHlwZSI6IlJTQSIsInBheVNpZ24iOiJWbmdoUGxZTnRqaDhndm8xV2hJOGJyOXVCa1J2alRaQk5DaXdrejl0S2pMaFV5S1c2aU9LZXRFc0VsTnkzL3RJVVNpOVpTQitiNUZxOTNGL082S1pkMnRpM05PYWxXM3FBUHZMbElodGllZFRwWU13NmxNRHBHR0hvTXJqU1JnR0tpOUxuUlFuUGZjb3dFZTBqQ1I3L3RqU0xtWnBDQ3daK2NzNHh3RTBDWVA2Wk9SVnFXWG8xMVVJKytzOTc2RDFYZHZ0VGNoa055OGRDOWZXZTVlcFFtRUs1S1h6aC9vTTMvNExOWWxxVXRudHFJOFRVeDdZNGVHVnJnaFV4YS9MZ2c3R3YycDJDUUd0QzNYMkFqS3dBOHNrTmJDQWdqamp2b2dka2VQMUowWVFuemJzcUZITm80bjljWkw3ZHcrNDRzVTlxVTE5T1Y1alRlcGN0WUJqM3c9PSJ9oIID3jCCA9owggLCoAMCAQICBRA0EGlHMA0GCSqGSIb3DQEBBQUAMFgxCzAJBgNVBAYTAkNOMTAwLgYDVQQKEydDaGluYSBGaW5hbmNpYWwgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFzAVBgNVBAMTDkNGQ0EgVEVTVCBPQ0ExMB4XDTE4MDkyMDAyMTgxOVoXDTIxMDkyMDAyMTgxOVowdzELMAkGA1UEBhMCQ04xFTATBgNVBAoTDENGQ0EgVEVTVCBDQTERMA8GA1UECxMITG9jYWwgUkExFTATBgNVBAsTDEluZGl2aWR1YWwtMTEnMCUGA1UEAxQeMDUxQHpoeHRlc3RfMDAxQFp6aHh0ZXN0XzAwMUAxMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1hCBZW06o2JL8ZsdYw69ZYJAHYoc/vMtZmU0vqjM1gBcQdSDxm1ifL76NKze6/MHyZ6P1goZyg86uXMRLXffs/pUUf9tEoTD/hQroJH/5ymnqaCqiYOkHKZeaR+e9M5iHFojFNEO2fag27fK6huE+7yM5n3c+zH17LYQkmu6/sqsQIaYfNcR5hoLcTNxd1OF/i3DrjWfTb8mPcxurB05jfWQtoPwJWc/1ErUuI43QoGR2/vaBVs0c5OUut6Y1vepgB1stU8YWvVUBuXPXkYBCdBB1fgd1dP1ma4KglIPkmHNx71VrCBKPI1Pji8Nk6ZW+oXIXp7s7QLgfNuPK7i+6QIDAQABo4GLMIGIMB8GA1UdIwQYMBaAFM9wnWHrnXwuuPfLAkD3CZ3+M3SAMDkGA1UdHwQyMDAwLqAsoCqGKGh0dHA6Ly91Y3JsLmNmY2EuY29tLmNuL1JTQS9jcmw2NTc0MC5jcmwwCwYDVR0PBAQDAgbAMB0GA1UdDgQWBBSBB04cex3rHJLX2Y4gWzb4mKxDUzANBgkqhkiG9w0BAQUFAAOCAQEADl3dWd6Csi7v3lLFiolbS58rf7PgGARsKLt/mY86fD9HH3tKOLjR2DWm939qykOx8taRHpdOKlizQm3p9FTgkor8D8EA71Lvfw7EClY96VRUkHOzCM5EvmDGS/aD8/uOchUewxGSqi5IVgSFxwRZzSELIVfJ8D6nwWiW8U96uOB6NeD8ikEGgTa4v+zlJ4Xl2SrNkwSY4JKbAkj/+HcMhDouS35oO04alraVX6pZAiM8dRP1UNw+OvY4PcXyazGPtPj31mWzmU5yHUqwo/PPspBjyswUD39XMQqfhZKkOhoEA6Lc1a5nq2iHxgbbdoFLYJ9+8mHq2wfTTvlGx5ubdDGCAYwwggGIAgEBMGEwWDELMAkGA1UEBhMCQ04xMDAuBgNVBAoTJ0NoaW5hIEZpbmFuY2lhbCBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEXMBUGA1UEAxMOQ0ZDQSBURVNUIE9DQTECBRA0EGlHMA0GCWCGSAFlAwQCAwUAMA0GCSqGSIb3DQEBAQUABIIBAEGMATK6qO8RmGrUI/mRtu5OlvEkDeD3yRLT6D6MzSbY5/zlOqIvhlZFRdexwWGl6mePm3ojZkVkm9JilicmmwGeTmBhO40Pv0RR3MHbjgeY0felWbOqm30r6JH93vMyjBJr6ySznb/eh8dMyQjI1AZPzdtWq52l7sP4zLK3owNjffYa1HgCz3vkMAp9YgjSQ0i0CMLVu6GHR8bMlv7kvJcFvXgARxi06AYMYOFBHHq+lwuxgRMz05XAKMuBEbFj1L1x8uCb+UPpk3HjSPQUvLErMR3uRVWuSuGaGHXvqZmgcIObTQViPboaTXe07kIPm3duu/Z4GD/3araujdgnjTU=","wc_pay_data":{"appId":"wx431534d89eaf4a39","timeStamp":"1599207926","nonceStr":"5cce99f9c2c04347ae81a6099d94db2b","package":"prepay_id=wx041625259998559c92b3ca5c9756910000","signType":"RSA","paySign":"VnghPlYNtjh8gvo1WhI8br9uBkRvjTZBNCiwkz9tKjLhUyKW6iOKetEsElNy3/tIUSi9ZSB+b5Fq93F/O6KZd2ti3NOalW3qAPvLlIhtiedTpYMw6lMDpGGHoMrjSRgGKi9LnRQnPfcowEe0jCR7/tjSLmZpCCwZ+cs4xwE0CYP6ZORVqWXo11UI++s976D1XdvtTchkNy8dC9fWe5epQmEK5KXzh/oM3/4LNYlqUtntqI8TUx7Y4eGVrghUxa/Lgg7Gv2p2CQGtC3X2AjKwA8skNbCAgjjjvogdkeP1J0YQnzbsqFHNo4n9cZL7dw+44sU9qU19OV5jTepctYBj3w=="}}
   
    // wx.requestPayment({
    //   nonceStr: arr.wc_pay_data.nonceStr,
    //   package: arr.wc_pay_data.package,
    //   paySign: arr.wc_pay_data.paySign,
    //   timeStamp:arr.wc_pay_data.timeStamp,
    //   signType: arr.wc_pay_data.signType,
    //   success(res){
    //     console.log(res);
    //   },fail(msg){
    //     console.log(msg);
    //   }
    // })
      
  },
  // aa(e){
  //   console.log(e);
  //   // wx.login({
  //   //   success(res){
  //   //     console.log(res);
  //   //   }
  //   // })
   
  // },
  // 点击提交并支付
  submit(){
    var testTel=/^1[3456789]\d{9}$/;
    if(testTel.test(that.data.telVal)&&that.data.yanVal){
      wx.showToast({
        title: '成功',
      })
      that.setData({
        isTan:false
      })
    }else{
      wx.showToast({
        title: '格式错误',
        icon:'none'
      })
    }
  },
  // 获取用户输入的手机号的值
  getTel(e){
    that.data.telVal=e.detail.value;
  },
  // 获取用户输入的验证码的值
  yanValue(e){
    that.data.yanVal=e.detail.value
  },

  // 点击验证码，检测手机号
  yan(){
    // //禁止多次点击
    // that.setData({
    //   isClick:true
    // })
    // if (that.data.isClick) {
    //   that.setData({
    //     isClick:false
    //   })
    //     setTimeout(function () {
    //       that.setData({
    //         isClick:true
    //       })
    //     }, 500);//一秒内不能重复点击
    // }else{
    //   return;
    // }
    var testTel=/^1[3456789]\d{9}$/;
    if(testTel.test(that.data.telVal)){
      var s=60;
       timer=setInterval(() => {
        s--;
        that.setData({
          miao:s,
          isGray:true
        })
        if(s<=0){
          clearInterval(timer);
          that.setData({
            isGray:false
          })
        }
        console.log(s)
      }, 1000);
      
    }else{
      wx.showToast({
        title: '手机号错误',
        icon:"none"
      })
    }
  },
 async onLoad(){
    that=this;
    // var res=await app.dataList();
    // 将json的字符串类型转换为对象类型
    // var obj=JSON.parse(res.data.data)
    // console.log(obj)
  // 获取设备的（手机）的宽高
    wx.getSystemInfo({
      success:function (res) {
        // console.log(res.windowHeight) // 获取可使用窗口高度
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
        // console.log(windowHeight) //最后获得转化后得rpx单位的窗口高度
        var he=windowHeight-132-10-110;
        that.setData({
          he:he+'rpx'
        })
      }
    });
    that.Initialization(that.data.pid);//初始化右侧显示默认页面
    that.login();//默认登录
  },
  login(){
    wx.login({
      success(res){//获取code
        console.log(res);
        that.data.code=res.code;
      }
    })
  },
  onReady(){
    // 页面加载完之后，将左侧的列表背景色动态的渲染
   var bg=['#FD404A','#FD40BB','','#9940FC','#405DFD','#40D0FD','#FDBA40','#FD7040'];
    that.data.list.data.brandList.forEach((v,i)=>{
      v.color=bg[i]
    })
   that.setData({
    list:that.data.list
   })
  },
  // 点击如何使用，跳转页面
  use(){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })

  },
  // 点击加号
  jia(){
    that.data.number++;
    if(that.data.number>=that.data.limitNum){
      that.setData({
        number:that.data.limitNum
      })
    }
    that.numCom(that.data.number);
  },
  // 点击减号
  jian(){
    that.data.number--;
    if(that.data.number<=1){
      that.setData({
        number:1
      })
    }
    that.numCom(that.data.number);
  },
  //加、减的时候的公共的数据
  numCom(k){
    // 合计
    var num=((k*parseFloat(that.data.newPrice)*1000)/1000).toFixed(2);
    // 优惠
    var youHui=((((parseFloat(that.data.oldPrice*1000)-parseFloat(that.data.newPrice*1000))/1000))*k).toFixed(2);
    // console.log(youHui)
    that.setData({
      number:k,
      youHui:youHui,
      add:num
    })
  },
  // 点击选择充值面额
  recharge(e){
    //获取当前点击的下标
    let index=e.currentTarget.dataset.index;
    //获取当前点击的数据
    let con=e.currentTarget.dataset.content;
    // console.log(con)
    // that.youHui();
    var youHui=(parseInt(con.oldPrice*1000)-parseInt(con.newPrice*1000))/1000;
    that.setData({
      num:index,
      oldPrice:con.oldPrice,
      newPrice:parseFloat(con.newPrice),
      limitNum:con.limitNum,
      number:1,
      youHui:youHui,
      add:con.newPrice
    })
  },
  // 点击左侧列表，切换右侧数据
  toggle(e){
    // 获取ID动态的切换样式和数据的筛选
    let id=e.currentTarget.dataset.id;
    // 通过ID筛选右侧的数据,调用下面的公共的方法
    that.Initialization(id);
    that.onLoad()
    // 点击更多服务
    that.moreFu(id)
  },
  // 页面初始化的时候，显示盒马鲜生的数据
  Initialization(k){
      // 通过ID筛选右侧的数据
    const rightList= that.data.list.data.brandList.filter((v)=>{
      return v.brand_id==k;
    });
    var  oldPrice, newPrice,limitNum,youHui;
       // 点击的时候，获取当前第一个数组中的数据
    rightList.forEach((v)=>{
       oldPrice=v.goodsList[0].oldPrice;
       newPrice=v.goodsList[0].newPrice;
       limitNum=v.goodsList[0].limitNum;   
   })
   //点击左侧的时候，显示第一个优惠金额
   youHui=((parseFloat(oldPrice*1000)-parseFloat(newPrice*1000))/1000).toFixed(2);
   that.setData({
    pid:k,
    arr:rightList,
    oldPrice:oldPrice,
    newPrice:parseFloat(newPrice),
    limitNum:limitNum,
    number:1,
    num:0,
    add:newPrice,
    youHui:youHui,
    isShow:false
  });
  },
  // 点击更多服务的时候，右侧显示数据,控制台回报黄色警告，可以将点击更多的方法单独的写出来，就不会了
  moreFu(kid){
    if(kid==1){
      that.setData({
        arr:[],
        isShow:true,
        he:'100%'
      })
    }
  },
  // 点击联系客服，跳转页面
  kf(){
    wx.navigateTo({
      url: '/pages/kf/kf',
    })
  },
  // 点击关于我们
  aboutUs(){
    wx.navigateTo({
      url: '/pages/conus/conus',
    })
  },
  //点击我的订单，跳转页面
  myOrder(){
    // if(){
    //   wx.showToast({
    //     title: '您还没有订单，快去挑选卡片吧',
    //     icon:'none'
    //   })
    // }else{

    // }
    wx.navigateTo({
      url: '/pages/myOrder/myOrder'
    })
  }
})
