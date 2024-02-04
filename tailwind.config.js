/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "5":"0.3125rem",
        "8":"0.5rem",
        "10":"0.625rem",
        "11":"0.6875rem",
        "14":"0.875rem",
        "16":"1rem",
        "17":"1.0625rem",
        "18":"1.125rem",
        "12":"0.75rem",
        "14":"0.875rem",
        "15":"0.9375rem",
        "17":"1.0625rem",
        "24":"1.5rem",
        "25":"1.5625rem",
        "26":"1.625rem",
        "26.62":"1.66375rem",
        "27":"1.6875rem",
        "30":"1.875rem",
        "32":"2rem",
        "34":"2.125rem",
        "38":"2.375rem",
        "47":"2.9375rem",
        "52":"3.25",
        "64":"4rem",
        "66.6":"4.125rem",
        "70":"4.375rem",
        "97":"6.0625rem",
        "115":"7.1875rem",
        "135":"8.4375rem",
        "173":"10.8125rem",
        "233":"14.5625rem",
        "224":"14rem",
        "249":"15.5625rem",
        "375":"23.4375rem", // y
        "708":"44.25rem", // x
        "812":"50.75rem", // x
        
      },
      colors: {
        danger: "#FF4D4F",
        blue:{
          primary:"#104EE9",
          button: "#104EE9"
        },
        gray: {
          50: "#F7F8FA", // background
          20:"#f8f8f8d1", // from figma templ rgba(248, 248, 248, 0.82),
          200: "#BCCADC80",
          600: "#627D98",
          "listitem_line":"#bccadc80",
          900: "#0E1823"
        },
      },
      
      boxShadow:{
        'buttonbar':'0px -0.3px 0px #AEAEB4',
        'list':'0px 4px 20px #00000014' // from figma template rgba(0, 0, 0, 0.08)
      },
      dropShadow: {
        lg: ["0 4px 20px rgb(0 0 0  / 0.08)"],
      },
      screens: {
        xs: "480px",
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
