import React from "react";
import aboutImage from "../assets/images/about.jpeg";

export default function About ()  {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 lg:px-20 py-20 overflow-hidden">
            {/* Soft Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>

            {/* Decorative Gradient Shapes */}
            <div className="absolute top-20 -left-16 w-80 h-80 bg-purple-200 opacity-30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-pink-200 opacity-30 rounded-full blur-3xl animate-pulse delay-200"></div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
                {/* Centered Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-gray-800">
                    About Us
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16">
                    {/* Text Section */}
                    <div className="lg:w-1/2 mb-12 lg:mb-0 text-left space-y-6">
                        <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                            We are a{" "}
                            <span className="font-semibold text-purple-600">
                multi-faceted business
              </span>{" "}
                            dedicated to providing innovative technology solutions tailored to
                            key sectors in the African economy.
                        </p>
                        <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                            Our approach{" "}
                            <span className="font-semibold text-pink-600">empowers growth</span>{" "}
                            and drives impactful results for both government and private
                            organizations, delivering solutions that make a real difference.
                        </p>

                    </div>

                    {/* Image Section */}
                    <div className="relative lg:w-1/2 h-96 flex justify-center items-center">
                        {/* Glow effect */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        </div>

                        {/* Image Card */}
                        <div className="relative z-10 p-6 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500">
                            <img
                                src={aboutImage}
                                alt="A diverse team of professionals celebrating"
                                className="w-full h-auto max-w-md rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};