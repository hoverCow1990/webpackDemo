// postcss.config.js

module.exports = {
  ident: 'postcss', // 表明插件给postcss使用
  plugins: [
    require('cssnano')({
      zindex: false, // 不设false会把z-index将为1-9
      autoprefixer: false // 不设false会去除兼容前缀
    }),
    require('autoprefixer')(),
    require('postcss-cssnext')()
  ]
}
