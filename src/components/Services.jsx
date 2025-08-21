import { motion } from "framer-motion";
import {
    Heart,
    Brain,
    Globe,
    CreditCard,
    Leaf,
    Shield,
    CircleCheckBig,
} from "lucide-react";

const services = [
    {
        title: "GlobalCare EHR",
        subtitle: "Smart Records. Better Care. Everywhere.",
        icon: <Heart className="w-8 h-8 text-white" />,
        iconBg: "from-blue-500 to-green-500",
        features: [
            "AI-Driven Insights",
            "Human-Centered Care",
            "Seamless Connectivity",
        ],
    },
    {
        title: "GlobalCare LIS",
        subtitle: "Precision in Every Test, Power in Every Result.",
        icon: <Brain className="w-8 h-8 text-white" />,
        iconBg: "from-violet-500 to-blue-500",
        features: ["Diagnostic Excellence", "Faster Results", "Smart Workflows"],
    },
    {
        title: "GlobalCare Telemedicine",
        subtitle: "Connecting You to World-Class Doctors anytime, wherever you are",
        icon: <Globe className="w-8 h-8 text-white" />,
        iconBg: "from-green-500 to-blue-500",
        features: ["24/7 Access", "Global Doctors", "Instant Consultations"],
    },
    {
        title: "AppGlobal Pay",
        subtitle: "One Platform, Endless Payment Possibilities.",
        icon: <CreditCard className="w-8 h-8 text-white" />,
        iconBg: "from-blue-500 to-violet-500",
        features: [
            "Secure Transactions",
            "Multiple Currencies",
            "Instant Processing",
        ],
    },
    {
        title: "Globalshell Resources",
        subtitle: "Smart Grids. Clean Energy. Connected World",
        icon: <Leaf className="w-8 h-8 text-white" />,
        iconBg: "from-green-500 to-violet-500",
        features: ["Smart Infrastructure", "Clean Energy", "Connected Systems"],
    },
    {
        title: "GlobalCare Pharmacy",
        subtitle: "Smart Medication Management. Seamless Prescription Processing.",
        icon: <Shield className="w-8 h-8 text-white" />,
        iconBg: "from-green-500 to-blue-500",
        features: [
            "Digital Prescriptions",
            "Inventory Management",
            "Patient Safety Alerts",
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 relative">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        Our Solutions
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Comprehensive digital solutions that transform healthcare, finance,
                        and energy sectors
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="perspective-1000"
                        >
                            <div className="rounded-lg bg-card text-card-foreground h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    {/* Icon */}
                                    <div
                                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.iconBg} flex items-center justify-center mb-4`}
                                    >
                                        {service.icon}
                                    </div>

                                    <div className="tracking-tight text-2xl font-bold text-gray-800 dark:text-white">
                                        {service.title}
                                    </div>
                                    <div className="text-lg text-gray-600 dark:text-gray-300">
                                        {service.subtitle}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="p-6 pt-0">
                                    <ul className="space-y-2">
                                        {service.features.map((feat, j) => (
                                            <li key={j} className="flex items-center gap-2">
                                                <CircleCheckBig className="w-5 h-5 text-green-500" />
                                                <span className="text-gray-700 dark:text-gray-300">
                          {feat}
                        </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
