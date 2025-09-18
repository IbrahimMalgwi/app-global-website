// src/components/OurServices.jsx
import React from "react";
import { useCarousel } from "../hooks/useCarousel";
import { ServiceCard } from "./UI/ServiceCard";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { typography } from "../theme/typography";
import colors from "../theme/colors";
import useWindowSize from "../hooks/useWindowSize";


// Moved services data outside component for better readability
const services = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
            </svg>
        ),
        title: "GlobalCare EHR",
        description: "Smart Records. Better Care. Everywhere. Streamlined hospital management system that simplifies healthcare operations and improves patient care delivery.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
            </svg>
        ),
        title: "App Global Pay",
        description: "Smart Records. Better Care. Everywhere. Streamlined hospital management system that simplifies healthcare operations and improves patient care delivery.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
            </svg>
        ),
        title: "GlobalShell Resources",
        description: "Smart Records. Better Care. Everywhere. Streamlined hospital management system that simplifies healthcare operations and improves patient care delivery.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
            </svg>
        ),
        title: "GlobalCare EHR",
        description: "Smart Records. Better Care. Everywhere. Streamlined hospital management system that simplifies healthcare operations and improves patient care delivery.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
            </svg>
        ),
        title: "App Global Pay",
        description: "Smart Records. Better Care. Everywhere. Streamlined hospital management system that simplifies healthcare operations and improves patient care delivery.",
    },

];

const OurServices = () => {

    const { width } = useWindowSize();
    const itemsPerView = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
    const { currentIndex, totalPages, nextSlide, prevSlide, goToSlide } = useCarousel(services, itemsPerView);
    // Use the custom hook for carousel logic

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 lg:p-12 text-center relative overflow-hidden">

            {/* Use the themed animated background */}
            <AnimatedBackground />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Use typography for heading */}
                <h2 className={`${typography.h1} mb-4 ${colors.text.primary}`}>
                    Our <span className={`bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent`}>Services</span>
                </h2>
                {/* Use typography for subtext */}
                <p className={`${typography.body} mb-12`}>
                    We offer a comprehensive range of digital services to help your business thrive.
                </p>

                <div className="relative w-full">
                    {/* Slider buttons */}
                    <div className="flex justify-between items-center w-full absolute z-20 top-1/2 -translate-y-1/2">
                        <button
                            onClick={prevSlide}
                            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition duration-300"
                            aria-label="Previous services"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-600"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition duration-300"
                            aria-label="Next services"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-600"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Services carousel */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                        >
                            {services.map((service, index) => (
                                <div key={index} className="flex-shrink-0 w-1/3 p-4">
                                    <ServiceCard
                                        icon={service.icon}
                                        title={service.title}
                                        description={service.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-2 mt-8">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === Math.floor(currentIndex / itemsPerView)
                                    ? "bg-gradient-to-r from-indigo-500 to-pink-600"
                                    : "bg-gray-300"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;