/*
 * @Descripttion:
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './': '/',
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true, //关键点在这
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    // proxy: {
    //     '/api': {
    //         // target: 'http://192.168.1.161:8088',
    //         target: 'http://49.233.174.102:81/school-fast/ajax/',
    //         ws: true,//是否代理websockets
    //         changeOrigin: true   // 设置同源  默认false，是否需要改变原始主机头为目标URL
    //     }
    // }
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // proxy: {
    //   '/api': {
    //     // target: 'http://49.233.174.102:81',
    //     target: 'http://49.233.174.102:8088/school-fast/uajax',
    //     // target: 'http://192.168.1.156:8088',
    //     // target:'http://192.168.1.161:8088', // 你请求的第三方接口
    //     // target:'http://49.233.174.102:81', // 你请求的第三方接口
    //     changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
    //     pathRewrite:{  // 路径重写，
    //       '^/api': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
    //     }
    //   }
    // },
    proxy: null, // string | Object
    before: app => {}
  }
}
