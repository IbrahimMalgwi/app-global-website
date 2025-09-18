//src/components/ThemeLayout.jsx
import React from "react";

export default function ThemeLayout({ children }) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Softer Gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30" />
            </div>

            {/* Page content */}
            <main className="relative z-10">{children}</main>
        </div>
    );
}
