// src/theme/colors.js
const colors = {
    gradients: {
        primary: "from-purple-600 to-pink-600",
        secondary: "from-purple-400 to-pink-400",
        background: "from-indigo-50 via-purple-50 to-pink-50",
    },
    circles: { // Add this new section for the circles
        purple: "bg-purple-200",
        indigo: "bg-indigo-200",
        pink: "bg-pink-200",
        blue: "bg-blue-200"
    },
    text: {
        primary: "text-gray-800 dark:text-gray-200",
        muted: "text-gray-600 dark:text-gray-400",
        accent: {
            purple: "text-purple-600",
            pink: "text-pink-600",
            indigo: "text-indigo-600"
        }
    },
    background: {
        light: "bg-white",
        dark: "dark:bg-gray-900",
        card: "bg-white"
    },
};

export default colors;