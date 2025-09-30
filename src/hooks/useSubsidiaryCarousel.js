// src/hooks/useSubsidiaryCarousel.js
import { useState, useEffect, useRef } from "react";

export const useSubsidiaryCarousel = (items, autoRotateInterval = 6000) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollRef = useRef(null);

    // Auto rotate - but delay it to prevent initial issues
    useEffect(() => {
        const timer = setTimeout(() => {
            const rotationTimer = setInterval(() => {
                setSelectedIndex((prevIndex) => (prevIndex + 1) % items.length);
            }, autoRotateInterval);

            return () => clearInterval(rotationTimer);
        }, 2000); // 2 second delay

        return () => clearTimeout(timer);
    }, [items.length, autoRotateInterval]);

    // REMOVED the auto-scroll effect from the hook
    // The component will handle scrolling manually

    return {
        selectedIndex,
        setSelectedIndex,
        scrollRef
    };
};