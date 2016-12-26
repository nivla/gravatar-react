module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist/index.js',
    libraryTarget: 'umd',
    library: 'GravatarReact'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react'] }
      }
    ]
  }
}
