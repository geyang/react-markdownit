var path = require('path')

module.exports = {
    entry: './src/examplePage.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'example.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel?'+ JSON.stringify({
				optional: ['runtime'],
				stage: 0,
				cacheDirectory: true
			})
		}]
	},
}
