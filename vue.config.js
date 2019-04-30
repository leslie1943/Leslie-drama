// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)

// 基础路径 注意发布之前要先修改这里
let baseUrl = '/'
module.exports = {
  baseUrl: baseUrl, // 根据你的实际情况更改这里
  lintOnSave: true,
  devServer: {
    port: 1943,
    publicPath: baseUrl, // 和 baseUrl 保持一致
    proxy: {
      '/api': {
        target: 'http://localhost:7001/api',  //目标接口域名, EGG server
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '' // 重写接口,如果没有这行代码,请求变为: http://localhost:2714/api/api/
        }
      }
    },
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置..
      console.info('I am in production')
    } else {
      // 为开发环境修改配置..
      console.info('I am in development')
    }
  },

  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: config => {
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve.symlinks(true)

    // config.module.rule 🚀🚀🚀 添加一个module 🚀🚀🚀

    // markdown
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end()
    // i18n
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
    // svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .include
      .add(resolve('src/assets/svg-icons/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'd2-[name]'
      })
      .end()
    // image exclude
    const imagesRule = config.module.rule('images')
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude
      .add(resolve('src/assets/svg-icons/icons'))
      .end()
    // 重新设置 alias
    config.resolve.alias
      .set('@', resolve('src'))
    // babel-polyfill 加入 entry
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
  }
}
