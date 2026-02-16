// src/components/CoreValues.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    ArrowDown,
    Heart,
    Target,
    Users,
    Zap,
    Award,
    BookOpen,
    Compass,
    Star
} from "lucide-react";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { Card } from "./UI/Card";

// ==================== Constants ====================

const coreValues = [
    {
        letter: "A",
        title: "Accountability",
        description: "We are honest, transparent, and ethical in all business engagements.",
        icon: Target,
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
        textColor: "text-purple-600 dark:text-purple-400"
    },
    {
        letter: "P",
        title: "Performance",
        description: "We question the status quo and seek alternative ideas.",
        icon: Zap,
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        textColor: "text-blue-600 dark:text-blue-400"
    },
    {
        letter: "P",
        title: "Productivity",
        description: "Quality experience for our customers, local community, and our team.",
        icon: Award,
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-100 dark:bg-green-900/30",
        textColor: "text-green-600 dark:text-green-400"
    },
    {
        letter: "G",
        title: "Group Work",
        description: "We drive workforce efficiency by encouraging collaboration, mutual respect, and shared responsibility.",
        icon: Users,
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-100 dark:bg-orange-900/30",
        textColor: "text-orange-600 dark:text-orange-400"
    },
    {
        letter: "L",
        title: "Learning",
        description: "We automate and continuously improve our internal processes to promote efficiency.",
        icon: BookOpen,
        color: "from-teal-500 to-cyan-500",
        bgColor: "bg-teal-100 dark:bg-teal-900/30",
        textColor: "text-teal-600 dark:text-teal-400"
    },
    {
        letter: "O",
        title: "Outcome",
        description: "We thrive by finding innovative solutions to problems using available resources.",
        icon: Compass,
        color: "from-indigo-500 to-purple-500",
        bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
        textColor: "text-indigo-600 dark:text-indigo-400"
    },
    {
        letter: "B",
        title: "Mentorship",
        description: "Provide technology and business mentorship to talented youth irrespective of background.",
        icon: Heart,
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-100 dark:bg-pink-900/30",
        textColor: "text-pink-600 dark:text-pink-400"
    },
    {
        letter: "A",
        title: "Adaptability",
        description: "We embrace change and continuously evolve to meet market demands.",
        icon: Target,
        color: "from-cyan-500 to-blue-500",
        bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
        textColor: "text-cyan-600 dark:text-cyan-400"
    },
    {
        letter: "L",
        title: "Leadership",
        description: "Inspire and guide teams to achieve exceptional results through innovation.",
        icon: Star,
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-100 dark:bg-amber-900/30",
        textColor: "text-amber-600 dark:text-amber-400"
    },
];

// ==================== New Dynamic APPGLOBAL Component ====================

