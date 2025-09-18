import React from 'react';

const MissionVision = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 lg:px-20 py-20 text-center relative overflow-hidden">
            {/* Soft Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>

            {/* Decorative Gradient Shapes */}
            <div className="absolute w-80 h-80 rounded-full bg-purple-200 opacity-30 blur-3xl top-16 left-16 animate-pulse"></div>
            <div className="absolute w-96 h-96 rounded-full bg-pink-200 opacity-30 blur-3xl bottom-16 right-16 animate-pulse delay-200"></div>
            <div className="absolute w-72 h-72 rounded-full bg-indigo-200 opacity-30 blur-3xl top-1/2 left-0 -translate-y-1/2 animate-pulse delay-100"></div>
            <div className="absolute w-64 h-64 rounded-full bg-purple-200 opacity-30 blur-3xl bottom-0 left-1/2 -translate-x-1/2 animate-pulse delay-300"></div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {/* Centered Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 text-gray-800">
                    Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mission</span> & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Vision</span>
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
                    {/* Mission Card */}
                    <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-3xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-3xl text-center flex flex-col items-center">
                        <div className="relative flex items-center justify-center mb-8">
                            <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full blur-xl opacity-40"></div>
                            <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                                <svg
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md mx-auto">
                            To achieve a global reputation for delivering user-friendly,
                            innovative technology solutions that effectively address the
                            challenges faced by both public and private sectors.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-3xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-3xl text-center flex flex-col items-center">
                        <div className="relative flex items-center justify-center mb-8">
                            <div className="absolute w-24 h-24 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-xl opacity-40"></div>
                            <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                                <svg
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h3>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md mx-auto">
                            To nurture and accelerate innovative ideas into thriving companies
                            while delivering impactful technology solutions for both public and
                            private sectors.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;