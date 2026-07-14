// src/components/ThemeLayout.jsx
import React from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const GridPattern = () => (
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:56px_56px] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
);

// ==================== Main Component ====================

export default function ThemeLayout({ children }) {
    const { theme } = useTheme();
    const { scrollYProgress } = useScroll();

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

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={theme}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="min-h-screen bg-white dark:bg-gray-950 relative overflow-hidden"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-white dark:bg-gray-950" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.06),transparent_36%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_36%)]" />
                </div>

                <GridPattern />

                {/* Noise texture overlay */}
                <div
                    className="absolute inset-0 opacity-[0.035] dark:opacity-[0.08] mix-blend-overlay pointer-events-none"
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
                    className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-amber-500 z-50"
                    style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                />
            </motion.div>
        </AnimatePresence>
    );
}
