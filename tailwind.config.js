/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        grayBg: '#e1f4f3',
        hoverGreeenBg: '#d6f0ec',
        figmaBg: '#D1431A',
        figmaIconBg: '#ec685a',
        hoverFigmaBtnBg: '#f39c87',
        footerBg: '#E5E7EB',
        githubBg: '#252A31',
        githubIconBg: '#515c6c',
        hoverGithubBtnBg: '#6d7781',
        hoverTequliaBtnBg: '#00c1a1',
        tequliaIconBg: '#00a58e',
        twitterBg: '#0989CF',
        twitterIconBg: '#179ce3',
        hoverTwitterBtnBg: '#1da1f2',
      },
      borderRadius: {
        button: '52px'
      },
      boxShadow: {
        card: "rgba(37, 42, 49, 0.06) 0px 4px 6px -2px, rgba(37, 42, 49, 0.1) 0px 10px 15px -3px, rgba(37, 42, 49, 0.1) 0px -1px 6px -2px",
        hoverCard: "rgba(37, 42, 49, 0.06) 0px 10px 10px -5px, rgba(37, 42, 49, 0.1) 0px 20px 25px -5px, rgba(37, 42, 49, 0.1) 0px -1px 6px -2px"
      },
      colors: {
        primary: '#00A58E',
        secondary: '#007A69',
        white: '#ffffff',
        black: '#252A31',
        hoverPrimary: '#009580'
      },
      fontSize: {
        h2: '28px',
        h3: '22px'
      },
      height: {
        '3.25rem': '3.25rem',
        '12.5rem': '12.5rem',
        '15.5rem': '15.5rem',
        '33.125rem': '33.125rem'
      },
      lineHeight: {
        13: '52px',
        14: '56px',
        16: '64px'
      },
      margin: {
        15: '3.75rem',
        21: '5.25rem'
      },
      maxHeight: {
        640: '640px',
        985: '985px'
      },
      maxWidth: {
        '32px': '32px',
        '39.5rem': '39.5rem',
        '90rem': '90rem'
      },
      minHeight: {
        '200px': '200px',
        '510px': '510px',
      },
      screens: {
        'lg': {'max': '1023px'},
  
        'md': {'max': '767px'},
  
        'sm': {'max': '639px'},
      },
      width: {
        '9.5rem': '9.5rem',
        '17rem': '17rem'
      }
    }
  },
  plugins: [],
};
