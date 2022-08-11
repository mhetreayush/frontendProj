module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors:{
      'gray-150' : '#F2F3FA',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}