// src/components/Services.jsx
import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCarousel } from "../hooks/useCarousel";
import { ServiceCard } from "./UI/ServiceCard";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import useWindowSize from "../hooks/useWindowSize";
import { services } from "../data/services";
import {
    ChevronLeft,
    ChevronRight,
    Sparkles,
    ArrowRight
} from "lucide-react";

// ==================== Constants ====================

const Services = () => {
    const { width } = useWindowSize();
    const itemsPerView = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
    const sectionRef = useRef(null);

    // Create extended array for seamless looping
    const extendedServices = [...services, ...services, ...services];

    const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(
        extendedServices,
        itemsPerView,
        services.length
    );

    // Calculate the visible index for pagination
    const visibleIndex = currentIndex % services.length;

    // Animation variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section
            id="services"
            ref={sectionRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 overflow-hidden bg-gray-50 dark:bg-black"
        >
            {/* Animated Background */}
            <AnimatedBackground variant="gradient" density="medium" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 dark:bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-40 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-600/10 rounded-full blur-3xl" />

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
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
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
                            What We Offer
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Our{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-purple-600 dark:text-purple-400">
                                Services
                            </span>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute -bottom-2 left-0 h-1 bg-purple-600 dark:bg-purple-400 rounded-full"
                            />
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                        We offer a comprehensive range of digital services to help your business thrive in the modern world.
                    </p>
                </motion.div>

                {/* Carousel Section */}
                <div className="relative w-full mt-12">
                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center w-full absolute z-20 top-1/2 -translate-y-1/2 px-2">
                        <motion.button
                            onClick={prevSlide}
                            className="group relative w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Previous services"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                            <div className="absolute inset-0 rounded-full bg-purple-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>

                        <motion.button
                            onClick={nextSlide}
                            className="group relative w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Next services"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                            <div className="absolute inset-0 rounded-full bg-purple-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </div>

                    {/* Carousel Container */}
                    <div className="overflow-hidden rounded-2xl">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {extendedServices.map((service, index) => (
                                <motion.div
                                    key={`service-${service.title}-${index}`}
                                    className="flex-shrink-0 p-4"
                                    style={{ width: `${100 / itemsPerView}%` }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: (index % services.length) * 0.1
                                    }}
                                    whileHover={{ y: -8 }}
                                >
                                    <ServiceCard
                                        icon={service.icon}
                                        title={service.title}
                                        description={service.description}
                                        features={service.features}
                                        gradient={service.gradient}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Pagination Dots */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center items-center space-x-3 mt-8"
                    >
                        {Array.from({ length: services.length }).map((_, index) => (
                            <motion.button
                                key={`dot-${index}`}
                                onClick={() => goToSlide(index)}
                                className="group relative"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`Go to slide ${index + 1}`}
                            >
                                <motion.div
                                    className={`
                                        w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
                                        ${index === visibleIndex
                                        ? 'bg-purple-600 dark:bg-purple-400'
                                        : 'bg-gray-300 dark:bg-gray-700 hover:bg-purple-400 dark:hover:bg-purple-600'
                                    }
                                    `}
                                    animate={index === visibleIndex ? {
                                        scale: [1, 1.2, 1],
                                    } : {}}
                                    transition={{
                                        duration: 1,
                                        repeat: index === visibleIndex ? Infinity : 0,
                                        ease: "easeInOut"
                                    }}
                                />
                                {index === visibleIndex && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-purple-600/30 blur"
                                        initial={{ scale: 1 }}
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                )}
                            </motion.button>
                        ))}

                        {/* Slide counter */}
                        <span className="ml-4 text-sm text-gray-500 dark:text-white/40">
                            {visibleIndex + 1} / {services.length}
                        </span>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                        <span>Discuss Your Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 rounded-xl bg-purple-600 blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;