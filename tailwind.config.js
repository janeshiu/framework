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
				success: withOpacity('--success'),
				error: withOpacity('--error'),
				helper: withOpacity('--helper'),
				info: withOpacity('--info'),
				warning: withOpacity('--warning'),

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
