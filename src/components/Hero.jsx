// src/components/sections/Hero.jsx
import { useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AnimatedGrid = () => (
    <div className="absolute inset-0 overflow-hidden opacity-[0.07] dark:opacity-[0.12]">
        <svg className="absolute h-full w-full" preserveAspectRatio="none">
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
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.35" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#modern-grid)" />
        </svg>
    </div>
);

export default function Hero() {
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

    const scrollToSection = useCallback((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <motion.section
            id="home"
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950"
        >
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.1),transparent_36%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.1),transparent_36%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/96 via-white/90 to-white dark:from-gray-950/96 dark:via-gray-950/90 dark:to-gray-950" />
                <div className="absolute left-0 top-0 h-full w-2 bg-red-600" />
            </div>

            <AnimatedGrid />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-16 pt-24 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto max-w-6xl text-center"
                >
                    <div className="mx-auto mb-8 h-1.5 w-24 bg-red-600" />
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-red-700 dark:text-red-400">
                        AppGlobal Group
                    </p>
                    <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                        Build resilient digital operations for healthcare, finance, and energy.
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-700 md:text-xl md:leading-9 dark:text-gray-300">
                        AppGlobal Group designs, integrates, and supports enterprise platforms that help organizations modernize service delivery without losing operational control.
                    </p>
                </motion.div>

                <motion.button
                    onClick={() => scrollToSection("about")}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 transition-colors duration-300 hover:text-red-600 dark:text-gray-600 dark:hover:text-red-400"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    aria-label="Scroll to next section"
                >
                    <ChevronDown className="h-8 w-8" />
                </motion.button>
            </div>
        </motion.section>
    );
}
