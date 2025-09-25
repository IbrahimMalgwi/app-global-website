// src/components/Team.jsx
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { ThemedButton } from "./UI/ThemedButton";
import { TeamMemberCard } from "./UI/TeamMemberCard";
import { typography } from "../theme/typography";
import colors from "../theme/colors";
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
// import member8 from "../assets/images/ibrahim.jpg";
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

// ================= MAIN TEAM COMPONENT =================
export default function Team() {
    const [showFullBio, setShowFullBio] = useState(false);
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

    return (
        <>
            {/* CEO Hero Section */}
            <section id="team" className="relative py-20 md:py-32 bg-slate-100 dark:bg-slate-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* CEO Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <img
                                src={getActualImage(ceo.image)}
                                alt={ceo.name}
                                className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg object-cover"
                            />
                        </motion.div>

                        {/* CEO Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={colors.text.primary}
                        >
                            <h1 className={`${typography.h1} mb-3`}>
                                {ceo.name}, {ceo.title}
                            </h1>
                            <h2 className={`${typography.h2} mb-6 bg-gradient-to-r ${colors.gradients.primary} bg-clip-text text-transparent`}>
                                {ceo.role}
                            </h2>
                            <hr className="max-w-md h-px mb-8 bg-slate-300 dark:bg-slate-700 opacity-50" />

                            <div className="space-y-4 mb-8">
                                {showFullBio
                                    ? ceo.bio.split("\n\n").map((p, i) => (
                                        <p key={i} className={`${typography.body} leading-relaxed`}>
                                            {p}
                                        </p>
                                    ))
                                    : (
                                        <p className={`${typography.body} leading-relaxed`}>{shortBio}</p>
                                    )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <ThemedButton onClick={() => setShowFullBio(!showFullBio)}>
                                    {showFullBio ? "Read Less" : "Read More →"}
                                </ThemedButton>

                                {ceo.socials?.linkedin && (
                                    <a
                                        href={ceo.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors bg-gradient-to-r from-indigo-600 to-pink-600 hover:opacity-90"
                                        aria-label="Connect with CEO on LinkedIn"
                                    >
                                        <Linkedin className="w-6 h-6 text-white" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Executive Team Grid */}
            <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={`${typography.h1} text-center mb-12`}
                    >
                        Executive Team
                    </motion.h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {teamMembers}
                    </div>
                </div>
            </section>
        </>
    );
}