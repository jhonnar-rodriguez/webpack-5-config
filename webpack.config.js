const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
};

module.exports = {
  mode,
  target,
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset', // Webpack will check if the fille must generated inline (within the js file) or in a separate folder according to the max-size setting
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            }
          },
          'css-loader',
          'postcss-loader', // The order matters because it will take the vender prefixes (original code) and put them into the source map
          'sass-loader',
        ]
      },
      {
        test: /\.jsx?$/, // Everything that ends with .js
        exclude: /node_modules/, // We do not want to run the transpilation in stuff we won't need
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: "source-map",
  devServer: {
    hot: true,
    contentBase: './dist', // folder were our build is
  },
}