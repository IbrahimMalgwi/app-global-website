// src/hooks/useCarousel.js
import { useState, useEffect, useCallback } from 'react';

export const useCarousel = (items, itemsPerView) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPages = Math.ceil(items.length / itemsPerView);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= items.length - itemsPerView ? 0 : prevIndex + 1
        );
    }, [items.length, itemsPerView]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - itemsPerView : prevIndex - 1
        );
    }, [items.length, itemsPerView]);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index * itemsPerView);
    }, [itemsPerView]);

    // Optional: Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return {
        currentIndex,
        totalPages,
        nextSlide,
        prevSlide,
        goToSlide,
        itemsPerView
    };
};