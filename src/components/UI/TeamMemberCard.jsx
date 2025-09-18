// src/components/UI/TeamMemberCard.jsx
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { ThemedCard } from "./ThemedCard";

export const TeamMemberCard = ({ member, delay }) => {
    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full h-96"
        >
            <div className="relative w-full h-full group transition-transform duration-500 rounded-xl" style={{ perspective: "1000px" }}>
                <div className="relative w-full h-full transition-transform duration-500 rounded-xl group-hover:rotate-y-180" style={{ transformStyle: "preserve-3d" }}>

                    {/* Front side */}
                    <ThemedCard className="absolute inset-0 flex flex-col justify-between overflow-hidden p-4" style={{ backfaceVisibility: "hidden" }}>
                        <div className="flex-1 flex items-center justify-center pt-4 px-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="max-w-full max-h-48 object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="mt-4 text-center p-3 rounded-lg w-full">
                            <h3 className="font-semibold text-lg bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                                {member.name}
                            </h3>
                            <p className="text-sm opacity-80">{member.role}</p>
                        </div>
                    </ThemedCard>

                    {/* Back side */}
                    <ThemedCard className="absolute inset-0 flex flex-col p-6" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                        <h3 className="font-semibold text-lg mb-2 text-center bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                            {member.name}
                        </h3>
                        <p className="text-sm opacity-80 text-center mb-4">{member.role}</p>

                        <div className="flex-1 overflow-y-auto pr-2 mb-4">
                            <p className="text-sm leading-relaxed">{member.bio}</p>
                        </div>

                        {member.socials?.linkedin && (
                            <a
                                href={member.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full mx-auto transition-colors bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
                                aria-label={`Connect with ${member.name} on LinkedIn`}
                            >
                                <Linkedin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                            </a>
                        )}
                    </ThemedCard>
                </div>
            </div>

            {/* Add Tailwind CSS for flip animation */}
            <style jsx>{`
                .group-hover\:rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </motion.div>
    );
};