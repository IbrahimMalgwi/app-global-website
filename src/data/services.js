// src/data/services.js

// Reusable SVG icon component to avoid duplication
const ServiceIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
    </svg>
);


export const services = [
    {
        icon: <ServiceIcon />,
        title: "GlobalCare EHR",
        description: "Smart Records. Better Care. Everywhere. Streamlined hospital management system that simplifies healthcare operations and improves patient care delivery.",
    },
    {
        icon: <ServiceIcon />,
        title: "GlobalCare Telemedicine Application",
        description: "A Smart mobile application that gives you instant access to healthcare professionals, enabling remote consultations, diagnosis, and treatment from the comfort of your home.",
    },
    {
        icon: <ServiceIcon />,
        title: "Laboratory Information System (LIS)",
        description: "A comprehensive Laboratory Information System (LIS) that streamlines lab operations, enhances data management, and improves patient care through efficient test processing and reporting.",
    },
    {
        icon: <ServiceIcon />,
        title: "Picture Archiving System (PACS)",
        description: "A robust Picture Archiving and Communication System (PACS) that enables efficient storage, retrieval, and sharing of medical images, enhancing diagnostic accuracy and collaboration among healthcare professionals.",
    },
    {
        icon: <ServiceIcon />,
        title: "Patient Self-Service Kiosk",
        description: "An intuitive Patient Self-Service Kiosk that empowers patients to check-in, update personal information, and make payments, enhancing the overall patient experience and reducing administrative workload.",
    },
    {
        icon: <ServiceIcon />,
        title: "X-Global Inventory, Accounting & ERP System",
        description: "A comprehensive ERP system that integrates inventory management, accounting, and other business processes to streamline operations, improve efficiency, and enhance decision-making.",
    },
    {
        icon: <ServiceIcon />,
        title: "X-Global Human Resources & Payroll System",
        description: "A robust Human Resources and Payroll System that simplifies employee management, payroll processing, and compliance, enabling HR teams to focus on strategic initiatives and employee engagement.",
    },
    {
        icon: <ServiceIcon />,
        title: "Cloud & Web Hosting",
        description: "Reliable and scalable cloud and web hosting solutions that ensure optimal performance, security, and uptime for your websites and applications.",
    },
    {
        icon: <ServiceIcon />,
        title: "Biometric Solution",
        description: "Advanced biometric authentication solutions for secure access control and identity verification systems.",
    },
    {
        icon: <ServiceIcon />,
        title: "Networking",
        description: "Comprehensive networking infrastructure solutions for reliable and secure connectivity across organizations.",
    },
    {
        icon: <ServiceIcon />,
        title: "App Global Pay",
        description: "Secure and efficient global payment processing solutions for seamless financial transactions worldwide.",
    },
    {
        icon: <ServiceIcon />,
        title: "GlobalShell Resources",
        description: "Comprehensive resource management and optimization solutions for business efficiency and growth.",
    },
];