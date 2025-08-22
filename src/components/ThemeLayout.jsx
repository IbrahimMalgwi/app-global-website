import React from "react";
import { motion } from "framer-motion";

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
    const particles = [
        { left: "90.96%", top: "73.75%" },
        { left: "14.26%", top: "3.66%" },
        { left: "26.97%", top: "4.06%" },
        { left: "71.03%", top: "97.08%" },
        { left: "56.90%", top: "64.63%" },
        { left: "81.03%", top: "65.84%" },
        { left: "34.33%", top: "96.31%" },
        { left: "8.62%", top: "99.87%" },
        { left: "72.65%", top: "68.02%" },
        { left: "20.06%", top: "38.28%" },
        { left: "46.63%", top: "76.59%" },
        { left: "22.50%", top: "89.72%" },
        { left: "74.56%", top: "89.83%" },
        { left: "40.83%", top: "47.86%" },
        { left: "7.43%", top: "5.97%" },
        { left: "9.27%", top: "82.26%" },
        { left: "48.34%", top: "13.89%" },
        { left: "46.01%", top: "4.62%" },
        { left: "86.75%", top: "53.70%" },
        { left: "60.86%", top: "31.76%" },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-violet-900/20 to-green-900/20" />
            </div>

            {/* Floating Particles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {particles.map((dot, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full opacity-30"
                        style={{ left: dot.left, top: dot.top }}
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </div>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
                <button
                    aria-label="Chat with support"
                    className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2..." />
                    </svg>
                </button>

                <button
                    aria-label="Open dashboard"
                    className="w-14 h-14 rounded-full bg-violet-500 hover:bg-violet-600 shadow-lg flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <rect width="16" height="12" x="4" y="8" rx="2" />
                        <path d="M12 8V4H8" />
                    </svg>
                </button>
            </div>

            {/* Page content */}
            <main className="relative z-10">{children}</main>
        </div>
    );
}
