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

				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				tertiary: 'var(--tertiary)',
				quaternary: 'var(--quaternary)',
			},
		},
	},
	plugins: [],
};
