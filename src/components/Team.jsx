import { motion } from "framer-motion";
import { useState } from "react";
import team from "../assets/images/team.png";

const TeamMember = ({ name, role, image, bio, delay, socialLinks }) => {
    const [isFlipped, setIsFlipped] = useState(false);


    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className="group h-80 relative perspective-1000 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Enhanced glow border with animation */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                 style={{
                     background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06d6a0, #3b82f6)",
                     padding: "3px",
                     animation: "spin 3s linear infinite",
                     WebkitAnimation: "spin 3s linear infinite"
                 }}>
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl"></div>
            </div>

            {/* Animated floating dots */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{
                            scale: [1, 1.5, 1],
                            transition: { duration: 0.5, delay: i * 0.1 }
                        }}
                        style={{
                            left: `${50 + 40 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                            top: `${50 + 40 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                        }}
                    ></motion.div>
                ))}
            </div>

            {/* 3D flip container */}
            <motion.div
                className="relative w-full h-full transition-all duration-700 transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                {/* Front side - Enhanced styling */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="text-center h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-white via-blue-50 to-violet-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-600 relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.2)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
                        </div>

                        <div className="relative mb-6">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full opacity-0 group-hover:opacity-30 blur-xl"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.img
                                src={image}
                                alt={name}
                                className="w-32 h-32 rounded-full mx-auto object-cover shadow-2xl relative z-10 border-4 border-white dark:border-gray-600 group-hover:border-blue-400 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        <motion.h3
                            className="text-xl font-bold text-gray-800 dark:text-white mb-2 relative z-10"
                            whileHover={{ color: "#3b82f6" }}
                            transition={{ duration: 0.2 }}
                        >
                            {name}
                        </motion.h3>

                        <motion.p
                            className="text-gray-600 dark:text-gray-300 relative z-10 font-medium"
                            whileHover={{ color: "#4f46e5" }}
                            transition={{ duration: 0.2 }}
                        >
                            {role}
                        </motion.p>

                        {/* Social icons with enhanced animation */}
                        <motion.div
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {socialLinks?.twitter && (
                                <motion.a
                                    href={socialLinks.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                                    </svg>
                                </motion.a>
                            )}
                            {socialLinks?.linkedin && (
                                <motion.a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                        <rect width="4" height="12" x="2" y="9"/>
                                        <circle cx="4" cy="4" r="2"/>
                                    </svg>
                                </motion.a>
                            )}
                            {socialLinks?.instagram && (
                                <motion.a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                    </svg>
                                </motion.a>
                            )}
                        </motion.div>

                        <motion.div
                            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded-full backdrop-blur-sm">
                                Click to flip
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Back side - Enhanced styling */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="h-full flex flex-col justify-between p-6 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 rounded-xl shadow-2xl text-white relative overflow-hidden">
                        {/* Animated background */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] bg-[length:20px_20px] animate-pulse"></div>
                        </div>

                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/15 rounded-full backdrop-blur-sm"></div>

                        <div className="relative z-10">
                            <motion.h3
                                className="text-lg font-bold mb-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {name}
                            </motion.h3>
                            <motion.p
                                className="text-sm text-blue-100 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                {bio}
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex justify-center space-x-4 mt-4 relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            {socialLinks?.twitter && (
                                <motion.a
                                    href={socialLinks.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                                    </svg>
                                </motion.a>
                            )}
                            {socialLinks?.linkedin && (
                                <motion.a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                        <rect width="4" height="12" x="2" y="9"/>
                                        <circle cx="4" cy="4" r="2"/>
                                    </svg>
                                </motion.a>
                            )}
                            {socialLinks?.instagram && (
                                <motion.a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                    </svg>
                                </motion.a>
                            )}
                        </motion.div>

                        <div className="absolute inset-0 rounded-xl border-2 border-white/30 backdrop-blur-sm"></div>
                    </div>
                </div>
            </motion.div>

            {/* Enhanced name tooltip */}
            <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 pointer-events-none backdrop-blur-sm"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-violet-600"></div>
            </motion.div>
        </motion.div>
    );
};

export default function Team() {
    const teamMembers = [
        {
            name: "Eng. Habib Yunusa",
            role: "Chief Executive Officer",
            image: team,
            bio: "Visionary leader with 15+ years of experience in healthcare technology innovation and digital transformation.",
            socialLinks: {
                twitter: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "TOYINBO ABDULJELIL",
            role: "Chief Operating Officer",
            image: team,
            bio: "Operations expert specializing in healthcare system optimization and process improvement strategies.",
            socialLinks: {
                twitter: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "ABDULLAHI YUNUSA",
            role: "Chief Technology Officer",
            image: team,
            bio: "Technology innovator with expertise in AI-driven solutions and secure healthcare data architecture.",
            socialLinks: {
                twitter: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "UMAR AMINU",
            role: "Business Analyst",
            image: team,
            bio: "Analytical expert focused on creating data-driven solutions for healthcare business challenges.",
            socialLinks: {
                twitter: "#",
                linkedin: "#",
                instagram: "#"
            }
        }
    ];

    return (
        <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        Meet Our Leadership Team
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        The brilliant minds driving innovation in healthcare technology and digital solutions
                    </p>
                </motion.div>

                {/* Team grid with enhanced layout */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            bio={member.bio}
                            socialLinks={member.socialLinks}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {/* Additional decorative elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">Currently expanding our team</span>
                    </div>
                </motion.div>
            </div>

            {/* Add CSS for the spinning animation */}
            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}