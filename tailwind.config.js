const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                manrope: ['Manrope']
            },
            colors: {
                'regal': '#02316b',
                'blu':'#3b5bcd',
                'blu-2':'#3B5BCD',
                'blu-3':'#eef2ff',
                'black': '#09090c',
                'darkGray': '#121212',
                
                'brightRed': 'hsl(12, 88%, 59%)',
                'brightRedLight': 'hsl(12, 88%, 69%)',
                'brightRedSupLight': 'hsl(12, 88%, 95%)',

                'darkBlue': 'hsl(228, 39%, 23%)',
                'darkGrayishBlue': 'hsl(227, 12%, 61%)',
                'veryDarkBlue': 'hsl(233, 12%, 13%)',
             },
            fontSize: {
                tittle: ['3em', '1em'],
                
            },
            animation: {
                'slow': 'wiggle 10s ',
                'ping_Izq':'ping_Izq 0.9s cubic-bezier(0,0,0.5,1) infinite',
                'ping_Der':'ping_Der 0.9s cubic-bezier(0,0,0.5,1) infinite'
            },
            keyframes: {
                wiggle: {
                  '0%, 100%': { opacity: '0' },
                  '20%':{opacity: '1'},
                  '50%': { opacity: '1' },
                  '80%':{opacity: '1'}
                }
              
            },
            keyframes:{
                ping_Izq:{
                    '75%, 100%':{
                        transform:'scale(1.2)',
                        transform:'translateX(-10px)',
                        opacity:'0.3'

                    },
                    '30%':{
                        transform:'translateX(10px)',
                    }
                },
                ping_Der:{
                    '75%, 100%':{
                        transform:'scale(1.2)',
                        transform:'translateX(10px)',
                        opacity:'0.3'

                    },
                    '30%':{
                        transform:'translateX(-10px)',
                    }
                },
                
                
            },
            animborder: {
            '0%, 100%': {borderColor: 'rgb(129 140 248 / var(--tw-border-opacity))'},
            '50%': { border: 'none' },
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
