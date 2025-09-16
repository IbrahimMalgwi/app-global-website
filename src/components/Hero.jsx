import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={fallbackImage}
                    onLoadedData={handleVideoLoaded}
                    className="w-full h-full object-cover opacity-50"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-1" />
            </div>

            {!isVideoLoaded && (
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
                    <motion.div
                        className="text-white flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mb-3" />
                        <p className="text-sm">Loading experience...</p>
                    </motion.div>
                </div>
            )}

            <div className="relative z-10 flex flex-col justify-between items-center text-center px-4 sm:px-6 max-w-6xl w-full py-16 md:py-24">
                {/* Title & Tagline */}
                <div className="pt-32 md:pt-36 lg:pt-40 w-full">
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Welcome to <span className="text-blue-300 font-light bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">AppGlobal</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Transforming industries through innovative technology solutions
                    </motion.p>

                    <div className="relative h-16 md:h-20 lg:h-24 w-full max-w-3xl mx-auto overflow-hidden mb-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                variants={slideIn}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <p className="text-lg md:text-xl lg:text-2xl text-white font-light drop-shadow-md px-4 leading-relaxed bg-black/20 backdrop-blur-sm rounded-lg py-2">
                                    {companies[currentIndex].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        className="flex justify-center gap-4 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.7 }}
                    >
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-blue-500/25">
                            Explore Solutions
                        </button>
                        <button className="px-6 py-3 bg-transparent border-2 border-white/30 hover:border-white/60 text-white rounded-lg font-medium transition-all duration-300">
                            Contact Us
                        </button>
                    </motion.div>
                </div>

                {/* Logos */}
                <div className="mt-24 md:mt-32 lg:mt-36 w-full">
                    <motion.p
                        className="text-white/80 mb-6 text-sm uppercase tracking-widest font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.7 }}
                    >
                        Our Companies
                    </motion.p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">
                        {companies.map((company, index) => (
                            <motion.div
                                key={company.name}
                                className="flex flex-col items-center text-center w-28 sm:w-32 md:w-40"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                                onMouseEnter={() => setHoveredCompany(index)}
                                onMouseLeave={() => setHoveredCompany(null)}
                            >
                                <motion.button
                                    className={`flex flex-col items-center p-3 sm:p-4 rounded-2xl backdrop-blur-md border transition-all duration-300 w-full group ${
                                        hoveredCompany === index
                                            ? "bg-white/25 border-blue-300 shadow-lg scale-105"
                                            : "bg-white/10 border-white/20 hover:bg-white/15 shadow-md"
                                    }`}
                                    whileHover={{ y: -8 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() =>
                                        window.open(company.link, "_blank", "noopener,noreferrer")
                                    }
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className={`h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 ${
                                            hoveredCompany === index ? "brightness-110 scale-105" : "brightness-100"
                                        }`}
                                    />
                                    <motion.div
                                        className={`mt-2 transition-all duration-300 ${
                                            hoveredCompany === index ? "opacity-100" : "opacity-0"
                                        }`}
                                    >
                                        <ExternalLink className="w-4 h-4 text-blue-300" />
                                    </motion.div>
                                </motion.button>

                                <p className="mt-3 text-xs sm:text-sm text-white/80 font-medium leading-tight">
                                    {company.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <div className="flex flex-col items-center">
                    <motion.p
                        className="text-white/60 text-xs mb-2 uppercase tracking-widest"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Scroll to explore
                    </motion.p>
                    <motion.div
                        className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-2 h-2 bg-white/70 rounded-full"
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}