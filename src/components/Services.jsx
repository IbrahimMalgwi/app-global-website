// src/components/Services.jsx
import React  from "react";
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
        title: "GlobalCare Telemedicine Application",
        description: "A Smart mobile application. this give you instant access to healthcare professionals, enabling remote consultations, diagnosis, and treatment from the comfort of your home.",
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
        title: "Laboratory Information System (LIS)",
        description: "A comprehensive Laboratory Information System (LIS) that streamlines lab operations, enhances data management, and improves patient care through efficient test processing and reporting.",
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
        title: "Picture Archiving System (PAC)",
        description: "A robust Picture Archiving and Communication System (PACS) that enables efficient storage, retrieval, and sharing of medical images, enhancing diagnostic accuracy and collaboration among healthcare professionals.",
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
        title: "Patient Self-Service Kiosk",
        description: "An intuitive Patient Self-Service Kiosk that empowers patients to check-in, update personal information, and make payments, enhancing the overall patient experience and reducing administrative workload.",
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
        title: "X-Global Inventory, Accounting & ERP System",
        description: "A comprehensive ERP system that integrates inventory management, accounting, and other business processes to streamline operations, improve efficiency, and enhance decision-making.",
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
        title: "X-Global Human Resources & Payroll System",
        description: "A robust Human Resources and Payroll System that simplifies employee management, payroll processing, and compliance, enabling HR teams to focus on strategic initiatives and employee engagement.",
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
        title: "Cloud & Web Hosting",
        description: "Reliable and scalable cloud and web hosting solutions that ensure optimal performance, security, and uptime for your websites and applications.",
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
        title: "Biometric Solution",
        description: "Reliable and scalable cloud and web hosting solutions that ensure optimal performance, security, and uptime for your websites and applications.",
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
        title: "Networking",
        description: "Reliable and scalable cloud and web hosting solutions that ensure optimal performance, security, and uptime for your websites and applications.",
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

];
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
                    <h2 className={`${typography.h1} mb-4 ${colors.text.primary}`}>
                        Our <span className={`bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent`}>Services</span>
                    </h2>
                    <p className={`${typography.body} mb-12`}>
                        We offer a comprehensive range of digital services to help your business thrive.
                    </p>

                    <div className="relative w-full">
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
                                        : "bg-gray-300 hover:bg-gray-400"
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