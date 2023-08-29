/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(ts|tsx|js|jsx)$/,
			use: [
				// NextJS에서 기본적으로 제공하는 babel-loader 설정이 기본값
				options.defaultLoaders.babel,
				{
					loader: '@linaria/webpack-loader',
					options: {
						...options,
						sourceMap: process.env.NODE_ENV !== 'production',
					},
				},
			],
			exclude: /node_modules/,
			include: /src/,
		});

		return config
	},
	experimental: {
		appDir: true
	}
};

module.exports = nextConfig;
