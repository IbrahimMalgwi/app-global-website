// src/components/Team.jsx

import { useMemo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Linkedin,
    Mail,
    Quote,
    Sparkles,
    Twitter,
    Users,
} from "lucide-react";

import { AnimatedBackground } from "./UI/AnimatedBackground";
import { TeamMemberCard } from "./UI/TeamMemberCard";
import { ThemedButton } from "./UI/ThemedButton";
import { ceo, executiveTeam } from "../data/teamMembers";

// ================= MAIN TEAM COMPONENT =================

export default function Team() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const bioRef = useRef(null);
    const sectionRef = useRef(null);

    // Split bio into paragraphs for better rendering
    const bioParagraphs = ceo.bio
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean);

    const teamMembers = useMemo(
        () =>
            executiveTeam.map((member, index) => (
                <TeamMemberCard
                    key={`${member.name}-${index}`}
                    member={member}
                    delay={index * 0.1}
                />
            )),
        []
    );

    // Check if bio content overflows the collapsed height
    useEffect(() => {
        const checkOverflow = () => {
            if (bioRef.current) {
                const el = bioRef.current;
                // Collapsed max-height is 6rem (96px)
                const isOverflowing = el.scrollHeight > 96;
                setShowToggle(isOverflowing);
                // If not overflowing, ensure we are in collapsed state
                if (!isOverflowing) {
                    setIsExpanded(false);
                }
            }
        };

        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, [bioParagraphs]);

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotateY: -15,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            x: 50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: 0.3,
            },
        },
    };

    return (
        <>
            {/* CEO Hero Section */}
            <section
                ref={sectionRef}
                id="team"
                className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-32 dark:from-gray-900 dark:to-black"
            >
                <AnimatedBackground variant="gradient" density="low" />

                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-red-200 blur-3xl dark:bg-red-600/5" />
                    <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-red-200 blur-3xl dark:bg-red-600/5" />
                    {[...Array(6)].map((_, index) => (
                        <motion.div
                            key={index}
                            className="absolute h-1 w-1 rounded-full bg-red-400/20 dark:bg-red-400/10"
                            initial={{
                                x: `${Math.random() * 100}%`,
                                y: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [null, `${Math.random() * 100}%`],
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
                    {/* Section badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl dark:border-red-500/30 dark:bg-white/5">
                            <Sparkles className="h-4 w-4 text-red-600 dark:text-red-400" />
                            <span className="text-xs font-medium tracking-wide text-gray-700 md:text-sm dark:text-white/90">
                                Meet Our Leadership
                            </span>
                        </div>
                    </motion.div>

                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* CEO image */}
                        <motion.div
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="group relative perspective"
                        >
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 to-red-500 opacity-50 blur transition-all duration-500 group-hover:opacity-100" />
                            <div className="relative overflow-hidden rounded-2xl bg-white transition-all duration-500 group-hover:scale-[1.02] dark:bg-gray-800">
                                <img
                                    src={ceo.image}
                                    alt={ceo.name}
                                    className="h-auto w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </div>
                            <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                                <Quote className="h-8 w-8 text-red-600 dark:text-red-400" />
                            </div>
                        </motion.div>

                        {/* CEO information */}
                        <motion.div
                            variants={contentVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <h1 className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                    {ceo.name}
                                </h1>
                                {ceo.title && (
                                    <h2 className="mb-2 text-xl font-medium text-red-600 md:text-2xl dark:text-red-400">
                                        {ceo.title}
                                    </h2>
                                )}
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    {ceo.role}
                                </p>
                            </div>

                            {/* Bio with overflow toggle */}
                            <div className="relative">
                                <div
                                    ref={bioRef}
                                    className={`space-y-4 overflow-hidden transition-[max-height] duration-300 ${
                                        isExpanded ? "max-h-[1000px]" : "max-h-24"
                                    }`}
                                >
                                    {bioParagraphs.map((paragraph, index) => (
                                        <p
                                            key={`${paragraph.slice(0, 25)}-${index}`}
                                            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                {/* Fade gradient at bottom when collapsed */}
                                {!isExpanded && showToggle && (
                                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent dark:from-gray-900 pointer-events-none" />
                                )}
                                {showToggle && (
                                    <ThemedButton
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        variant="outline"
                                        size="sm"
                                        className="mt-3"
                                    >
                                        {isExpanded ? "Read Less" : "Read More"}
                                    </ThemedButton>
                                )}
                            </div>

                            {/* Social links */}
                            <div className="flex items-center gap-3 pt-4">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Connect:
                                </span>
                                {ceo.socials?.linkedin &&
                                    ceo.socials.linkedin !== "#" && (
                                        <motion.a
                                            href={ceo.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-lg bg-red-100 p-2 transition-colors hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={`${ceo.name} LinkedIn`}
                                        >
                                            <Linkedin className="h-5 w-5 text-red-600 dark:text-red-400" />
                                        </motion.a>
                                    )}
                                {ceo.socials?.twitter &&
                                    ceo.socials.twitter !== "#" && (
                                        <motion.a
                                            href={ceo.socials.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-lg bg-blue-100 p-2 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={`${ceo.name} Twitter`}
                                        >
                                            <Twitter className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        </motion.a>
                                    )}
                                {ceo.socials?.email && (
                                    <motion.a
                                        href={`mailto:${ceo.socials.email}`}
                                        className="rounded-lg bg-green-100 p-2 transition-colors hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={`Email ${ceo.name}`}
                                    >
                                        <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Executive Team Grid */}
            <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-32 dark:from-black dark:to-gray-900">
                <AnimatedBackground variant="particles" density="low" />

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center"
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl dark:border-red-500/30 dark:bg-white/5">
                            <Users className="h-4 w-4 text-red-600 dark:text-red-400" />
                            <span className="text-xs font-medium tracking-wide text-gray-700 md:text-sm dark:text-white/90">
                                Leadership Team
                            </span>
                        </div>
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
                            Executive Team
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-white/60">
                            Meet the talented professionals driving our vision
                            forward.
                        </p>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {teamMembers}
                    </div>

                    {/* Join the team CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                        }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-flex flex-col items-center rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-8 dark:border-red-800/30 dark:from-red-900/20 dark:to-red-950/20">
                            <Users className="mb-4 h-12 w-12 text-red-600 dark:text-red-400" />
                            <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                                Join Our Team
                            </h3>
                            <p className="mb-6 max-w-md text-gray-600 dark:text-gray-400">
                                We&apos;re always looking for talented
                                individuals to join our growing family.
                            </p>
                            <ThemedButton
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                }
                            >
                                Contact Our Team
                            </ThemedButton>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}