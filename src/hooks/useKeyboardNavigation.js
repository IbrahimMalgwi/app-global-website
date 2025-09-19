import { useCallback } from 'react';

export const useKeyboardNavigation = (onEnter, onEscape = () => {}) => {
    const handleKeyPress = useCallback((event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onEnter();
        } else if (event.key === 'Escape') {
            onEscape();
        }
    }, [onEnter, onEscape]);

    return {
        tabIndex: 0,
        onKeyDown: handleKeyPress,
        role: 'button'
    };
};