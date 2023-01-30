/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				success: 'var(--success)',
				error: 'var(--error)',
				helper: 'var(--helper)',
				info: 'var(--info)',
				warning: 'var(--warning)',

				primary: {
					light: 'var(--primary-light)',
					DEFAULT: 'var(--primary)',
					dark: 'var(--primary-dark)',
				},
				secondary: {
					light: 'var(--secondary-light)',
					DEFAULT: 'var(--secondary)',
					dark: 'var(--secondary-dark)',
				},
				tertiary: 'var(--tertiary)',
				quaternary: 'var(--quaternary)',
			},
		},
	},
	plugins: [],
};
