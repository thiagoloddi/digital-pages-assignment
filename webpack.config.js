const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

const env = process.env.NODE_ENV || "local";

module.exports = {
	entry: {
		app: [
			"@babel/polyfill",
			path.resolve(__dirname, "app/index.js")
		]
	},
	mode: "production",
	output: {
		path: path.resolve(__dirname, "public/build"),
		filename: "[name].bundle.js",
		chunkFilename: "[name].chunk.js",
		publicPath: "/build/"
	},
	module: {
		rules: [
			{
				test: /\.js(x)?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader"
				} 
			}
		]
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'local', 
			BASE_URL: 'http://localhost:8081'
		}),
		new CompressionPlugin(),
		new BundleAnalyzerPlugin()
	],
	optimization:{
		minimizer: [
			new TerserPlugin()
		]
	},
	watch: env == "local",
	resolve: {
		extensions: ['.js', '.jsx']
	}
};