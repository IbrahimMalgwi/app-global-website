// src/components/Partners.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, Award, Globe, Star, TrendingUp,  Heart } from "lucide-react";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import awsLogo from "../assets/images/aws-logo.png";
import googleCloudLogo from "../assets/images/google-cloud-logo.png";
import ibmLogo from "../assets/images/ibm-logo.png";
import microsoftLogo from "../assets/images/microsoft-logo.png";
import oracleLogo from "../assets/images/oracle-logo.png";
import salesforceLogo from "../assets/images/salesforce-logo.png";
import ebute from "../assets/images/ebute.png";
import ikorodu from "../assets/images/ikorodu.png";
import inewi from "../assets/images/inewi.png";
import national from "../assets/images/national.png";
import eksuth from "../assets/images/eksuth.png";
import fmcgusau from "../assets/images/fmcgusau.png";
import yaba from "../assets/images/fnph.png";

// ==================== Constants ====================

const partners = [
    { name: "Microsoft", logo: microsoftLogo, category: "Technology", tier: "Strategic" },
    { name: "AWS", logo: awsLogo, category: "Cloud", tier: "Strategic" },
    { name: "Google Cloud", logo: googleCloudLogo, category: "Cloud", tier: "Strategic" },
    { name: "IBM", logo: ibmLogo, category: "Technology", tier: "Strategic" },
    { name: "Oracle", logo: oracleLogo, category: "Database", tier: "Strategic" },
    { name: "Salesforce", logo: salesforceLogo, category: "CRM", tier: "Strategic" },
    { name: "Ebute", logo: ebute, category: "Healthcare", tier: "Partner" },
    { name: "Ikorodu", logo: ikorodu, category: "Healthcare", tier: "Partner" },
    { name: "Inewi", logo: inewi, category: "Healthcare", tier: "Partner" },
    { name: "National", logo: national, category: "Healthcare", tier: "Partner" },
    { name: "Eksuth", logo: eksuth, category: "Healthcare", tier: "Partner" },
    { name: "FMC Gusau", logo: fmcgusau, category: "Healthcare", tier: "Partner" },
    { name: "Yaba", logo: yaba, category: "Healthcare", tier: "Partner" },
];

const categories = ["All", "Technology", "Cloud", "Healthcare", "Strategic"];

const stats = [
    { icon: Award, value: "50+", label: "Global Partners", color: "purple" },
    { icon: Globe, value: "15+", label: "Countries", color: "pink" },
    { icon: Star, value: "98%", label: "Satisfaction", color: "blue" },
    { icon: TrendingUp, value: "500+", label: "Projects", color: "green" },
];

// ==================== Sub-components ====================

const StatCard = ({ icon: Icon, value, label, color = "purple" }) => (
    <motion.div
        className={`flex items-center gap-4 p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-${color}-200 dark:border-${color}-800/30 shadow-lg`}
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.2 }}
    >
        <div className={`p-4 rounded-xl bg-${color}-100 dark:bg-${color}-900/30`}>
            <Icon className={`w-6 h-6 text-${color}-600 dark:text-${color}-400`} />
        </div>
        <div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{value}</span>
            <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
        </div>
    </motion.div>
);

const PartnerLogo = ({ partner, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Glow effect */}
            <motion.div
                className={`absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}
                animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
            />

            {/* Partner card */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Tier badge */}
                <div className="absolute top-2 right-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        partner.tier === "Strategic"
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    }`}>
                        {partner.tier}
                    </span>
                </div>

                {/* Logo container */}
                <div className="p-6 flex items-center justify-center h-32">
                    <motion.img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-16 w-auto transition-all duration-300"
                        animate={isHovered ? {
                            scale: 1.1,
                            filter: "grayscale(0%)"
                        } : {
                            scale: 1,
                            filter: "grayscale(50%)"
                        }}
                    />
                </div>

                {/* Hover overlay with category */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={isHovered ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-purple-600 to-pink-600 p-3 text-center"
                >
                    <span className="text-sm font-medium text-white">{partner.category}</span>
                </motion.div>
            </div>

            {/* Partner name tooltip */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded"
            >
                {partner.name}
            </motion.div>
        </motion.div>
    );
};

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
            <motion.button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeCategory === category
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {category}
            </motion.button>
        ))}
    </div>
);

// ==================== Main Component ====================

export default function Partners() {
    const [activeCategory, setActiveCategory] = useState("All");
    const sectionRef = useRef(null);

    const filteredPartners = partners.filter(partner =>
        activeCategory === "All" || partner.category === activeCategory || partner.tier === activeCategory
    );

    return (
        <section
            id="partners"
            ref={sectionRef}
            className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
        >
            {/* Animated Background */}
            <AnimatedBackground variant="gradient" density="low" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-600/5 rounded-full blur-3xl" />

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/20 dark:bg-purple-400/10 rounded-full"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [null, Math.random() * 100 + '%'],
                            scale: [0, 1, 0],
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-full border border-purple-200 dark:border-purple-500/30 shadow-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs md:text-sm text-gray-700 dark:text-white/90 font-medium tracking-wide">
                            Trusted Partners
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Our{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Partners
                            </span>
                            <motion.div
                                initial={{ width: 0, left: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute bottom-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                            />
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                        Collaborating with industry leaders to deliver excellence
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
                >
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />
                </motion.div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                    {filteredPartners.map((partner, index) => (
                        <PartnerLogo key={partner.name} partner={partner} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-8 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                            <Heart className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            <span className="text-gray-700 dark:text-gray-300">Join our partner network</span>
                        </div>
                        <motion.button
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Become a Partner
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}