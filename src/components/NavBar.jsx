import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [darkMode, setDarkMode] = useState(false);

    // Handle scroll to update active section
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const sections = document.querySelectorAll("section");
    //         let currentSection = "home";
    //
    //         sections.forEach((section) => {
    //             const sectionTop = section.offsetTop - 100;
    //             if (window.scrollY >= sectionTop) {
    //                 currentSection = section.id;
    //             }
    //         });
    //
    //         setActiveSection(currentSection);
    //     };
    //
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section, [id]"); // Also look for elements with IDs
            let currentSection = "home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // Check for saved theme preference
    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);

        setDarkMode(isDark);
        updateTheme(isDark);
    }, []);

    // Update theme class and localStorage
    const updateTheme = (isDark) => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Toggle dark/light mode
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        updateTheme(newDarkMode);
    };

    // Smooth scroll function

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-md dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between h-16">
                {/* Logo */}
                <div
                    className="text-2xl font-bold text-purple-600 cursor-pointer dark:text-purple-400"
                    onClick={() => scrollToSection("home")}
                >
                    AppGlobal
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 items-center">
                    {["home", "about", "services", "team", "partners", "blog", "contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item);
                            }}
                            className={`font-medium transition duration-300 capitalize ${
                                activeSection === item
                                    ? "text-purple-600 font-semibold dark:text-purple-400"
                                    : "text-gray-800 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                            }`}
                        >
                            {item}
                        </a>
                    ))}

                    {/* Dark Mode Toggle - REMOVED THE DUPLICATE HERE */}
                </div>

                {/* CTA Button and Toggle Container */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Dark Mode Toggle for Desktop - KEEP ONLY THIS ONE */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>

                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("contact");
                        }}
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-4">
                    {/* Dark Mode Toggle for Mobile */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
                    <div className="px-6 py-4 space-y-4">
                        {["home", "about", "services", "team", "partners", "blog", "contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item);
                                }}
                                className={`block font-medium transition duration-300 capitalize ${
                                    activeSection === item
                                        ? "text-purple-600 font-semibold dark:text-purple-400"
                                        : "text-gray-800 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                                }`}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                            className="block w-full text-center px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 mt-4"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}