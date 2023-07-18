/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				redhatdisplay: ["'Red Hat Display', 'sans-serif'"],
			},
			colors: {
				'pale-blue': 'hsl(225, 100%, 94%)',
				'bright-blue': 'hsl(245, 75%, 52%)',
				'very-pale-blue': 'hsl(225, 100%, 98%)',
				'desaturated-blue': 'hsl(224, 23%, 55%)',
				'dark-blue': 'hsl(223, 47%, 23%)',
				'purple-hover': 'hsl(245, 83%, 68%)',
			},
			boxShadow: {
				cateinumshadow: '0px 20px 20px 0px rgba(56, 42, 225, 0.19)',
				noobwork: '0px 40px 40px -20px rgba(13, 48, 189, 0.15)',
			},
		},
	},
	plugins: [],
};
