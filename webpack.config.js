'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/static/js/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/images/[name][ext]',
	},
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		port: 9090,
		hot: true,
		compress: false,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({ 
			filename: 'index.html',
			template: './src/index.html',
			chunks: ['main'],
		}),
		new HtmlWebpackPlugin({ 
			filename: 'detail.html',
			template: './src/detail.html',
			chunks: ['main'],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(scss|sass|css)$/,
				use: [
					{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: 'style-loader'
					},
					{
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: 'css-loader'
					},
					{
						// Loader for webpack to process CSS with PostCSS
						loader: 'postcss-loader',
						options: {
						postcssOptions: {
							plugins: () => [
								autoprefixer
							]
						}
						}
					},
					{
						// Loads a SASS/SCSS file and compiles it to CSS
						loader: 'sass-loader'
					}
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
		],
  	},
}