/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",], theme: {
        extend: {
            colors: {
                blue: {
                    150: '#F2FAFFl', 550: '#479FDE', 950: '#18214D', 1000: '#26357E'
                }, gray: {
                    450: '#747474',
                    350: '#E3E3E3'
                },
                red: {
                    350: '#FF8F8F'
                },
                purple: {
                    450: '#9391FF'
                },
                green: {
                    350: '#00C2A8',
                    550: '#54C45E'
                }
            }
        },
    }, plugins: [],
}
