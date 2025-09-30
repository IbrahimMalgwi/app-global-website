// src/components/UI/ServiceCard.jsx
import colors from '../../theme/colors';

export const ServiceCard = ({
                                icon,
                                title,
                                description,
                                className = ''
                            }) => {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 h-full flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-200 dark:border-gray-700 ${className}`}>
            <div className="relative flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent mb-2`}>
                {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                {description}
            </p>
            <button className={`mt-4 bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent font-bold hover:underline dark:text-purple-400`}>
                Learn More →
            </button>
        </div>
    );
};