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

    // ⏳ Auto-scroll tagline
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % companies.length);
        }, 4000); // change every 4s
        return () => clearInterval(interval);
    }, []);

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
                {/* Static Title */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
                    Welcome to AppGlobal Group
                </h1>

                {/* Scrolling Tagline */}
                <div className="h-16 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
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
                    </AnimatePresence>
                </div>

                {/* Logos (pushed downwards with mt-32) */}
                <div className="flex flex-wrap justify-center gap-10 mt-32">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            className="cursor-pointer p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-lg shadow-lg"
                            onClick={() => window.open(company.link, "_blank")}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="h-12 w-auto object-contain mx-auto transition-transform duration-300 hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
