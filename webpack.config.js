module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    library: "statscore",
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
