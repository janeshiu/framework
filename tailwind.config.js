/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				success: '#10b981',
				error: '#ef4444',
				helper: '#1e293b',

				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				tertiary: 'var(--tertiary)',
				quaternary: 'var(--quaternary)',
			},
		},
	},
	plugins: [],
};
