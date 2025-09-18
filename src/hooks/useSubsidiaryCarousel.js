// src/hooks/useSubsidiaryCarousel.js
import { useState, useEffect, useRef } from "react";

export const useSubsidiaryCarousel = (items, autoRotateInterval = 6000) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollRef = useRef(null);

    // Auto rotate
    useEffect(() => {
        const timer = setInterval(() => {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, autoRotateInterval);

        return () => clearInterval(timer);
    }, [items.length, autoRotateInterval]);

    // Smooth scroll left panel
    useEffect(() => {
        if (scrollRef.current) {
            const selectedItem = scrollRef.current.children[selectedIndex];
            if (selectedItem) {
                selectedItem.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            }
        }
    }, [selectedIndex]);

    return {
        selectedIndex,
        setSelectedIndex,
        scrollRef
    };
};