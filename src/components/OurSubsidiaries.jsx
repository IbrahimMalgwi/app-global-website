// src/components/OurSubsidiaries.jsx
import React, { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSubsidiaryCarousel } from "../hooks/useSubsidiaryCarousel";
import { SubsidiaryCard } from "./UI/SubsidiaryCard";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { typography } from "../theme/typography";
import colors from "../theme/colors";
import { subsidiaries } from "../data/subsidiaries";

const AUTO_ROTATE_INTERVAL = 5000; // 5s
const SWIPE_THRESHOLD = 100; // px

const OurSubsidiaries = () => {
    const { selectedIndex, setSelectedIndex, scrollRef } =
        useSubsidiaryCarousel(subsidiaries);

    const selectedSubsidiary = subsidiaries[selectedIndex];
    const intervalRef = useRef(null);

    /** Navigation helpers */
    const goNext = useCallback(() => {
        setSelectedIndex((prev) => (prev + 1) % subsidiaries.length);
    }, [setSelectedIndex]);

    const goPrev = useCallback(() => {
        setSelectedIndex(
            (prev) => (prev - 1 + subsidiaries.length) % subsidiaries.length
        );
    }, [setSelectedIndex]);

    /** Auto-rotate controls */
    const stopAutoRotate = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const startAutoRotate = useCallback(() => {
        stopAutoRotate();
        intervalRef.current = setInterval(() => {
            goNext();
        }, AUTO_ROTATE_INTERVAL);
    }, [goNext, stopAutoRotate]);

    /** Start auto-rotation on mount */
    useEffect(() => {
        startAutoRotate();
        return stopAutoRotate;
    }, [startAutoRotate, stopAutoRotate]);

    return (
        <section
            id="subsidiaries"
            className="relative w-full min-h-screen"
            onMouseEnter={stopAutoRotate}
            onMouseLeave={startAutoRotate}
        >
            {/* Themed background */}
            <AnimatedBackground />

            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4 py-12 mx-auto lg:px-8">
                {/* Heading */}
                <h2
                    className={`${typography.h1} mb-12 bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent text-center`}
                >
                    Our Subsidiaries
                </h2>

                {/* Main content */}
                <div className="flex flex-col items-center justify-between w-full gap-10 lg:flex-row">
                    {/* Subsidiary List */}
                    <div
                        ref={scrollRef}
                        className="w-full p-4 overflow-y-auto lg:w-1/3 max-h-[500px] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-transparent"
                    >
                        {subsidiaries.map((subsidiary, index) => (
                            <SubsidiaryCard
                                key={subsidiary.name}
                                subsidiary={subsidiary}
                                isSelected={selectedIndex === index}
                                onClick={() => {
                                    setSelectedIndex(index);
                                    startAutoRotate(); // restart timer when manually clicked
                                }}
                            />
                        ))}
                    </div>

                    {/* Swipeable Image + Text */}
                    <motion.div
                        className="flex flex-col items-center justify-center w-full gap-6 lg:flex-row lg:w-2/3"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset }) => {
                            if (offset.x > SWIPE_THRESHOLD) {
                                goPrev();
                                startAutoRotate();
                            } else if (offset.x < -SWIPE_THRESHOLD) {
                                goNext();
                                startAutoRotate();
                            }
                        }}
                    >
                        {/* Animated Image */}
                        <div className="flex items-center justify-center w-full lg:w-1/2">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selectedSubsidiary.image}
                                    src={selectedSubsidiary.image}
                                    alt={selectedSubsidiary.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="w-full h-auto max-h-[400px] rounded-xl shadow-lg object-cover"
                                />
                            </AnimatePresence>
                        </div>

                        {/* Animated Text */}
                        <div className="w-full text-left lg:w-1/2">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedSubsidiary.name}
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -40 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="flex flex-col justify-center h-full"
                                >
                                    <h3 className={`${typography.h2} mb-4 ${colors.text.primary}`}>
                                        {selectedSubsidiary.name}
                                    </h3>
                                    <p className={`${typography.body} mb-6 leading-relaxed`}>
                                        {selectedSubsidiary.description}
                                    </p>
                                    <a
                                        href={selectedSubsidiary.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-3 font-semibold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                                    >
                                        Visit Website →
                                    </a>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Dot Navigation */}
                <div className="flex justify-center mt-10 space-x-2">
                    {subsidiaries.map((subsidiary, index) => (
                        <button
                            key={subsidiary.name}
                            onClick={() => {
                                setSelectedIndex(index);
                                startAutoRotate(); // restart timer on dot click
                            }}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-transform duration-300 ${
                                index === selectedIndex
                                    ? "bg-blue-600 scale-125"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`View ${subsidiary.name}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurSubsidiaries;
