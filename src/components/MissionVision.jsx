//src/components/MissionVision.jsx
import React from 'react';
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { IconCard } from "./UI/IconCard"; // Import the new component
import { typography } from "../theme/typography";
import colors from "../theme/colors";

const MissionVision = () => {
    // Define icon SVG elements for reusability and clarity
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
        <section id="mission-vision">
        <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 lg:px-20 py-20 text-center relative overflow-hidden">
            <AnimatedBackground />
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <h2 className={`${typography.h1} mb-16 ${colors.text.primary}`}>
                    Our <span className={`bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent`}>Mission</span> & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Vision</span>
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
                    {/* Use IconCard for Mission */}
                    <IconCard
                        title="Our Mission"
                        description="To achieve the reputation of a quality, high standard & reliable solution Provider in the ICT industry, with 100% customer satisfaction, at all time."
                        icon={<MissionIcon />}
                        gradient="from-purple-500 to-indigo-600"
                        blurGradient="from-purple-300 to-indigo-300"
                    />

                    {/* Use IconCard for Vision */}
                    <IconCard
                        title="Our Vision"
                        description="To become a leading Technology solution provider in Africa and beyond."
                        icon={<VisionIcon />}
                        gradient="from-pink-500 to-purple-600"
                        blurGradient="from-pink-300 to-purple-300"
                    />
                </div>
            </div>
        </section>
            </section>
    );
};

export default MissionVision;