module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      '4xl': [
        '2rem',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        },
      ],
      '3xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        },
      ],
      '2xl': [
        '0.8rem',
        {
          lineHeight: '1.3rem',
          letterSpacing: '0.01em',
          fontWeight: '500',
        },
      ],
      'xl': [
        '0.8rem',
        {
          lineHeight: '1.3rem',
          letterSpacing: '0.01em',
          fontWeight: '100',
        },
      ],
      'sm': [
        '0.7rem',
        {
          lineHeight: '1.2rem',
          letterSpacing: '0.01em',
          fontWeight: '400',
        },
      ],
    },
    extend: {
      colors: {
        // Configure your color palette here
        transparent: 'transparent',
        light: {
          100: '#F8FAFC',
          200: '#ECEBF0',
          300: '#D5D6DF',
          400: '#878998',
          500: '#7A7D89',
          600: '#696977',
        },
        dark: {
          100: '#575968',
          200: '#525365',
          300: '#404254',
          400: '#3F424D',
          500: '#383B47',
          600: '#323542',
        },
        red: {
          100: '#F4A6B4',
          200: '#ED4596',
          300: '#ED4E6E',
        },
        red_alt: {
          100: '#F4A6B4',
        },
        green: {
          100: '#D0E9CB',
          200: '#A0DFCE',
          300: '#46B75F',
        },
        purple: {
          100: '#E7E5FC',
          200: '#9FA2FF',
          300: '#8884FF',
        },
        orange: {
          100: '#FEF1E6',
          200: '#F3BC9E',
          300: '#BC6944',
        },
      },
      fontSize: {
        '2xs': '0.6rem',
      },
      dropShadow: {
        '3xl': '5px 5px 15px rgb(0 0 0 / 75%)',
      },
    },
  },
  plugins: [],
};
