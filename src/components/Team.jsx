import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useState, useMemo } from "react";

// ================= LOCAL IMAGES =================
import ceoImage from "../assets/images/ceo.jpeg";
import member1 from "../assets/images/abdul.png";
import member2 from "../assets/images/umar.png";
import member3 from "../assets/images/yusuf.jpeg";
import member4 from "../assets/images/taiyo.png";
import member5 from "../assets/images/fatoba.png";
import member6 from "../assets/images/adeboyin.png";
import member7 from "../assets/images/ibrahim.jpg";
import member8 from "../assets/images/ibrahim.jpg"; // ✅ new unique image
import member9 from "../assets/images/team.png";

// ================= CEO DATA =================
const ceo = {
    name: "Habib Yunusa",
    title: "ENGR",
    role: "Chairman & Chief Executive",
    image: ceoImage,
    bio: `Habib Yunusa is the Chief Executive Officer of AppGlobal Technologies. 
  He has been in the ICT sector for over 15 years with vast knowledge in Computing. 
  Former faculty at NIIT, Certified Oracle DBA, and an experienced programmer. 
  He has developed numerous application software and successfully delivered 
  several ICT projects for both government and private sectors.
  
  He attended Informatics Institution, Singapore where he obtained 
  an International Advanced Diploma in Computing.`,
    socials: {
        linkedin: "https://linkedin.com/in/habib-yunusa",
    },
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
        image: member8, // ✅ fixed duplicate
        bio: "Machine Integration and DevSecOps Engineer with focus on healthcare and enterprise IT systems.",
        socials: { linkedin: "#" },
    },
    {
        name: "YUSUFF SALIU ADEDIRAN",
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
];

// ================= TEAM MEMBER CARD WITH FLIP =================
const TeamMemberCard = ({ member, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full h-80 perspective-1000"
        >
            <motion.div
                className="relative w-full h-full preserve-3d"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
            >
                {/* Front side */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 backface-hidden">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-200"
                    />
                    <h3 className="font-semibold text-gray-800 dark:text-white text-center mb-1">
                        {member.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 text-center mb-2">
                        {member.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        Hover to read bio
                    </p>
                </div>

                {/* Back side */}
                <div className="absolute inset-0 flex flex-col p-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-lg backface-hidden flip-side">
                    <div className="flex-1 overflow-y-auto pr-2 mb-4">
                        <p className="text-sm leading-relaxed">{member.bio}</p>
                    </div>

                    {member.socials?.linkedin && (
                        <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full hover:bg-white/30 transition-colors mx-auto"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

// ================= MAIN TEAM COMPONENT =================
export default function Team() {
    const [showFullBio, setShowFullBio] = useState(false);
    const shortBio = ceo.bio.split("\n\n")[0]; // First paragraph only

    const teamMembers = useMemo(
        () =>
            executiveTeam.map((member, i) => (
                <TeamMemberCard key={i} member={member} delay={i * 0.1} />
            )),
        []
    );

    return (
        <>
            {/* CEO Hero Section */}
            <section id="team" className="relative py-20 md:py-32 bg-gray-900">
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
                            className="text-white"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                                {ceo.name}, {ceo.title}
                            </h1>
                            <h2 className="text-xl md:text-2xl text-blue-300 mb-6">
                                {ceo.role}
                            </h2>
                            <hr className="max-w-md h-px bg-white/40 mb-8" />

                            <div className="space-y-4 mb-8">
                                {showFullBio
                                    ? ceo.bio
                                        .split("\n\n")
                                        .map((p, i) => (
                                            <p key={i} className="text-base md:text-lg leading-relaxed">
                                                {p}
                                            </p>
                                        ))
                                    : (
                                        <p className="text-base md:text-lg leading-relaxed">
                                            {shortBio}
                                        </p>
                                    )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <button
                                    onClick={() => setShowFullBio(!showFullBio)}
                                    className="text-base md:text-lg font-medium border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap"
                                >
                                    {showFullBio ? "Read Less" : "Read More →"}
                                </button>

                                <a
                                    href={ceo.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    Connect
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Executive Leadership */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Executive Leadership
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Our senior executives bring tremendous experience, visionary thinking and a shared commitment to innovation and excellence.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {teamMembers}
                    </div>
                </div>
            </section>
        </>
    );
}
