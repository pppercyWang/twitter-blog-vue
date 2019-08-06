module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/css/_variable.scss";
        `
      },
    }
  },
  configureWebpack: config => {
    // config.module.rules.push({
    //   // 处理markdown文件
    //   test: /\.md$/,
    //   use: [
    //     {
    //       loader: "vue-loader"
    //     },
    //     {
    //       loader: require.resolve("./src/common/markdownLoader")
    //     }
    //   ],
    // },
    // );
  },
  runtimeCompiler: true, 
  devServer: {
    // 配置代理
    proxy: {
      '/api': {
        ws: false,  //禁用websocket
        target: 'http://127.0.0.1:8848/',
        changeOrigin: true,
      }
    },
    port:12322

  },
}
