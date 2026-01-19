"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteSettings } from "@/app/data/siteSettings";
import { services } from "@/app/data/services";
import ScrollReveal from "../ui/ScrollReveal";

const Hero = () => {
    const [isMobile, setIsMobile] = React.useState<boolean | null>(null);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const serviceDetails: Record<string, { icon: React.ReactNode; copy: string }> = {
        "instalacion-redes-gas": {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a8 8 0 0 1 7 13.5 6 6 0 0 1-7-1.5 6 6 0 0 1-7 1.5 8 8 0 0 1 7-13.5Z" />
                    <path d="M12 10c0 1.5-1.5 3-4 3" />
                </svg>
            ),
            copy: "Certificados por EPM. Seguridad y normativa garantizada."
        },
        "instalacion-acueducto-alcantarillado": {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7Z" />
                    <path d="M9 12h6" />
                </svg>
            ),
            copy: "Soluciones integrales. Tuberías y sistemas sanitarios."
        },
        "diseno-redes": {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <line x1="3" x2="21" y1="9" y2="9" />
                    <line x1="9" x2="9" y1="21" y2="9" />
                </svg>
            ),
            copy: "Planos aprobados. Legalización y normativa al día."
        },
        "reparacion-fugas-mantenimiento": {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            ),
            copy: "Emergencias 24/7. Detección de fugas y soluciones rápidas."
        }
    };

    return (
        <section className="relative min-h-[90vh] sm:p-15 w-full flex items-center overflow-hidden bg-black">
            {/* BACKGROUND ASSETS */}
            <div className="absolute inset-0 z-0">
                {/* Mobile/Tablet Background: Centered Video or Image */}
                <div className="lg:hidden w-full h-full relative">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/hero/bg-desk.jpeg"
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/hero/video hero.mp4" type="video/mp4" />
                    </video>
                    {/* Dark Overlay for Mobile */}
                    <div className="absolute inset-0 bg-black/60 z-10" />
                </div>

                {/* Desktop Split Layout (>= lg) */}
                <div className="hidden lg:block w-full h-full relative">
                    {/* Right side Video (70% width) */}
                    <div className="absolute right-0 top-0 w-[70%] h-full">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="/hero/bg-desk.jpeg"
                            className="w-full h-full object-cover"
                        >
                            <source src="/hero/video hero.mp4" type="video/mp4" />
                        </video>
                    </div>
                    {/* Gradient Transition (20% width overlap: from 30% to 50%) */}
                    <div className="absolute left-[30%] top-0 w-[20%] h-full bg-linear-to-r from-black via-black/80 to-transparent z-10" />

                    {/* Left Background (Solid Black: first 30%) */}
                    <div className="absolute left-0 top-0 w-[30%] h-full bg-black z-10" />
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 flex flex-col items-center lg:items-start text-center lg:text-left max-w-7xl pt-20">
                {/* Badge - Glass Pill with Check */}

                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-md mb-8 shadow-xl">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17L4 12" />
                        </svg>
                    </div>
                    <span className="text-green-400 text-sm font-bold tracking-wide">
                        {siteSettings.home.hero.badge}
                    </span>
                </div>


                {/* Main Heading - Maximum Prominence */}

                <h1 className="text-4xl md:text-6xl font-black text-white-light mb-8 tracking-tighter leading-[1.1] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    Plomeros Expertos <br />
                    en <span className="text-blue-light drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]">Medellín</span>
                </h1>


                {/* Subheading */}

                <p className="text-xs md:text-2xl text-white-base/90 mb-12 max-w-2xl leading-relaxed font-medium drop-shadow-md lg:mx-0">
                    {siteSettings.home.hero.subtitle}
                </p>


                {/* Service Cards Grid - Row Style for both mobile and desktop now */}
                <div className="grid grid-cols-1 gap-3 w-full mb-8 md:mb-12 max-w-xl">
                    {services.map((service) => {
                        const detail = serviceDetails[service.slug];
                        return (
                            <Link
                                key={service.slug}
                                href={`/servicios/${service.slug}`}
                                className="group relative flex items-center text-left p-3 lg:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 gap-3"
                            >
                                {/* Icon */}
                                <div className="shrink-0 p-2 lg:p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                    <div className="w-5 h-5 lg:w-6 lg:h-6">
                                        {detail?.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm lg:text-base font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                                        {service.header.title.replace(/ a Domicilio/gi, "").replace(/ en Medellín/gi, "")}
                                    </h3>
                                    <p className="hidden md:block text-[10px] lg:text-xs text-white/50 leading-tight line-clamp-1 mt-0.5">
                                        {detail?.copy}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div className="shrink-0 text-blue-400 group-hover:text-white transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Trust Indicator - Bottom Thumbs Up */}

                <div className="flex items-center gap-3 text-white-base/80 drop-shadow-lg bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white-light">
                            <path d="M14 9l-1.1-4.4c-.1-.4-.5-.6-.9-.6H8v9h2l1 6.3c.1.4.5.7 1 .7h1.1c.3 0 .6-.2.7-.5l1.2-4.5c.3-1.1.7-2.1 1.3-3.1.5-.7 1.1-1.3 1.7-1.9V9h-4zM6 14V9H2v5h4z" />
                        </svg>
                    </div>
                    <span className="text-sm md:text-base font-bold tracking-tight text-white-light">
                        {siteSettings.company.trustIndicator}
                    </span>
                </div>

            </div>


        </section>
    );
};

export default Hero;
