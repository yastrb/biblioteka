const withMT = require('@material-tailwind/react/utils/withMT')
const { light } = require('@mui/material/styles/createPalette')
module.exports = withMT({
	content: ['./index.html', './src/**/*.{js,jsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				main: '#FFF7D4',
				secondary: '#FFEAA6',
				button: '#FFD95A',
<<<<<<< HEAD
				buttonB: '#FFF5D4',
=======
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
				black: '#000000',
				grey: '#ABABAB',
				green: '#008F17',
				hover: '#C07F00',
				orange: '#FFA259',
<<<<<<< HEAD
				skyBlue: '#E9E9E9',
				red: '#8F0000',
				popUpBg: '#2D2D2D',
			},
			backgroundColor: {
				skyblue: '#E9E9E9',
=======
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
<<<<<<< HEAD
			height: {
				'32rem': '32rem',
				'6rem': '6rem',
				'21rem': '21rem',
				'26rem': '26rem',
				'49rem': '49rem',
			},
			width: {
				'34rem': '34rem',
				'20rem': '20rem',
			},
			maxWidth: {
				'62rem': '62rem',
			},
			maxHeight: {
				'49rem': '49rem',
			},
=======
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
		},
		screens: {
			sm: '425px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1440px',
		},
	},
	plugins: [],
})
