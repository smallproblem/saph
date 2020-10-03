const webpack = require('webpack');
module.exports = {
    mode : 'development',
    entry : './static/js/index.js',
    output: {
      publicPath: 'http://localhost:8080/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {}
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
        {
          test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
          use: [{
              loader: 'url-loader',
              options: {
                  limit: 100000
              }
          }]
      },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery"
     })
    ],
    resolve:{  
      alias :{
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {  
      headers: {
          'Access-Control-Allow-Origin': '*', 
      },
    }
  }