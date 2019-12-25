const CompressionWebpackPlugin = require('compression-webpack-plugin') //gzip压缩
const productionGzipExtensions = ['js', 'css']
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
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
  configureWebpack: {
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true, //生产环境自动删除console
          },
          warnings: false,
        },
        sourceMap: false,
        parallel: true, //使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
      }),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
    ]
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },
  productionSourceMap: false,
  devServer: {
    // 配置代理
    proxy: {
      '/api': {
        ws: false, //禁用websocket
        target: 'http://localhost:8848/',
        changeOrigin: true,
      }
    },
    port: 12322,
    disableHostCheck: true,
  },
}