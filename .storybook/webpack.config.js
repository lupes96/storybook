module.exports = {
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   loader: 'babel-loader',
      //   exclude: '/node_modules/',
      //   options: {
      //     plugins: ['lodash', { id: ['lodash', 'semantic-ui-react'] }],
      //     presets: ['es2015', 'react']
      //   }
      // },
      {
        test: /\.(woff|ttf)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000000,
              name: 'images/[hash]-[name].[ext]',
              publicPath: './'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:7]',
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
