module.exports = {
  configureWebpack: {
    devServer: {
      contentBase: './', // 项目基本访问目录
      port: 8088, // 端口
      hot: true, // 模块热替换
      hotOnly: true // 只有热更新不会刷新页面
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/global-prepend.scss";'
      }
    }
  }
}
