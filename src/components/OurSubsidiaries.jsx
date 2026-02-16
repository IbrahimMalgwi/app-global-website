// src/components/OurSubsidiaries.jsx
import React, { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSubsidiaryCarousel } from "../hooks/useSubsidiaryCarousel";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { subsidiaries } from "../data/subsidiaries";
import {
    ChevronLeft,
    ChevronRight,
    Sparkles,
    ExternalLink,
    Building2,
    Globe,
    Users,
    Award,
    MapPin,
    Calendar,
    Briefcase,
    TrendingUp,
    DollarSign,
    Clock,
    Zap,
    Target,
    Heart,
    Shield,
    Star,
    Cpu
} from "lucide-react";

const AUTO_ROTATE_INTERVAL = 5000; // 5s
const SWIPE_THRESHOLD = 100; // px

// ==================== Sub-components ====================

const StatBadge = ({ icon: Icon, label, value, color = "purple" }) => (
    <motion.div
        className={`flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-${color}-200 dark:border-${color}-500/30 shadow-sm`}
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ duration: 0.2 }}
    >
        <Icon className={`w-4 h-4 text-${color}-600 dark:text-${color}-400`} />
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{label}</span>
        <span className="text-xs font-bold text-gray-900 dark:text-white">{value}</span>
    </motion.div>
);

const MetricCard = ({ icon: Icon, value, label, trend, color = "purple" }) => (
    <motion.div
        className={`flex-1 p-4 bg-gradient-to-br from-${color}-50 to-${color}-100/50 dark:from-${color}-900/20 dark:to-${color}-800/10 backdrop-blur-sm rounded-xl border border-${color}-200 dark:border-${color}-800/30`}
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.2 }}
    >
        <div className="flex items-center justify-between mb-2">
            <div className={`p-2 rounded-lg bg-${color}-100 dark:bg-${color}-900/30`}>
                <Icon className={`w-5 h-5 text-${color}-600 dark:text-${color}-400`} />
            </div>
            {trend && (
                <span className={`text-xs font-medium flex items-center gap-1 px-2 py-1 rounded-full bg-${color}-100 dark:bg-${color}-900/30 text-${color}-600 dark:text-${color}-400`}>
                    <TrendingUp className="w-3 h-3" />
                    {trend}
                </span>
            )}
        </div>
        <div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{label}</p>
        </div>
    </motion.div>
);

const TimelineBadge = ({ year, event, color = "purple" }) => (
    <motion.div
        className={`flex items-center gap-3 p-3 bg-gradient-to-r from-${color}-50 to-transparent dark:from-${color}-900/20 dark:to-transparent rounded-lg border-l-4 border-${color}-500 dark:border-${color}-400`}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
    >
        <div className={`w-10 h-10 rounded-full bg-${color}-100 dark:bg-${color}-900/30 flex items-center justify-center`}>
            <Calendar className={`w-5 h-5 text-${color}-600 dark:text-${color}-400`} />
        </div>
        <div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">{year}</span>
            <p className="text-sm text-gray-600 dark:text-gray-400">{event}</p>
        </div>
    </motion.div>
);

const TechnologyBadge = ({ tech, color = "purple" }) => (
    <motion.span
        className={`px-3 py-1 text-xs font-medium rounded-full bg-${color}-100 dark:bg-${color}-900/30 text-${color}-600 dark:text-${color}-400 border border-${color}-200 dark:border-${color}-800`}
        whileHover={{ scale: 1.1, y: -2 }}
        transition={{ duration: 0.2 }}
    >
        {tech}
    </motion.span>
);

// ==================== Main Component ====================

