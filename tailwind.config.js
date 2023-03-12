/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#101010',
                green: {
                    dark: "#33392B",
                    light: "#686F5F"
                },
                red: {
                    dark: "#431517",
                    light: "#A6131D",
                }
            },
            fontFamily: {
                'georgia': ['Georgia', 'serif'],
                'lato-regular': ['LatoRegular', 'sans-serif'],
                'lato-light': ['LatoLight', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
