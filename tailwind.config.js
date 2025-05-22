/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#fcecec',
				backgroundGradient: 'radial-gradient(circle, rgba(252, 236, 236, 1) 4%, rgba(229, 223, 240, 1) 96%)',
				navLinks: '#fcecec',
				boxShadow: 'rgba(0, 0, 0, 0.301)',
				navigationBasicBg: '#2c698d',
				mobileNavBg: '#4398cade',
				activeLink: '#bae8e8',
				btnHover: '#272643',
				titleBg: 'rgb(36, 34, 34)',
				white: '#f7f1f1e5',
				aboutUsCardBg: '#f7f1f1e5',
				aboutUsBoxShadow: 'rgba(0, 0, 0, 0.233)',
				contactPageBg:
					'linear-gradient(180deg, rgba(44, 105, 141, 1) 0%, rgba(67, 152, 202, 1) 42%, rgba(131, 182, 212, 0.88) 68%, rgb(176, 204, 221) 85%, rgb(224, 227, 230) 100%)',
				loadingText: '#555',
				createBtn: 'rgba(175, 166, 166, 0.432)',
				createBtnHover: 'rgba(102, 97, 97, 0.432)',
				chooseLanguageHover: 'rgba(201, 201, 221, 0.87)',
				elementsBackground: '#2c698d',
				aboutUsNavBg: '#0000008b',
				darkBlue: '#272643',
				navBg: '#9c9b9c00',
				logo: '#8d2c69',
				btnBg: '#e06dc0de',
				facebook: '#3b5998',
				linkedin: '#0e76a8',
				instagram: '#e1306c',
				telegram: '#0068b3',
			},
		},
	},
	plugins: [],
}
