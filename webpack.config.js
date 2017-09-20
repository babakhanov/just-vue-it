const path              = require('path')
const webpack           = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const ASSET_PATH = NODE_ENV === 'production' ? 'https://babakhanov.github.io/just-vue-it/' : '/';

module.exports = {
  context: __dirname + '/src',

  entry: './main.js',

  output: {
    path: path.resolve(__dirname, './docs'),
    publicPath: ASSET_PATH,
    filename: '[name]-[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },{
        test: /\.pug$/,
        loader: 'pug-loader'
      }, {
        test: /\.(eot|woff|woff2|ttf|svg|png|gif|jpg)$/,
        loader: 'file-loader?name=[name].[ext]'
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: false,
                minimize: NODE_ENV === 'production',
              }
            },{
              loader: 'sass-loader',
              options: {
                sourceMap: false,
                data: '$asset_path: "' + ASSET_PATH + '";',
                sourceComments: NODE_ENV !== 'production'
              }
            }
          ]
        })
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },

  devtool: '#eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.pug',
    }),
    new ExtractTextPlugin("style-[hash].css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false;

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

