// src/components/OurSubsidiaries.jsx
import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { useSubsidiaryCarousel } from "../hooks/useSubsidiaryCarousel";
import { SubsidiaryCard } from "./UI/SubsidiaryCard";
import { AnimatedImage, AnimatedText } from "./UI/AnimatedContent";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { typography } from "../theme/typography";
import colors from "../theme/colors";
import { subsidiaries } from "../data/subsidiaries";

const OurSubsidiaries = () => {
    const { selectedIndex, setSelectedIndex, scrollRef } = useSubsidiaryCarousel(subsidiaries);

    const selectedSubsidiary = subsidiaries[selectedIndex];

    return (
        <section id="services">
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 lg:p-12 text-center overflow-hidden">

            {/* Use themed animated background */}
            <AnimatedBackground />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Use typography for heading */}
                <h2 className={`${typography.h1} mb-12 bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent`}>
                    Our Subsidiaries
                </h2>

                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                    {/* Left list */}
                    <div
                        ref={scrollRef}
                        className="w-full lg:w-1/3 p-4 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-transparent"
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

                    {/* Middle image with animation */}
                    <div className="w-full lg:w-1/3 flex justify-center items-center">
                        <AnimatedImage
                            src={selectedSubsidiary.image}
                            alt={selectedSubsidiary.name}
                            className="w-full h-auto max-h-[400px] rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Right content with animation */}
                    <div className="w-full lg:w-1/3 text-left">
                        <AnimatedText
                            keyProp={selectedSubsidiary.name}
                            className="h-full flex flex-col justify-center"
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
                                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300"
                            >
                                Visit Website →
                            </a>
                        </AnimatedText>
                    </div>
                </div>

                {/* Dots navigation */}
                <div className="flex justify-center mt-8 space-x-2">
                    {subsidiaries.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition ${
                                index === selectedIndex
                                    ? "bg-blue-600 scale-125"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`View ${subsidiaries[index].name}`}
                        />
                    ))}
                </div>
            </div>
        </div>
        </section>
    );
};

export default OurSubsidiaries;