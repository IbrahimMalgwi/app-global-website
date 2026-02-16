// src/components/Contact.jsx
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, Sparkles, MessageSquare, User, Briefcase } from "lucide-react";
import { useState, useRef } from "react";
import { AnimatedBackground } from "./UI/AnimatedBackground";

// ==================== Sub-components ====================

const FormInput = ({ icon: Icon, label, name, type = "text", value, onChange, placeholder, required = false }) => (
    <div className="space-y-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-focus-within:opacity-30 blur transition-opacity duration-300" />
            <div className="relative flex items-center">
                <Icon className="absolute left-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/30 transition-all duration-300 outline-none text-gray-900 dark:text-white"
                />
            </div>
        </div>
    </div>
);

const FormTextarea = ({ icon: Icon, label, name, value, onChange, placeholder, rows = 4, required = false }) => (
    <div className="space-y-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-focus-within:opacity-30 blur transition-opacity duration-300" />
            <div className="relative flex">
                <Icon className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows}
                    required={required}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/30 transition-all duration-300 outline-none text-gray-900 dark:text-white resize-none"
                />
            </div>
        </div>
    </div>
);

const ContactInfoCard = ({ icon: Icon, title, children, color = "purple", delay = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="relative group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Glow effect */}
            <motion.div
                className={`absolute -inset-1 bg-gradient-to-r from-${color}-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}
                animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
            />

            <div className="relative p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-${color}-100 dark:bg-${color}-900/30`}>
                        <Icon className={`w-6 h-6 text-${color}-600 dark:text-${color}-400`} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
                        <div className="text-gray-600 dark:text-gray-400">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SuccessModal = ({ isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Message Sent!
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Thank you for reaching out. We'll get back to you within 24 hours.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

// ==================== Main Component ====================

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const formRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error for this field when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log("Form submitted:", formData);
            setShowSuccess(true);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Business hours
    const businessHours = [
        { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
        { day: "Saturday", hours: "Closed" },
        { day: "Sunday", hours: "Closed" },
    ];

    return (
        <section
            id="contact"
            className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
        >
            {/* Animated Background */}
            <AnimatedBackground variant="gradient" density="medium" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-600/5 rounded-full blur-3xl" />

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/20 dark:bg-purple-400/10 rounded-full"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [null, Math.random() * 100 + '%'],
                            scale: [0, 1, 0],
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-full border border-purple-200 dark:border-purple-500/30 shadow-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs md:text-sm text-gray-700 dark:text-white/90 font-medium tracking-wide">
                            Get In Touch
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Let's{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Connect
                            </span>
                            <motion.div
                                initial={{ width: 0, left: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute bottom-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                            />
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                        Ready to transform your digital infrastructure? Let's discuss how we can help
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    {/* Contact Information - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                <ContactInfoCard icon={MapPin} title="Address" color="purple" delay={0.1}>
                                    <p>Plot 1668B Oyin Jolayemi Street</p>
                                    <p>Victoria Island, Lagos</p>
                                    <p>Nigeria</p>
                                </ContactInfoCard>

                                <ContactInfoCard icon={Phone} title="Phone" color="green" delay={0.2}>
                                    <p>+234 806 211 4900</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">24/7 Support</p>
                                </ContactInfoCard>

                                <ContactInfoCard icon={Mail} title="Email" color="pink" delay={0.3}>
                                    <p>info@appglobaltechnologies.com</p>
                                    <p>support@appglobaltechnologies.com</p>
                                </ContactInfoCard>

                                <ContactInfoCard icon={Clock} title="Business Hours" color="blue" delay={0.4}>
                                    {businessHours.map((schedule, index) => (
                                        <div key={index} className="flex justify-between gap-4 text-sm">
                                            <span>{schedule.day}:</span>
                                            <span className="font-medium">{schedule.hours}</span>
                                        </div>
                                    ))}
                                </ContactInfoCard>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 text-center"
                            >
                                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Support</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 text-center"
                            >
                                <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">&lt;24h</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Response</p>
                            </motion.div>
                        </div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="relative rounded-xl overflow-hidden shadow-lg h-48 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.723554465959!2d3.4236904114451043!3d6.429549424219285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52e38ebfced%3A0x4e1ee7813081e3f1!2s1668b%20Oyin%20Jolayemi%20St%2C%20Victoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1755854275405!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps showing App Global Technologies office location at 1668B Oyin Jolayemi Street, Victoria Island, Lagos"
                                className="w-full h-full"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Contact Form - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
                            {/* Form Header */}
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
                                <div className="flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-white" />
                                    <h3 className="text-xl font-bold text-white">Send us a message</h3>
                                </div>
                                <p className="text-white/80 text-sm mt-2">
                                    Fill out the form below and we'll get back to you within 24 hours
                                </p>
                            </div>

                            {/* Form */}
                            <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <FormInput
                                        icon={User}
                                        label="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="John"
                                        required
                                    />
                                    {errors.firstName && (
                                        <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                                    )}

                                    <FormInput
                                        icon={User}
                                        label="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        required
                                    />
                                    {errors.lastName && (
                                        <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                                    )}
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <FormInput
                                        icon={Mail}
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                                    )}

                                    <FormInput
                                        icon={Phone}
                                        label="Phone Number"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+234 806 211 4900"
                                    />
                                </div>

                                <FormInput
                                    icon={Briefcase}
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                />

                                <FormTextarea
                                    icon={MessageSquare}
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    required
                                />
                                {errors.message && (
                                    <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="relative w-full group overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <div className="relative z-10 inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </div>
                                </button>

                                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                                    By submitting this form, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Success Modal */}
            <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
        </section>
    );
}