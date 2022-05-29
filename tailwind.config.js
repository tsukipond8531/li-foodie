module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '30r': '30rem',
        '35r': '35rem',
        '40r': '40rem'
      },
      height:{
        '30r': '30rem',
        '35r': '35rem',
        '40r': '40rem'
      },
    },
  },
  variants: {
    extends:{},
  },
  plugins: [],
}