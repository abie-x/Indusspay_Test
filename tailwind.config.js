/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#473BF0',
            rating: '#FCAD38',
         },
         fontFamily: {
            gilroy: ['Gilroy', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
