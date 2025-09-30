// src/components/Hero.jsx
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import backgroundVideo from "../assets/videos/appglobal-background.mp4";
import fallbackImage from "../assets/images/hero-fallback.jpg";
import { LazyLoadImage } from "./UI/LazyLoadImage";
import colors from "../theme/colors";
import { typography } from "../theme/typography";

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

// Custom keyboard hook for company buttons
const useCompanyKeyboardNav = (company) => {
    const handleCompanyClick = useCallback(() => {
        window.open(company.link, "_blank", "noopener,noreferrer");
    }, [company.link]);

    const handleKeyPress = useCallback((event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleCompanyClick();
        }
    }, [handleCompanyClick]);

    return {
        tabIndex: 0,
        onKeyDown: handleKeyPress,
        role: 'button',
        'aria-label': `Visit ${company.name} website`
    };
};

// Company Logo Component (to avoid hook in callback)
const CompanyLogo = ({ company, index, onHover, isHovered }) => {
    const keyboardProps = useCompanyKeyboardNav(company);

    return (
        <motion.div
            className="flex flex-col items-center text-center relative group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
        >
            <motion.button
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-lg"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(company.link, "_blank", "noopener,noreferrer")}
                {...keyboardProps}
            >
                <LazyLoadImage
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain transition-all duration-300 brightness-0 invert opacity-70 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100"
                />
            </motion.button>

            <p className={`mt-2 text-xs font-medium leading-tight ${colors.text.muted} max-w-[100px]`}>
                {company.name}
            </p>
        </motion.div>
    );
};

export default function Hero() {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [hoveredCompany, setHoveredCompany] = useState(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);

    // Typing animation effect
    useEffect(() => {
        let charIndex = 0;
        setDisplayedText('');
        setIsTyping(true);
        let typingInterval;

        const startTyping = () => {
            typingInterval = setInterval(() => {
                setDisplayedText((prevText) => {
                    const nextChar = companies[currentIndex].description[charIndex];
                    if (nextChar) {
                        charIndex++;
                        return prevText + nextChar;
                    } else {
                        clearInterval(typingInterval);
                        setIsTyping(false);
                        setTimeout(() => {
                            setCurrentIndex((prev) => (prev + 1) % companies.length);
                        }, 2500);
                        return prevText;
                    }
                });
            }, 50);
        };

        startTyping();

        return () => {
            if (typingInterval) clearInterval(typingInterval);
        };
    }, [currentIndex]);

    // Auto-rotate companies when not hovered
    useEffect(() => {
        if (hoveredCompany !== null) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % companies.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [hoveredCompany]);

    const handleVideoLoaded = useCallback(() => {
        setIsVideoLoaded(true);
    }, []);

    const handleVideoError = useCallback(() => {
        setVideoError(true);
        setIsVideoLoaded(true);
    }, []);

    const handleHoverCompany = useCallback((index) => {
        setHoveredCompany(index);
    }, []);

    return (
        <section id="home" className="min-h-screen">
            <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
                {/* Background Video - REMOVED OVERLAY AND ADJUSTED OPACITY */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster={fallbackImage}
                        onLoadedData={handleVideoLoaded}
                        onError={handleVideoError}
                        className="w-full h-full object-cover" // Removed opacity-50
                    >
                        <source src={backgroundVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* REMOVED GRADIENT OVERLAY */}
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-1" /> */}
                </div>

                {/* Video loading state */}
                {!isVideoLoaded && !videoError && (
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

                {/* Video error state - fallback to image */}
                {videoError && (
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
                        <LazyLoadImage
                            src={fallbackImage}
                            alt="Background"
                            className="w-full h-full object-cover" // Removed opacity
                        />
                        {/* REMOVED OVERLAY FOR FALLBACK IMAGE TOO */}
                    </div>
                )}

                <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 max-w-6xl w-full min-h-screen">
                    {/* Add subtle background to text for better readability */}
                    <div className="flex-1 flex flex-col justify-center">
                        <motion.h1
                            className={`${typography.h1} mb-6 text-white drop-shadow-2xl bg-black/20 backdrop-blur-sm px-6 py-4 rounded-2xl`} // Added background for readability
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            Welcome to <span className={`bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent`}>AppGlobal</span>
                        </motion.h1>

                        {/* Typing Text with Company Descriptions */}
                        <div className="w-full max-w-3xl mx-auto mb-12 min-h-[4rem] flex items-center justify-center">
                            <motion.p
                                className={`${typography.body} text-white/90 drop-shadow-md px-6 py-3 bg-black/20 backdrop-blur-sm rounded-xl text-center text-lg md:text-xl`} // Added background for readability
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                aria-live="polite"
                            >
                                {displayedText}
                                <span
                                    className={`inline-block w-0.5 h-6 md:h-8 bg-white ml-1 ${
                                        isTyping ? 'animate-pulse' : 'animate-blink'
                                    }`}
                                    aria-hidden="true"
                                />
                            </motion.p>
                        </div>
                    </div>

                    {/* Logos with Enhanced Effects - Positioned at the bottom */}
                    <div className="w-full pb-8 md:pb-12">
                        <motion.p
                            className="text-white/80 mb-4 text-xs uppercase tracking-widest font-medium bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block" // Added background for readability
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.7 }}
                        >
                            Our Companies
                        </motion.p>

                        <div
                            className="grid grid-cols-3 gap-4 md:gap-6 items-center justify-items-center py-4 px-2 bg-black/30 backdrop-blur-lg rounded-xl mx-auto max-w-xs border border-white/10" // Enhanced background
                            role="group"
                            aria-label="Our companies"
                        >
                            {companies.map((company, index) => (
                                <CompanyLogo
                                    key={company.name}
                                    company={company}
                                    index={index}
                                    onHover={handleHoverCompany}
                                    isHovered={hoveredCompany === index}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                    .animate-blink {
                        animation: blink 1s infinite;
                    }
                `}</style>
            </section>
        </section>
    );
}