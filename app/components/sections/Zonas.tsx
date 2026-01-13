"use client";

import React from "react";
import Image from "next/image";
import InfiniteSlider from "../ui/Slider";
import ScrollReveal from "../ui/ScrollReveal";
import { siteSettings } from "@/app/data/siteSettings";

const serviceZones = [
    {
        id: "envigado",
        name: "Envigado",
        imageUrl: "/slider/envigado.jpg",
    },
    {
        id: "sabaneta",
        name: "Sabaneta",
        imageUrl: "/slider/sabaneta.jpg",
    },
    {
        id: "itagui",
        name: "Itagüí",
        imageUrl: "/slider/itagui.jpg",
    },
    {
        id: "bello",
        name: "Bello",
        imageUrl: "/slider/bello.jpg",
    },
    {
        id: "copacabana",
        name: "Copacabana",
        imageUrl: "/slider/copacabana.jpg",
    },
    {
        id: "girardota",
        name: "Girardota",
        imageUrl: "/slider/girardota.jpg",
    },
    {
        id: "estrella",
        name: "La Estrella",
        imageUrl: "/slider/estrella.webp",
    },
    {
        id: "caldas",
        name: "Caldas",
        imageUrl: "/slider/caldas.jpg",
    },
];

const Zonas = () => {
    return (
        <section className="py-24 bg-white dark:bg-black-base relative overflow-hidden" id="zonas">
            <div className="container mx-auto px-6 mb-16">

                <div className="flex flex-col items-center text-center">
                    <ScrollReveal animation="fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-base/30 bg-green-base/10 mb-6 transition-all duration-300">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-base">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="text-green-base text-xs font-bold tracking-widest uppercase">
                                {siteSettings.home.zonas.badge}
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={100}>
                        <h2 className="text-4xl md:text-6xl font-bold text-black-base dark:text-white-light mb-6 tracking-tight">
                            {siteSettings.home.zonas.title}
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={200}>
                        <p className="text-lg md:text-xl text-black-light/70 dark:text-white-dark/70 font-medium max-w-2xl leading-relaxed">
                            {siteSettings.home.zonas.description}
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <ScrollReveal animation="fade-in" delay={400} threshold={0.2} className="relative z-10 w-full">
                <div className="max-w-[1920px] mx-auto">
                    <InfiniteSlider items={serviceZones} />
                </div>
            </ScrollReveal>
        </section>
    );
};

export default Zonas;