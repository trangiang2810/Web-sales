module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize:{
      xs: '0.88rem',
    },
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1440px',
      xxl:'1740px',
      
    },
    
    extend: {
      colors: {
        primary: '#101828',
        secondary: '#7F56D9',
      },
      
    },
  },
  plugins: [],
};
