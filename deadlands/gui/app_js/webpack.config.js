var ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require('path');

module.exports = {
	mode: 'production',
	entry: [
		path.join(__dirname, 'app.js')
	],
	output: {
		path: path.join(__dirname, '../static/js/'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'react',
							['env', {
								"module": false
							}]
						]
					}
				}
			},
			{
				test: /\.json$/,
				use: {
					loader: 'json'
				}
			}
		]
	}
}
