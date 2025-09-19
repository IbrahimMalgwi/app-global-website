import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

export default function Hero() {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [hoveredCompany, setHoveredCompany] = useState(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        let charIndex = 0;
        setDisplayedText('');
        setIsTyping(true);

        const typingInterval = setInterval(() => {
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
        }, 50); // Typing speed (adjust for faster/slower typing)

        return () => clearInterval(typingInterval);
    }, [currentIndex]);

    useEffect(() => {
        if (hoveredCompany !== null) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % companies.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [hoveredCompany]);

    const handleVideoLoaded = () => setIsVideoLoaded(true);

    return (
        <section id="home">
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

                    {/* Typing Text with Company Descriptions */}
                    <div className="w-full max-w-3xl mx-auto mb-8 min-h-[4rem] flex items-center justify-center">
                        <motion.p
                            className="text-lg md:text-xl lg:text-2xl text-white/90 font-light drop-shadow-md px-4 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            {displayedText}
                            <span
                                className={`inline-block w-0.5 h-6 md:h-8 bg-white ml-1 ${
                                    isTyping ? 'animate-pulse' : 'animate-blink'
                                }`}
                            />
                        </motion.p>
                    </div>
                </div>

                {/* Logos with Enhanced Effects */}
                <div className="mt-16 md:mt-20 lg:mt-24 w-full">
                    {/*<motion.p*/}
                    {/*    className="text-white/80 mb-6 text-sm uppercase tracking-widest font-medium"*/}
                    {/*    initial={{ opacity: 0 }}*/}
                    {/*    animate={{ opacity: 1 }}*/}
                    {/*    transition={{ delay: 1.2, duration: 0.7 }}*/}
                    {/*>*/}
                    {/*    Our Companies*/}
                    {/*</motion.p>*/}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center py-6 px-4 backdrop-blur-sm rounded-xl">
                        {companies.map((company, index) => (
                            <motion.div
                                key={company.name}
                                className="flex flex-col items-center text-center w-10 h-3 relative group cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                                onMouseEnter={() => setHoveredCompany(index)}
                                onMouseLeave={() => setHoveredCompany(null)}
                                style={{ transform: 'none' }}
                            >
                                <motion.button
                                    className="w-full h-full flex items-center justify-center"
                                    whileHover={{ y: -4 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() =>
                                        window.open(company.link, "_blank", "noopener,noreferrer")
                                    }
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="w-full h-full object-contain transition-all duration-300 brightness-0 invert opacity-70 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100"
                                    />
                                </motion.button>

                                <p className="mt-3 text-xs text-white/80 font-medium leading-tight">
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