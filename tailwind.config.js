module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        '1/8': '12.5%',
        '7/8': '87.5%',
      },
    },
    colors: {
      white: {
        light: '#fdfdfb',
        faded: '#f6f3ea',
      },
      blue: '#0a84ff',
      black: {
        faded: '#151209',
      },
      gray: '#85827a',
      indigo: '#5e5ce6',
      purple: '#bf5af2',
    },
  },
  plugins: [],
};