const DynamicAppGlobal = ({ currentValue }) => {
    const appglobal = "APPGLOBAL".split("");

    // Create a map of which indices in APPGLOBAL match which values
    // A (index 0) -> first A
    // P (index 1) -> first P
    // P (index 2) -> second P
    // G (index 3) -> G
    // L (index 4) -> first L
    // O (index 5) -> O
    // B (index 6) -> B
    // A (index 7) -> second A
    // L (index 8) -> second L

    const getMatchingValueForIndex = (index, letter) => {
        // Find the matching core value based on position and letter
        if (index === 0) return coreValues.find(v => v.letter === "A" && v.title === "Accountability");
        if (index === 1) return coreValues.find(v => v.letter === "P" && v.title === "Performance");
        if (index === 2) return coreValues.find(v => v.letter === "P" && v.title === "Productivity");
        if (index === 3) return coreValues.find(v => v.letter === "G");
        if (index === 4) return coreValues.find(v => v.letter === "L" && v.title === "Learning");
        if (index === 5) return coreValues.find(v => v.letter === "O");
        if (index === 6) return coreValues.find(v => v.letter === "B");
        if (index === 7) return coreValues.find(v => v.letter === "A" && v.title === "Adaptability");
        if (index === 8) return coreValues.find(v => v.letter === "L" && v.title === "Leadership");
        return null;
    };

    return (
        <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-12">
            <AnimatePresence mode="wait">
                {appglobal.map((letter, index) => {
                    const matchingValue = getMatchingValueForIndex(index, letter);
                    const isActive = matchingValue?.letter === currentValue.letter &&
                        matchingValue?.title === currentValue.title;

                    return (
                        <motion.div
                            key={`${letter}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            className="relative"
                        >
                            {/* Glow effect for active letter */}
                            {isActive && (
                                <motion.div
                                    className={`absolute -inset-3 bg-gradient-to-r ${currentValue.color} rounded-xl blur-xl opacity-40`}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.4, 0.6, 0.4],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            )}

                            {/* Letter card */}
                            <motion.div
                                className={`
                                    relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                                    rounded-xl flex items-center justify-center
                                    font-bold text-xl sm:text-2xl md:text-3xl
                                    shadow-lg
                                    ${isActive
                                    ? `bg-gradient-to-r ${matchingValue?.color || currentValue.color} text-white`
                                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700'
                                }
                                `}
                                animate={isActive ? {
                                    y: [0, -4, 0],
                                    scale: [1, 1.05, 1],
                                } : {}}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {letter}

                                {/* Small icon for active letter */}
                                {isActive && matchingValue && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-2 -right-2"
                                    >
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        >
                                            <matchingValue.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg" />
                                        </motion.div>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Label for active letter */}
                            {isActive && matchingValue && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
                                >
                                    <span className={`text-xs font-medium bg-gradient-to-r ${matchingValue.color} bg-clip-text text-transparent`}>
                                        {matchingValue.title}
                                    </span>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

// ==================== Sub-components ====================

const LetterCube = ({ value, isActive, onClick }) => {
    const Icon = value.icon;

    return (
        <motion.button
            onClick={onClick}
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Glow effect */}
            <motion.div
                className={`absolute -inset-2 bg-gradient-to-r ${value.color} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}
                animate={isActive ? { opacity: 0.3 } : {}}
            />

            {/* Letter container */}
            <motion.div
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300
          ${isActive
                    ? `bg-gradient-to-r ${value.color} text-white shadow-lg scale-110`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500/50'
                }`}
                animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                transition={{ duration: 0.5 }}
            >
                <span className="text-xl sm:text-2xl font-bold">{value.letter}</span>

                {/* Small icon indicator */}
                {isActive && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center"
                    >
                        <Icon className="w-2 h-2 text-purple-600 dark:text-purple-400" />
                    </motion.div>
                )}
            </motion.div>
        </motion.button>
    );
};

// ==================== Main Component ====================

const CoreValues = () => {
    const [currentValueIndex, setCurrentValueIndex] = useState(0);
    const sectionRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            setCurrentValueIndex((prev) => (prev + 1) % coreValues.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isHovering]);

    const currentValue = coreValues[currentValueIndex];
    const Icon = currentValue.icon;

    return (
        <section
            id="core-values"
            ref={sectionRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gray-50 dark:bg-black"
        >
            {/* Animated Background */}
            <AnimatedBackground variant="gradient" density="medium" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-600/10 rounded-full blur-3xl" />

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/30 dark:bg-purple-400/20 rounded-full"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [null, Math.random() * 100 + '%'],
                            scale: [0, 1, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 backdrop-blur-xl rounded-full border border-purple-200 dark:border-purple-500/30 shadow-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs md:text-sm text-gray-700 dark:text-white/90 font-medium tracking-wide">
                            Our Guiding Principles
                        </span>
                    </motion.div>

                    {/* Heading - using solid colors */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Core{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-purple-600 dark:text-purple-400">
                                Values
                            </span>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute -bottom-2 left-0 h-1 bg-purple-600 dark:bg-purple-400 rounded-full"
                            />
                        </span>
                    </h2>
                </motion.div>

                {/* Dynamic APPGLOBAL Display - NEW */}
                <DynamicAppGlobal currentValue={currentValue} />

                {/* Dynamic Value Display */}
                <div
                    className="relative mb-16"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentValue.letter}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Animated Icon Container */}
                            <Card className="mb-8 bg-transparent border-0">
                                <motion.div
                                    className="relative"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    {/* Outer ring */}
                                    <div className={`absolute -inset-4 bg-gradient-to-r ${currentValue.color} rounded-full opacity-20 blur-xl`} />

                                    {/* Main icon circle */}
                                    <motion.div
                                        className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br ${currentValue.color} flex items-center justify-center shadow-2xl`}
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {/* Inner glow */}
                                        <div className="absolute inset-2 bg-white/20 rounded-full blur-sm" />

                                        {/* Icon */}
                                        <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-white relative z-10" />

                                        {/* Letter badge */}
                                        <motion.div
                                            className="absolute -bottom-2 -right-2 w-10 h-10 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg"
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        >
                                            <span className={`text-xl font-bold bg-gradient-to-r ${currentValue.color} bg-clip-text text-transparent`}>
                                                {currentValue.letter}
                                            </span>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </Card>

                            {/* Title */}
                            <motion.h3
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                {currentValue.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-lg sm:text-xl text-gray-600 dark:text-white/70 max-w-2xl text-center leading-relaxed"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                {currentValue.description}
                            </motion.p>

                            {/* Progress indicator */}
                            <motion.div
                                className="w-48 h-1 bg-gray-200 dark:bg-gray-800 rounded-full mt-8 overflow-hidden"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <motion.div
                                    className={`h-full bg-gradient-to-r ${currentValue.color}`}
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '0%' }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Letters Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto"
                >
                    {coreValues.map((value, index) => (
                        <LetterCube
                            key={value.letter + index}
                            value={value}
                            isActive={index === currentValueIndex}
                            onClick={() => setCurrentValueIndex(index)}
                        />
                    ))}
                </motion.div>

                {/* Hint text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center text-sm text-gray-500 dark:text-white/40 mt-8"
                >
                    Click on any letter to learn more • Watch APPGLOBAL come alive
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-500 dark:text-white/40 uppercase tracking-wider">
                        Explore Services
                    </span>
                    <ArrowDown className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CoreValues;