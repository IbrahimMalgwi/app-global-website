// src/components/UI/GradientCard.jsx
export const GradientCard = ({ color = 'purple', number, title, subtitle, className = '' }) => {
    // Map color prop to gradient and text classes
    const gradientMap = {
        purple: 'from-purple-50 to-pink-50 border-purple-100 text-purple-600',
        pink: 'from-pink-50 to-indigo-50 border-pink-100 text-pink-600',
        indigo: 'from-indigo-50 to-purple-50 border-indigo-100 text-indigo-600',
    };

    const gradientClasses = gradientMap[color] || gradientMap.purple;

    return (
        <div className={`bg-gradient-to-br p-4 rounded-xl shadow-sm text-center min-w-[140px] transform hover:scale-105 transition duration-300 border ${gradientClasses} ${className}`}>
            <div className="text-2xl font-bold mb-1">{number}</div>
            <div className="text-md font-medium text-gray-700">{title}</div>
            <div className="text-xs text-gray-500 mt-1">{subtitle}</div>
        </div>
    );
};