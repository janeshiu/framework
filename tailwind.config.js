/** @type {import('tailwindcss').Config} */

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
			colors: {
				primary: {
					light: withOpacity('--primary-light'),
					DEFAULT: withOpacity('--primary'),
					dark: withOpacity('--primary-dark'),
				},
				secondary: {
					light: withOpacity('--secondary-light'),
					DEFAULT: withOpacity('--secondary'),
					dark: withOpacity('--secondary-dark'),
				},
				tertiary: withOpacity('--tertiary'),
				quaternary: withOpacity('--quaternary'),

				success: {
					light: withOpacity('--success-light'),
					DEFAULT: withOpacity('--success'),
					dark: withOpacity('--success-dark'),
				},

				error: {
					light: withOpacity('--error-light'),
					DEFAULT: withOpacity('--error'),
					dark: withOpacity('--error-dark'),
				},

				helper: {
					light: withOpacity('--helper-light'),
					DEFAULT: withOpacity('--helper'),
					dark: withOpacity('--helper-dark'),
				},

				info: {
					light: withOpacity('--info-light'),
					DEFAULT: withOpacity('--info'),
					dark: withOpacity('--info-dark'),
				},

				warning: {
					light: withOpacity('--warning-light'),
					DEFAULT: withOpacity('--warning'),
					dark: withOpacity('--warning-dark'),
				},
			},
			height: {
				'input-lg': '2.5rem',
				'input-base': '2rem',
				'input-sm': '1.5rem',
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
