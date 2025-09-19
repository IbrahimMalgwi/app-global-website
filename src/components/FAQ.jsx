//src/components/FAQ.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What makes GlobalCare EHR different from other systems?",
            answer:
                "GlobalCare EHR combines AI-powered insights with seamless interoperability, ensuring your healthcare data flows smoothly across all networks while providing intelligent analytics for better patient care.",
        },
        {
            question: "How secure is AppGlobal Pay for financial transactions?",
            answer:
                "AppGlobal Pay uses enterprise-grade encryption, multi-factor authentication, and complies with international financial security standards including PCI DSS to ensure your transactions are completely secure.",
        },
        {
            question:
                "Can GlobalCare systems integrate with existing healthcare infrastructure?",
            answer:
                "Yes, our systems are designed for seamless integration with existing healthcare infrastructure, supporting multiple data formats and communication protocols for smooth transitions.",
        },
        {
            question: "What support do you provide for implementation?",
            answer:
                "We provide comprehensive support including system setup, staff training, data migration assistance, and 24/7 technical support to ensure smooth implementation and operation.",
        },
        {
            question: "How does the AI in your systems work?",
            answer:
                "Our AI systems use advanced machine learning algorithms to analyze patterns in healthcare data, providing predictive insights, automated workflows, and intelligent recommendations while maintaining full data privacy and security.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Get answers to common questions about our solutions and services
                    </p>
                </motion.div>

                {/* FAQ items */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md border-0"
                            >
                                <button
                                    onClick={() => toggleFAQ(i)}
                                    className="flex justify-between items-center w-full p-6 text-left text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform duration-300 ${
                                            openIndex === i ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openIndex === i ? "auto" : 0,
                                        opacity: openIndex === i ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
