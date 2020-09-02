import { HTTP } from './http.js'//引入http文件中的class类
const _HTTP = new HTTP()

class IndexModel {//用class类进行封装
// 商铺列表，单个的请求接口
dataList (data) {
 return _HTTP.request({
   method: 'get',
   url: 'hzf/sales/commandBrandList?userId=4c28364422dccebc29247455a7ce0811',
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