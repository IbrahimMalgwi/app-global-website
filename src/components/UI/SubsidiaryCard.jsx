// src/components/UI/SubsidiaryCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import colors from '../../theme/colors';

export const SubsidiaryCard = ({ subsidiary, isSelected, onClick }) => {
    return (
        <motion.div
            className={`p-4 mb-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                isSelected
                    ? `bg-gradient-to-r ${colors.gradients.primary} border-transparent text-white shadow-lg`
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
        >
            <div className="flex items-center space-x-4">
                <img
                    src={subsidiary.logo}
                    alt={`${subsidiary.name} logo`}
                    className={`w-12 h-12 rounded-lg object-cover ${
                        isSelected ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'
                    }`}
                />
                <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-lg truncate ${
                        isSelected ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                        {subsidiary.name}
                    </h3>
                    <p className={`text-sm truncate ${
                        isSelected ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                        {subsidiary.subtitle}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};