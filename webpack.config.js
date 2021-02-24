let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
};

module.exports = {
  mode,
  module: {
    rules: [
      {
        test: /\.js$/, // Everything that ends with .js
        exclude: /node_modules/, // We do not want to run the transpilation in stuff we won't need
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
  devtool: "source-map",
  devServer: {
    contentBase: './dist', // folder were our build is
  },
}