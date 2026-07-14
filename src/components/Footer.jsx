// src/components/Footer.jsx
import { motion, useInView } from "framer-motion";
import {
    Heart,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    ChevronRight,
    Send,
    Globe,
    Shield,
    Award
} from "lucide-react";
import { useRef, useState } from "react";
import { AnimatedBackground } from "./UI/AnimatedBackground";

// ==================== Sub-components ====================

const SocialIcon = ({ icon: Icon, href, color = "red", label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`relative w-10 h-10 rounded-lg bg-${color}-100 dark:bg-${color}-900/30 flex items-center justify-center group overflow-hidden`}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
    >
        <div className={`absolute inset-0 bg-gradient-to-r from-${color}-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        <Icon className={`relative z-10 w-5 h-5 text-${color}-600 dark:text-${color}-400 group-hover:text-white transition-colors duration-300`} />
    </motion.a>
);

const FooterLink = ({ children, href }) => (
    <motion.li
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
    >
        <a
            href={href}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 group"
        >
            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-600 dark:text-red-400" />
            <span>{children}</span>
        </a>
    </motion.li>
);

const NewsletterForm = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            const subject = encodeURIComponent("Newsletter subscription request");
            const body = encodeURIComponent(`Please add ${email} to the AppGlobal newsletter list.`);
            window.location.href = `mailto:info@appglobaltechnologies.com?subject=${subject}&body=${body}`;
            setIsSubmitted(true);
            setEmail("");
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-600 rounded-lg opacity-0 group-focus-within:opacity-20 blur transition-opacity duration-300" />
                <div className="relative flex">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="flex-1 px-4 py-2 rounded-l-lg bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 dark:bg-gradient-to-r dark:from-red-600 dark:to-red-600 text-white rounded-r-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
                    >
                        {isSubmitted ? <Heart className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                    </button>
                </div>
            </div>
            {isSubmitted && (
                <p className="text-xs text-green-600 dark:text-green-400 mt-2">Email draft opened for subscription.</p>
            )}
        </form>
    );
};

// ==================== Main Component ====================

export default function Footer() {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true, amount: 0.1 });

    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    const solutions = [
        { name: "GlobalCare EHR", href: "#services" },
        { name: "Laboratory Information System", href: "#services" },
        { name: "Telemedicine", href: "#services" },
        { name: "AppGlobal Pay", href: "#subsidiaries" },
        { name: "GlobalShell Resources", href: "#subsidiaries" },
        { name: "Cloud & Web Hosting", href: "#services" },
    ];

    const company = [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#team" },
        { name: "Careers", href: "#contact" },
        { name: "Partners", href: "#partners" },
        { name: "News", href: "#blog" },
    ];

    const support = [
        { name: "Documentation", href: "#contact" },
        { name: "Help Center", href: "#contact" },
        { name: "Contact Us", href: "#contact" },
        { name: "Privacy Questions", href: "#contact" },
        { name: "Service Terms", href: "#contact" },
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/company/appglobal-technologies-limited/",
            color: "blue",
            label: "LinkedIn"
        },
    ];

    return (
        <footer
            ref={footerRef}
            className="relative bg-white dark:bg-black text-gray-900 dark:text-white pt-16 pb-8 overflow-hidden"
        >
            {/* Animated Background - lighter for light mode */}
            <AnimatedBackground variant="gradient" density="low" />

            {/* Decorative elements - adjusted for light mode */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 dark:bg-red-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-100 dark:bg-red-600/10 rounded-full blur-3xl" />

                {/* Grid pattern - lighter for light mode */}
                <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-300 dark:text-red-400" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#footer-grid)" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        custom={0}
                        variants={footerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold">
                            <span className="text-red-600 dark:text-red-400">
                                AppGlobal Group
                            </span>
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Building Tomorrow's Digital Solutions, Today. Empowering businesses through innovative technology.
                        </p>

                        {/* Contact Info - using solid colors */}
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                <MapPin className="w-4 h-4 text-red-600 dark:text-red-400" />
                                <span>Victoria Island, Lagos, Nigeria</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                <Phone className="w-4 h-4 text-red-600 dark:text-red-400" />
                                <span>+234 806 211 4900</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                <Mail className="w-4 h-4 text-red-600 dark:text-red-400" />
                                <span>info@appglobaltechnologies.com</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <SocialIcon key={social.label} {...social} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Solutions */}
                    <motion.div
                        custom={1}
                        variants={footerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-red-600 dark:text-red-400" />
                            Solutions
                        </h4>
                        <ul className="space-y-3">
                            {solutions.map((item) => (
                                <FooterLink key={item.name} href={item.href}>
                                    {item.name}
                                </FooterLink>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div
                        custom={2}
                        variants={footerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-red-600 dark:text-red-400" />
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {company.map((item) => (
                                <FooterLink key={item.name} href={item.href}>
                                    {item.name}
                                </FooterLink>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support & Newsletter */}
                    <motion.div
                        custom={3}
                        variants={footerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
                            Support
                        </h4>
                        <ul className="space-y-3 mb-6">
                            {support.map((item) => (
                                <FooterLink key={item.name} href={item.href}>
                                    {item.name}
                                </FooterLink>
                            ))}
                        </ul>

                        {/* Newsletter */}
                        <div>
                            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Subscribe to our newsletter
                            </h5>
                            <NewsletterForm />
                        </div>
                    </motion.div>
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 mb-8"
                >
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-gray-700">
                        <Shield className="w-4 h-4 text-red-600 dark:text-red-400" />
                        <span className="text-xs text-gray-700 dark:text-gray-400">Security-first delivery</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-gray-700">
                        <Award className="w-4 h-4 text-red-600 dark:text-red-400" />
                        <span className="text-xs text-gray-700 dark:text-gray-400">Payment-aware workflows</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-gray-700">
                        <Globe className="w-4 h-4 text-red-600 dark:text-red-400" />
                        <span className="text-xs text-gray-700 dark:text-gray-400">Privacy-minded operations</span>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-600 dark:text-gray-500">
                            © {new Date().getFullYear()} AppGlobal Group. All rights reserved.
                        </p>

                        <div className="flex gap-6 text-xs text-gray-500 dark:text-gray-600">
                            <a href="#contact" className="hover:text-red-600 transition-colors">Privacy Questions</a>
                            <a href="#contact" className="hover:text-red-600 transition-colors">Terms Requests</a>
                            <a href="#contact" className="hover:text-red-600 transition-colors">Support</a>
                        </div>

                        <p className="text-xs text-gray-500 dark:text-gray-600">
                            Made with <Heart className="inline w-3 h-3 text-red-500" /> in Nigeria
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
