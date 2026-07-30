// src/components/OurSubsidiaries.jsx

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { subsidiaries } from "../data/subsidiaries";

const OurSubsidiaries = () => {
    return (
        <section
            id="subsidiaries"
            className="relative w-full overflow-hidden bg-gray-50 py-20 dark:bg-black"
        >
            <AnimatedBackground variant="gradient" density="medium" />

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-32 top-12 h-80 w-80 rounded-full bg-red-300/30 blur-3xl dark:bg-red-700/10" />
                <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-red-300/20 blur-3xl dark:bg-red-700/10" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 shadow-sm backdrop-blur-xl dark:border-red-500/30 dark:bg-white/5">
                            <Sparkles className="h-4 w-4 text-red-600 dark:text-red-400" />

                            <span className="text-xs font-medium tracking-wide text-gray-700 md:text-sm dark:text-white/90">
                                Our Portfolio
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Our{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                                    Subsidiaries
                                </span>

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5
                                    }}
                                    className="absolute bottom-0 left-0 h-1 rounded-full bg-gradient-to-r from-red-600 to-red-500"
                                />
                            </span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-white/60">
                            Explore the companies and platforms in the
                            AppGlobal ecosystem, each designed to solve a
                            specific operational challenge.
                        </p>
                    </motion.div>
                </div>

                {/* Three independent cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {subsidiaries.slice(0, 3).map((subsidiary, index) => (
                        <motion.article
                            key={subsidiary.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.12
                            }}
                            whileHover={{ y: -8 }}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-red-900/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-red-900/10 dark:border-gray-800 dark:bg-gray-900"
                        >
                            {/* Company image */}
                            <div className="relative h-64 overflow-hidden bg-gray-900">
                                <img
                                    src={subsidiary.image}
                                    alt={subsidiary.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                <div className="absolute left-5 top-5">
                                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white p-2 shadow-lg backdrop-blur-sm">
                                        <img
                                            src={subsidiary.logo}
                                            alt={`${subsidiary.name} logo`}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="absolute bottom-5 left-5 right-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                                        AppGlobal ecosystem
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold text-white">
                                        {subsidiary.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Card content */}
                            <div className="flex flex-1 flex-col p-6">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
                                        {subsidiary.subtitle}
                                    </p>

                                    <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                                        {subsidiary.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-8">
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {[
                                            "Purpose-built",
                                            "Scalable",
                                            "Business-ready"
                                        ].map((feature) => (
                                            <span
                                                key={feature}
                                                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:bg-white/5 dark:text-gray-300"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={subsidiary.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-red-700"
                                    >
                                        Explore solution

                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurSubsidiaries;