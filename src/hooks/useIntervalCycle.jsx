// src/hooks/useIntervalCycle.js
import { useState, useEffect } from 'react';

export const useIntervalCycle = (items, intervalTime = 3000) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, intervalTime);
        return () => clearInterval(interval);
    }, [items.length, intervalTime]);

    return {
        currentIndex,
        currentItem: items[currentIndex],
        setCurrentIndex // Optionally expose this for manual control
    };
};