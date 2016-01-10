module.exports = {
  entry: './index.js',
  output: {
    filename: 'dist/index.min.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {presets: ['es2015', 'react']}}
    ]
  }
}
