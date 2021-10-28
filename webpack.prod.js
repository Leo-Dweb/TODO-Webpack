// *Requerimientos
const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyFile             = require("copy-webpack-plugin");


// *Require
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');


module.exports = {

  mode: 'production',

  output: {
    clean: true,
    filename: 'main.[contenthash].js'
  },

  module: {
    rules: [
      // *Rules HTML
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false,
          minimize: false,
        },
        
      },
      // *Rules CSS
      {
        test: /\.css$/i,
        exclude: /style.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /style.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // * Manejo de archivos
      {
        test: /\.png|jpe?g|gif$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      // *BABEL
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }

    ]
  },


  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizer(),
      new Terser()
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      ignoreOrder: false
    }),
    new CopyFile({
      patterns: [
        { from: 'src/assets/', to: 'assets/' }
      ]
    })
  ]

}