import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const subsidiaries = [
    {
        name: "GlobalCare EMR",
        subtitle: "Hospital Solutions",
        logo: "https://placehold.co/40x40/f43f5e/ffffff?text=BS",
        image: "https://placehold.co/600x400/a3e635/000000?text=Globalcare",
        description: `AI-Driven Insights: Harness the power of artificial intelligence to deliver meaningful insights. Human-Centered Care: Focus on the patient experience with personalized care solutions.    Seamless Connectivity: Ensure smooth integration across various healthcare platforms. Interoperability: Facilitate seamless data exchange between different systems. Data Security: Prioritize patient privacy with top-notch security measures. Telehealth Integration: Offer virtual care solutions to enhance accessibility. One System, Every Network: Unify healthcare services under one comprehensive system.`,
        website: "#",
    },
    {
        name: "AppGlobal Pay",
        subtitle: "One Platform, Endless Payment Possibilities.",
        logo: "https://placehold.co/40x40/60a5fa/ffffff?text=ML",
        image: "https://placehold.co/600x400/4ade80/000000?text=AppGlobal",
        description: `Secure Transactions: Guarantee safety with advanced encryption technologies. Multiple Currencies: Enable transactions in various currencies for global reach. Instant Processing: Experience immediate transaction confirmations for convenience. Secure Transactions: Guarantee safety with advanced encryption technologies. Multiple Currencies: Enable transactions in various currencies for global reach. Instant Processing: Experience immediate transaction confirmations for convenience.`,
        website: "#",
    },
    {
        name: "GlobalShell",
        subtitle: "Smart Grids. Clean Energy. Connected World",
        logo: "https://placehold.co/40x40/34d399/ffffff?text=In",
        image: "https://placehold.co/600x400/22d3ee/000000?text=GlobalShell",
        description: `Smart Infrastructure: Build resilient and intelligent infrastructure systems. Clean Energy: Promote sustainable energy solutions for a greener future. Connected Systems: Ensure interoperability among various energy networks. Smart Infrastructure: Build resilient and intelligent infrastructure systems. Clean Energy: Promote sustainable energy solutions for a greener future. Connected Systems: Ensure interoperability among various energy networks.
`,
        website: "#",
    },
    {
        name: "GlobalCare EHR",
        subtitle: "Smart Records. Better Care. Everywhere.",
        logo: "https://placehold.co/40x40/8b5cf6/ffffff?text=BC",
        image: "https://placehold.co/600x400/c084fc/000000?text=Globalcare",
        description: `AI-Driven Insights: Harness the power of artificial intelligence to deliver meaningful insights. Human-Centered Care: Focus on the patient experience with personalized care solutions.    Seamless Connectivity: Ensure smooth integration across various healthcare platforms. Interoperability: Facilitate seamless data exchange between different systems. Data Security: Prioritize patient privacy with top-notch security measures. Telehealth Integration: Offer virtual care solutions to enhance accessibility. One System, Every Network: Unify healthcare services under one comprehensive system.`,
        website: "#",
    },
    {
        name: "AppGlobal Pay",
        subtitle: "WHERE SHOPPING MEETS CONVENIENCE",
        logo: "https://placehold.co/40x40/f97316/ffffff?text=KM",
        image: "https://placehold.co/600x400/fb923c/000000?text=AppGlobal",
        description: `AI-Driven Insights: Harness the power of artificial intelligence to deliver meaningful insights. Human-Centered Care: Focus on the patient experience with personalized care solutions.    Seamless Connectivity: Ensure smooth integration across various healthcare platforms. Interoperability: Facilitate seamless data exchange between different systems. Data Security: Prioritize patient privacy with top-notch security measures. Telehealth Integration: Offer virtual care solutions to enhance accessibility. One System, Every Network: Unify healthcare services under one comprehensive system.`,
        website: "#",
    },
    {
        name: "Globalshell Resources",
        subtitle: "Smart Grids. Clean Energy. Connected World",
        logo: "https://placehold.co/40x40/ef4444/ffffff?text=KT",
        image: "https://placehold.co/600x400/f87171/000000?text=Globalshell ",
        description: `Smart Infrastructure: Build resilient and intelligent infrastructure systems. Clean Energy: Promote sustainable energy solutions for a greener future. Connected Systems: Ensure interoperability among various energy networks. Smart Infrastructure: Build resilient and intelligent infrastructure systems. Clean Energy: Promote sustainable energy solutions for a greener future. Connected Systems: Ensure interoperability among various energy networks.
`,
        website: "#",
    },
];

const OurSubsidiaries = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollRef = useRef(null);

    // Auto rotate every 6s
    useEffect(() => {
        const timer = setInterval(() => {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % subsidiaries.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    // Smooth scroll left panel
    useEffect(() => {
        if (scrollRef.current) {
            const selectedItem = scrollRef.current.children[selectedIndex];
            if (selectedItem) {
                selectedItem.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            }
        }
    }, [selectedIndex]);

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 lg:p-12 text-center overflow-hidden">
            {/* Background gradients */}
            <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-3xl top-16 left-20"></div>
            <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 opacity-20 blur-3xl bottom-16 right-20"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Our Subsidiaries
                </h2>

                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                    {/* Left list */}
                    <div
                        ref={scrollRef}
                        className="w-full lg:w-1/3 p-4 max-h-[500px] overflow-y-auto"
                    >
                        {subsidiaries.map((subsidiary, index) => (
                            <div
                                key={subsidiary.name}
                                className={`flex items-center space-x-4 p-4 rounded-xl mb-4 cursor-pointer transition-all duration-300 ${
                                    selectedIndex === index
                                        ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 shadow-md scale-105"
                                        : "bg-white/80 hover:bg-gray-100"
                                }`}
                                onClick={() => setSelectedIndex(index)}
                            >
                                <img
                                    src={subsidiary.logo}
                                    alt={`${subsidiary.name} logo`}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="text-left">
                                    <h4 className="font-bold text-lg">{subsidiary.name}</h4>
                                    <p className="text-sm text-gray-500">{subsidiary.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Middle image with animation */}
                    <div className="w-full lg:w-1/3 flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={subsidiaries[selectedIndex].image}
                                src={subsidiaries[selectedIndex].image}
                                alt={subsidiaries[selectedIndex].name}
                                className="w-full h-auto max-h-[400px] rounded-xl shadow-lg"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6 }}
                            />
                        </AnimatePresence>
                    </div>

                    {/* Right content with animation */}
                    <div className="w-full lg:w-1/3 text-left">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={subsidiaries[selectedIndex].name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    {subsidiaries[selectedIndex].name}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {subsidiaries[selectedIndex].description}
                                </p>
                                <a
                                    href={subsidiaries[selectedIndex].website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300"
                                >
                                    Visit Website →
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dots navigation */}
                <div className="flex justify-center mt-8 space-x-2">
                    {subsidiaries.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition ${
                                index === selectedIndex
                                    ? "bg-blue-600 scale-125"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurSubsidiaries;
