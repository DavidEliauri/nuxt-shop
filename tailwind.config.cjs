/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Ubuntu: ['Ubuntu', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1.5rem',
            },
            colors: {
                'shop-black': '#11263A',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
};
