// src/components/UI/ThemedButton.jsx
import { useTheme } from '../../hooks/useTheme';
import colors from '../../theme/colors';

export const ThemedButton = ({
                                 children,
                                 onClick,
                                 className = '',
                                 variant = 'primary' // 'primary' or 'outline'
                             }) => {
    const { theme } = useTheme();

    const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300 text-base md:text-lg";

    const variants = {
        primary: `bg-gradient-to-r ${colors.gradients.primary} text-white hover:opacity-90`,
        outline: theme === "light"
            ? "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
            : "border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};