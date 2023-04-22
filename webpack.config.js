const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/pages/index.js',
    output: {
       
        filename: 'bundel.[contenthash].js',
        path: path.join(__dirname, 'build'),
        clean: true,
    }, 

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin(),
      ],

    devServer: {
        static: {
          directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 9000,
        open:true,
      },
      module: {
        rules: [                      

          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: 'defaults' }]
                ]
              }
            }
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 
            {
              loader: "css-loader",
            options: {
              importLoaders: 0,
             },
          },
           'postcss-loader' ],
          },
          {
            test: /\.(png|jpg|gif|svg)/,
            type: 'asset/resource',
            generator: {
            filename: 'images/[name].[ext]',
            }
          },
        ]
      }
};