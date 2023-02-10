const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			/**
			 * Fix Storybook issue with PostCSS@8
			 * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
			 */
			name: '@storybook/addon-postcss',
			options: {
				cssLoaderOptions: {
					// When you have splitted your css over multiple files
					// and use @import('./other-styles.css')
					importLoaders: 1,
				},
				postcssLoaderOptions: {
					// When using postCSS 8
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: async (config, { configType }) => {
		config.resolve.extensions.push('.ts', '.tsx');

		/**
		 * Add support for alias-imports
		 * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
		 */
		config.resolve.alias = {
			...config.resolve?.alias,
			'@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
		};

		/**
		 * Fixes font import with /
		 * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
		 */
		config.resolve.roots = [
			path.resolve(__dirname, '../public'),
			'node_modules',
		];

		// SASS + Tailwdind CSS
		config.module.rules.push({
			test: /\.s(a|c)ss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1, // We always need to apply postcss-loader before css-loader
						modules: {
							auto: /\.module\.scss$/, // true
							localIdentName: '[name]__[local]--[hash:base64:5]',
						},
					},
				},
				{
					loader: 'postcss-loader', // required for tailwind
					options: {
						implementation: require('postcss'), // postcss 8
						postcssOptions: {
							config: path.resolve(__dirname, '../postcss.config.js'),
						},
					},
				},
				{
					loader: 'sass-loader',
					options: {
						// sourceMap: true,
						implementation: require('sass'), // dart sass
					},
				},
			],
		});

		return config;
	},
};
