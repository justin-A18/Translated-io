/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-img': 'url("./assets/hero_img.jpg")',
			},
			fontFamily: {
				'DM-Sans': "'DM Sans', sans-serif",
			},
		},
	},
	plugins: [],
};
