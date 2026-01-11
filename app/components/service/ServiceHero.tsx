"use client";

import React from "react";
import Image from "next/image";
import { siteSettings } from "@/app/data/siteSettings";

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    badge?: string;
    primaryCTA: string;
    secondaryCTA?: string;
    serviceName: string;
}

const ServiceHero = ({
    title,
    subtitle,
    badge,
    primaryCTA,
    secondaryCTA,
    serviceName,
}: ServiceHeroProps) => {
    const handleCTAClick = () => {
        const message = encodeURIComponent(`Hola, me gustaría solicitar el servicio de ${serviceName}.`);
        window.open(`https://wa.me/${siteSettings.company.whatsapp}?text=${message}`, '_blank');
    };
    return (
        <section className="relative min-h-[70vh] w-full flex py-10 items-center justify-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero/bg-desk.jpeg" // Fallback or dynamic if needed, for now using site theme
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center max-w-4xl">
                {badge && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-light/30 bg-blue-base/10 backdrop-blur-md mb-8">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-light"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span className="text-blue-light text-sm font-bold tracking-wide uppercase">
                            {badge}
                        </span>
                    </div>
                )}

                <h1 className="text-3xl md:text-5xl font-bold text-white-light mb-6 tracking-tight drop-shadow-lg leading-tight">
                    {title}
                </h1>

                <p className="text-lg md:text-xl text-white-base/90 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                    {subtitle}
                </p>

                <div className="flex flex-col items-center gap-6">
                    <button
                        onClick={handleCTAClick}
                        className="flex items-center gap-3 px-8 py-4 bg-blue-base hover:bg-blue-dark text-white-light rounded-2xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-base/30"
                    >
                        {primaryCTA}
                    </button>
                    {secondaryCTA && (
                        <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white-base/90 text-sm font-medium tracking-wide">
                            {secondaryCTA}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
