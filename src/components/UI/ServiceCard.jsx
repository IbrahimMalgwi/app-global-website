// src/components/UI/ServiceCard.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle, Sparkles } from "lucide-react";

export const ServiceCard = ({
                                icon: Icon,
                                title,
                                description,
                                features = [],
                                gradient = "from-purple-500 to-pink-500",
                                className = ''
                            }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Animation variants
    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        hover: {
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const iconVariants = {
        initial: { scale: 1, rotate: 0 },
        hover: {
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 }
        }
    };

    const featureVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        })
    };

    return (
        <motion.div
            className={`relative h-full group ${className}`}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            layout
        >
            {/* Main card */}
            <div className="relative h-full rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">

                {/* Gradient overlay on hover */}
                <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}
                    animate={isExpanded ? { opacity: 0.1 } : {}}
                />

                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={false}
                    animate={isHovered ? {
                        background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 70%)"
                    } : {}}
                />

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8">
                    {/* Icon with animated background */}
                    <motion.div
                        className="relative mb-6"
                        variants={iconVariants}
                        animate={isHovered ? "hover" : "initial"}
                    >
                        {/* Icon glow effect */}
                        <motion.div
                            className={`absolute -inset-2 bg-gradient-to-r ${gradient} rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                            animate={isHovered ? {
                                scale: [1, 1.2, 1],
                            } : {}}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Icon container */}
                        <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8 text-gray-700 dark:text-white" />

                            {/* Small sparkle icon on hover */}
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        className="absolute -top-2 -right-2"
                                    >
                                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {description}
                    </p>

                    {/* Features list - animated expand/collapse */}
                    <AnimatePresence>
                        {isExpanded && features.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mb-4"
                            >
                                <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Key Features:
                                    </p>
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            custom={index}
                                            variants={featureVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="flex items-start gap-2"
                                        >
                                            <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {feature}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Learn more button */}
                    {features.length > 0 && (
                        <motion.button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300 group/btn"
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-sm font-medium">
                                {isExpanded ? "Show less" : "Learn more"}
                            </span>
                            <ChevronRight
                                className={`w-4 h-4 transition-all duration-300 
                                    ${isExpanded ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`}
                            />
                        </motion.button>
                    )}

                    {/* Decorative elements */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient} opacity-5 rounded-bl-3xl pointer-events-none`} />
                    <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${gradient} opacity-5 rounded-tr-3xl pointer-events-none`} />
                </div>
            </div>

            {/* Floating particles on hover */}
            <AnimatePresence>
                {isHovered && (
                    <>
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${gradient}`}
                                initial={{
                                    x: '50%',
                                    y: '50%',
                                    scale: 0,
                                    opacity: 1
                                }}
                                animate={{
                                    x: `${50 + (Math.random() * 40 - 20)}%`,
                                    y: `${50 + (Math.random() * 40 - 20)}%`,
                                    scale: [0, 1, 0],
                                    opacity: [1, 0.5, 0]
                                }}
                                transition={{
                                    duration: 1,
                                    delay: i * 0.2,
                                    ease: "easeOut"
                                }}
                            />
                        ))}
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// Default props
ServiceCard.defaultProps = {
    features: [],
    gradient: "from-purple-500 to-pink-500"
};