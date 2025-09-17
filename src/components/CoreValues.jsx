import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Users, Globe, Clock } from "lucide-react";

const CoreValues = () => {
    return (
        <section
            id="values"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Core Values
            </motion.h2>

            <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                Driving innovation through our <strong className="text-blue-600 dark:text-blue-400">APPGLOBAL</strong> principles
            </motion.p>

            {/* Resourcefulness Card */}
            <motion.div
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-md mx-auto mb-8 border border-white/30 dark:border-gray-700/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center p-3 shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Resourcefulness</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We thrive by finding innovative solutions to problems using available resources.
                </p>
            </motion.div>

            {/* BRAINSTORM Letters */}
            <motion.div
                className="flex justify-center gap-3 text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-400 mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                {["A", "P", "P", "G", "L", "O", "B", "A", "L"].map((letter, index) => (
                    <span
                        key={index}
                        className={letter === "R" ? "text-blue-600 dark:text-blue-400" : ""}
                    >
                        {letter}
                    </span>
                ))}
            </motion.div>

            {/* Stats Section */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                {[
                    { number: "13+", label: "Years Experience", icon: <Clock className="w-5 h-5" /> },
                    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
                    { number: "200+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
                    { number: "15+", label: "Countries Served", icon: <Globe className="w-5 h-5" /> }
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
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
        </section>
    );
};

export default CoreValues;