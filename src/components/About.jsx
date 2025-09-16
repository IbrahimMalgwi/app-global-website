import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.jpeg";

const About = () => {
    return (
        <section
            id="about"
            className="bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
                {/* Caption centered horizontally */}
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Our Mission and Vision
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Pioneering innovation across technology, payments, and infrastructure to build a connected future.
                    </motion.p>
                </div>

                {/* Bottom Section: Mission/Vision + Image */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Mission and Vision Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="p-6 sm:p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center p-2 shadow-lg text-2xl">
                                    🚀
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                        Our Mission
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                        To achieve the reputation of a quality, high standard & reliable solution provider in the ICT industry, with 100% customer satisfaction at all times.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.7 }}
                            className="p-6 sm:p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center p-2 shadow-lg text-2xl">
                                    🌐
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                        Our Vision
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                        To become a leading Technology solution provider in Africa and beyond.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
                    >
                        <div className="relative w-80 sm:w-96 md:w-[550px] lg:w-full max-w-md lg:max-w-xl rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src={aboutImage}
                                alt="About AppGlobal"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-violet-600/10 group-hover:opacity-0 transition-opacity duration-500"></div>
                            <div className="absolute -top-6 -right-6 w-28 h-28 bg-blue-500/10 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-purple-500/10 rounded-full blur-xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
