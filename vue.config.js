const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/vue-admin'
  : '/'
module.exports = {
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('/src/components'))
      .set('@assets', resolve('/src/assets'))
  },
  devServer: {
    proxy: 'http://localhost:4000'
  },
  productionSourceMap: false
}
