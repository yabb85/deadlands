var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'app.js'),
	output: {
		path: path.join(__dirname, '../static/js/'),
		filename: 'app.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['react', 'es2015'],
					comments: false
				}
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
	}
}
