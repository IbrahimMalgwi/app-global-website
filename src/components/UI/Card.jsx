// src/components/UI/Card.jsx
export const Card = ({ children, className = '' }) => {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300 ${className}`}>
            {children}
        </div>
    );
};