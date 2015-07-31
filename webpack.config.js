var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('commWang.js');


module.exports = {
  entry: './js/app.js',
  output: {
  	path: './build',
    filename: 'bundle.js'      
  },
  module: {
  	loaders: [
  		{test: /\.js$/ , loader: 'jsx-loader?insertPragma=React.DOM&harmony'}
  	]
  }
};
