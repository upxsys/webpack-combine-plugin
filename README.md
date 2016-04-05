# webpack-combine-plugin
Combine multiple assets into a single asset

## Usage
    
    // webpack.config.js
    var webpackCombinePlugin = require('webpack-combine-plugin');

    module.exports = {
      entry: { ... },
      ...
      plugins: [
           new webpackCombinePlugin({
               file: 'editor/client.js',
               assets: [
                   'common.js',
                   'editor/client.js'
               ]
           })
      ]
    }
