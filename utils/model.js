import { HTTP } from './http.js'//引入http文件中的class类
const _HTTP = new HTTP()

class IndexModel {//用class类进行封装
// 支付接口
zf (data) {
 return _HTTP.request({
   method: 'get',
   url: 'weChat/testpay',
   data:data
 })
}
// 商铺详情
// dataDetail (id) {
//  return _HTTP.request({
//    method: 'POST',
//    url: '/***',
//    data: {
//      id
//    }
//  })
// }
}
export {IndexModel}