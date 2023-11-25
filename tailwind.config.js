/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary_Color: "#b99d75",
        second_color:"#53624e",
        BgDark:"#141414",
      },
      keyframes: {},
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      backgroundImage: {
        'HomeExperience': "url('https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_1800/adh0dfdtuyj0jq9igoj5.jpg')",
        'HomeExperience2': "url('https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_1800/eff0dahypfywxg5curui.jpg')",
        'FooterBg': "url('https://res.cloudinary.com/dh2ndj2ey/image/upload/c_crop,g_auto,h_800,w_1800/sqgs8ky1meakqr5l3pps.jpg')",
      },
    
    },
  },
  plugins: [

  ],
};
