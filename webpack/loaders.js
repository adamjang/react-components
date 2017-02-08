export default [
  {
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['es2015', 'react']
    }
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
    exclude: /node_modules/
  }
]