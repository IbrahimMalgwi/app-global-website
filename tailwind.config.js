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
                sans: ["Inter", "sans-serif"],
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
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
