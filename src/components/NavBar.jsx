// src/components/NavBar.jsx
import React, { useState, useEffect, useMemo } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext"; // Updated import

// Import your logo image
import logo from "../assets/images/logo.png";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { theme, toggleTheme } = useTheme(); // Use global theme

    // Wrap navItems in useMemo to prevent unnecessary re-renders
    const navItems = useMemo(() => [
        "home",
        "about",
        "mission",
        "core-values",
        "services",
        "subsidiaries",
        "team",
        "contact",
    ], []);

    // Scroll to section smoothly
    const scrollToSection = (id) => {
        setIsMenuOpen(false); // close mobile menu
        const section = document.getElementById(id);
        if (section) {
            // Add a small timeout to ensure the DOM is ready
            setTimeout(() => {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                });
            }, 100);
        }
    };

    // Detect active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            // Find which section is currently in view
            let current = "home";

            navItems.forEach((id) => {
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

        // Throttle the scroll event for better performance
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

        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", throttledScroll);
    }, [navItems]);

    // Prevent auto-scroll on page load
    useEffect(() => {
        // Ensure we start at the top
        window.scrollTo(0, 0);

        // Disable browser's scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    return (
        <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-md dark:bg-gray-900/80">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
                {/* Logo */}
                <div
                    onClick={() => scrollToSection("home")}
                    className="flex items-center cursor-pointer"
                >
                    <img
                        src={logo}
                        alt="AppGlobal Logo"
                        className="h-8 w-auto md:h-10"
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`font-medium transition duration-300 capitalize ${
                                activeSection === item
                                    ? "text-purple-600 font-semibold dark:text-purple-400"
                                    : "text-gray-800 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                            }`}
                        >
                            {item === "mission" ? "Mission" :
                                item === "core-values" ? "Values" :
                                    item}
                        </button>
                    ))}

                    {/* Dark Mode Toggle - Now uses global theme */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-2">
                    {/* Dark Mode Toggle for Mobile */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
                    <div className="px-6 py-4 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`block w-full text-left font-medium transition duration-300 capitalize ${
                                    activeSection === item
                                        ? "text-purple-600 font-semibold dark:text-purple-400"
                                        : "text-gray-800 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                                }`}
                            >
                                {item === "mission" ? "Mission & Vision" :
                                    item === "core-values" ? "Core Values" :
                                        item}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="block w-full text-center px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 mt-4"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;