import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { ThemedButton } from "../components/UI/ThemedButton";
import { TeamMemberCard } from "../components/UI/TeamMemberCard";
import { typography } from "../theme/typography";
import colors from "../theme/colors";

// ================= LOCAL IMAGES =================
import ceoImage from "../assets/images/ceo.jpeg";
import member1 from "../assets/images/abdul.png";
import member2 from "../assets/images/umar.png";
import member3 from "../assets/images/yusuf.jpeg";
import member4 from "../assets/images/taiyo.png";
import member5 from "../assets/images/fatoba.png";
import member6 from "../assets/images/adeboyin.png";
import member7 from "../assets/images/ibrahim.jpg";
import member8 from "../assets/images/ibrahim.jpg";
import member9 from "../assets/images/team.png";

// ================= CEO DATA =================
const ceo = {
    name: "Habib Yunusa",
    title: "ENG",
    role: "Chairman & Chief Executive",
    image: ceoImage,
    bio: `Habib Yunusa is the Chief Executive Officer of AppGlobal Technologies. 
He has been in the ICT sector for over 15 years with vast knowledge in Computing. 
Former faculty at NIIT, Certified Oracle DBA, and an experienced programmer. 
He has developed numerous application software and successfully delivered 
several ICT projects for both government and private sectors.

He attended Informatics Institution, Singapore where he obtained 
an International Advanced Diploma in Computing.`,
    socials: { linkedin: "https://linkedin.com/in/habib-yunusa" },
};

// ================= EXECUTIVE TEAM DATA =================
const executiveTeam = [
    {
        name: "TOYINBO ABDULJELIL",
        role: "Chief Operating Officer",
        image: member9,
        bio: "Expertise in Management policy, Human capital, and project management. 5+ years in ICT including Networking, Web Development, and Data Analytics.",
        socials: { linkedin: "#" },
    },
    {
        name: "ABDULLAHI YUNUSA",
        role: "Chief Technology Officer",
        image: member1,
        bio: "IT Manager with 5+ years experience. Expertise in Database Management and various programming languages.",
        socials: { linkedin: "#" },
    },
    {
        name: "UMAR AMINU",
        role: "Business Analyst",
        image: member2,
        bio: "Database Management expert with 8+ years delivering ICT solutions to organizations.",
        socials: { linkedin: "#" },
    },
    {
        name: "SAMUEL AYODELE BELLO",
        role: "Project Manager",
        image: member4,
        bio: "IT Manager with 5+ years experience. Project Manager for 8 years managing software development projects.",
        socials: { linkedin: "#" },
    },
    {
        name: "MOMODU ISAH MOHAMMED",
        role: "Telecoms Lead",
        image: member5,
        bio: "18+ years in telecoms Networking, power, and fiber optics. Strong background in IT systems and infrastructure.",
        socials: { linkedin: "#" },
    },
    {
        name: "ADETUNJI ADEBOYIN MOTUNRAYO",
        role: "Chief Financial Officer",
        image: member6,
        bio: "Financial Manager with 5+ years experience. Expertise in accounting, tax coordination, and financial reporting.",
        socials: { linkedin: "#" },
    },
    {
        name: "IBRAHIM GANA MALGWI",
        role: "Software Engineer",
        image: member7,
        bio: "Software Engineer with expertise in Java, Python, PL/SQL, and Cloud Engineering.",
        socials: { linkedin: "#" },
    },
    {
        name: "OJETOKUN VICTOR",
        role: "DevSecOps Engineer",
        image: member8,
        bio: "Machine Integration and DevSecOps Engineer with focus on healthcare and enterprise IT systems.",
        socials: { linkedin: "#" },
    },
    {
        name: "YUSUFF SALIU NADIRA",
        role: "Chief Technology Strategist",
        image: member3,
        bio: "Seasoned technology executive with 10+ years in fintech industry. Expertise in Java, PL/SQL, and REST APIs.",
        socials: { linkedin: "#" },
    },
    {
        name: "TEMITOPE FATOBA",
        role: "Head, Business Support",
        image: member5,
        bio: "Financial services professional with 10+ years experience in international and commercial banks.",
        socials: { linkedin: "#" },
    },
    {
        name: "TAIWO OLAOGUN",
        role: "Finance & Internal Controls",
        image: member4,
        bio: "Accountant, Tax consultant, and Internal control manager with experience across multiple industries.",
        socials: { linkedin: "#" },
    },
    {
        name: "ADEILA JULIET",
        role: "Software Engineer",
        image: member4,
        bio: "Accountant, Tax consultant, and Internal control manager with experience across multiple industries.",
        socials: { linkedin: "#" },
    },
];

// ================= MAIN TEAM COMPONENT =================
export default function Team() {
    const [showFullBio, setShowFullBio] = useState(false);
    const { theme } = useTheme();
    const shortBio = ceo.bio.split("\n\n")[0];

    const teamMembers = useMemo(
        () =>
            executiveTeam.map((member, i) => (
                <TeamMemberCard key={`${member.name}-${i}`} member={member} delay={i * 0.1} />
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
                                src={ceo.image}
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