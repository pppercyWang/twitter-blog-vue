module.exports = {
  css: {
    loaderOptions: {
      css: {},
    }
  },
  configureWebpack: config => {
  },
  devServer: {
    // 配置代理
    proxy: {
      '/api': {
        ws: false,  //禁用websocket
        target: 'http://127.0.0.1:8848/',
        changeOrigin: true,
      }
    }
  },
}
