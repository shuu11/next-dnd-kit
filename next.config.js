/** @type {import('next').NextConfig} */

const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const withInterceptStdout = require('next-intercept-stdout')
const urlPrefix = '.'

const nextConfig = withInterceptStdout(
	{
		reactStrictMode: true,
		swcMinify: true,

		// windicss
		webpack: (config) => {
			config.plugins.push(new WindiCSSWebpackPlugin())
			return config
		},

		trailingSlash: true,
		// basePath: urlPrefix,
		// assetPrefix: urlPrefix,
		// publicRuntimeConfig: { urlPrefix },

		// next13～
		// experimental: {
		// 	appDir: true,
		// },
	},
	// recoil使用時のエラーメッセージ回避
	(text) => (text.includes('Duplicate atom key') ? '' : text),
)

module.exports = nextConfig
