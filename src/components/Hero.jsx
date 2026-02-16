// src/components/sections/Hero.jsx
import { useState, useEffect, useCallback, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ChevronDown,
    Zap,
    Globe,
    TrendingUp,
    Code2,
    Cpu,
    Sparkles,
    ArrowRight,
    CheckCircle
} from "lucide-react";
import backgroundVideo from "../assets/videos/appglobal-background.mp4";
import fallbackImage from "../assets/images/hero-fallback.jpg";

// Logos - using native img with lazy loading
import appGlobalTechLogo from "../assets/images/appglobal-tech.jpeg";
import appGlobalPayLogo from "../assets/images/appglobal-pay.jpeg";
import appGlobalShellLogo from "../assets/images/appglobal-shell.jpeg";

// Constants
const COMPANIES = [
    {
        id: 'tech',
        name: "AppGlobal Technologies",
        logo: appGlobalTechLogo,
        description: "Enterprise Software & Healthcare",
        link: "https://appglobaltechnologies.com",
        icon: Cpu,
        gradient: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-400"
    },
    {
        id: 'pay',
        name: "AppGlobal Payment Solutions",
        logo: appGlobalPayLogo,
        description: "Global Payment Innovation",
        link: "https://appglobalpay.com",
        icon: TrendingUp,
        gradient: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-400"
    },
    {
        id: 'shell',
        name: "Globalshell Resources",
        logo: appGlobalShellLogo,
        description: "Cloud & Energy Services",
        link: "https://appglobalshell.com",
        icon: Zap,
        gradient: "from-amber-500/20 to-orange-500/20",
        iconColor: "text-amber-400"
    },
];

const STATS = [
    { number: "500", label: "Active Clients", suffix: "+", delay: 0.8 },
    { number: "50", label: "Countries Served", suffix: "+", delay: 0.9 },
    { number: "99.9", label: "Uptime SLA", suffix: "%", delay: 1.0 },
];

const FLOATING_ICONS = [
    { Icon: Code2, position: { x: "5%", y: "10%" }, delay: 0, rotation: 10 },
    { Icon: Globe, position: { x: "85%", y: "15%" }, delay: 1, rotation: -5 },
    { Icon: TrendingUp, position: { x: "10%", y: "75%" }, delay: 2, rotation: 15 },
    { Icon: Zap, position: { x: "80%", y: "70%" }, delay: 1.5, rotation: -10 },
];

// ==================== Sub-components ====================

const StatCounter = memo(({ number, label, suffix = "+", delay }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const target = parseInt(number);
        let timeoutId;
        let intervalId;

        const startCounter = () => {
            intervalId = setInterval(() => {
                setCount(prev => {
                    if (prev >= target) {
                        clearInterval(intervalId);
                        return target;
                    }
                    return prev + Math.ceil(target / 40);
                });
            }, 30);
        };

        timeoutId = setTimeout(startCounter, delay * 1000);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [number, delay]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            className="text-center group"
        >
            <div className="relative">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                    {count}{suffix}
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <p className="text-sm md:text-base text-white/60 mt-2 font-medium tracking-wide">
                {label}
            </p>
        </motion.div>
    );
});

StatCounter.displayName = 'StatCounter';

