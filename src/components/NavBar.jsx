import React from "react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="text-2xl font-bold text-purple-600">
                    MyCompany
                </div>

                {/* Links */}
                <div className="hidden md:flex space-x-8">
                    <a
                        href="#home"
                        className="text-gray-800 font-medium hover:text-purple-600 transition duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-gray-800 font-medium hover:text-pink-600 transition duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="text-gray-800 font-medium hover:text-purple-600 transition duration-300"
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-800 font-medium hover:text-pink-600 transition duration-300"
                    >
                        Contact
                    </a>
                </div>

                {/* CTA Button */}
                <div>
                    <a
                        href="#get-started"
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
}
