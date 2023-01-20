/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				success: '#10b981',
				error: '#ef4444',
				helper: '#1e293b',

				primary: '#1e293b',
				secondary: '#475569',
				tertiary: '#94a3b8',
				quaternary: '#e2e8f0',
				white: '#ffffff',
			},
		},
	},
	plugins: [],
};
