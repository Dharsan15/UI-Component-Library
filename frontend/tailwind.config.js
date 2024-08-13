/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(125% 125% at 50% 10%, #fff 40%,  #4B70F5 100%)",
      },
    },
    fontFamily : {
       
    }
  },
  plugins: [],
};
