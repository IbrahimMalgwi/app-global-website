// src/components/About.jsx
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
    Star,
    Award,
    Users,
    Globe2,
    Rocket,
    Shield,
    Sparkles,
    ChevronRight
} from "lucide-react";
import aboutImage from "../assets/images/about.jpeg";

// Import UI components - fixed paths
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { Card } from "./UI/Card";
import { GradientCard } from "./UI/GradientCard";

// ==================== Constants ====================

const STATS = [
    {
        number: "50+",
        title: "Projects",
        subtitle: "Successfully Delivered",
        color: "purple",
        icon: Rocket,
        delay: 0.2
    },
    {
        number: "15+",
        title: "Partners",
        subtitle: "Global Collaborations",
        color: "pink",
        icon: Globe2,
        delay: 0.3
    },
    {
        number: "10+",
        title: "Years",
        subtitle: "Industry Excellence",
        color: "indigo",
        icon: Award,
        delay: 0.4
    },
    {
        number: "100+",
        title: "Team Members",
        subtitle: "Expert Professionals",
        color: "blue",
        icon: Users,
        delay: 0.5
    },
];

const VALUES = [
    {
        title: "Innovation First",
        description: "Pushing boundaries with cutting-edge technology solutions",
        icon: Rocket,
        color: "from-purple-500 to-pink-500",
        textColor: "text-purple-600 dark:text-purple-400"
    },
    {
        title: "Global Excellence",
        description: "Delivering world-class services across 50+ countries",
        icon: Globe2,
        color: "from-blue-500 to-cyan-500",
        textColor: "text-blue-600 dark:text-blue-400"
    },
    {
        title: "Security Focused",
        description: "Enterprise-grade security in every solution we build",
        icon: Shield,
        color: "from-green-500 to-emerald-500",
        textColor: "text-green-600 dark:text-green-400"
    }
];

// ==================== Sub-components ====================

const ValueCard = ({ value, index }) => {
    const Icon = value.icon;
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="relative p-6 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-black/90 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-white/20 transition-all duration-500 shadow-sm hover:shadow-md">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${value.textColor}`} />
                </div>

                {/* Content - using solid colors */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                </h3>
                <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">
                    {value.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    );
};

// ==================== Main Component ====================

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imageParallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gray-50 dark:bg-black"
        >
            {/* Animated Background */}
            <AnimatedBackground variant="gradient" density="medium" />

            {/* Decorative elements - adjusted for light mode */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-600/10 rounded-full blur-3xl" />

                {/* Animated grid lines */}
                <svg className="absolute w-full h-full opacity-10 dark:opacity-20" preserveAspectRatio="none">
                    <defs>
                        <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#about-gradient)" strokeWidth="0.5" />
                        </pattern>
                        <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#about-grid)" />
                </svg>
            </div>

            {/* Main Content */}
            <motion.div
                style={{ opacity: contentOpacity }}
                className="relative z-10 max-w-7xl mx-auto w-full"
            >
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 backdrop-blur-xl rounded-full border border-purple-200 dark:border-purple-500/30 shadow-sm mb-6">
                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs md:text-sm text-gray-700 dark:text-white/90 font-medium tracking-wide">
              Driving Digital Transformation
            </span>
                    </div>

                    {/* Heading - using solid colors */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        About{" "}
                        <span className="relative inline-block text-purple-600 dark:text-purple-400">
              Us
              <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-purple-600 dark:bg-purple-400 rounded-full"
              />
            </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                        Empowering businesses through innovative technology solutions
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Card className="h-full bg-white dark:bg-gradient-to-br dark:from-gray-900/50 dark:to-black/50 border border-gray-200 dark:border-white/5 shadow-lg">
                            <div className="p-8 md:p-10">
                                {/* Company name highlight */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="inline-block mb-6"
                                >
                  <span className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
                    APPGLOBAL TECHNOLOGIES LIMITED
                  </span>
                                </motion.div>

                                {/* Description */}
                                <div className="space-y-6 text-gray-700 dark:text-white/80">
                                    <p className="text-lg leading-relaxed">
                                        We are an Information Technology company with software development
                                        and networking as our core business. Our rapid and phenomenal growth
                                        spans diverse spheres of business, services, and solutions.
                                    </p>

                                    <p className="text-lg leading-relaxed">
                                        We strongly believe in endowing our customers with apex-level services
                                        round the clock. From conception to design, to development of technology
                                        solutions for businesses of all types, we deliver excellence globally.
                                    </p>

                                    {/* Key points */}
                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        {[
                                            "Global Delivery Model",
                                            "24/7 Support",
                                            "Expert Workforce",
                                            "Low-Risk Approach"
                                        ].map((point, i) => (
                                            <motion.div
                                                key={point}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                                className="flex items-center gap-2"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                                                <span className="text-sm text-gray-600 dark:text-white/70">{point}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Image Section with Parallax */}
                    <motion.div
                        ref={imageRef}
                        style={{ y: imageParallaxY }}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Main Image Card */}
                        <Card className="overflow-hidden bg-transparent border-0">
                            <div className="relative group">
                                {/* Gradient border */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500" />

                                {/* Image container */}
                                <div className="relative rounded-xl overflow-hidden">
                                    <img
                                        src={aboutImage}
                                        alt="A diverse team of professionals collaborating"
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Floating elements */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl"
                                >
                                    <Star className="w-8 h-8 text-white" />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [0, 10, 0],
                                        rotate: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl"
                                >
                                    <Award className="w-8 h-8 text-white" />
                                </motion.div>
                            </div>
                        </Card>
                    </motion.div>
                </div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        Our Core Values
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {VALUES.map((value, index) => (
                            <ValueCard key={value.title} value={value} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {STATS.map((stat, index) => (
                        <GradientCard
                            key={stat.title}
                            color={stat.color}
                            number={stat.number}
                            title={stat.title}
                            subtitle={stat.subtitle}
                            icon={stat.icon}
                            delay={stat.delay}
                            className="transform hover:scale-105 transition-all duration-300"
                        />
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                        <span>Start Your Journey</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 rounded-xl bg-purple-600 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600 blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

// EXPORT DEFAULT - THIS IS CRITICAL
export default About;