// src/components/MissionVision.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { Card } from "./UI/Card";

// ==================== Constants ====================

const MISSION_VISION_DATA = [
    {
        id: 'mission',
        title: 'Our Mission',
        description: 'To achieve the reputation of a quality, high standard & reliable solution Provider in the ICT industry, with 100% customer satisfaction, at all time.',
        icon: Target,
        gradient: 'from-purple-500 to-indigo-500',
        lightBg: 'bg-gradient-to-br from-purple-50 to-indigo-50',
        iconBg: 'bg-purple-100 dark:bg-purple-900/30',
        iconColor: 'text-purple-600 dark:text-purple-400',
        borderColor: 'border-purple-200 dark:border-purple-500/30',
        accentColor: 'purple'
    },
    {
        id: 'vision',
        title: 'Our Vision',
        description: 'To become a leading Technology solution provider in Africa and beyond. Empowering businesses through innovative technology solutions that transform industries.',
        icon: Eye,
        gradient: 'from-pink-500 to-purple-500',
        lightBg: 'bg-gradient-to-br from-pink-50 to-purple-50',
        iconBg: 'bg-pink-100 dark:bg-pink-900/30',
        iconColor: 'text-pink-600 dark:text-pink-400',
        borderColor: 'border-pink-200 dark:border-pink-500/30',
        accentColor: 'pink'
    }
];

// ==================== Sub-components ====================

const MissionVisionCard = ({ item, index }) => {
    const Icon = item.icon;
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative w-full max-w-md group"
        >
            {/* Animated gradient frame */}
            <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-30 dark:opacity-20 group-hover:opacity-50 blur transition-all duration-500`}
                animate={{
                    scale: [1, 1.02, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Main card */}
            <Card className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon with animated background */}
                    <motion.div
                        className={`w-20 h-20 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        <Icon className={`w-10 h-10 ${item.iconColor} relative z-10`} />

                        {/* Animated rings */}
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20`}
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </motion.div>

                    {/* Title */}
                    <h3 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4`}>
                        {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-600 dark:text-white/70 leading-relaxed mb-6">
                        {item.description}
                    </p>

                    {/* Decorative elements */}
                    <div className="flex items-center gap-2 text-sm">
                        <div className={`w-1 h-1 rounded-full bg-${item.accentColor}-500 dark:bg-${item.accentColor}-400`} />
                        <span className={`text-${item.accentColor}-600 dark:text-${item.accentColor}-400 font-medium`}>
              Committed to excellence
            </span>
                        <ArrowRight className={`w-4 h-4 text-${item.accentColor}-500 dark:text-${item.accentColor}-400 group-hover:translate-x-1 transition-transform duration-300`} />
                    </div>
                </div>

                {/* Corner decorations */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-3xl`} />
                <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${item.gradient} opacity-10 rounded-tr-3xl`} />
            </Card>
        </motion.div>
    );
};

// ==================== Main Component ====================

const MissionVision = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section
            id="mission"
            ref={sectionRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gray-50 dark:bg-black"
        >
            {/* Animated Background */}
            <AnimatedBackground variant="gradient" density="medium" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-40 left-20 w-64 h-64 bg-purple-200 dark:bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-40 right-20 w-64 h-64 bg-pink-200 dark:bg-pink-600/10 rounded-full blur-3xl" />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
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
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 backdrop-blur-xl rounded-full border border-purple-200 dark:border-purple-500/30 shadow-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs md:text-sm text-gray-700 dark:text-white/90 font-medium tracking-wide">
              Our Purpose & Direction
            </span>
                    </motion.div>

                    {/* Heading - using solid colors */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Our{" "}
                        <span className="relative inline-block">
              <span className="relative z-10 text-purple-600 dark:text-purple-400">
                Mission
              </span>
              <motion.div
                  initial={{ width: 0 }}
                  animate={isHeaderInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-purple-600 dark:bg-purple-400 rounded-full"
              />
            </span>
                        {" "}&{" "}
                        <span className="relative inline-block">
              <span className="relative z-10 text-pink-600 dark:text-pink-400">
                Vision
              </span>
              <motion.div
                  initial={{ width: 0 }}
                  animate={isHeaderInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute -bottom-2 left-0 h-1 bg-pink-600 dark:bg-pink-400 rounded-full"
              />
            </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                        Driving innovation and excellence through clear purpose and forward-thinking vision
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                    {MISSION_VISION_DATA.map((item, index) => (
                        <MissionVisionCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                {/* Bottom decorative text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-center mt-16"
                >
                    <p className="text-sm text-gray-500 dark:text-white/40 tracking-wider uppercase">
                        Committed to transforming businesses through technology
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

// Export the component as default
export default MissionVision;