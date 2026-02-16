// src/components/ThemeLayout.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

// ==================== Sub-components ====================

const FloatingParticle = ({ delay = 0, size = 1, color = "purple" }) => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;

    return (
        <motion.div
            className={`absolute rounded-full bg-${color}-200 dark:bg-${color}-600/20`}
            style={{
                width: `${size * 4}px`,
                height: `${size * 4}px`,
                left: `${randomX}%`,
                top: `${randomY}%`,
                filter: "blur(8px)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
            }}
            transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
            }}
        />
    );
};

const GridPattern = () => (
    <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="theme-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                    d="M 40 0 L 0 0 0 40"
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
        <rect width="100%" height="100%" fill="url(#theme-grid)" />
    </svg>
);

const GlowOrb = ({ position, color, delay = 0 }) => (
    <motion.div
        className={`absolute w-96 h-96 rounded-full bg-${color}-200 dark:bg-${color}-600/20 blur-3xl`}
        style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
        }}
        transition={{
            duration: 20 + delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
);

// ==================== Main Component ====================

export default function ThemeLayout({ children }) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Handle mounting to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Animation variants
    const pageVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        },
        exit: { opacity: 0 }
    };

    const contentVariants = {
        initial: { y: 20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    if (!mounted) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={theme}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden"
            >
                {/* Animated gradient background */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Base gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />

                    {/* Animated gradient overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-200/30 via-transparent to-pink-200/30 dark:from-purple-600/5 dark:via-transparent dark:to-pink-600/5"
                        animate={{
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </div>

                {/* Grid pattern */}
                <GridPattern />

                {/* Floating orbs */}
                <GlowOrb position={{ x: "10%", y: "20%" }} color="purple" delay={0} />
                <GlowOrb position={{ x: "90%", y: "80%" }} color="pink" delay={5} />
                <GlowOrb position={{ x: "50%", y: "50%" }} color="indigo" delay={10} />

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <FloatingParticle
                        key={i}
                        delay={i * 0.5}
                        size={Math.random() * 2 + 0.5}
                        color={i % 3 === 0 ? "purple" : i % 3 === 1 ? "pink" : "indigo"}
                    />
                ))}

                {/* Radial gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-transparent dark:from-purple-600/5" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-200/20 via-transparent to-transparent dark:from-pink-600/5" />

                {/* Noise texture overlay */}
                <div
                    className="absolute inset-0 opacity-5 dark:opacity-10 mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '200px 200px',
                    }}
                />

                {/* Page content with fade-in animation */}
                <motion.main
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    className="relative z-10"
                >
                    {children}
                </motion.main>

                {/* Scroll progress indicator */}
                <motion.div
                    className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 z-50"
                    style={{ scaleX: 0, transformOrigin: "0%" }}
                    animate={{
                        scaleX: typeof window !== 'undefined'
                            ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
                            : 0
                    }}
                    transition={{ duration: 0.1 }}
                />
            </motion.div>
        </AnimatePresence>
    );
}