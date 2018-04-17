const path = require('path')

module.exports = {
  // 入口文件
  entry: {
    index: './src/index.js'
  },
  // 出口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              minimize: false // 压缩
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}
