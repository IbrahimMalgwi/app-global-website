import React from "react";
import { motion } from "framer-motion";
import about from "../assets/images/about.png"

const About = () => {
    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 relative"
        >
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            About AppGlobal Group
                        </h2>

                        <div className="space-y-8">
                            {/* Mission */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
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
                                        className="w-6 h-6 text-blue-600"
                                    >
                                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                                    </svg>
                                    Our Mission
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    To achieve the reputation of a quality, high standard & reliable solution provider in the ICT industry, with 100% customer satisfaction at all times.
                                </p>
                            </div>

                            {/* Vision */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
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
                                        className="w-6 h-6 text-green-600"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                        <path d="M2 12h20"></path>
                                    </svg>
                                    Our Vision
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    To become a leading Technology solution provider in Africa and beyond.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src={about}
                            alt="About Us"
                            className="rounded-2xl shadow-2xl w-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-violet-600/20 rounded-2xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
