import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Roboto Flex', 'sans-serif'],
			},
			colors: {
				// Cores principais do tema
				primary: {
					DEFAULT: '#fdbf5c', // color1
					foreground: '#1d2440', // color5
				},
				secondary: {
					DEFAULT: '#f69a0b', // color2
					foreground: '#ffffff',
				},
				accent: {
					DEFAULT: '#d43a00', // color3
					foreground: '#ffffff',
				},
				background: {
					DEFAULT: '#ffffff',
					dark: '#1d2440', // color5
				},
				foreground: {
					DEFAULT: '#1d2440', // color5
					light: '#ffffff',
				},
				// Cores de estado
				destructive: {
					DEFAULT: '#9b0800', // color4
					foreground: '#ffffff',
				},
				muted: {
					DEFAULT: '#f69a0b', // color2
					foreground: '#1d2440', // color5
				},
				// Cores de borda e input
				border: '#fdbf5c', // color1
				input: '#f69a0b', // color2
				ring: '#d43a00', // color3
				// Cores personalizadas
				color1: "#fdbf5c",
				color2: "#f69a0b",
				color3: "#d43a00",
				color4: "#9b0800",
				color5: "#1d2440",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.8s ease-out',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [animate],
} satisfies Config;