const OurSubsidiaries = () => {
    const { selectedIndex, setSelectedIndex } = useSubsidiaryCarousel(subsidiaries);

    const selectedSubsidiary = subsidiaries[selectedIndex];
    const intervalRef = useRef(null);
    const isAutoRotating = useRef(false);
    const [direction, setDirection] = useState(0);

    // Get subsidiary-specific data
    const getSubsidiaryMetrics = (subsidiary) => {
        const metrics = {
            "AppGlobal Technologies": {
                countries: "25+",
                employees: "200+",
                projects: "500+",
                satisfaction: "99%",
                revenue: "$50M+",
                growth: "+45%",
                founded: "2010",
                technologies: ["React", "Node.js", "Python", "AWS", "Kubernetes"],
                milestones: [
                    { year: "2010", event: "Company Founded" },
                    { year: "2015", event: "Healthcare Division Launch" },
                    { year: "2020", event: "Global Expansion" },
                    { year: "2024", event: "AI Innovation Award" }
                ]
            },
            "AppGlobal Payment Solutions": {
                countries: "15+",
                employees: "120+",
                projects: "300+",
                satisfaction: "98%",
                revenue: "$100M+",
                growth: "+60%",
                founded: "2015",
                technologies: ["Blockchain", "Node.js", "React", "AWS", "Machine Learning"],
                milestones: [
                    { year: "2015", event: "Payment Platform Launch" },
                    { year: "2018", event: "1M Transactions" },
                    { year: "2022", event: "ISO Certification" },
                    { year: "2024", event: "Global Payment License" }
                ]
            },
            "Globalshell Resources": {
                countries: "10+",
                employees: "80+",
                projects: "200+",
                satisfaction: "97%",
                revenue: "$75M+",
                growth: "+35%",
                founded: "2012",
                technologies: ["IoT", "Cloud Computing", "Data Analytics", "Security", "Automation"],
                milestones: [
                    { year: "2012", event: "Energy Solutions Launch" },
                    { year: "2017", event: "Cloud Services Expansion" },
                    { year: "2021", event: "Sustainability Initiative" },
                    { year: "2024", event: "Green Energy Award" }
                ]
            }
        };

        return metrics[subsidiary.name] || {
            countries: "10+",
            employees: "50+",
            projects: "100+",
            satisfaction: "95%",
            revenue: "$25M+",
            growth: "+30%",
            founded: "2015",
            technologies: ["Innovation", "Technology", "Solutions", "Cloud", "Security"],
            milestones: [
                { year: "2015", event: "Company Founded" },
                { year: "2018", event: "Major Expansion" },
                { year: "2021", event: "Innovation Award" },
                { year: "2024", event: "Industry Recognition" }
            ]
        };
    };

    const metrics = getSubsidiaryMetrics(selectedSubsidiary);

    /** Navigation helpers */
    const goNext = useCallback(() => {
        setDirection(1);
        isAutoRotating.current = true;
        const newIndex = (selectedIndex + 1) % subsidiaries.length;
        setSelectedIndex(newIndex);
    }, [selectedIndex, setSelectedIndex]);

    const goPrev = useCallback(() => {
        setDirection(-1);
        isAutoRotating.current = true;
        const newIndex = (selectedIndex - 1 + subsidiaries.length) % subsidiaries.length;
        setSelectedIndex(newIndex);
    }, [selectedIndex, setSelectedIndex]);

    /** Auto-rotate controls */
    const stopAutoRotate = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        isAutoRotating.current = false;
    }, []);

    const startAutoRotate = useCallback(() => {
        stopAutoRotate();
        intervalRef.current = setInterval(() => {
            goNext();
        }, AUTO_ROTATE_INTERVAL);
    }, [goNext, stopAutoRotate]);

    // Handle manual item selection
    const handleItemClick = useCallback((index) => {
        setDirection(index > selectedIndex ? 1 : -1);
        isAutoRotating.current = false;
        setSelectedIndex(index);
        startAutoRotate();
    }, [selectedIndex, setSelectedIndex, startAutoRotate]);

    /** Start auto-rotation on mount */
    useEffect(() => {
        const timer = setTimeout(() => {
            startAutoRotate();
        }, 1000);

        return () => {
            clearTimeout(timer);
            stopAutoRotate();
        };
    }, [startAutoRotate, stopAutoRotate]);

    // Animation variants
    const imageVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: (direction) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45,
            transition: {
                duration: 0.5
            }
        })
    };

    const textVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            y: 20
        }),
        center: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2
            }
        },
        exit: (direction) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3
            }
        })
    };

    return (
        <section
            id="subsidiaries"
            className="relative w-full min-h-screen py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900"
            onMouseEnter={stopAutoRotate}
            onMouseLeave={startAutoRotate}
        >
            {/* Animated Background */}
            <AnimatedBackground variant="gradient" density="medium" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-200 dark:bg-pink-600/5 rounded-full blur-3xl" />

                {/* Animated grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-600 dark:text-purple-400" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-4 mx-auto lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    {/* Animated badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-full border border-purple-200 dark:border-purple-500/30 shadow-sm mb-6"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Building2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        </motion.div>
                        <span className="text-xs md:text-sm text-gray-700 dark:text-white/90 font-medium tracking-wide">
                            Our Family of Companies
                        </span>
                    </motion.div>

                    {/* Heading with animated underline */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Our{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Subsidiaries
                            </span>
                            <motion.div
                                initial={{ width: 0, left: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute bottom-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                            />
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto"
                    >
                        Discover the innovative companies that drive our global success
                    </motion.p>
                </motion.div>

                {/* Navigation Dots for Company Selection */}
                <div className="flex justify-center items-center gap-3 mb-8">
                    {subsidiaries.map((subsidiary, index) => (
                        <motion.button
                            key={subsidiary.name}
                            onClick={() => handleItemClick(index)}
                            className="group relative"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.div
                                className={`
                                    w-3 h-3 rounded-full cursor-pointer transition-all duration-300
                                    ${index === selectedIndex
                                    ? 'bg-purple-600 dark:bg-purple-400'
                                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-purple-400 dark:hover:bg-purple-600'
                                }
                                `}
                                animate={index === selectedIndex ? {
                                    scale: [1, 1.5, 1],
                                    boxShadow: ['0 0 0 0 rgba(168, 85, 247, 0.4)', '0 0 0 4px rgba(168, 85, 247, 0.1)', '0 0 0 0 rgba(168, 85, 247, 0)']
                                } : {}}
                                transition={{
                                    duration: 2,
                                    repeat: index === selectedIndex ? Infinity : 0,
                                    ease: "easeInOut"
                                }}
                            />
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {subsidiary.name.split(' ')[0]}
                            </span>
                        </motion.button>
                    ))}
                </div>

                {/* Main Content Area */}
                <motion.div
                    className="w-full"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (Math.abs(swipe) > SWIPE_THRESHOLD) {
                            if (offset.x > 0) {
                                goPrev();
                            } else {
                                goNext();
                            }
                            startAutoRotate();
                        }
                    }}
                >
                    {/* Featured Company Card */}
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
                        {/* Header Gradient with Company Name and Navigation */}
                        <div className="relative h-32 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 overflow-hidden">
                            <div className="absolute inset-0 bg-black/20" />

                            {/* Navigation Arrows */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
                                <motion.button
                                    onClick={goPrev}
                                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ChevronLeft className="w-6 h-6 text-white" />
                                </motion.button>
                                <motion.button
                                    onClick={goNext}
                                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ChevronRight className="w-6 h-6 text-white" />
                                </motion.button>
                            </div>

                            {/* Company Name */}
                            <div className="absolute bottom-4 left-6">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={selectedSubsidiary.name}
                                        custom={direction}
                                        variants={textVariants}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <Building2 className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <span className="text-xs text-white/80 uppercase tracking-wider">
                                                Featured Company
                                            </span>
                                            <h3 className="text-2xl font-bold text-white">
                                                {selectedSubsidiary.name}
                                            </h3>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="p-6">
                            {/* Quick Stats Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                <StatBadge icon={Calendar} label="Founded" value={metrics.founded} color="purple" />
                                <StatBadge icon={Globe} label="Countries" value={metrics.countries} color="pink" />
                                <StatBadge icon={Users} label="Team" value={metrics.employees} color="blue" />
                                <StatBadge icon={Award} label="Satisfaction" value={metrics.satisfaction} color="green" />
                            </div>

                            {/* Image and Key Metrics */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Image with 3D effect */}
                                <div className="relative group perspective">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500" />
                                    <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 transform-gpu transition-transform duration-500 group-hover:rotateY-5">
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
                                                className="w-full h-48 object-cover"
                                            />
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Key Metrics Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    <MetricCard icon={DollarSign} value={metrics.revenue} label="Annual Revenue" trend={metrics.growth} color="purple" />
                                    <MetricCard icon={Briefcase} value={metrics.projects} label="Projects" trend="+25%" color="pink" />
                                    <MetricCard icon={Target} value={metrics.satisfaction} label="Client Satisfaction" trend="+3%" color="blue" />
                                    <MetricCard icon={Zap} value={metrics.employees} label="Team Growth" trend="+15%" color="green" />
                                </div>
                            </div>

                            {/* Description and Technologies */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div className="md:col-span-2">
                                    <AnimatePresence mode="wait" custom={direction}>
                                        <motion.div
                                            key={selectedSubsidiary.name + "desc"}
                                            custom={direction}
                                            variants={textVariants}
                                        >
                                            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                                About
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {selectedSubsidiary.description}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Technologies */}
                                    <div className="mt-4">
                                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {metrics.technologies.map((tech, index) => (
                                                <TechnologyBadge key={index} tech={tech} color="purple" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                        Milestones
                                    </h4>
                                    <div className="space-y-2">
                                        {metrics.milestones.map((milestone, index) => (
                                            <TimelineBadge
                                                key={index}
                                                year={milestone.year}
                                                event={milestone.event}
                                                color={index === 0 ? "purple" : index === 1 ? "pink" : index === 2 ? "blue" : "green"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Highlights and CTA */}
                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex flex-wrap gap-4">
                                    {selectedSubsidiary.highlights?.map((highlight, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {highlight}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.a
                                    href={selectedSubsidiary.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10">Visit Website</span>
                                    <ExternalLink className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    <motion.div
                                        className="absolute inset-0 bg-white/20"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {subsidiaries.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => handleItemClick(index)}
                                    className="group relative"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <motion.div
                                        className={`
                                            w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300
                                            ${index === selectedIndex
                                            ? 'bg-purple-600 dark:bg-purple-400'
                                            : 'bg-gray-300 dark:bg-gray-700 hover:bg-purple-400 dark:hover:bg-purple-600'
                                        }
                                        `}
                                        animate={index === selectedIndex ? {
                                            scale: [1, 1.5, 1],
                                            boxShadow: ['0 0 0 0 rgba(168, 85, 247, 0.4)', '0 0 0 4px rgba(168, 85, 247, 0.1)', '0 0 0 0 rgba(168, 85, 247, 0)']
                                        } : {}}
                                        transition={{
                                            duration: 2,
                                            repeat: index === selectedIndex ? Infinity : 0,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500 dark:text-white/40">
                                {selectedIndex + 1} / {subsidiaries.length}
                            </span>
                            <span className="text-xs text-gray-400 dark:text-gray-600">
                                Auto-rotating every 5s
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurSubsidiaries;