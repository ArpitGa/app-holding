const webpack = require('webpack')
const path = require('path')
const WebpackAssetsManifest = require('webpack-assets-manifest')
const bundleHashType = 'chunkhash' // aggregate of all chunks, specific hash per chunk
const config = {
  devtool: 'inline-source-map',
  target: 'web',
  entry: {
    client: path.resolve(__dirname, 'src/clientRenderer'),
  },
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: `[name]-[${bundleHashType}].js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
           {loader: 'babel-loader'}
        ]
      }
    ]
  },
  plugins: [
    new WebpackAssetsManifest(
    {output: '../build-manifest.json'}
  ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      sourceMap: true,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    })
  ]
}

module.exports = config
