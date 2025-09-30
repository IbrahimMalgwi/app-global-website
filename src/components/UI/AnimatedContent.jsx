// src/components/UI/AnimatedBackground.jsx
import colors from '../../theme/colors';

export const AnimatedBackground = () => {
    return (
        <>
            {/* Soft Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800"></div>

            {/* Decorative Gradient Shapes */}
            <div className={`absolute top-20 -left-16 w-80 h-80 ${colors.circles.purple} opacity-30 dark:opacity-20 rounded-full blur-3xl animate-pulse`}></div>
            <div className={`absolute top-1/3 right-1/4 w-64 h-64 ${colors.circles.indigo} opacity-30 dark:opacity-20 rounded-full blur-3xl animate-pulse delay-300`}></div>
            <div className={`absolute bottom-20 -right-20 w-96 h-96 ${colors.circles.pink} opacity-30 dark:opacity-20 rounded-full blur-3xl animate-pulse delay-200`}></div>
            <div className={`absolute bottom-1/4 left-1/4 w-72 h-72 ${colors.circles.blue} opacity-30 dark:opacity-20 rounded-full blur-3xl animate-pulse delay-500`}></div>
        </>
    );
};