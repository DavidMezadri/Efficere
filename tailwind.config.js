/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#7c5433',    // Marrom claro
                    DEFAULT: '#5b3721',  // Marrom médio
                    dark: '#3e1a03',     // Marrom escuro
                    darker: '#2a1202',   // Marrom muito escuro
                },
                bg: {
                    dark: '#1a1814',
                    darker: '#0f0e0c',
                    card: 'rgba(124, 84, 51, 0.08)', // Atualizado para marrom
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                scroll: 'scroll 30s linear infinite',
            },
        },
    },
    plugins: [],
}
