import { useState, useEffect, useCallback, useRef } from 'react';

export const useCarousel = (items, itemsPerView) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const totalPages = Math.ceil(items.length / itemsPerView);
    const autoAdvanceRef = useRef();

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

    // Touch handling for mobile
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // Left swipe
            nextSlide();
        } else if (touchEnd - touchStart > 50) {
            // Right swipe
            prevSlide();
        }
    };

    // Auto-advance carousel with cleanup
    useEffect(() => {
        if (autoAdvanceRef.current) {
            clearInterval(autoAdvanceRef.current);
        }

        autoAdvanceRef.current = setInterval(nextSlide, 5000);

        return () => {
            if (autoAdvanceRef.current) {
                clearInterval(autoAdvanceRef.current);
            }
        };
    }, [nextSlide]);

    return {
        currentIndex,
        totalPages,
        nextSlide,
        prevSlide,
        goToSlide,
        itemsPerView,
        touchHandlers: {
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: handleTouchEnd
        }
    };
};