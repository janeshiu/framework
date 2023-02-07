/** @type {import('tailwindcss').Config} */
const { text, fontFamily } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans TC', ...fontFamily.sans],
			},
			fontSize: {
				heading1: ['2.5rem', 1.5],
				heading2: ['2rem', 1.5],
				heading3: ['1.75rem', 1.5],
				heading4: ['1.5rem', 1.5],
			},
			opacity: {
				8: '.08',
				12: '.12',
				16: '.16',
				24: '.24',
				32: '.32',
				48: '.48',
			},
			colors: {
				gray: {
					100: withOpacity('--gray-100'),
					200: withOpacity('--gray-200'),
					300: withOpacity('--gray-300'),
					400: withOpacity('--gray-400'),
					500: withOpacity('--gray-500'),
					600: withOpacity('--gray-600'),
					700: withOpacity('--gray-700'),
					800: withOpacity('--gray-800'),
					900: withOpacity('--font-900'),
				},

				common: {
					DEFAULT: withOpacity('--font-common'),
					'primary-light': withOpacity('--font-light'),
					primary: withOpacity('--font-primary'),
					secondary: withOpacity('--font-secondary'),
					disabled: withOpacity('--font-disabled'),
				},

				bg: {
					primary: withOpacity('--bg-primary'),
					secondary: withOpacity('--bg-secondary'),
				},

				primary: {
					lighter: withOpacity('--primary-lighter'),
					light: withOpacity('--primary-light'),
					DEFAULT: withOpacity('--primary'),
					dark: withOpacity('--primary-dark'),
					darker: withOpacity('--primary-darker'),
				},

				secondary: {
					lighter: withOpacity('--secondary-lighter'),
					light: withOpacity('--secondary-light'),
					DEFAULT: withOpacity('--secondary'),
					dark: withOpacity('--secondary-dark'),
					darker: withOpacity('--secondary-darker'),
				},

				success: {
					lighter: withOpacity('--success-lighter'),
					light: withOpacity('--success-light'),
					DEFAULT: withOpacity('--success'),
					dark: withOpacity('--success-dark'),
					darker: withOpacity('--success-darker'),
				},

				error: {
					lighter: withOpacity('--error-lighter'),
					light: withOpacity('--error-light'),
					DEFAULT: withOpacity('--error'),
					dark: withOpacity('--error-dark'),
					darker: withOpacity('--error-darker'),
				},

				info: {
					lighter: withOpacity('--info-lighter'),
					light: withOpacity('--info-light'),
					DEFAULT: withOpacity('--info'),
					dark: withOpacity('--info-dark'),
					darker: withOpacity('--info-darker'),
				},

				warning: {
					lighter: withOpacity('--warning-lighter'),
					light: withOpacity('--warning-light'),
					DEFAULT: withOpacity('--warning'),
					dark: withOpacity('--warning-dark'),
					darker: withOpacity('--warning-darker'),
				},
			},
		},
	},
	variants: {
		extend: {
			backgroundOpacity: ['active'],
		},
	},
	plugins: [],
};
