// Import path module first
import path from "path";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    sm: "600px",
                    md: "728px",
                    lg: "984px",
                    xl: "1240px",
                    "2xl": "1496px",
                },
            },
            fontFamily: {
                heading: ["Poppins", "sans-serif"], // Headers / Titles
                body: ["Inter", "sans-serif"],      // Body / Text
            },
            colors: {
                brand: {
                    light: "#60a5fa", // blue-400
                    DEFAULT: "#3b82f6", // blue-500
                    dark: "#1e40af", // blue-900
                },
            },
        },
    },
    darkMode: "class",
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require('tailwind-scrollbar'),

        // ✅ Custom utilities plugin
        function ({ addUtilities }) {
            const newUtilities = {
                ".perspective-1000": {
                    perspective: "1000px",
                },
                ".preserve-3d": {
                    "transform-style": "preserve-3d",
                },
                ".backface-hidden": {
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden",
                },
                ".flip-side": {
                    transform: "rotateY(180deg)",
                },
            };
            addUtilities(newUtilities, ["responsive", "hover"]);
        },
    ],
};
