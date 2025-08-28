import { motion } from "framer-motion";

import ceoImage from "../assets/images/ceo.jpeg";
import member1 from "../assets/images/team.png";
import member2 from "../assets/images/team.png";
import member3 from "../assets/images/abdul.png";
import member4 from "../assets/images/umar.png";
import member5 from "../assets/images/toyinbo.png";
import member6 from "../assets/images/team.png";
import member7 from "../assets/images/team.png";
import member8 from "../assets/images/team.png";
import member9 from "../assets/images/team.png";

// CEO Section (classic style like Dangote)
const CEOSection = ({ name, role, image, bio, link }) => (
    <section
        className="relative bg-cover bg-center py-20"
        style={{
            backgroundImage: "url('/wp-content/uploads/2020/12/gpce_grey2.jpg')",
            backgroundSize: "cover",
        }}
    >
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left side - CEO Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <img
                        src={image}
                        alt={name}
                        className="rounded-xl shadow-2xl w-[350px] h-[400px] object-cover"
                    />
                </motion.div>

                {/* Right side - CEO Info */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-white"
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">{name}</h1>
                    <h2 className="text-xl md:text-2xl mb-4">{role}</h2>
                    <hr className="max-w-md border-white/60 mb-6" />
                    <p className="text-lg leading-relaxed">{bio}</p>
                    <br />
                    <a
                        href={link}
                        className="inline-flex items-center px-5 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
                    >
                        <span className="mr-2">Read More</span>
                        <i className="fa fa-long-arrow-right"></i>
                    </a>
                </motion.div>
            </div>
        </div>
    </section>
);

// Team Member Flip Card
const TeamMember = ({ name, role, image, bio, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
        className="group h-80 relative perspective-1000 cursor-pointer"
    >
        <div
            className="relative w-full h-full transition-transform duration-700 transform-gpu group-hover:rotate-y-180"
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Front */}
            <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl shadow-xl overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-violet-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
                <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 rounded-full object-cover shadow-lg mb-4 border-4 border-white dark:border-gray-600"
                />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{role}</p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 rotate-y-180 [backface-visibility:hidden] rounded-xl shadow-xl flex flex-col justify-center items-center p-6 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 text-white">
                <h3 className="text-lg font-bold mb-2">{name}</h3>
                <p className="text-sm leading-relaxed text-blue-100">{bio}</p>
            </div>
        </div>
    </motion.div>
);

export default function Team() {
    const ceo = {
        name: "Eng. Habib Yunusa",
        role: "Chief Executive Officer",
        image: ceoImage,
        bio: "Eng. Habib Yunusa is the visionary leader with 15+ years of experience in healthcare technology innovation and digital transformation.",
        link: "#",
    };

    const teamMembers = [
        {
            name: "TOYINBO ABDULJELIL",
            role: "Chief Operating Officer",
            image: member5,
            bio: "Operations expert specializing in healthcare system optimization and process improvement strategies.",
        },
        {
            name: "ABDULLAHI YUNUSA",
            role: "Chief Technology Officer",
            image: member3,
            bio: "Technology innovator with expertise in AI-driven solutions and secure healthcare data architecture.",
        },
        {
            name: "UMAR AMINU",
            role: "Business Analyst",
            image: member4,
            bio: "Analytical expert focused on creating data-driven solutions for healthcare business challenges.",
        },
        {
            name: "Member 5",
            role: "Finance Lead",
            image: member1,
            bio: "Finance strategist ensuring financial health and growth of the organization.",
        },
        {
            name: "Member 6",
            role: "HR Manager",
            image: member2,
            bio: "People-focused leader with expertise in talent management and employee wellbeing.",
        },
        {
            name: "Member 7",
            role: "Project Manager",
            image: member6,
            bio: "Experienced project manager delivering healthcare tech projects on time and within scope.",
        },
        {
            name: "Member 8",
            role: "Senior Developer",
            image: member7,
            bio: "Full-stack engineer with expertise in scalable health applications.",
        },
        {
            name: "Member 9",
            role: "UI/UX Designer",
            image: member8,
            bio: "Creative designer focusing on intuitive healthcare user experiences.",
        },
        {
            name: "Member 10",
            role: "QA Lead",
            image: member9,
            bio: "Ensures product reliability and patient-safety through rigorous testing.",
        },
    ];

    return (
        <section>
            {/* CEO Section */}
            <CEOSection {...ceo} />

            {/* Executive Leadership */}
            <section
                className="py-20 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-gray-900 dark:to-gray-800"
                id="leadership"
            >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Executive Leadership
                    </motion.h2>
                    <hr className="w-20 mx-auto border-blue-500 mb-6" />
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                        Our senior executives bring tremendous experience, visionary
                        thinking and a shared commitment to excellence, creativity, and
                        innovation to the day-to-day operation of the company.
                    </p>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {teamMembers.map((member, i) => (
                            <TeamMember key={i} {...member} delay={i * 0.1} />
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
