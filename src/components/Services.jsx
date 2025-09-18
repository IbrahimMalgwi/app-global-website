// src/components/OurServices.jsx
import React, { useState } from "react";

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
        description:
            "Smart Records. Better Care. Everywhere. Streamlined hospital management system that simplifies healthcare operations and improves patient care delivery.",
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
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.104c.725.148 1.453-.384 1.453-1.069V15.75m-4.14 6.304v-4.483c0-2.072.486-4.13 1.453-6.046 1.114-2.28 3.53-3.69 6.1-3.586-.18.497-.333 1-.453 1.5-1.996 4.606-2.502 9.049-2.062 13.518-.11.168-.21.328-.3 1.5H2.25z"
                />
            </svg>
        ),
        title: "ppGlobal Pay",
        description:
            "Digital platform for cooperative societies to manage members, track savings, and handle loan operations. Secure Transactions Multiple Currencies Instant Processing",
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
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "Globalshell Resources",
        description:
            "Early warning system that helps farmers mitigate climate risks and protect their agricultural investments.",
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
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "Educational Information Systems",
        description:
            "Our School Management Suite of services including Result processing, student demographics, time attendance, health management, payroll, payments, and accounting.",
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
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.104c.725.148 1.453-.384 1.453-1.069V15.75m-4.14 6.304v-4.483c0-2.072.486-4.13 1.453-6.046 1.114-2.28 3.53-3.69 6.1-3.586-.18.497-.333 1-.453 1.5-1.996 4.606-2.502 9.049-2.062 13.518-.11.168-.21.328-.3 1.5H2.25z"
                />
            </svg>
        ),
        title: "E-commerce Solutions",
        description:
            "We connect shoppers all over the country with verified merchants, farmers, and producers of goods and services with special consideration to price, quality, and proximity.",
    },
];

const OurServices = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? services.length - 3 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= services.length - 3 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 lg:p-12 text-center relative overflow-hidden">
            {/* Background Circles */}
            <div className="absolute w-40 h-40 rounded-full bg-indigo-200 opacity-50 blur-2xl top-16 left-16"></div>
            <div className="absolute w-40 h-40 rounded-full bg-pink-200 opacity-50 blur-2xl bottom-16 right-16"></div>
            <div className="absolute w-40 h-40 rounded-full bg-purple-200 opacity-50 blur-2xl top-1/2 left-0 -translate-y-1/2"></div>
            <div className="absolute w-40 h-40 rounded-full bg-indigo-200 opacity-50 blur-2xl bottom-0 left-1/2 -translate-x-1/2"></div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600">
                    Our Services
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    We offer a comprehensive range of digital services to help your business thrive.
                </p>

                <div className="relative w-full">
                    {/* Slider buttons */}
                    <div className="flex justify-between items-center w-full absolute z-20 top-1/2 -translate-y-1/2">
                        <button
                            onClick={prevSlide}
                            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Services carousel */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                        >
                            {services.map((service, index) => (
                                <div key={index} className="flex-shrink-0 w-1/3 p-4">
                                    <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                        <div className="relative flex items-center justify-center mb-6">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {service.description}
                                        </p>
                                        <button className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600 font-bold hover:underline">
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-2 mt-8">
                    {Array.from({ length: Math.ceil(services.length / 3) }).map(
                        (_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${
                                    index === Math.floor(currentIndex / 3)
                                        ? "bg-gradient-to-r from-indigo-500 to-pink-600"
                                        : "bg-gray-300"
                                }`}
                            ></div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default OurServices;
