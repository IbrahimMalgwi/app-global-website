import { useState, useEffect, useCallback, useRef } from 'react';

export const useCarousel = (items, itemsPerView) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const maxIndex = Math.max(items.length - itemsPerView, 0);
    const totalPages = maxIndex + 1;
    const autoAdvanceRef = useRef();

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? maxIndex : prevIndex - 1
        );
    }, [maxIndex]);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
    }, [maxIndex]);

    // Touch handling for mobile
    const handleTouchStart = (e) => {
        const touchPosition = e.targetTouches[0].clientX;
        setTouchStart(touchPosition);
        setTouchEnd(touchPosition);
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
        if (maxIndex === 0) {
            return undefined;
        }

        if (autoAdvanceRef.current) {
            clearInterval(autoAdvanceRef.current);
        }

        autoAdvanceRef.current = setInterval(nextSlide, 5000);

        return () => {
            if (autoAdvanceRef.current) {
                clearInterval(autoAdvanceRef.current);
            }
        };
    }, [maxIndex, nextSlide]);

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
