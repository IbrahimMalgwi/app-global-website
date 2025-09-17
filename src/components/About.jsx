import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import aboutImage from "../assets/images/about.jpeg";

const About = () => {
    return (
        <>
            {/* About Section - Full Viewport */}
            <section
                id="about"
                className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
            >
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content - Left Side */}
                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                About Us
                            </motion.h2>
                            <motion.p
                                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                We are a multi-faceted business dedicated to providing innovative technology solutions
                                tailored to key sectors in the African economy. Our approach empowers growth and drives
                                impactful results for both government and private organizations.
                            </motion.p>
                        </motion.div>

                        {/* Image - Right Side */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={aboutImage}
                                    alt="About AppGlobal Technologies"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-violet-600/20"></div>

                                {/* Floating elements */}
                                <motion.div
                                    className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
                                    animate={{
                                        y: [0, -10, 0],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
                                    animate={{
                                        y: [0, 10, 0],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section - Full Viewport */}
            <section
                id="mission"
                className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-violet-50 to-slate-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"
            >
                <div className="container mx-auto max-w-6xl">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Mission & Vision
                    </motion.h2>

                    <motion.div
                        className="flex flex-col lg:flex-row justify-center gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {/* Mission Card */}
                        <motion.div
                            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex-1 max-w-md border border-white/30 dark:border-gray-700/30"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center p-3 shadow-lg">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                To achieve a global reputation for delivering user-friendly, innovative technology
                                solutions that address challenges in public and private sectors.
                            </p>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex-1 max-w-md border border-white/30 dark:border-gray-700/30"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center p-3 shadow-lg">
                                    <Eye className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Vision</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                To nurture and accelerate innovative ideas into thriving companies while delivering
                                impactful solutions across industries.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default About;