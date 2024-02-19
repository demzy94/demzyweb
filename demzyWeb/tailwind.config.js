/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html {html,js,php}"],
  theme: {
    extend: {
      colors:{
        'lion': "#aa8453",
        'lion-dark': "#937248",
        'eerie-black': "#222222",
        'coyote': "#80633e",
        'platinum': "#e0e0e0",
        'nero': "#202020",
        'nero-dark':"#1e1e1e",
        'light-gray': "#e9e9e9"
      },
       fontFamily: {
       'barlow': ['Barlow', 'sans-serif'],
       'gilda': ['Barlow Condensed', 'sans-serif'],
       'mont':['Gilda Display', 'serif'],
       'barlow-cond': ['Montserrat', 'sans-serif']

       },
       backgroundImage:{
        'header-image': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/img/header-image.png')",
        'banner-image': "linear-gradient(0deg, rgba(16, 16, 16, 0.5), rgba(16, 16, 16, 0.5)), url('/img/banner-image.png')",
        'booking-image': "linear-gradient(rgba(16, 16, 16, 0.5), rgba(16, 16, 16, 0.5)), url('/img/booking-image.png')"
       },
      gridTemplateColumns:{
        'footer': "3fr repeat(3, 2fr)"
      }
    },
  },
  plugins: [],
};

