// src/components/NavBar.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

// Import your logo image
import logo from "../assets/images/logo.png";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(null);
    const { theme, toggleTheme } = useTheme();

    // Memoized nav items with display names
    const navItems = useMemo(() => [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "mission", label: "Mission & Vision" },
        { id: "core-values", label: "Core Values" },
        { id: "services", label: "Services" },
        { id: "subsidiaries", label: "Subsidiaries" },
        { id: "team", label: "Team" },
        { id: "contact", label: "Contact" },
    ], []);

    // Scroll to section smoothly
    const scrollToSection = useCallback((id) => {
        setIsMenuOpen(false);
        const section = document.getElementById(id);
        if (section) {
            setTimeout(() => {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
        }
    }, []);

    // Handle scroll effects and active section
    useEffect(() => {
        const handleScroll = () => {
            // Update navbar background on scroll
            setIsScrolled(window.scrollY > 20);

            // Find active section
            const scrollPosition = window.scrollY + 120;

            let current = "home";
            navItems.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionBottom = sectionTop + sectionHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        current = id;
                    }
                }
            });

            setActiveSection(current);
        };

        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", throttledScroll);
    }, [navItems]);

    // Reset scroll position on mount
    useEffect(() => {
        window.scrollTo(0, 0);
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    // Animation variants
    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
                    : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection("home")}
                        className="flex items-center cursor-pointer group"
                    >
                        <div className="relative">
                            <img
                                src={logo}
                                alt="AppGlobal Logo"
                                className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
                            <motion.div
                                className="absolute -inset-2 bg-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                variants={itemVariants}
                                onHoverStart={() => setIsHovered(item.id)}
                                onHoverEnd={() => setIsHovered(null)}
                                onClick={() => scrollToSection(item.id)}
                                className={`
                                    relative px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300
                                    ${activeSection === item.id
                                    ? 'text-purple-600 dark:text-purple-400'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                                }
                                `}
                            >
                                <span className="relative z-10 capitalize">
                                    {item.label}
                                </span>

                                {/* Active indicator */}
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-purple-100 dark:bg-purple-900/30 rounded-lg"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Hover effect */}
                                {isHovered === item.id && activeSection !== item.id && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg"
                                    />
                                )}
                            </motion.button>
                        ))}

                        {/* Theme Toggle */}
                        <motion.button
                            variants={itemVariants}
                            onClick={toggleTheme}
                            className="relative ml-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            <div className="absolute inset-0 bg-purple-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {theme === "dark" ? <Sun size={20} className="relative z-10" /> : <Moon size={20} className="relative z-10" />}
                        </motion.button>

                        {/* Get Started Button */}
                        <motion.button
                            variants={itemVariants}
                            onClick={() => scrollToSection("contact")}
                            className="relative ml-2 px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started
                                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* Theme Toggle for Mobile */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>

                        {/* Menu Toggle */}
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        variants={itemVariants}
                                        custom={index}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`
                                            block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300
                                            ${activeSection === item.id
                                            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }
                                        `}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}

                                {/* Mobile Get Started */}
                                <motion.button
                                    variants={itemVariants}
                                    onClick={() => scrollToSection("contact")}
                                    className="w-full mt-4 px-4 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    Get Started
                                    <Sparkles className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Progress bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeSection === "home" ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "0%" }}
            />
        </motion.nav>
    );
};

export default NavBar;