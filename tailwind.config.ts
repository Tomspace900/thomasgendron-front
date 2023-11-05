import type { Config } from 'tailwindcss';

const config: Config = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	},
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				lightgrey: '#ffffff80',
				turquoise: '#68B8B5D9',
				gray: '#758B9E80',
				blue: '#0083cc',
				purple: '#7000c9',
				yellow: '#f4dc00',
				bordeaux: '#98296b',
			},
			fontFamily: {
				main: ['Sono', 'monospace'],
				cursive: ['Kaushan Script', 'cursive'],
			},
			boxShadow: {
				card: '0px 0px 35px rgba(0, 0, 0, 0.15)',
				bubble: '0px 4px 35px rgba(0, 0, 0, 0.25)',
			},
		},
	},
	plugins: [],
};
export default config;
