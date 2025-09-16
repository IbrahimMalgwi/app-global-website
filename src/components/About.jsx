import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Globe, Shield, Clock } from "lucide-react";
import aboutImage from "../assets/images/about.jpeg";

const About = () => {
    return (
        <section
            id="about"
            className="bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden py-20 lg:py-28"
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-emerald-200/20 dark:bg-emerald-900/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                    <motion.div
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">About AppGlobal</span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Shaping the Future of Technology
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Pioneering innovation across technology, payments, and infrastructure to build a connected future for Africa and beyond.
                    </motion.p>

                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    />
                </div>

                {/* Main Content Section - Equal height layout */}
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left: Mission and Vision Cards */}
                    <div className="flex flex-col justify-between h-full space-y-8">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg transition-all duration-300 h-full flex flex-col justify-center"
                        >
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center p-3 shadow-lg">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                                        Our Mission
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, type: "spring" }}
                                            className="text-blue-500"
                                        >
                                            ●
                                        </motion.span>
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        To achieve the reputation of a quality, high standard & reliable solution provider in the ICT industry,
                                        with 100% customer satisfaction at all times through innovative technology solutions that transform businesses.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg transition-all duration-300 h-full flex flex-col justify-center"
                        >
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center p-3 shadow-lg">
                                    <Eye className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                                        Our Vision
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.7, type: "spring" }}
                                            className="text-purple-500"
                                        >
                                            ●
                                        </motion.span>
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        To become a leading Technology solution provider in Africa and beyond, driving digital transformation
                                        and empowering communities through cutting-edge innovations that bridge the technological divide.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Image with equal height */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative w-full h-full flex items-stretch"
                    >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={aboutImage}
                                alt="About AppGlobal Technologies"
                                className="w-full h-full object-cover"
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

                            {/* Content overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: 0.7 }}
                                    className="text-white"
                                >
                                    <h4 className="text-lg font-semibold mb-1">AppGlobal Technologies</h4>
                                    <p className="text-sm opacity-90">Leading digital transformation since 2010</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg transition-all duration-300"
                >
                    <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center p-3 shadow-lg">
                            <Award className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                Our Values
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.9, type: "spring" }}
                                    className="text-violet-500"
                                >
                                    ●
                                </motion.span>
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-blue-500" />
                                    <span className="text-gray-600 dark:text-gray-300">Integrity</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-purple-500" />
                                    <span className="text-gray-600 dark:text-gray-300">Collaboration</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-600 dark:text-gray-300">Innovation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-orange-500" />
                                    <span className="text-gray-600 dark:text-gray-300">Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { number: "13+", label: "Years Experience", icon: <Clock className="w-5 h-5" /> },
                        { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
                        { number: "200+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
                        { number: "15+", label: "Countries Served", icon: <Globe className="w-5 h-5" /> }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 * index, duration: 0.5 }}
                        >
                            <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                                {stat.icon}
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-1">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;