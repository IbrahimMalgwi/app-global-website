import React from "react";
import aboutImage from "../assets/images/about.jpeg";

export default function About() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 lg:px-20 py-20 overflow-hidden">
            {/* Soft Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>

            {/* Decorative Gradient Shapes */}
            <div className="absolute top-20 -left-16 w-80 h-80 bg-purple-200 opacity-30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-200 opacity-30 rounded-full blur-3xl animate-pulse delay-300"></div>
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-pink-200 opacity-30 rounded-full blur-3xl animate-pulse delay-200"></div>
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
                {/* Centered Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 text-gray-800">
                    About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Us</span>
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mb-16">
                    {/* Combined Text Card - Rectangular like Mission/Vision */}
                    <div className="bg-white rounded-3xl shadow-2xl p-10 w-full lg:w-1/2 max-w-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out text-left mb-12 lg:mb-0">
                        <div className="relative flex items-center justify-center mb-8">
                            <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full blur-xl opacity-40"></div>
                        </div>

                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                            We are a{" "}
                            <span className="font-semibold text-purple-600">
                multi-faceted business
            </span>{" "}
                            dedicated to providing innovative technology solutions tailored to
                            key sectors in the African economy.
                        </p>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                            Our approach{" "}
                            <span className="font-semibold text-pink-600">empowers growth</span>{" "}
                            and drives impactful results for both government and private
                            organizations, delivering solutions that make a real difference.
                        </p>
                    </div>

                    {/* Image Card - Rectangular like Mission/Vision */}
                    <div className="bg-white rounded-3xl shadow-2xl p-10 w-full lg:w-1/2 max-w-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        {/* Image with container */}
                        <div className="relative z-10 p-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl shadow-lg transform hover:scale-105 transition duration-700">
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src={aboutImage}
                                    alt="A diverse team of professionals celebrating"
                                    className="w-full h-auto rounded-xl object-cover transform hover:scale-110 transition duration-1000"
                                />
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                                </svg>
                            </div>

                            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 16.42v3.536a1 1 0 01-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 014.044 3H7.58a.5.5 0 01.498.45c.023.23.05.455.082.675A14.943 14.943 0 009.35 7.724a.5.5 0 01-.142.464l-1.71 1.709a12 12 0 005.321 5.321l1.71-1.71a.5.5 0 01.463-.141 14.943 14.943 0 003.6.19c.22.032.445.06.675.082a.5.5 0 01.45.498z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section - Smaller and Centered */}
                <div className="flex flex-wrap justify-center gap-6 mt-12 px-4">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl shadow-sm text-center min-w-[140px] transform hover:scale-105 transition duration-300 border border-purple-100">
                        <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                        <div className="text-md font-medium text-gray-700">Projects</div>
                        <div className="text-xs text-gray-500 mt-1">Completed</div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-indigo-50 p-4 rounded-xl shadow-sm text-center min-w-[140px] transform hover:scale-105 transition duration-300 border border-pink-100">
                        <div className="text-2xl font-bold text-pink-600 mb-1">15+</div>
                        <div className="text-md font-medium text-gray-700">Partners</div>
                        <div className="text-xs text-gray-500 mt-1">Worldwide</div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl shadow-sm text-center min-w-[140px] transform hover:scale-105 transition duration-300 border border-indigo-100">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">10+</div>
                        <div className="text-md font-medium text-gray-700">Years</div>
                        <div className="text-xs text-gray-500 mt-1">Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
}