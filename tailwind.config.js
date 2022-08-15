/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",], theme: {
        extend: {
            colors: {
                blue: {
                    150: '#F2FAFFl', 550: '#479FDE', 950: '#18214D', 1000: '#26357E'
                }, gray: {
                    450: '#747474'
                }
            }
        },
    }, plugins: [],
}
