// src/components/Team.jsx
import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Mail, Globe, Sparkles, Award, Users, Briefcase, Quote } from "lucide-react";
import { ThemedButton } from "./UI/ThemedButton";
import { TeamMemberCard } from "./UI/TeamMemberCard";
import { AnimatedBackground } from "./UI/AnimatedBackground";
import { ceo, executiveTeam } from "../data/teamMembers";

// ================= LOCAL IMAGES =================
import ceoImage from "../assets/images/ceo.jpeg";
import member1 from "../assets/images/abdul.png";
import member2 from "../assets/images/umar.png";
import member3 from "../assets/images/yusuf.jpeg";
import member4 from "../assets/images/taiyo.png";
import member5 from "../assets/images/fatoba.png";
import member6 from "../assets/images/adeboyin.png";
import member7 from "../assets/images/ibrahim.jpg";
import member9 from "../assets/images/team.png";
import member10 from "../assets/images/sam.jpeg";

// Map image imports to team members
const imageMap = {
    "../assets/images/ceo.jpeg": ceoImage,
    "../assets/images/abdul.png": member1,
    "../assets/images/umar.png": member2,
    "../assets/images/yusuf.jpeg": member3,
    "../assets/images/taiyo.png": member4,
    "../assets/images/fatoba.png": member5,
    "../assets/images/adeboyin.png": member6,
    "../assets/images/ibrahim.jpg": member7,
    "../assets/images/team.png": member9,
    "../assets/images/sam.jpeg": member10,
};

// Function to get actual image from import
const getActualImage = (imagePath) => {
    return imageMap[imagePath] || imagePath;
};

// ================= SUB-COMPONENTS =================

const StatCard = ({ icon: Icon, value, label, color = "purple" }) => (
    <motion.div
        className={`flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-${color}-200 dark:border-${color}-800/30 shadow-sm`}
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.2 }}
    >
        <div className={`p-3 rounded-lg bg-${color}-100 dark:bg-${color}-900/30`}>
            <Icon className={`w-5 h-5 text-${color}-600 dark:text-${color}-400`} />
        </div>
        <div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
            <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
        </div>
    </motion.div>
);

