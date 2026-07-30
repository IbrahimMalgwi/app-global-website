// src/theme/colors.js
const colors = {
    gradients: {
        primary: "from-brand to-brand-medium",
        secondary: "from-brand-medium to-brand-light",
        background: "from-white via-slate-50 to-blue-50",
    },
    circles: {
        primary: "bg-brand",
        secondary: "bg-brand-medium",
        tertiary: "bg-brand-light",
        support: "bg-brand-subtle"
    },
    text: {
        primary: "text-gray-800 dark:text-gray-200",
        muted: "text-gray-600 dark:text-gray-400",
        accent: {
            primary: "text-brand",
            secondary: "text-brand-medium",
            tertiary: "text-brand-light"
        }
    },
    background: {
        light: "bg-white",
        dark: "dark:bg-gray-900",
        card: "bg-white"
    },
};

export default colors;
