/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",       // Extra small devices
        sm: "640px",       // Small devices
        md: "768px",       // Medium devices
        lg: "1024px",      // Large devices
        xl: "1280px",      // Extra-large devices
        "2xl": "1536px",   // Ultra-large screens
        "3xl": "1920px",   // Super large screens
        "4k": "2560px",    // 4K resolution screens
      },
      boxShadow: {
        mobileNav: `rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, 
                rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, 
              rgba(255, 255, 255, 0.08) 0px 1px 0px inset`,
        softInset: `rgb(204, 219, 232) 3px 3px 6px 0px inset, 
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset`,
        deep: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
               rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
               rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

