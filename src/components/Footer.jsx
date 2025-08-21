import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                            AppGlobal Group
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Building Tomorrow&apos;s Digital Solutions, Today.
                        </p>
                        <div className="flex space-x-4">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full flex items-center justify-center"
                                >
                                    <Star className="w-5 h-5 text-white" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Solutions</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>GlobalCare EHR</li>
                            <li>GlobalCare LIS</li>
                            <li>Telemedicine</li>
                            <li>AppGlobal Pay</li>
                            <li>Globalshell Resources</li>
                            <li>GlobalCare Pharmacy</li>
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Partners</li>
                            <li>News</li>
                        </ul>
                    </motion.div>

                    {/* Support */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                >
                    <p>© 2025 AppGlobal Group. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}
