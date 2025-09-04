import React from "react";
import { motion } from "framer-motion";
import about from "../assets/images/about.png";

const About = () => {
    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        {/* Section Header */}
                        <div>
                            <motion.h2
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                About AppGlobal Group
                            </motion.h2>
                            <motion.p
                                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                Pioneering innovation across technology, payments, and infrastructure to build a connected future.
                            </motion.p>
                        </div>

                        <div className="space-y-8">
                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.7 }}
                                className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center p-2 shadow-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-6 h-6 text-white"
                                        >
                                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                                            Our Mission
                                        </h3>
                                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
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
                                className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center p-2 shadow-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-6 h-6 text-white"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                                            Our Vision
                                        </h3>
                                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                            To become a leading Technology solution provider in Africa and beyond.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src={about}
                                alt="AppGlobal Group - Innovative Technology Solutions"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-violet-600/10 group-hover:opacity-0 transition-opacity duration-500"></div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                        </div>

                        {/* Decorative stats or badges */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">10+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">3</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Companies</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Additional Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                        Why Choose AppGlobal?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation", desc: "Cutting-edge technology solutions", icon: "🚀" },
                            { title: "Reliability", desc: "Trusted by industry leaders", icon: "🛡️" },
                            { title: "Excellence", desc: "Commitment to quality service", icon: "⭐" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 * index }}
                                className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;