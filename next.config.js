/** @type {import('next').NextConfig} */

const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const withInterceptStdout = require('next-intercept-stdout')

const ignoreComments = ['Duplicate atom key', 'The `app` directory is experimental.']

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
	},
	(text) => (ignoreComments.some((comment) => text.includes(comment)) ? '' : text),
)

module.exports = nextConfig
