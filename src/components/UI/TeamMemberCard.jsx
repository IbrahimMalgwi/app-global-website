// src/components/UI/TeamMemberCard.jsx
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { ThemedCard } from "./ThemedCard";
import colors from "../../theme/colors";

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
            <div className="relative w-full h-full group cursor-pointer" style={{ perspective: "1000px" }}>
                <div className="relative w-full h-full transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: "preserve-3d" }}>

                    {/* Front side - Large image and basic info */}
                    <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: "hidden" }}>
                        <ThemedCard className="h-full flex flex-col justify-between p-6">
                            <div className="flex-1 flex flex-col items-center justify-center">
                                {/* Large rectangular image container */}
                                <div className="w-56 h-56 mb-6 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        onError={(e) => {
                                            e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI0IiBoZWlnaHQ9IjIyNCIgdmlld0JveD0iMCAwIDIyNCAyMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMjQiIGhlaWdodD0iMjI0IiBmaWxsPSIjRTBFMEUwIi8+CjxwYXRoIGQ9Ik0xMTIgMTEyQzExMiAxMjQuMTUgMTAyLjE1IDEzNCA5MCAxMzRDNzcuODQ5NyAxMzQgNjggMTI0LjE1IDY4IDExMkM2OCA5OS44NDk3IDc3Ljg0OTcgOTAgOTAgOTBDMTAyLjE1IDkwIDExMiA5OS44NDk3IDExMiAxMTJaTTkwIDE3MEMxMjUuODIgMTcwIDE1NiAxNTcuNDI5IDE1NiAxNDBDMTU2IDEyMi41NzEgMTI1LjgyIDExMCA5MCAxMTBDNTQuMTc3OSAxMTAgMjQgMTIyLjU3MSAyNCAxNDBDMjQgMTU3LjQyOSA1NC4xNzc5IDE3MCA5MCAxNzBaIiBmaWxsPSIjOTk5OTk5Ii8+Cjwvc3ZnPg==";
                                        }}
                                    />
                                </div>
                                <h3 className="font-semibold text-xl text-center bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                    {member.name}
                                </h3>
                                <p className={`text-sm text-center ${colors.text.muted} font-medium`}>{member.role}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-indigo-500 dark:text-indigo-400 animate-pulse font-semibold">
                                    Hover to learn more →
                                </p>
                            </div>
                        </ThemedCard>
                    </div>

                    {/* Back side - Only bio and social, no image */}
                    <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                        <ThemedCard className="h-full flex flex-col p-6 justify-center">
                            {/* No image on back side */}
                            <h3 className="font-semibold text-xl text-center bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                {member.name}
                            </h3>
                            <p className={`text-sm text-center mb-4 ${colors.text.muted} font-medium`}>{member.role}</p>

                            <div className="flex-1 overflow-y-auto pr-2 mb-4">
                                <p className={`text-sm leading-relaxed ${colors.text.primary} text-center`}>{member.bio}</p>
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
            </div>
        </motion.div>
    );
};