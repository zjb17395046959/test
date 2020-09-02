//引入封装的请求接口，进行全局使用
import {IndexModel} from './utils/model';
var http=new IndexModel()
App({
  onLaunch: function () {
 
  },
  globalData: {
    http:http//全局的属性
  }
})