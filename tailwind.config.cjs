module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        "br-white": "#fafafa",
        "br-dark-green": "#002C33",
        "br-blue": "#3e568b",
        "br-red": "#e06167",
        "br-green": "#1ABC9C",
        "br-accent": "#F39C12"
      },
      // spacing: {
      //   '128': '32rem',
      // },
      // maxWidth: {
      //   '7xl': '80rem',
      // },
      // fontSize: {
      //   '7xl': '5rem',
      // },
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [require('@tailwindcss/forms'), /*require('@tailwindcss/line-clamp')*/],
}