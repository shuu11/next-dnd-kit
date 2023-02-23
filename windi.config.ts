import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	attributify: false,
	darkMode: false, // or 'media' or 'class'
	extract: {
		include: ['**/*.{css,ts,tsx}'],
		exclude: ['node_modules', '.git', '.next'],
	},
	theme: {
		screens: {
			sm: '640px', //	tablet (screen < 640px)
			lg: '1024px', //	laptop (648px <= screen < 1024px)
			xl: '1280px', //	desktop (1024px <= screen)
		},

		extend: {
			fontFamily: {
				roboto_normal:['var(--font-roboto_normal)'],
				roboto_bold:['var(--font-roboto_bold)'],
				inter: ['var(--font-inter)'],
				lora: ['var(--font-lora)'],
				kenia: ['var(--font-kenia)'],
				dancing: ['var(--font-dancing)'],
			},
		},
	},
	shortcuts: {
		'flex-row-center': 'flex flex-row items-center justify-center',
		'flex-col-center': 'flex flex-col items-center justify-center',
		'grid-row-center': 'grid grid-flow-row place-items-center place-content-center',
		'grid-col-center': 'grid grid-flow-col place-items-center place-content-center',
	},
})