const CompanyCard = memo(({ company, index }) => {
    const IconComponent = company.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 + index * 0.15, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group relative h-full"
        >
            <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-500">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${company.gradient} flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300`}>
                            <IconComponent className={`w-6 h-6 ${company.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300">
                            {/* Using native img with loading="lazy" instead of LazyLoadImage */}
                            <img
                                src={company.logo}
                                alt={company.name}
                                loading="lazy"
                                className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Body */}
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                        {company.name}
                    </h3>
                    <p className="text-sm text-white/60 mb-4 flex-grow">
                        {company.description}
                    </p>

                    {/* Footer */}
                    <motion.button
                        onClick={() => window.open(company.link, "_blank", "noopener,noreferrer")}
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 group/btn"
                    >
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
});

CompanyCard.displayName = 'CompanyCard';

const FloatingIcon = memo(({ Icon, position, delay, rotation }) => (
    <motion.div
        className="absolute w-16 h-16 md:w-20 md:h-20"
        style={{ left: position.x, top: position.y }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay, duration: 1 }}
    >
        <motion.div
            className="relative w-full h-full"
            animate={{
                y: [0, -20, 0],
                rotate: [0, rotation, 0],
            }}
            transition={{
                duration: 5 + delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl" />
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-purple-400/80" />
            </div>
        </motion.div>
    </motion.div>
));

FloatingIcon.displayName = 'FloatingIcon';

const AnimatedGrid = memo(() => (
    <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute w-full h-full" preserveAspectRatio="none">
            <defs>
                <pattern id="modern-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path
                        d="M 60 0 L 0 0 0 60"
                        fill="none"
                        stroke="url(#grid-gradient)"
                        strokeWidth="0.5"
                    />
                </pattern>
                <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#modern-grid)" />
        </svg>
    </div>
));

AnimatedGrid.displayName = 'AnimatedGrid';

// ==================== Main Component ====================

export default function Hero() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const { scrollYProgress } = useScroll();

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
    const heroBlur = useTransform(scrollYProgress, [0, 0.2], [0, 8]);

    const handleVideoLoaded = useCallback(() => {
        setIsVideoLoaded(true);
    }, []);

    const handleVideoError = useCallback(() => {
        setVideoError(true);
        setIsVideoLoaded(true);
    }, []);

    const scrollToSection = useCallback((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <motion.section
            id="home"
            style={{ opacity: heroOpacity, scale: heroScale, filter: `blur(${heroBlur}px)` }}
            className="relative min-h-screen overflow-hidden bg-black"
        >
            {/* Background with parallax effect */}
            <div className="absolute inset-0 w-full h-full">
                {!videoError ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster={fallbackImage}
                        onLoadedData={handleVideoLoaded}
                        onError={handleVideoError}
                        className="w-full h-full object-cover scale-105"
                        style={{ filter: 'brightness(0.7)' }}
                    >
                        <source src={backgroundVideo} type="video/mp4" />
                    </video>
                ) : (
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${fallbackImage})` }}
                    />
                )}

                {/* Enhanced overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </div>

            {/* Animated elements */}
            <AnimatedGrid />

            {/* Floating icons - only show after video loads */}
            {isVideoLoaded && FLOATING_ICONS.map((item, index) => (
                <FloatingIcon key={index} {...item} />
            ))}

            {/* Loading state */}
            {!isVideoLoaded && !videoError && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <div className="relative">
                            <div className="w-16 h-16 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
                            <Sparkles className="w-6 h-6 text-purple-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                        </div>
                        <p className="text-white/80 font-medium">Preparing experience...</p>
                    </motion.div>
                </div>
            )}

            {/* Main content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Top badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-purple-500/30">
                            <div className="relative">
                                <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping absolute" />
                                <div className="w-2 h-2 rounded-full bg-purple-400 relative" />
                            </div>
                            <span className="text-xs md:text-sm text-white/90 font-medium tracking-wide">
                Next Generation Technology Platform
              </span>
                        </div>
                    </motion.div>

                    {/* Hero heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.2] tracking-tight">
                            Transform Global{" "}
                            <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Business Operations
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl opacity-50" />
              </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
                            Enterprise-grade solutions for healthcare, fintech, and energy.
                            Trusted by industry leaders worldwide to drive digital transformation.
                        </p>
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => scrollToSection('services')}
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
                        >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center gap-2 group"
                        >
                            <CheckCircle className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                            Schedule Demo
                        </motion.button>
                    </motion.div>

                    {/* Stats section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-3 gap-4 md:gap-12 mb-20 max-w-3xl mx-auto"
                    >
                        {STATS.map((stat) => (
                            <StatCounter key={stat.label} {...stat} />
                        ))}
                    </motion.div>

                    {/* Companies section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="mt-8"
                    >
                        <p className="text-xs md:text-sm text-white/50 tracking-[0.3em] text-center mb-8 uppercase">
                            Powering Innovation Across Industries
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {COMPANIES.map((company, index) => (
                                <CompanyCard key={company.id} company={company} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.button
                    onClick={() => scrollToSection('about')}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/80 transition-colors duration-300 group"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    aria-label="Scroll to next section"
                >
                    <div className="relative">
                        <ChevronDown className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </motion.button>
            </div>
        </motion.section>
    );
}