// src/components/UI/AnimatedContent.jsx
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedImage = ({ src, alt, className = "" }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.img
                key={src}
                src={src}
                alt={alt}
                className={className}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
            />
        </AnimatePresence>
    );
};

export const AnimatedText = ({ children, keyProp, className = "" }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={keyProp}
                className={className}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};