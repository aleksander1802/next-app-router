/** @type {import('next').NextConfig} */
const nextConfig = {
	// images: {
	// 	domains: ['courses-top.ru', 'cdn-bucket.hb.bizmrg.com'],
	// },
	images: {
		remotePatterns: [
			{
				hostname: 'courses-top.ru',
			},
			{
				hostname: 'cdn-bucket.hb.bizmrg.com',
			},
		],
	},
	webpack: (config, options) => {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								override: {
									removeViewBox: false,
								},
							},
						},
					],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};

module.exports = nextConfig;
