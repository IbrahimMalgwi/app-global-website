// src/components/UI/Card.jsx
export const Card = ({ children, className = '', hoverable = true, ...props }) => {
    const baseClasses = "bg-white rounded-3xl shadow-2xl p-10 transition-transform duration-300 ease-in-out text-left";
    const hoverClass = hoverable ? "transform hover:scale-105" : "";

    return (
        <div className={`${baseClasses} ${hoverClass} ${className}`} {...props}>
            {children}
        </div>
    );
};