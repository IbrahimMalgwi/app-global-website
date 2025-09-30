// src/components/UI/IconCard.jsx
import React from 'react';

export const IconCard = ({
                             title,
                             description,
                             icon,
                             gradient,
                             blurGradient,
                             darkGradient = "from-purple-700 to-indigo-800", // Default dark gradient
                             darkBlurGradient = "from-purple-900 to-indigo-900", // Default dark blur gradient
                             className = ""
                         }) => {
    return (
        <div className={`flex flex-col items-center text-center max-w-md ${className}`}>
            {/* Icon Container with Gradient */}
            <div className={`relative mb-8 p-6 rounded-2xl bg-gradient-to-r ${gradient} dark:${darkGradient} shadow-lg transform hover:scale-105 transition duration-300`}>
                {icon}

                {/* Blur Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${blurGradient} dark:${darkBlurGradient} blur-xl opacity-30 -z-10`}></div>
            </div>

            {/* Content */}
            <h3 className={`text-2xl font-bold mb-4 text-gray-800 dark:text-white`}>
                {title}
            </h3>
            <p className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed`}>
                {description}
            </p>
        </div>
    );
};