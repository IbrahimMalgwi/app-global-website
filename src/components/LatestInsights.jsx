// src/components/LatestInsights.jsx
import { motion, useInView } from "framer-motion";
import { Calendar, User, ArrowUpRight, Sparkles, Clock, BookOpen, Share2 } from "lucide-react";
import { useRef, useState } from "react";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import AIHealthcareImage from "../assets/images/ai-healthcare-blog.png";
import EHRInteroperabilityImage from "../assets/images/ehr-interoperability-blog.png";
import SmartGridImage from "../assets/images/smart-grid-blog.png";

// ==================== Constants ====================

const insights = [
    {
        category: "Healthcare Technology",
        date: "December 15, 2024",
        author: "HABIB YUNUSA",
        authorRole: "Healthcare Tech Lead",
        readTime: "5 min read",
        title: "The Future of AI in Healthcare: Transforming Patient Care",
        description:
            "Discover how artificial intelligence is revolutionizing healthcare delivery, from predictive analytics to personalized treatment plans. Our latest insights reveal the transformative power of AI-driven medical solutions.",
        image: AIHealthcareImage,
        trending: true,
        featured: true
    },
    {
        category: "Digital Health",
        date: "December 10, 2024",
        author: "TOYINBO ABDULJELIL",
        authorRole: "EHR Specialist",
        readTime: "4 min read",
        title: "Interoperability in EHR Systems: Breaking Down Data Silos",
        description:
            "Learn how modern EHR systems are enabling seamless data exchange across healthcare networks. We explore the challenges and solutions in creating truly connected healthcare ecosystems.",
        image: EHRInteroperabilityImage,
        trending: false,
        featured: false
    },
    {
        category: "Clean Energy",
        date: "December 5, 2024",
        author: "ABDULLAHI YUNUSA",
        authorRole: "Energy Solutions Architect",
        readTime: "6 min read",
        title: "Sustainable Energy Solutions: Smart Grids for Tomorrow",
        description:
            "Explore the latest innovations in smart grid technology and sustainable energy management. Our comprehensive guide covers the future of clean energy infrastructure and connected systems.",
        image: SmartGridImage,
        trending: true,
        featured: false
    },
];

// ==================== Sub-components ====================

const CategoryBadge = ({ category, featured = false }) => (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
        featured
            ? 'bg-purple-600 text-white'
            : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    }`}>
        {category}
    </div>
);

const AuthorInfo = ({ author, role, date, readTime }) => (
    <div className="flex items-center gap-3 text-sm">
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <User className="w-3 h-3" />
            <span className="font-medium text-gray-700 dark:text-gray-300">{author}</span>
        </div>
        <span className="text-gray-300 dark:text-gray-600">•</span>
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <Clock className="w-3 h-3" />
            <span>{readTime}</span>
        </div>
    </div>
);

const InsightCard = ({ post, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group h-full"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="relative h-full">
                {/* Glow effect */}
                <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"
                    animate={isHovered ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Main card */}
                <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                    {/* Image container */}
                    <div className="relative overflow-hidden h-52">
                        <motion.img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                            transition={{ duration: 0.6 }}
                        />

                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                            <CategoryBadge category={post.category} featured={post.featured} />
                        </div>

                        {/* Trending badge */}
                        {post.trending && (
                            <div className="absolute top-4 right-4">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    className="flex items-center gap-1 px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full"
                                >
                                    <Sparkles className="w-3 h-3" />
                                    <span>Trending</span>
                                </motion.div>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Author and date */}
                        <AuthorInfo
                            author={post.author}
                            role={post.authorRole}
                            date={post.date}
                            readTime={post.readTime}
                        />

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 mb-2 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {post.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                            {post.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                <Calendar className="w-3 h-3" />
                                {post.date}
                            </div>

                            <motion.button
                                className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group/btn"
                                whileHover={{ x: 2 }}
                            >
                                Read More
                                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Hover gradient line */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600"
                        initial={{ scaleX: 0 }}
                        animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: "0%" }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

// ==================== Main Component ====================

export default function LatestInsights() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section
            id="blog"
            ref={sectionRef}
            className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
        >
            {/* Animated Background */}
            <AnimatedBackground variant="gradient" density="low" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-40 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-40 right-20 w-72 h-72 bg-pink-200 dark:bg-pink-600/5 rounded-full blur-3xl" />

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
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-full border border-purple-200 dark:border-purple-500/30 shadow-sm mb-6"
                    >
                        <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs md:text-sm text-gray-700 dark:text-white/90 font-medium tracking-wide">
                            Thought Leadership
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Latest{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-purple-600 dark:text-purple-400">
                                Insights
                            </span>
                            <motion.div
                                initial={{ width: 0, left: 0 }}
                                animate={isInView ? { width: "100%" } : { width: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute bottom-0 h-1 bg-purple-600 dark:bg-purple-400 rounded-full"
                            />
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                        Stay informed with our latest thoughts on healthcare technology, AI innovations, and digital transformation
                    </p>
                </motion.div>

                {/* Featured Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
                        <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">50+ Articles</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
                        <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Weekly Updates</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
                        <User className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Industry Experts</span>
                    </div>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {insights.map((post, index) => (
                        <InsightCard key={index} post={post} index={index} />
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>View All Articles</span>
                        <Share2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}