// src/components/UI/GradientCard.jsx
export const GradientCard = ({ color, number, title, subtitle }) => {
    const colorClasses = {
        purple: 'from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600',
        pink: 'from-pink-500 to-red-500 dark:from-pink-600 dark:to-red-600',
        indigo: 'from-indigo-500 to-blue-500 dark:from-indigo-600 dark:to-blue-600'
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className={`text-3xl font-bold bg-gradient-to-r ${colorClasses[color]} bg-clip-text text-transparent`}>
                {number}
            </div>
            <div className="text-lg font-semibold text-gray-800 dark:text-white mt-2">{title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</div>
        </div>
    );
};