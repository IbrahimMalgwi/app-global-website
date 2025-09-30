// src/components/About.jsx
import React from "react";
import aboutImage from "../assets/images/about.jpeg";
// 1. Import your new theme-based components and utilities
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { Card } from "./UI/Card";
import { GradientCard } from "./UI/GradientCard";
import { typography } from "../theme/typography";
import colors from "../theme/colors";

export default function About() {
    return (
        <section id="about">
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 lg:px-20 py-20 overflow-hidden">

                {/* 2. Use the new animated background component */}
                <AnimatedBackground />

                {/* Main Content */}
                <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
                    {/* 3. Use typography for the heading */}
                    <h2 className={`${typography.h1} mb-16 ${colors.text.primary} dark:text-white`}>
                        About <span className={`bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent`}>Us</span>
                    </h2>

                    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mb-16">
                        {/* 4. Use the new Card component */}
                        <Card className="w-full lg:w-1/2 max-w-2xl mb-12 lg:mb-0">
                            <div className="relative flex items-center justify-center mb-8">
                                <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full blur-xl opacity-40 dark:from-purple-600 dark:to-indigo-600 dark:opacity-20"></div>
                            </div>

                            {/* 5. Use typography and colors for text */}
                            <p className={`${typography.body} mb-6 dark:text-gray-300`}>
                                <span className={`font-semibold ${colors.text.accent.purple} dark:text-purple-400`}>APPGLOBAL TECHNOLOGIES LIMITED</span>{" "}
                                is an Information Technology Company with software development and networking as its core business. The company has made rapid and phenomenal growth in diverse spheres of business, services and solutions.
                            </p>
                            <p className={`${typography.body} dark:text-gray-300`}>
                                We strongly believe in endowing our customers with apex-level services round the clock. We provides consultancy and outsourced goods and services across the globe, from conception to design, to development of technology solutions for business of all types. With a proficient workforce, we use a low-risk Global Delivery Model (GDM) to accelerate deployment.
                            </p>
                        </Card>

                        {/* 6. Another Card for the image */}
                        <Card className="w-full lg:w-1/2 max-w-2xl">
                            {/* Image with container - using the gradient from colors.js */}
                            <div className={`relative z-10 p-2 bg-gradient-to-r ${colors.gradients.secondary} rounded-2xl shadow-lg transform hover:scale-105 transition duration-700 dark:from-purple-900 dark:to-pink-900`}>
                                <div className="overflow-hidden rounded-xl">
                                    <img
                                        src={aboutImage}
                                        alt="A diverse team of professionals celebrating"
                                        className="w-full h-auto rounded-xl object-cover transform hover:scale-110 transition duration-1000"
                                    />
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg dark:shadow-gray-900">
                                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                                    </svg>
                                </div>

                                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg dark:shadow-gray-900">
                                    <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M21 16.42v3.536a1 1 0 01-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 014.044 3H7.58a.5.5 0 01.498.45c.023.23.05.455.082.675A14.943 14.943 0 009.35 7.724a.5.5 0 01-.142.464l-1.71 1.709a12 12 0 005.321 5.321l1.71-1.71a.5.5 0 01.463-.141 14.943 14.943 0 003.6.19c.22.032.445.06.675.082a.5.5 0 01.45.498z" />
                                    </svg>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* 7. Stats Section using the new GradientCard component */}
                    <div className="flex flex-wrap justify-center gap-6 mt-12 px-4">
                        <GradientCard
                            color="purple"
                            number="50+"
                            title="Projects"
                            subtitle="Completed"
                        />
                        <GradientCard
                            color="pink"
                            number="15+"
                            title="Partners"
                            subtitle="Worldwide"
                        />
                        <GradientCard
                            color="indigo"
                            number="10+"
                            title="Years"
                            subtitle="Experience"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}