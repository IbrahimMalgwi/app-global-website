// src/components/FAQ.jsx
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, Search, Mail, ArrowRight } from "lucide-react";
import { AnimatedBackground } from "./UI/AnimatedBackground";

// ==================== Sub-components ====================

const CategoryBadge = ({ category, isActive, onClick }) => (
    <motion.button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            isActive
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {category}
    </motion.button>
);

const ContactCard = ({ icon: Icon, title, description, action, link }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative group"
    >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
        <div className="relative p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className={`p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 w-fit mb-4`}>
                <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
            <a
                href={link}
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-sm font-medium"
            >
                {action}
                <ArrowRight className="w-4 h-4" />
            </a>
        </div>
    </motion.div>
);

// ==================== Main Component ====================

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const sectionRef = useRef(null);

    const categories = ["All", "Healthcare", "Fintech", "Security", "Support"];

    const faqs = [
        {
            question: "What makes GlobalCare EHR different from other systems?",
            answer: "GlobalCare EHR combines AI-powered insights with seamless interoperability, ensuring your healthcare data flows smoothly across all networks while providing intelligent analytics for better patient care. Our system is HIPAA-compliant and designed with input from healthcare professionals to ensure it meets real-world clinical needs.",
            category: "Healthcare"
        },
        {
            question: "How secure is AppGlobal Pay for financial transactions?",
            answer: "AppGlobal Pay uses enterprise-grade encryption, multi-factor authentication, and complies with international financial security standards including PCI DSS to ensure your transactions are completely secure. We also employ real-time fraud detection and monitoring systems to protect against unauthorized activities.",
            category: "Fintech"
        },
        {
            question: "Can GlobalCare systems integrate with existing healthcare infrastructure?",
            answer: "Yes, our systems are designed for seamless integration with existing healthcare infrastructure, supporting multiple data formats and communication protocols for smooth transitions. We provide APIs, HL7/FHIR compatibility, and dedicated integration specialists to ensure your data flows seamlessly.",
            category: "Healthcare"
        },
        {
            question: "What support do you provide for implementation?",
            answer: "We provide comprehensive support including system setup, staff training, data migration assistance, and 24/7 technical support to ensure smooth implementation and operation. Our dedicated customer success team works with you every step of the way.",
            category: "Support"
        },
        {
            question: "How does the AI in your systems work?",
            answer: "Our AI systems use advanced machine learning algorithms to analyze patterns in healthcare data, providing predictive insights, automated workflows, and intelligent recommendations while maintaining full data privacy and security. The AI continuously learns and improves from anonymized data patterns.",
            category: "Healthcare"
        },
        {
            question: "What security certifications do you have?",
            answer: "We maintain ISO 27001, SOC 2 Type II, HIPAA, and GDPR compliance certifications. Our systems undergo regular third-party security audits and penetration testing to ensure the highest level of data protection.",
            category: "Security"
        },
        {
            question: "Do you offer customized solutions for specific needs?",
            answer: "Absolutely! We work closely with clients to understand their unique requirements and can customize our solutions to meet specific workflows, integration needs, and business processes.",
            category: "Support"
        },
    ];

    // Filter FAQs based on search and category
    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section
            id="faq"
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
                        <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs md:text-sm text-gray-700 dark:text-white/90 font-medium tracking-wide">
                            Got Questions?
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Frequently Asked{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Questions
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
                        Find answers to common questions about our solutions and services
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-xl mx-auto mb-8"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-focus-within:opacity-30 blur transition-opacity duration-300" />
                        <div className="relative flex items-center">
                            <Search className="absolute left-4 w-5 h-5 text-gray-400 dark:text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/30 transition-all duration-300 outline-none text-gray-900 dark:text-white"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <CategoryBadge
                            key={category}
                            category={category}
                            isActive={activeCategory === category}
                            onClick={() => setActiveCategory(category)}
                        />
                    ))}
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <AnimatePresence mode="wait">
                        {filteredFaqs.length > 0 ? (
                            <motion.div
                                key="faqs"
                                variants={containerVariants}
                                className="space-y-4"
                            >
                                {filteredFaqs.map((faq, i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        className="relative group"
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300" />

                                        {/* FAQ Item */}
                                        <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                            <button
                                                onClick={() => toggleFAQ(i)}
                                                className="flex justify-between items-center w-full p-6 text-left"
                                            >
                                                <div className="flex-1 pr-8">
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                        {faq.question}
                                                    </h3>
                                                    {/* Category tag */}
                                                    <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                                        {faq.category}
                                                    </span>
                                                </div>
                                                <motion.div
                                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center"
                                                >
                                                    <ChevronDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                                </motion.div>
                                            </button>

                                            <AnimatePresence>
                                                {openIndex === i && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 text-base leading-relaxed border-t border-gray-200 dark:border-gray-700">
                                                            {faq.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="no-results"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-center py-12"
                            >
                                <MessageCircle className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    No results found
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Try adjusting your search or filter to find what you're looking for.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Still have questions? */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16"
                >
                    <div className="relative group max-w-3xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
                        <div className="relative p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl text-center">
                            <Sparkles className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Still have questions?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Can't find the answer you're looking for? Please reach out to our friendly team.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                                >
                                    <Mail className="w-4 h-4" />
                                    Contact Support
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Live Chat
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Options Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <ContactCard
                        icon={Mail}
                        title="Email Support"
                        description="Get in touch via email for detailed inquiries"
                        action="support@appglobal.com"
                        link="mailto:support@appglobal.com"
                    />
                    <ContactCard
                        icon={MessageCircle}
                        title="Live Chat"
                        description="Chat with our support team in real-time"
                        action="Start conversation"
                        link="#"
                    />
                    <ContactCard
                        icon={HelpCircle}
                        title="Documentation"
                        description="Browse our detailed documentation and guides"
                        action="View docs"
                        link="#"
                    />
                </div>
            </div>
        </section>
    );
}