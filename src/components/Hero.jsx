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
        description:
            "Leading provider of enterprise software and healthcare solutions.",
        link: "https://appglobaltechnologies.com",
    },
    {
        name: "AppGlobal Payment Solutions",
        logo: appGlobalPayLogo,
        description:
            "Innovative payment solutions enabling seamless global transactions.",
        link: "https://appglobalpay.com",
    },
    {
        name: "Globalshell Resources Infrastructure",
        logo: appGlobalShellLogo,
        description:
            "Powering digital infrastructure, cloud, and energy services.",
        link: "https://appglobalshell.com",
    },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredCompany, setHoveredCompany] = useState(null);

    // ⏳ Auto-scroll tagline (stops when hovering)
    useEffect(() => {
        if (hoveredCompany !== null) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % companies.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [hoveredCompany]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                poster={fallbackImage}
                className="absolute inset-0 w-full h-full object-cover opacity-70"
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-black/60 to-violet-900/60 z-0" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl">
                <AnimatePresence mode="wait">
                    {hoveredCompany === null ? (
                        // 👇 Default Welcome Section
                        <motion.div
                            key="welcome"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -30 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="mb-16"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
                                Welcome to AppGlobal Group
                            </h1>
                            <motion.p
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8 }}
                                className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto"
                            >
                                {companies[currentIndex].description}
                            </motion.p>
                        </motion.div>
                    ) : (
                        // 👇 On Hover - Company Info Section
                        <motion.div
                            key="hovered"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1.05, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -30 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                                {companies[hoveredCompany].name}
                            </h2>
                            <p className="text-md md:text-xl text-gray-200 max-w-2xl mx-auto">
                                {companies[hoveredCompany].description}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Logos */}
                <div className="flex flex-wrap justify-center gap-14 mt-44">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            className="cursor-pointer p-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-lg shadow-lg"
                            onMouseEnter={() => setHoveredCompany(index)}
                            onMouseLeave={() => setHoveredCompany(null)}
                            onClick={() => window.open(company.link, "_blank")}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.15,
                                rotate: 5,
                                boxShadow: "0px 0px 30px rgba(255,255,255,0.6)",
                            }}
                            whileTap={{ scale: 0.95, rotate: -2 }}
                        >
                            <motion.img
                                src={company.logo}
                                alt={company.name}
                                className="h-14 w-auto object-contain mx-auto"
                                animate={{ opacity: [0.9, 1, 0.9] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.3,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
