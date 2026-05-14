/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0f5132',
        leaf: '#1f8a5b',
        skytrust: '#38bdf8',
        ember: '#f59e0b',
        sand: '#f7ead7',
        ink: '#10201a'
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 70px rgba(31, 138, 91, 0.22)',
        soft: '0 20px 60px rgba(16, 32, 26, 0.12)'
      },
      backgroundImage: {
        'soft-radial': 'radial-gradient(circle at top left, rgba(56,189,248,0.22), transparent 32%), radial-gradient(circle at 80% 20%, rgba(245,158,11,0.20), transparent 30%), linear-gradient(135deg, #fffdf8 0%, #eefaf5 100%)',
        'dark-radial': 'radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 32%), radial-gradient(circle at 80% 20%, rgba(245,158,11,0.10), transparent 30%), linear-gradient(135deg, #071611 0%, #10201a 100%)'
      }
    }
  },
  plugins: []
};
