/** @type {import('tailwindcss').Config} */
const dynamicColors = [
    "amber",
    "blue",
    "cyan",
    "emerald",
    "fuchsia",
    "green",
    "indigo",
    "orange",
    "pink",
    "purple",
    "red",
    "rose",
    "sky",
    "teal",
    "violet",
];
const dynamicColorClasses = dynamicColors.flatMap((color) => [
    `bg-${color}-100`,
    `bg-${color}-200`,
    `bg-${color}-500`,
    `text-${color}-400`,
    `text-${color}-500`,
    `text-${color}-600`,
    `border-${color}-200`,
    `border-${color}-500`,
    `border-${color}-800`,
    `from-${color}-50`,
    `from-${color}-600`,
    `to-${color}-100/50`,
    `dark:bg-${color}-600/20`,
    `dark:bg-${color}-900/20`,
    `dark:bg-${color}-900/30`,
    `dark:text-${color}-400`,
    `dark:border-${color}-400`,
    `dark:border-${color}-500/30`,
    `dark:border-${color}-800`,
    `dark:border-${color}-800/30`,
    `dark:from-${color}-900/20`,
    `dark:to-${color}-800/10`,
]);

// A single, restrained blue spectrum backs every decorative color utility in
// the site. Keeping the familiar utility names lets data-driven components
// retain their visual hierarchy without drifting outside the brand palette.
const brandSpectrum = {
    50: "#F8FAFC",
    100: "#EEF3F8",
    200: "#C3CDD8",
    300: "#A6BBD1",
    400: "#6A96C8",
    500: "#4A80BE",
    600: "#3A73B4",
    700: "#2F6199",
    800: "#274F7D",
    900: "#203F63",
    950: "#172D47",
};

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: dynamicColorClasses,
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
                    light: "#6A96C8",
                    DEFAULT: "#3A73B4",
                    dark: "#2F6199",
                    medium: "#4A80BE",
                    subtle: "#C3CDD8",
                },
                red: brandSpectrum,
                amber: brandSpectrum,
                blue: brandSpectrum,
                cyan: brandSpectrum,
                emerald: brandSpectrum,
                fuchsia: brandSpectrum,
                green: brandSpectrum,
                indigo: brandSpectrum,
                orange: brandSpectrum,
                pink: brandSpectrum,
                purple: brandSpectrum,
                rose: brandSpectrum,
                sky: brandSpectrum,
                teal: brandSpectrum,
                violet: brandSpectrum,
            },
        },
    },
    darkMode: "class",
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require('tailwind-scrollbar'),

        // Custom utilities plugin
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
