// src/components/About.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    Star,
    Award,
    Users,
    Globe2,
    Rocket,
    // Shield,
    Sparkles,
    ChevronRight,
    Heart,
    Target,
    Zap,
    BookOpen,
    Compass
} from "lucide-react";
import aboutImage from "../assets/images/about.jpeg";

// Import UI components - fixed paths
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { Card } from "./UI/Card";
import { GradientCard } from "./UI/GradientCard";

// ==================== Constants ====================

const STATS = [
    {
        number: "50+",
        title: "Projects",
        subtitle: "Successfully Delivered",
        color: "purple",
        icon: Rocket,
        delay: 0.2
    },
    {
        number: "15+",
        title: "Partners",
        subtitle: "Global Collaborations",
        color: "pink",
        icon: Globe2,
        delay: 0.3
    },
    {
        number: "10+",
        title: "Years",
        subtitle: "Industry Excellence",
        color: "indigo",
        icon: Award,
        delay: 0.4
    },
    {
        number: "100+",
        title: "Team Members",
        subtitle: "Expert Professionals",
        color: "blue",
        icon: Users,
        delay: 0.5
    },
];

// ==================== Core Values Constants ====================

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

// ==================== Core Values Sub-components ====================

const DynamicAppGlobal = ({ currentValue }) => {
    const appglobal = "APPGLOBAL".split("");

    const getMatchingValueForIndex = (index, letter) => {
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

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // Core Values state
    const [currentValueIndex, setCurrentValueIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imageParallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);

    // Auto-rotate core values
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
            id="about"
            ref={sectionRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gray-50 dark:bg-black"
        >
            {/* Animated Background */}
            <AnimatedBackground variant="gradient" density="medium" />

            {/* Decorative elements - adjusted for light mode */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-600/10 rounded-full blur-3xl" />

                {/* Animated grid lines */}
                <svg className="absolute w-full h-full opacity-10 dark:opacity-20" preserveAspectRatio="none">
                    <defs>
                        <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#about-gradient)" strokeWidth="0.5" />
                        </pattern>
                        <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#about-grid)" />
                </svg>
            </div>

            {/* Main Content */}
            <motion.div
                style={{ opacity: contentOpacity }}
                className="relative z-10 max-w-7xl mx-auto w-full"
            >
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 backdrop-blur-xl rounded-full border border-purple-200 dark:border-purple-500/30 shadow-sm mb-6">
                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs md:text-sm text-gray-700 dark:text-white/90 font-medium tracking-wide">
              Driving Digital Transformation
            </span>
                    </div>

                    {/* Heading - using solid colors */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        About{" "}
                        <span className="relative inline-block text-purple-600 dark:text-purple-400">
              Us
              <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-purple-600 dark:bg-purple-400 rounded-full"
              />
            </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                        Empowering businesses through innovative technology solutions
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Card className="h-full bg-white dark:bg-gradient-to-br dark:from-gray-900/50 dark:to-black/50 border border-gray-200 dark:border-white/5 shadow-lg">
                            <div className="p-8 md:p-10">
                                {/* Company name highlight */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="inline-block mb-6"
                                >
                  <span className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
                    APPGLOBAL TECHNOLOGIES LIMITED
                  </span>
                                </motion.div>

                                {/* Description */}
                                <div className="space-y-6 text-gray-700 dark:text-white/80">
                                    <p className="text-lg leading-relaxed">
                                        We are an Information Technology company with software development
                                        and networking as our core business. Our rapid and phenomenal growth
                                        spans diverse spheres of business, services, and solutions.
                                    </p>

                                    <p className="text-lg leading-relaxed">
                                        We strongly believe in endowing our customers with apex-level services
                                        round the clock. From conception to design, to development of technology
                                        solutions for businesses of all types, we deliver excellence globally.
                                    </p>

                                    {/* Key points */}
                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        {[
                                            "Global Delivery Model",
                                            "24/7 Support",
                                            "Expert Workforce",
                                            "Low-Risk Approach"
                                        ].map((point, i) => (
                                            <motion.div
                                                key={point}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                                className="flex items-center gap-2"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                                                <span className="text-sm text-gray-600 dark:text-white/70">{point}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Image Section with Parallax */}
                    <motion.div
                        ref={imageRef}
                        style={{ y: imageParallaxY }}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Main Image Card */}
                        <Card className="overflow-hidden bg-transparent border-0">
                            <div className="relative group">
                                {/* Gradient border */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500" />

                                {/* Image container */}
                                <div className="relative rounded-xl overflow-hidden">
                                    <img
                                        src={aboutImage}
                                        alt="A diverse team of professionals collaborating"
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Floating elements */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl"
                                >
                                    <Star className="w-8 h-8 text-white" />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [0, 10, 0],
                                        rotate: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl"
                                >
                                    <Award className="w-8 h-8 text-white" />
                                </motion.div>
                            </div>
                        </Card>
                    </motion.div>
                </div>

                {/* Core Values Section - Integrated from CoreValues component */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-20"
                >
                    {/* Dynamic APPGLOBAL Display */}
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
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
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
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center text-sm text-gray-500 dark:text-white/40 mt-8"
                    >
                        Click on any letter to learn more • Watch APPGLOBAL come alive
                    </motion.p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {STATS.map((stat, index) => (
                        <GradientCard
                            key={stat.title}
                            color={stat.color}
                            number={stat.number}
                            title={stat.title}
                            subtitle={stat.subtitle}
                            icon={stat.icon}
                            delay={stat.delay}
                            className="transform hover:scale-105 transition-all duration-300"
                        />
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                        <span>Start Your Journey</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 rounded-xl bg-purple-600 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600 blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

// EXPORT DEFAULT - THIS IS CRITICAL
export default About;