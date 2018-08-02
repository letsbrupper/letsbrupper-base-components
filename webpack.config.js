const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs');
const path = require('path');

const htmlWebPackPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = {
  // output: {
  //   path: path.join(__dirname, './dist'),
  //   filename: 'letsbrupperBaseComponents.js',
  //   library: "letsbrupperBaseComponents",
  //   libraryTarget: 'umd',
  //   publicPath: '/dist/',
  //   umdNamedDefine: true
  // },
  entry: path.join(__dirname, "examples/src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    htmlWebPackPlugin,
    miniCssExtractPlugin
  ],
  devServer: {
    port: 3001
  }
};
