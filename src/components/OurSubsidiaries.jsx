// src/components/OurSubsidiaries.jsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    MoveRight,
    Sparkles
} from "lucide-react";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { subsidiaries } from "../data/subsidiaries";

const AUTO_ROTATE_INTERVAL = 6000;
const SWIPE_THRESHOLD = 100;
const VISIBLE_COMPANIES = 5;

const getVisibleIndexes = (selectedIndex) => {
    const indexes = [];

    for (let offset = 0; offset < Math.min(VISIBLE_COMPANIES, subsidiaries.length); offset += 1) {
        indexes.push((selectedIndex + offset) % subsidiaries.length);
    }

    return indexes;
};

const OurSubsidiaries = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const intervalRef = useRef(null);
    const selectedSubsidiary = subsidiaries[selectedIndex];
    const visibleIndexes = getVisibleIndexes(selectedIndex);

    const selectSubsidiary = useCallback((index, nextDirection = 1) => {
        setDirection(nextDirection);
        setSelectedIndex(index);
    }, []);

    const goNext = useCallback(() => {
        selectSubsidiary((selectedIndex + 1) % subsidiaries.length, 1);
    }, [selectSubsidiary, selectedIndex]);

    const goPrev = useCallback(() => {
        selectSubsidiary((selectedIndex - 1 + subsidiaries.length) % subsidiaries.length, -1);
    }, [selectSubsidiary, selectedIndex]);

    const stopAutoRotate = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const startAutoRotate = useCallback(() => {
        stopAutoRotate();
        intervalRef.current = setInterval(goNext, AUTO_ROTATE_INTERVAL);
    }, [goNext, stopAutoRotate]);

    useEffect(() => {
        startAutoRotate();

        return stopAutoRotate;
    }, [startAutoRotate, stopAutoRotate]);

    const handleSelect = (index) => {
        selectSubsidiary(index, index >= selectedIndex ? 1 : -1);
        startAutoRotate();
    };

    const handlePrevious = () => {
        goPrev();
        startAutoRotate();
    };

    const handleNext = () => {
        goNext();
        startAutoRotate();
    };

    const imageVariants = {
        enter: (slideDirection) => ({
            opacity: 0,
            scale: 1.04,
            x: slideDirection > 0 ? 60 : -60
        }),
        center: {
            opacity: 1,
            scale: 1,
            x: 0
        },
        exit: (slideDirection) => ({
            opacity: 0,
            scale: 0.98,
            x: slideDirection > 0 ? -60 : 60
        })
    };

    return (
        <section
            id="subsidiaries"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-50 py-20 dark:bg-black"
            onMouseEnter={stopAutoRotate}
            onMouseLeave={startAutoRotate}
        >
            <AnimatedBackground variant="gradient" density="medium" />

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-32 top-12 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-700/10" />
                <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl dark:bg-pink-700/10" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 shadow-sm backdrop-blur-xl dark:border-purple-500/30 dark:bg-white/5">
                            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-xs font-medium tracking-wide text-gray-700 md:text-sm dark:text-white/90">
                                Our Portfolio
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Our{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Subsidiaries
                                </span>
                                <motion.div
                                    initial={{ width: 0, left: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="absolute bottom-0 h-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                                />
                            </span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-white/60">
                            Explore the companies and platforms in the AppGlobal ecosystem, each designed to solve a specific operational challenge.
                        </p>
                    </motion.div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white/90 shadow-xl shadow-purple-900/10 backdrop-blur-xl dark:border-gray-700 dark:bg-gray-800/90">
                    <div className="grid lg:grid-cols-[320px_1fr]">
                        <aside className="border-b border-gray-200 bg-gray-50/80 p-4 lg:border-b-0 lg:border-r dark:border-gray-800 dark:bg-black/20">
                            <div className="mb-3 flex items-center justify-between px-2">
                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-500">
                                    Browse solutions
                                </span>
                                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                                    {String(selectedIndex + 1).padStart(2, "0")} / {String(subsidiaries.length).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
                                {visibleIndexes.map((index) => {
                                    const subsidiary = subsidiaries[index];
                                    const isSelected = index === selectedIndex;

                                    return (
                                        <button
                                            key={`${subsidiary.name}-${index}`}
                                            type="button"
                                            onClick={() => handleSelect(index)}
                                            className={`group relative min-w-[220px] overflow-hidden rounded-xl border px-4 py-4 text-left transition-all duration-300 lg:w-full ${
                                                isSelected
                                                    ? "border-purple-200 bg-white shadow-md dark:border-purple-500/40 dark:bg-white/10"
                                                    : "border-transparent hover:border-gray-200 hover:bg-white/70 dark:hover:border-gray-700 dark:hover:bg-white/5"
                                            }`}
                                        >
                                            {isSelected && (
                                                <motion.div
                                                    layoutId="active-subsidiary"
                                                    className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-purple-600 to-pink-500"
                                                />
                                            )}
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={subsidiary.logo}
                                                    alt=""
                                                    className="h-10 w-10 rounded-xl object-cover shadow-sm"
                                                />
                                                <div className="min-w-0">
                                                    <p className={`truncate text-sm font-bold ${isSelected ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}>
                                                        {subsidiary.name}
                                                    </p>
                                                    <p className="mt-1 truncate text-xs text-gray-500 dark:text-gray-500">
                                                        {subsidiary.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="mt-4 flex items-center justify-between px-2">
                                <p className="text-xs text-gray-500 dark:text-gray-500">Auto-switches every 6s</p>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={handlePrevious}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-purple-300 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                        aria-label="Previous subsidiary"
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-white transition hover:bg-purple-700"
                                        aria-label="Next subsidiary"
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </aside>

                        <motion.div
                            className="grid min-h-[560px] md:grid-cols-[1.05fr_0.95fr]"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(_, { offset, velocity }) => {
                                if (Math.abs(offset.x * velocity.x) > SWIPE_THRESHOLD) {
                                    offset.x > 0 ? handlePrevious() : handleNext();
                                }
                            }}
                        >
                            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={`${selectedSubsidiary.name}-copy`}
                                        custom={direction}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -12 }}
                                        transition={{ duration: 0.35 }}
                                    >
                                        <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                                            <Sparkles className="h-4 w-4" />
                                            Featured solution
                                        </div>

                                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
                                            {selectedSubsidiary.subtitle}
                                        </p>
                                        <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                                            {selectedSubsidiary.name}
                                        </h3>
                                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400">
                                            {selectedSubsidiary.description}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="mt-10">
                                    <div className="mb-8 flex flex-wrap gap-3">
                                        {["Purpose-built", "Scalable", "Business-ready"].map((feature) => (
                                            <span
                                                key={feature}
                                                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:bg-white/5 dark:text-gray-300"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={selectedSubsidiary.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-purple-500/50"
                                    >
                                        Explore solution
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </div>
                            </div>

                            <div className="relative min-h-[320px] overflow-hidden bg-gray-900 md:min-h-full">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.img
                                        key={selectedSubsidiary.image}
                                        src={selectedSubsidiary.image}
                                        alt={selectedSubsidiary.name}
                                        custom={direction}
                                        variants={imageVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">AppGlobal ecosystem</p>
                                    <div className="mt-2 flex items-center justify-between gap-4">
                                        <p className="max-w-sm text-lg font-semibold text-white">
                                            Technology that moves organizations forward.
                                        </p>
                                        <MoveRight className="h-6 w-6 shrink-0 text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-2">
                    {subsidiaries.map((subsidiary, index) => (
                        <button
                            key={`${subsidiary.name}-progress`}
                            type="button"
                            onClick={() => handleSelect(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                index === selectedIndex
                                    ? "w-10 bg-purple-600"
                                    : "w-4 bg-gray-300 hover:bg-purple-300 dark:bg-gray-700 dark:hover:bg-purple-700"
                            }`}
                            aria-label={`Show ${subsidiary.name}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurSubsidiaries;
