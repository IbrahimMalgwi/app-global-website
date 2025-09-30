// src/components/Services.jsx
import React from "react";
import { useCarousel } from "../hooks/useCarousel";
import { ServiceCard } from "./UI/ServiceCard";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { typography } from "../theme/typography";
import colors from "../theme/colors";
import useWindowSize from "../hooks/useWindowSize";
import { services } from "../data/services";

const Services = () => {
    const { width } = useWindowSize();
    const itemsPerView = width >= 1024 ? 3 : width >= 640 ? 2 : 1;

    // Create extended array for seamless looping
    const extendedServices = [...services, ...services, ...services];

    const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(
        extendedServices,
        itemsPerView,
        services.length
    );

    // Calculate the visible index for pagination
    const visibleIndex = currentIndex % services.length;

    return (
        <section id="services">
            <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 lg:p-12 text-center relative overflow-hidden">
                <AnimatedBackground />

                <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className={`${typography.h1} mb-4 ${colors.text.primary} dark:text-white`}>
                        Our <span className={`bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent`}>Services</span>
                    </h2>
                    <p className={`${typography.body} mb-12 dark:text-gray-300`}>
                        We offer a comprehensive range of digital services to help your business thrive.
                    </p>

                    <div className="relative w-full">
                        <div className="flex justify-between items-center w-full absolute z-20 top-1/2 -translate-y-1/2">
                            <button
                                onClick={prevSlide}
                                className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 border border-gray-200 dark:border-gray-600"
                                aria-label="Previous services"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-gray-600 dark:text-gray-400"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 border border-gray-200 dark:border-gray-600"
                                aria-label="Next services"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-gray-600 dark:text-gray-400"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>

                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                            >
                                {extendedServices.map((service, index) => (
                                    <div
                                        key={`service-${service.title}-${index}`}
                                        className="flex-shrink-0 p-4"
                                        style={{ width: `${100 / itemsPerView}%` }}
                                    >
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

                    <div className="flex justify-center space-x-2 mt-8">
                        {Array.from({ length: services.length }).map((_, index) => (
                            <button
                                key={`dot-${index}`}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === visibleIndex
                                        ? "bg-gradient-to-r from-indigo-500 to-pink-600 scale-110"
                                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;