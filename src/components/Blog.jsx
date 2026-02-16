// src/components/Newsletter.jsx
import { Send, Sparkles, Mail, CheckCircle, Newspaper, Heart, Bell, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedBackground } from "./UI/AnimatedBackground";

// ==================== Sub-components ====================

const StatBadge = ({ icon: Icon, value, label }) => (
    <motion.div
        className="flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ duration: 0.2 }}
    >
        <Icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{label}:</span>
        <span className="text-xs font-bold text-gray-900 dark:text-white">{value}</span>
    </motion.div>
);

const BlogPreview = ({ icon: Icon, title, description, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative group"
    >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur transition-opacity duration-300" />
        <div className="relative p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

// ==================== Main Component ====================

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [emailError, setEmailError] = useState("");
    const inputRef = useRef(null);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            setEmailError("Email is required");
            return;
        }

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }

        console.log("Subscribed with:", email);
        setIsSubscribed(true);
        setEmail("");
        setEmailError("");

        setTimeout(() => setIsSubscribed(false), 3000);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) setEmailError("");
    };

    // Blog categories
    const blogCategories = [
        { icon: Heart, title: "Healthcare Tech", description: "AI in diagnostics, telemedicine, digital health records" },
        { icon: Mail, title: "Fintech Innovation", description: "Digital payments, blockchain, financial inclusion" },
        { icon: Bell, title: "Sustainable Energy", description: "Green tech, renewable solutions, energy efficiency" },
    ];

    // Stats
    const stats = [
        { icon: Newspaper, value: "50+", label: "Articles" },
        { icon: Mail, value: "2K+", label: "Subscribers" },
        { icon: Heart, value: "98%", label: "Satisfaction" },
    ];

    return (
        <section id="blog" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
            {/* Animated Background */}
            <AnimatedBackground variant="gradient" density="low" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-600/5 rounded-full blur-3xl" />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
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
                    className="text-center mb-12"
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
                            Insights & Updates
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Stay{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-purple-600 dark:text-purple-400">
                                Updated
                            </span>
                            <motion.div
                                initial={{ width: 0, left: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute bottom-0 h-1 bg-purple-600 dark:bg-purple-400 rounded-full"
                            />
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                        Get the latest news on digital healthcare, fintech innovations, and sustainable energy solutions
                    </p>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {stats.map((stat, index) => (
                        <StatBadge key={index} {...stat} />
                    ))}
                </motion.div>

                {/* Blog Categories Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {blogCategories.map((category, index) => (
                        <BlogPreview key={index} {...category} delay={0.2 + index * 0.1} />
                    ))}
                </div>

                {/* Newsletter Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-3xl mx-auto"
                >
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Glow effect */}
                        <motion.div
                            className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"
                            animate={isHovered ? { scale: [1, 1.02, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                        />

                        {/* Main card */}
                        <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
                            {/* Header gradient */}
                            <div className="h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600" />

                            <div className="p-8 md:p-10">
                                {/* Card header */}
                                <div className="text-center mb-8">
                                    <motion.div
                                        animate={isHovered ? { rotate: 360 } : {}}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                    >
                                        <Mail className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                                    </motion.div>

                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                        Subscribe to Our Newsletter
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Join 2,000+ subscribers getting weekly insights
                                    </p>
                                </div>

                                {/* Newsletter Form */}
                                <div className="max-w-md mx-auto">
                                    <AnimatePresence mode="wait">
                                        {isSubscribed ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800/30"
                                            >
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                                    className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3"
                                                >
                                                    <CheckCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
                                                </motion.div>
                                                <p className="text-green-800 dark:text-green-300 font-medium">
                                                    Thank you for subscribing!
                                                </p>
                                                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                                                    Check your inbox for updates
                                                </p>
                                            </motion.div>
                                        ) : (
                                            <motion.form
                                                key="form"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                onSubmit={handleSubscribe}
                                                className="space-y-4"
                                            >
                                                <div className="relative group/input">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-focus-within/input:opacity-20 blur transition-opacity duration-300" />
                                                    <input
                                                        ref={inputRef}
                                                        type="email"
                                                        value={email}
                                                        onChange={handleEmailChange}
                                                        placeholder="Enter your email address"
                                                        className={`w-full px-6 py-4 bg-white dark:bg-gray-700 border-2 rounded-xl outline-none transition-all duration-300 text-gray-900 dark:text-white ${
                                                            emailError
                                                                ? 'border-red-300 dark:border-red-700 focus:border-red-500'
                                                                : 'border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400'
                                                        }`}
                                                    />
                                                    {emailError && (
                                                        <p className="text-sm text-red-500 mt-2">{emailError}</p>
                                                    )}
                                                </div>

                                                <motion.button
                                                    type="submit"
                                                    className="relative w-full group/btn overflow-hidden"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <div className="absolute inset-0 bg-purple-600 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600" />
                                                    <div className="relative z-10 inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-purple-600 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                                                        Subscribe Now
                                                        <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                    </div>
                                                </motion.button>

                                                {/* Feature list */}
                                                <div className="flex flex-wrap justify-center gap-4 mt-4">
                                                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                                        <CheckCircle className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                                                        <span>Weekly insights</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                                        <CheckCircle className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                                                        <span>No spam</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                                        <CheckCircle className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                                                        <span>Unsubscribe anytime</span>
                                                    </div>
                                                </div>
                                            </motion.form>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Privacy Note */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6"
                                >
                                    We respect your privacy. Unsubscribe at any time.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Recent posts preview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/blog"
                        className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
                    >
                        <span>View all articles</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}