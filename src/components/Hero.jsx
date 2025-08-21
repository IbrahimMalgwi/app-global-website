import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        title: (
            <>
        <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-green-600 bg-clip-text text-transparent">
          Building Tomorrow&apos;s
        </span>
                <br />
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
          Digital Solutions
        </span>
            </>
        ),
        subtitle: "Today.",
        buttons: [
            {
                text: "Explore Solutions",
                gradient: "from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700",
            },
            { text: "Watch Demo", outlined: true, color: "blue" },
        ],
    },
    {
        title: (
            <>
        <span className="bg-gradient-to-r from-green-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
          Transforming Healthcare
        </span>
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
          With AI Innovation
        </span>
            </>
        ),
        subtitle: "Advanced EHR systems powered by artificial intelligence",
        buttons: [
            {
                text: "Discover GlobalCare EHR",
                gradient: "from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700",
            },
            { text: "View Case Studies", outlined: true, color: "green" },
        ],
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="images/futuristic-healthcare-background.png"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${current * 100}%` }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    >
                        {slides.map((slide, i) => (
                            <div key={i} className="basis-full px-4 flex-shrink-0">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50 }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-6"
                                >
                                    <motion.h1
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-6xl md:text-8xl font-bold mb-6"
                                    >
                                        {slide.title}
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto"
                                    >
                                        {slide.subtitle}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                    >
                                        {slide.buttons.map((btn, j) => (
                                            <button
                                                key={j}
                                                className={`inline-flex items-center justify-center gap-2 font-medium h-11 rounded-md px-8 py-4 text-lg transition-colors ${
                                                    btn.outlined
                                                        ? `border-2 border-${btn.color}-600 text-${btn.color}-600 hover:bg-${btn.color}-50 dark:border-${btn.color}-400 dark:text-${btn.color}-400 dark:hover:bg-${btn.color}-950`
                                                        : `bg-gradient-to-r ${btn.gradient} text-white`
                                                }`}
                                            >
                                                {btn.text}
                                            </button>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
