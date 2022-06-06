module.exports = {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1140px',
      },
      maxWidth: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1140px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
