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
      ],
    },
    resolve:{  
      alias :{
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {  
      headers: {
          'Access-Control-Allow-Origin': '*', 
      }
    }
  }