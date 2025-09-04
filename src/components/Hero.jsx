import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundVideo from "../assets/videos/appglobal-background.mp4";
import fallbackImage from "../assets/images/hero-fallback.jpg";

// ✅ Logos
import appGlobalTechLogo from "../assets/images/appglobal-tech.jpeg";
import appGlobalPayLogo from "../assets/images/appglobal-pay.jpeg";
import appGlobalShellLogo from "../assets/images/appglobal-shell.jpeg";

const companies = [
    {
        name: "AppGlobal Technologies",
        logo: appGlobalTechLogo,
        description: "Leading provider of enterprise software and healthcare solutions.",
        link: "https://appglobaltechnologies.com",
    },
    {
        name: "AppGlobal Payment Solutions",
        logo: appGlobalPayLogo,
        description: "Innovative payment solutions enabling seamless global transactions.",
        link: "https://appglobalpay.com",
    },
    {
        name: "Globalshell Resources Infrastructure",
        logo: appGlobalShellLogo,
        description: "Powering digital infrastructure, cloud, and energy services.",
        link: "https://appglobalshell.com",
    },
];

// ✨ Animation variants
const slideIn = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5, ease: "easeIn" } }
};

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const floating = {
    animate: {
        y: [0, -8, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
};

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredCompany, setHoveredCompany] = useState(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // ⏳ Auto-scroll tagline
    useEffect(() => {
        if (hoveredCompany !== null) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % companies.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [hoveredCompany]);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    return (
        <section id="Home"  className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={fallbackImage}
                    className="w-full h-full object-cover opacity-50"
                    onLoadedData={handleVideoLoaded}
                    aria-label="Background video showing abstract technology visuals"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {!isVideoLoaded && (
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                        <div className="animate-pulse text-white">Loading...</div>
                    </div>
                )}
            </div>

            {/* Simplified Dark Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center justify-between min-h-screen py-8 md:py-12">

                {/* Top Section - Title & Tagline */}
                <div className="flex-1 flex flex-col justify-center pt-16 md:pt-20 lg:pt-24">
                    {/* Main Title - Clean White Text */}
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-white drop-shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Welcome to{" "}
                        <span className="text-blue-200 font-light">AppGlobal</span>
                    </motion.h1>

                    {/* Animated Tagline Carousel */}
                    <div className="relative h-16 md:h-20 lg:h-24 mb-6 md:mb-8 w-full max-w-2xl mx-auto overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                variants={slideIn}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white font-light drop-shadow-md px-4 leading-relaxed">
                                    {companies[currentIndex].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Section - Company Logos - Positioned Lower */}
                <div className="flex-1 flex flex-col justify-end pb-8 md:pb-12 lg:pb-16 w-full">

                    {/* Company Logos Grid - More Spacing */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-4 md:mb-6"
                        onMouseLeave={() => setHoveredCompany(null)}
                        aria-label="AppGlobal Group Companies"
                        variants={fadeUp}
                        initial="initial"
                        animate="animate"
                    >
                        {companies.map((company, index) => (
                            <motion.div
                                key={company.name}
                                className="relative group"
                                variants={floating}
                                initial="initial"
                                animate="animate"
                                whileHover={{
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                            >
                                <motion.button
                                    className={`flex flex-col items-center p-4 md:p-5 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
                                        hoveredCompany === index
                                            ? "bg-white/25 border-blue-300 shadow-lg"
                                            : "bg-white/10 border-white/20 hover:bg-white/15 shadow-md"
                                    }`}
                                    whileHover={{ y: -8 }}
                                    whileTap={{ scale: 0.95 }}
                                    onMouseEnter={() => setHoveredCompany(index)}
                                    onFocus={() => setHoveredCompany(index)}
                                    onClick={() => window.open(company.link, "_blank", "noopener,noreferrer")}
                                    aria-label={`Visit ${company.name}`}
                                >
                                    {/* Logo - Responsive Sizing */}
                                    <div className="relative">
                                        <img
                                            src={company.logo}
                                            alt={`${company.name} Logo`}
                                            className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Company name reveal on hover */}
                                    <AnimatePresence>
                                        {hoveredCompany === index && (
                                            <motion.span
                                                className="mt-2 text-xs md:text-sm text-white bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm"
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 5 }}
                                            >
                                                Learn More
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Company Names Below Logos - Responsive Text Sizing */}
                    <motion.div
                        className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {companies.map((company, index) => (
                            <div key={company.name} className="text-center max-w-[120px] md:max-w-[150px] lg:max-w-[180px]">
                                <p className="text-xs md:text-sm lg:text-base text-white/80 font-medium leading-tight">
                                    {company.name}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Subtle Scroll Indicator - Hidden on mobile for cleaner look */}
            <motion.div
                className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <motion.div
                    className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-3 bg-white/70 rounded-full mt-1 md:mt-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}