// src/data/subsidiaries.js

import appGlobalPayImage from "../assets/images/appglobal-pay.jpeg";
import globalShellImage from "../assets/images/appglobal-shell.jpeg";
import ehrImage from "../assets/images/ehr-interoperability-blog.png";
import logo from "../assets/images/logo.png";

export const subsidiaries = [
    {
        id: "globalcare-ehr",
        name: "GlobalCare EHR",
        subtitle: "Hospital Solutions",
        logo,
        image: ehrImage,
        description: `Smart Records. Better Care. Everywhere. Streamlined hospital management system that simplifies healthcare operations and improves patient care delivery.`,
        website: "https://appglobaltechnologies.com/",
    },
    {
        id: "globalshell-resources",
        name: "GlobalShell Resources",
        subtitle: "Cloud, Energy & Infrastructure",
        logo,
        image: globalShellImage,
        description: `Cloud, energy, and infrastructure services that help organizations modernize operations with reliable digital foundations and responsive technical support.`,
        website: "https://appglobaltechnologies.com/",
    },
    {
        id: "appglobal-pay",
        name: "AppGlobal Pay",
        subtitle: "Secure Payment Solutions",
        logo,
        image: appGlobalPayImage,
        description: `A payment platform that supports secure digital transactions, tailored merchant workflows, and POS-enabled collections for growing businesses.`,
        website: "https://appglobalpay.com/ords/r/gopaye/gopayconnect1935621007432110/home1",
    }

];
