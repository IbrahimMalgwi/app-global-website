// src/theme/colors.js
const colors = {
    gradients: {
        primary: "from-red-700 to-red-500",
        secondary: "from-red-500 to-amber-500",
        background: "from-white via-red-50 to-amber-50",
    },
    circles: {
        primary: "bg-red-200",
        secondary: "bg-amber-200",
        tertiary: "bg-indigo-200",
        support: "bg-blue-200"
    },
    text: {
        primary: "text-gray-800 dark:text-gray-200",
        muted: "text-gray-600 dark:text-gray-400",
        accent: {
            primary: "text-red-600",
            secondary: "text-amber-600",
            tertiary: "text-indigo-600"
        }
    },
    background: {
        light: "bg-white",
        dark: "dark:bg-gray-900",
        card: "bg-white"
    },
};

export default colors;
