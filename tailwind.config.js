module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      blue: '#007bff',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#dc3545',
      orange: '#fd7e14',
      yellow: '#ffc107',
      green: '#28a745',
      teal: '#20c997',
      cyan: '#17a2b8',
      white: '#fff',
      gray: '#6c757d',
      'gray-dark': '#343a40',
      primary: '#0747A6',
      secondary: '#e1e1ef',
      success: '#1dc9b7',
      info: '#5578eb',
      warning: '#ffb822',
      danger: '#fd397a',
      light: '#f8f9fa',
      dark: '#343a40'
    }
  },
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded']
  }
}
