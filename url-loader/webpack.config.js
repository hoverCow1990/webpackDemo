const path = require('path')

module.exports = {
  // 入口文件
  entry: {
    index: './src/index.js'
  },
  // 出口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].js',
    publicPath: './' // 引入的路径
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
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 50000, // 50kb以内转换成base64
            publicPath: './dist', // 引入的路径
            name: 'assets/img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000, // 1kb以内转换成base64
            publicPath: './dist/assets/font/', // 引入的路径
            outputPath: 'assets/font', // 导出的指定路径
            name: '[name].[hash:8].[ext]' // 文件名
          }
        }]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // 10kb以内转换成base64
          publicPath: './dist/assets/music/', // 引入的路径
          outputPath: 'assets/music', // 导出的指定路径
          name: '[name].[hash:8].[ext]' // 文件名
        }
      }
    ]
  }
}

// 单页面简易应用

// {
//   output: {
//     path: path.resolve(__dirname, 'dist', ENV),
//     filename: 'assets/js/[name].js',
//     publicPath: '/' // 引入的路径
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//         use: [{
//           loader: 'url-loader',
//           options: {
//             limit: 50000,
//             name: 'assets/img/[name].[hash:8].[ext]'
//           }
//         }]
//       },
//       {
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//         use: [{
//           loader: 'url-loader',
//           options: {
//             limit: 1000,
//             name: 'assets/font/[name].[hash:8].[ext]' // 文件名
//           }
//         }]
//       },
//       {
//         test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: 'assets/music/[name].[hash:8].[ext]' // 文件名
//         }
//       }
//     ]
//   }
// }
