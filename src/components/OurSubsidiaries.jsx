import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSubsidiaryCarousel } from "../hooks/useSubsidiaryCarousel";
import { SubsidiaryCard } from "./UI/SubsidiaryCard";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { typography } from "../theme/typography";
import colors from "../theme/colors";
import { subsidiaries } from "../data/subsidiaries";

const OurSubsidiaries = () => {
    const { selectedIndex, setSelectedIndex, scrollRef } =
        useSubsidiaryCarousel(subsidiaries);

    const selectedSubsidiary = subsidiaries[selectedIndex];

    return (
        <section id="subsidiaries" className="relative w-full min-h-screen">
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
                                onClick={() => setSelectedIndex(index)}
                            />
                        ))}
                    </div>

                    {/* Animated Image */}
                    <div className="flex items-center justify-center w-full lg:w-1/3">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={selectedSubsidiary.image}
                                src={selectedSubsidiary.image}
                                alt={selectedSubsidiary.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="w-full h-auto max-h-[400px] rounded-xl shadow-lg object-cover"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Animated Text Content */}
                    <div className="w-full lg:w-1/3 text-left">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedSubsidiary.name}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
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
                </div>

                {/* Dot Navigation */}
                <div className="flex justify-center mt-10 space-x-2">
                    {subsidiaries.map((subsidiary, index) => (
                        <button
                            key={subsidiary.name}
                            onClick={() => setSelectedIndex(index)}
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
