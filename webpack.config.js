// *Requerimientos
const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyFile             = require("copy-webpack-plugin");


module.exports = {

  mode: 'development',
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
      }

    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    }),
    new CopyFile({
      patterns: [
        { from: 'src/assets/', to: 'assets/' }
      ]
    })
  ]

}