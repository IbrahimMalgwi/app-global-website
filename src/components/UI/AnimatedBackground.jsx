// src/components/UI/AnimatedBackground.jsx
export const AnimatedBackground = () => {
    return (
        <>
            <div className="absolute inset-0 bg-white dark:bg-gray-950" />
            <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.14] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.06),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_34%)]" />
        </>
    );
};