const AchievementBadge = ({ text, color = "purple" }) => (
    <motion.span
        className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-${color}-100 dark:bg-${color}-900/30 text-${color}-600 dark:text-${color}-400 border border-${color}-200 dark:border-${color}-800`}
        whileHover={{ scale: 1.1, y: -2 }}
        transition={{ duration: 0.2 }}
    >
        <Award className="w-3 h-3" />
        {text}
    </motion.span>
);

// ================= MAIN TEAM COMPONENT =================
export default function Team() {
    const [showFullBio, setShowFullBio] = useState(false);
    const [activeTab, setActiveTab] = useState("bio");
    const sectionRef = useRef(null);

    const shortBio = ceo.bio.split("\n\n")[0];

    const teamMembers = useMemo(
        () =>
            executiveTeam.map((member, i) => (
                <TeamMemberCard
                    key={`${member.name}-${i}`}
                    member={{
                        ...member,
                        image: getActualImage(member.image)
                    }}
                    delay={i * 0.1}
                />
            )),
        []
    );

    // CEO achievements
    const ceoAchievements = [
        "20+ Years Leadership",
        "Tech Innovation Award",
        "Industry Pioneer",
        "Global Speaker"
    ];

    // Animation variants
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: 0.3
            }
        }
    };

    return (
        <>
            {/* CEO Hero Section */}
            <section
                ref={sectionRef}
                id="team"
                className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
            >
                {/* Animated Background */}
                <AnimatedBackground variant="gradient" density="low" />

                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-600/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-600/5 rounded-full blur-3xl" />

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
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
                    {/* Section Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-full border border-purple-200 dark:border-purple-500/30 shadow-sm">
                            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-xs md:text-sm text-gray-700 dark:text-white/90 font-medium tracking-wide">
                                Meet Our Leadership
                            </span>
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* CEO Image with 3D effect */}
                        <motion.div
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative group perspective"
                        >
                            {/* Gradient border */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-50 group-hover:opacity-100 blur transition-all duration-500" />

                            {/* Image container */}
                            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 transform-gpu transition-all duration-500 group-hover:scale-[1.02] group-hover:rotateY-5">
                                <img
                                    src={getActualImage(ceo.image)}
                                    alt={ceo.name}
                                    className="w-full h-auto object-cover"
                                />

                                {/* Image overlay with gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Achievement badges on image */}
                                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                    {ceoAchievements.slice(0, 2).map((achievement, i) => (
                                        <AchievementBadge key={i} text={achievement} color="purple" />
                                    ))}
                                </div>
                            </div>

                            {/* Decorative quote mark */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                                <Quote className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                            </div>
                        </motion.div>

                        {/* CEO Bio */}
                        <motion.div
                            variants={contentVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* Name and Title */}
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                                    {ceo.name}
                                </h1>
                                <h2 className="text-xl md:text-2xl text-purple-600 dark:text-purple-400 font-medium mb-2">
                                    {ceo.title}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    {ceo.role}
                                </p>
                            </div>

                            {/* Quick stats */}
                            <div className="grid grid-cols-2 gap-3">
                                <StatCard icon={Briefcase} value="20+" label="Years Experience" color="purple" />
                                <StatCard icon={Users} value="200+" label="Team Members" color="pink" />
                                <StatCard icon={Globe} value="15+" label="Countries" color="blue" />
                                <StatCard icon={Award} value="25+" label="Awards" color="green" />
                            </div>

                            {/* Tabs */}
                            <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
                                {["bio", "achievements", "vision"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium capitalize transition-all duration-300 relative
                                            ${activeTab === tab
                                            ? 'text-purple-600 dark:text-purple-400'
                                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                        }`}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="min-h-[200px]">
                                <AnimatePresence mode="wait">
                                    {activeTab === "bio" && (
                                        <motion.div
                                            key="bio"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-4"
                                        >
                                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {showFullBio ? ceo.bio : shortBio}
                                            </p>
                                            {ceo.bio.split("\n\n").length > 1 && (
                                                <ThemedButton
                                                    onClick={() => setShowFullBio(!showFullBio)}
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    {showFullBio ? "Read Less" : "Read More"}
                                                </ThemedButton>
                                            )}
                                        </motion.div>
                                    )}

                                    {activeTab === "achievements" && (
                                        <motion.div
                                            key="achievements"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-3"
                                        >
                                            {ceoAchievements.map((achievement, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                                                >
                                                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {activeTab === "vision" && (
                                        <motion.div
                                            key="vision"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl"
                                        >
                                            <Quote className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
                                            <p className="text-xl text-gray-800 dark:text-gray-200 italic">
                                                "To build a legacy of innovation that transforms industries and empowers the next generation of technology leaders."
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-3 pt-4">
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect:</span>
                                {ceo.socials?.linkedin && (
                                    <motion.a
                                        href={ceo.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </motion.a>
                                )}
                                {ceo.socials?.twitter && (
                                    <motion.a
                                        href={ceo.socials.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </motion.a>
                                )}
                                {ceo.socials?.email && (
                                    <motion.a
                                        href={`mailto:${ceo.socials.email}`}
                                        className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Email"
                                    >
                                        <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Executive Team Grid */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
                {/* Animated Background */}
                <AnimatedBackground variant="particles" density="low" />

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-full border border-purple-200 dark:border-purple-500/30 shadow-sm mb-4">
                            <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-xs md:text-sm text-gray-700 dark:text-white/90 font-medium tracking-wide">
                                Leadership Team
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Executive Team
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                            Meet the talented professionals driving our vision forward
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {teamMembers}
                    </div>

                    {/* Join the team CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center mt-16"
                    >
                        <div className="inline-flex flex-col items-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-800/30">
                            <Users className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Join Our Team
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                                We're always looking for talented individuals to join our growing family
                            </p>
                            <ThemedButton onClick={() => window.location.href = '/careers'}>
                                View Open Positions
                            </ThemedButton>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}