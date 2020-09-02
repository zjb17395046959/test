// 公共的URL路径
var baseUrl='http://10.6.4.154:8081/'
class HTTP {
  // 这是类中的一种方法
request(params) {
  // 调用接口的时候，显示loading加载动画
  wx.showLoading({
    title: '加载中',
  })
  // 使用promise进行接口的封装
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + params.url,//公共路径加上后传的路径
      method: params.method || 'GET',//请求的方式，默认get
      data: params.data || null,//要传入的参数，默认为空
      header: {//请求头
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: res => {//请求成功，loading隐藏，将数据导出
        wx.hideLoading({});
        resolve(res)
      },
      fail: err => {//请求失败，隐藏loading，导出
        wx.hideLoading({});
        wx.showToast({
          title: '请检查网络是否错误',
          icon:"none"
        })
        reject(err)
      }
    })
  })
}
}
export {HTTP}
// // 封装的请求方法
// var baseUrl='http://10.6.4.154:8081/'
// function http(url,method,data){
//   wx.showLoading({
//     title: '加载中'
//   })
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url:baseUrl + url,
//       method: method || 'GET',
//       data: data || null,
//       header: {
//         'content-type': 'application/json;charset=UTF-8'
//       },
//       success: res => {
//         wx.hideLoading({});
//         resolve(res)
//       },
//       fail: err => {
//         wx.hideLoading({});
//         reject(err)
//       }
//     })
//   })

// }
// // 首页
// function index(data){
//   return http('hzf/sales/commandBrandList?userId=4c28364422dccebc29247455a7ce0811','get',data)
// }
// module.exports={
//  _index:index
// }
// import { config } from './config'