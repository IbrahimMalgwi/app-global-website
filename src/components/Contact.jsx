import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // 👉 integrate API/Email service here
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
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
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Ready to transform your digital infrastructure? Let&apos;s discuss
                        how we can help
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="rounded-lg p-8 shadow-xl bg-white dark:bg-gray-800">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                                Send us a message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-blue-600 bg-gray-50 dark:bg-gray-900 dark:text-white"
                                    />
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-blue-600 bg-gray-50 dark:bg-gray-900 dark:text-white"
                                    />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-blue-600 bg-gray-50 dark:bg-gray-900 dark:text-white"
                                />
                                <input
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-blue-600 bg-gray-50 dark:bg-gray-900 dark:text-white"
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows={6}
                                    className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-blue-600 bg-gray-50 dark:bg-gray-900 dark:text-white"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium
                    bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700
                    text-white h-10 px-6 py-2 w-full transition-colors"
                                >
                                    Send Message
                                    <Send className="ml-2 w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">
                                            Address
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Plot 16688 Oyin Jolayemi Street <br /> Victoria Island
                                            Lagos
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-green-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">
                                            Phone
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            +234 806 211 4900
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-violet-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">
                                            Email
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            info@appglobaltechnologies.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Contact Image */}
                        <div className="relative">
                            <img
                                src="images/contact.png"
                                alt="Office Location"
                                className="rounded-lg shadow-lg w-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-violet-600/20 rounded-lg" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
