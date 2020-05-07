module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './': '/',
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true,
  chainWebpack: () => {},
  configureWebpack: () => {},
  devServer: {
    proxy: null
  }
}