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
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Everything that ends with .js
        exclude: /node_modules/, // We do not want to run the transpilation in stuff we won't need
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', // The order matters because it will take the vender prefixes (original code) and put them into the source map
          'sass-loader',
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
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