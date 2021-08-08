  
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}