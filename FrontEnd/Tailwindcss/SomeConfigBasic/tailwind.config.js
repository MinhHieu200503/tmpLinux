/** @type {import('tailwindcss').Config} */
module.exports = {
    // mode: 'jit',
    // // // These paths are just examples, customize them to match your project structure
    // purge: ['./**/*.html', './**/*.{js,jsx,ts,tsx,vue}'],
    content: ['../**/*.html', './**/*.html', './**/*.js'],
    theme: {
        extend: {
            spacing: {
                35: '35px',
            },
        },
    },
    safelist: [
        {
            pattern: /./,
        },
    ],
};
