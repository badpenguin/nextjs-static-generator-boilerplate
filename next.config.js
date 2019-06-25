const webpack = require('webpack');

// NEXT PLUGINS
const withPlugins = require("next-compose-plugins");
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
//const withPreact = require('@zeit/next-preact');
//const withImages = require('next-images');
//const withOptimizedImages = require('next-optimized-images');

// UTILS
const {join} = require('path');
const recursiveCopy = require('recursive-copy');

// WEB PACK PLUGINS
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = withPlugins(
	[
		//withPreact, //-> https://github.com/zeit/next.js/issues/7231
		withTypescript,
		withSass,
		//withImages,
		//withOptimizedImages
	],
	{

		cssModules: false,
		distDir: '../build',

		//inlineImageLimit: 16384,

		exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
			if (dev) {
				return defaultPathMap
			}
			// This will copy robots.txt from your project root into the out directory
			await recursiveCopy(join(dir, 'htdocs/'), outDir, {dot: true, overwrite: true});
			return defaultPathMap
		},

		webpack: (config, {dev, isServer}) => {

			if (isServer || dev) {
				console.log('- webpack running in DEV mode');
				return config;
			}

			// Source Map in production
			/*if (!dev) {
				config.devtool = 'source-map';
			}*/

			var isProduction = config.mode === 'production';
			var isClient = config.name === 'client';

			//console.log('isProd/isClient', isProduction, isClient);

			config.plugins.push(
				new webpack.DefinePlugin({
					PRODUCTION: JSON.stringify(isProduction)
				})
			);

			if (!isProduction) {
				return config;
			}

			config.plugins.push(
				new CleanWebpackPlugin(['build', 'dist'])
			);

			config.plugins.push(
				new webpack.optimize.LimitChunkCountPlugin({
					maxChunks: 1,
				})
			);

			config.optimization.minimizer.push(
				new OptimizeCSSAssetsPlugin({})
			);

			config.plugins.push(
				new BrotliPlugin({
					asset: '[path].br[query]',
					test: /\.(js|css|html|svg)$/,
					threshold: 10240,
					minRatio: 0.8
				})
			);

			return config
		}
	}
);
