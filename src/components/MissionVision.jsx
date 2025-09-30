// src/components/MissionVision.jsx (Enhanced version with decorative frames)
import React from 'react';
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { IconCard } from "./UI/IconCard";
import { typography } from "../theme/typography";
import colors from "../theme/colors";

const MissionVision = () => {
    const MissionIcon = () => (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    );

    const VisionIcon = () => (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );

    return (
        <section id="mission">
            <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 lg:px-20 py-20 text-center relative overflow-hidden">
                <AnimatedBackground />
                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <h2 className={`${typography.h1} mb-16 ${colors.text.primary} dark:text-white`}>
                        Our <span className={`bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent`}>Mission</span> & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Vision</span>
                    </h2>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
                        {/* Mission Card with Enhanced Frame */}
                        <div className="relative w-full lg:w-1/2 max-w-md">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-30 dark:opacity-20 group-hover:opacity-50 transition duration-300"></div>
                            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition duration-300">
                                <IconCard
                                    title="Our Mission"
                                    description="To achieve the reputation of a quality, high standard & reliable solution Provider in the ICT industry, with 100% customer satisfaction, at all time."
                                    icon={<MissionIcon />}
                                    gradient="from-purple-500 to-indigo-600"
                                    blurGradient="from-purple-300 to-indigo-300"
                                    darkGradient="from-purple-700 to-indigo-800"
                                    darkBlurGradient="from-purple-900 to-indigo-900"
                                />
                            </div>
                        </div>

                        {/* Vision Card with Enhanced Frame */}
                        <div className="relative w-full lg:w-1/2 max-w-md">
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-30 dark:opacity-20 group-hover:opacity-50 transition duration-300"></div>
                            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition duration-300">
                                <IconCard
                                    title="Our Vision"
                                    description="To become a leading Technology solution provider in Africa and beyond. To become a leading Technology solution provider in Africa and beyond."
                                    icon={<VisionIcon />}
                                    gradient="from-pink-500 to-purple-600"
                                    blurGradient="from-pink-300 to-purple-300"
                                    darkGradient="from-pink-700 to-purple-800"
                                    darkBlurGradient="from-pink-900 to-purple-900"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default MissionVision;