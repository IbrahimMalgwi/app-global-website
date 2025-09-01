import React from "react";
import { motion } from "framer-motion";

export default function ThemeLayout({ children }) {
    // Base particle positions
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

    // Possible color variations
    const colors = [
        "from-blue-400 to-violet-400",
        "from-teal-400 to-blue-400",
        "from-purple-400 to-pink-400",
        "from-green-400 to-teal-400",
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-violet-900/20 to-green-900/20" />
            </div>

            {/* Floating Particles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {particles.map((dot, i) => {
                    // Randomize size (small, medium, large)
                    const size = `${Math.floor(Math.random() * 6) + 3}px`; // 3px – 8px
                    // Random color
                    const color = colors[Math.floor(Math.random() * colors.length)];

                    return (
                        <motion.div
                            key={i}
                            className={`absolute rounded-full opacity-40 bg-gradient-to-r ${color}`}
                            style={{
                                left: dot.left,
                                top: dot.top,
                                width: size,
                                height: size,
                            }}
                            animate={{
                                y: [0, -15, 10, 0],  // float up/down
                                x: [0, 8, -8, 0],    // gentle side sway
                                scale: [1, 1.4, 1],  // pulsing
                                opacity: [0.2, 0.7, 0.3, 0.6], // twinkle
                            }}
                            transition={{
                                duration: 6 + Math.random() * 6, // 6–12s per loop
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3,
                            }}
                        />
                    );
                })}
            </div>

            {/* Page content */}
            <main className="relative z-10">{children}</main>
        </div>
    );
}
