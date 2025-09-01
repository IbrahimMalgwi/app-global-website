import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const links = ["about", "services", "blog", "team", "partners", "contact"];

    return (
        <div className="bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-violet-900/20 to-green-900/20"></div>
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            AppGlobal Group
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {links.map((link) => (
                                <a
                                    key={link}
                                    href={`#${link}`}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                                >
                                    {link}
                                </a>
                            ))}

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition"
                            >
                                {theme === "light" ? (
                                    <>
                                        <Moon className="w-5 h-5" /> Dark
                                    </>
                                ) : (
                                    <>
                                        <Sun className="w-5 h-5" /> Light
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg border bg-background dark:bg-gray-800"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-700 dark:text-gray-200"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <line x1="4" y1="6" x2="20" y2="6" />
                                    <line x1="4" y1="12" x2="20" y2="12" />
                                    <line x1="4" y1="18" x2="20" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu with Smooth Animation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="md:hidden px-6 py-4 flex flex-col space-y-4
                                bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg
                                border-t border-gray-200 dark:border-gray-700 shadow-lg"
                        >
                            {links.map((link) => (
                                <a
                                    key={link}
                                    href={`#${link}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                                >
                                    {link}
                                </a>
                            ))}

                            {/* Theme Toggle inside mobile */}
                            <button
                                onClick={toggleTheme}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg
                                bg-gray-200/80 dark:bg-gray-700/80 text-gray-900 dark:text-gray-100 transition"
                            >
                                {theme === "light" ? (
                                    <>
                                        <Moon className="w-5 h-5" /> Dark
                                    </>
                                ) : (
                                    <>
                                        <Sun className="w-5 h-5" /> Light
                                    </>
                                )}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}
