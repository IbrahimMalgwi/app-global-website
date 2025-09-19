import { useTheme } from '../../hooks/useTheme';

export const ThemedCard = ({
                               children,
                               className = '',
                               variant = 'default' // 'default' or 'accent'
                           }) => {
    const { theme } = useTheme();

    const baseClasses = "rounded-xl shadow-lg p-4 transition-colors duration-300";

    const variants = {
        default: theme === "light"
            ? "bg-slate-50 text-slate-900 border border-slate-200"
            : "bg-slate-900 text-slate-100 border border-slate-700",
        accent: theme === "light"
            ? "bg-indigo-50 text-slate-900 border border-indigo-200"
            : "bg-indigo-900/30 text-slate-100 border border-indigo-700"
    };

    return (
        <div className={`${baseClasses} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};