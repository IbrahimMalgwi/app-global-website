import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { typography } from "../theme/typography";
import colors from "../theme/colors";

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
                        <h3 className={`${typography.h2} mb-4 bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent`}>
                            AppGlobal Group
                        </h3>
                        <p className={`${colors.text.muted} mb-4`}>
                            Building Tomorrow&apos;s Digital Solutions, Today.
                        </p>
                        <div className="flex space-x-4">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-10 h-10 bg-gradient-to-r ${colors.gradients.primary} rounded-full flex items-center justify-center`}
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
                        <h4 className={`${typography.h3} mb-4`}>Solutions</h4>
                        <ul className={`space-y-2 ${colors.text.muted}`}>
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
                        <h4 className={`${typography.h3} mb-4`}>Company</h4>
                        <ul className={`space-y-2 ${colors.text.muted}`}>
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
                        <h4 className={`${typography.h3} mb-4`}>Support</h4>
                        <ul className={`space-y-2 ${colors.text.muted}`}>
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
                    <p className={colors.text.muted}>© 2025 AppGlobal Group. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}