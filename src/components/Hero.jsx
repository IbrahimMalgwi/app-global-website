import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundVideo from "../assets/videos/appglobal-background.mp4";
import fallbackImage from "../assets/images/hero-fallback.jpg";

// Logos
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
        name: "Globalshell Resources",
        logo: appGlobalShellLogo,
        description: "Powering digital infrastructure, cloud, and energy services.",
        link: "https://appglobalshell.com",
    },
];

const slideIn = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredCompany, setHoveredCompany] = useState(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        if (hoveredCompany !== null) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % companies.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [hoveredCompany]);

    const handleVideoLoaded = () => setIsVideoLoaded(true);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={fallbackImage}
                onLoadedData={handleVideoLoaded}
                className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {!isVideoLoaded && (
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
                    <div className="animate-pulse text-white">Loading...</div>
                </div>
            )}

            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="relative z-10 flex flex-col justify-between items-center text-center px-4 sm:px-6 max-w-6xl w-full py-16 md:py-24">
                {/* Title & Tagline */}
                <div className="pt-32 md:pt-36 lg:pt-40">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Welcome to <span className="text-blue-200 font-light">AppGlobal</span>
                    </motion.h1>

                    <div className="relative h-16 md:h-20 lg:h-24 w-full max-w-3xl mx-auto overflow-hidden">
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

                {/* Logos */}
                <div className="mt-24 md:mt-32 lg:mt-36 w-full">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
                        {companies.map((company, index) => (
                            <motion.div
                                key={company.name}
                                className="flex flex-col items-center text-center w-24 sm:w-32 md:w-36"
                                onMouseEnter={() => setHoveredCompany(index)}
                                onMouseLeave={() => setHoveredCompany(null)}
                            >
                                <motion.button
                                    className={`flex flex-col items-center p-2 sm:p-3 rounded-2xl backdrop-blur-md border transition-all duration-300 w-full ${
                                        hoveredCompany === index
                                            ? "bg-white/25 border-blue-300 shadow-lg"
                                            : "bg-white/10 border-white/20 hover:bg-white/15 shadow-md"
                                    }`}
                                    whileHover={{ y: -6 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() =>
                                        window.open(company.link, "_blank", "noopener,noreferrer")
                                    }
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300"
                                    />
                                </motion.button>

                                <p className="mt-2 text-xs sm:text-sm md:text-base text-white/80 font-medium">
                                    {company.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
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
