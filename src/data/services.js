// src/data/services.js
import {
    HeartPulse,
    // Smartphone,
    FlaskConical,
    Image,
    QrCode,
    Package,
    Users,
    Cloud,
    Fingerprint,
    Network,
    Wallet,
    Globe2,
    Stethoscope,
    // Microscope,
    // Scan,
    // ClipboardList,
    // Calculator,
    // Building2,
    // Cpu
} from "lucide-react";

export const services = [
    {
        id: 1,
        icon: HeartPulse,
        title: "GlobalCare EHR",
        description: "Smart Records. Better Care. Everywhere. Streamlined hospital management system that simplifies healthcare operations and improves patient care delivery.",
        gradient: "from-purple-500 to-pink-500",
        features: [
            "Electronic Health Records",
            "Patient Management",
            "Appointment Scheduling",
            "Billing & Insurance",
            "Clinical Decision Support"
        ]
    },
    {
        id: 2,
        icon: Stethoscope,
        title: "GlobalCare Telemedicine Application",
        description: "A Smart mobile application that gives you instant access to healthcare professionals, enabling remote consultations, diagnosis, and treatment from the comfort of your home.",
        gradient: "from-blue-500 to-cyan-500",
        features: [
            "Video Consultations",
            "Secure Messaging",
            "Prescription Management",
            "Appointment Booking",
            "Health Records Access"
        ]
    },
    {
        id: 3,
        icon: FlaskConical,
        title: "Laboratory Information System (LIS)",
        description: "A comprehensive Laboratory Information System (LIS) that streamlines lab operations, enhances data management, and improves patient care through efficient test processing and reporting.",
        gradient: "from-green-500 to-emerald-500",
        features: [
            "Test Management",
            "Result Reporting",
            "Quality Control",
            "Inventory Tracking",
            "Billing Integration"
        ]
    },
    {
        id: 4,
        icon: Image,
        title: "Picture Archiving System (PACS)",
        description: "A robust Picture Archiving and Communication System (PACS) that enables efficient storage, retrieval, and sharing of medical images, enhancing diagnostic accuracy and collaboration among healthcare professionals.",
        gradient: "from-orange-500 to-red-500",
        features: [
            "Image Storage & Retrieval",
            "DICOM Compliance",
            "Radiology Workflow",
            "Remote Access",
            "Reporting Tools"
        ]
    },
    {
        id: 5,
        icon: QrCode,
        title: "Patient Self-Service Kiosk",
        description: "An intuitive Patient Self-Service Kiosk that empowers patients to check-in, update personal information, and make payments, enhancing the overall patient experience and reducing administrative workload.",
        gradient: "from-teal-500 to-cyan-500",
        features: [
            "Self Check-in",
            "Payment Processing",
            "Appointment Management",
            "Insurance Verification",
            "Digital Forms"
        ]
    },
    {
        id: 6,
        icon: Package,
        title: "X-Global Inventory, Accounting & ERP System",
        description: "A comprehensive ERP system that integrates inventory management, accounting, and other business processes to streamline operations, improve efficiency, and enhance decision-making.",
        gradient: "from-indigo-500 to-purple-500",
        features: [
            "Inventory Management",
            "Financial Accounting",
            "Purchase Orders",
            "Supply Chain",
            "Reporting & Analytics"
        ]
    },
    {
        id: 7,
        icon: Users,
        title: "X-Global Human Resources & Payroll System",
        description: "A robust Human Resources and Payroll System that simplifies employee management, payroll processing, and compliance, enabling HR teams to focus on strategic initiatives and employee engagement.",
        gradient: "from-pink-500 to-rose-500",
        features: [
            "Employee Database",
            "Payroll Processing",
            "Leave Management",
            "Performance Reviews",
            "Tax Compliance"
        ]
    },
    {
        id: 8,
        icon: Cloud,
        title: "Cloud & Web Hosting",
        description: "Reliable and scalable cloud and web hosting solutions that ensure optimal performance, security, and uptime for your websites and applications.",
        gradient: "from-amber-500 to-orange-500",
        features: [
            "Cloud Infrastructure",
            "Domain Management",
            "SSL Certificates",
            "24/7 Monitoring",
            "Automated Backups"
        ]
    },
    {
        id: 9,
        icon: Fingerprint,
        title: "Biometric Solution",
        description: "Advanced biometric authentication solutions for secure access control and identity verification systems.",
        gradient: "from-cyan-500 to-blue-500",
        features: [
            "Fingerprint Recognition",
            "Facial Recognition",
            "Access Control",
            "Time & Attendance",
            "Identity Management"
        ]
    },
    {
        id: 10,
        icon: Network,
        title: "Networking",
        description: "Comprehensive networking infrastructure solutions for reliable and secure connectivity across organizations.",
        gradient: "from-violet-500 to-purple-500",
        features: [
            "Network Design",
            "Cabling & Infrastructure",
            "Firewall Configuration",
            "VPN Setup",
            "Network Security"
        ]
    },
    {
        id: 11,
        icon: Wallet,
        title: "App Global Pay",
        description: "Secure and efficient global payment processing solutions for seamless financial transactions worldwide.",
        gradient: "from-emerald-500 to-teal-500",
        features: [
            "Payment Processing",
            "Multi-currency Support",
            "Fraud Detection",
            "Mobile Payments",
            "API Integration"
        ]
    },
    {
        id: 12,
        icon: Globe2,
        title: "GlobalShell Resources",
        description: "Comprehensive resource management and optimization solutions for business efficiency and growth.",
        gradient: "from-fuchsia-500 to-pink-500",
        features: [
            "Resource Planning",
            "Asset Management",
            "Workforce Optimization",
            "Cost Tracking",
            "Performance Analytics"
        ]
    },
];