import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// 1. Import theme utilities
import { typography } from "../theme/typography";
import colors from "../theme/colors";

// 2. Define core values array
const coreValues = [
    { letter: "A", title: "Accountability", description: "We are honest, transparent, and ethical in all business engagements." },
    { letter: "P", title: "Performance", description: "We question the status quo and seek alternative ideas." },
    { letter: "P", title: "Productivity", description: "Quality experience for our customers, local community, and our team." },
    { letter: "G", title: "Group Work", description: "We drive workforce efficiency by encouraging collaboration, mutual respect, and shared responsibility." },
    { letter: "L", title: "Learning", description: "We automate and continuously improve our internal processes to promote efficiency." },
    { letter: "O", title: "Outcome", description: "We thrive by finding innovative solutions to problems using available resources." },
    { letter: "B", title: "Mentorship", description: "Provide technology and business mentorship to talented youth irrespective of background." },
    { letter: "A", title: "Accountability", description: "Provide technology and business mentorship to talented youth irrespective of background." },
    { letter: "L", title: "Leadership", description: "Provide technology and business mentorship to talented youth irrespective of background." },
];

const CoreValue = () => {
    const [currentValueIndex, setCurrentValueIndex] = useState(0);

    // Auto-cycle every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentValueIndex((prev) => (prev + 1) % coreValues.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentValue = coreValues[currentValueIndex];

    return (
        // 3. Use ThemeLayout or apply background from theme
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 text-center overflow-hidden relative">
            {/* Background Gradient - Using theme color */}
            <div className={`absolute inset-0 z-0 bg-gradient-to-br ${colors.gradients.background}`}></div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <section>
                    <motion.h2
                        // 4. Use typography and theme gradient for heading
                        className={`${typography.h1} mb-4 bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Core Values
                    </motion.h2>
                    <motion.p
                        // 5. Use typography and text color from theme
                        className={`${typography.body} mb-12`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Driving innovation through our APPGLOBAL principles
                    </motion.p>
                </section>

                {/* Dynamic Core Value */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentValue.letter}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Rotated gradient box */}
                        <motion.div
                            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl shadow-lg flex items-center justify-center mb-6"
                            // 6. Use theme gradient for the letter box
                            style={{
                                background: `linear-gradient(135deg, ${colors.gradients.primary})`,
                                transform: "rotate(45deg)",
                            }}
                            initial={{ scale: 0.8, rotate: 45 }}
                            animate={{ scale: 1, rotate: 45 }}
                            transition={{ duration: 0.6, type: "spring", damping: 10, stiffness: 100 }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "rotate(-45deg)" }}>
                                <motion.span
                                    className="text-white text-5xl sm:text-6xl font-bold"
                                    initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    {currentValue.letter}
                                </motion.span>
                            </div>
                        </motion.div>

                        <motion.h3
                            // 7. Use typography and text color from theme
                            className={`${typography.h2} mb-2 ${colors.text.primary}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            {currentValue.title}
                        </motion.h3>
                        <motion.p
                            // 8. Use typography and text color from theme
                            className={`${typography.body} max-w-sm mb-12 ${colors.text.muted}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            {currentValue.description}
                        </motion.p>
                    </motion.div>
                </AnimatePresence>

                {/* Letters row */}
                <motion.div
                    className="flex justify-center items-center space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={value.letter + index}
                            // 9. Use theme-based conditional styling
                            className={`font-extrabold text-3xl sm:text-5xl transition-colors duration-300 ${
                                index === currentValueIndex
                                    ? `text-transparent bg-clip-text bg-gradient-to-r ${colors.gradients.primary}`
                                    : "text-gray-300"
                            }`}
                            animate={{ scale: index === currentValueIndex ? 1.1 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {value.letter}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Services link */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <p className={`text-gray-500 text-sm mb-1 ${colors.text.muted}`}>Services</p>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-auto text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CoreValue;