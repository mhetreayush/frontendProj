module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    borderRadius:{
      'md': '10px'
    },
    colors:{
      'gray-150' : '#F2F3FA',
      'violetCustom': '#3F4AAF'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}