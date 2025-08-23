import { motion } from "framer-motion";

export default function Hero() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 to-blue-600 text-white">
            {/* Floating circles / background accents */}
            <motion.div
                className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full"
                animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full"
                animate={{ x: [0, 30, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 max-w-3xl">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Let's Teach Our Sons{" "}
                    <span className="text-yellow-300">EARLY</span> What We{" "}
                    <span className="text-pink-300">LEARNT Late</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-100 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Empowering the boychild through mentorship, growth, and positive masculinity.
                </motion.p>

                <motion.div
                    className="flex flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                >
                    <button
                        onClick={() => scrollToSection("about")}
                        className="px-6 py-3 bg-white text-red-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
                    >
                        Learn More
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="px-6 py-3 bg-transparent border border-white font-semibold rounded-xl hover:bg-white/20 transition"
                    >
                        Get Involved
                    </button>
                </motion.div>
            </div>
        </section>
    );
}