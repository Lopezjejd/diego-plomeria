"use client";

import React from "react";
import Image from "next/image";
import { siteSettings } from "@/app/data/siteSettings";
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

    return (
        <section className="relative min-h-[90vh] sm:p-15 w-full flex items-center justify-center overflow-hidden">
            {/* BACKGROUND ASSETS */}
            <div className="absolute inset-0 z-0">
                {/* Mobile Background: Video */}
                {isMobile === true && (
                    <div className="w-full h-full relative">
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
                    </div>
                )}

                {/* Desktop/Default Background: Image */}
                {(isMobile === false || isMobile === null) && (
                    <div className="w-full h-full relative">
                        <Image
                            src="/hero/bg-desk.jpeg"
                            alt={`Fondo Plomería`}
                            fill
                            className="object-cover"
                            priority

                        />
                    </div>
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            {/* CONTENT */}
            <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center max-w-4xl pt-20">
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

                <h1 className="text-5xl md:text-6xl  font-black text-white-light mb-8 tracking-tighter leading-[1.2] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    dangerouslySetInnerHTML={{ __html: siteSettings.home.hero.title.replace('Medellín', `<span class="text-blue-light">Medellín</span>`) }}
                />


                {/* Subheading */}

                <p className="text-xl md:text-2xl text-white-base/90 mb-12 max-w-2xl leading-relaxed font-medium drop-shadow-md">
                    {siteSettings.home.hero.subtitle}
                </p>


                {/* CTA Button - Large Blue */}

                <div className="mb-12">
                    <button
                        onClick={() => window.open(`https://wa.me/${siteSettings.company.whatsapp}`, '_blank')}
                        className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-blue-base hover:bg-blue-dark text-white-light rounded-[32px] font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_20px_60px_rgba(30,111,230,0.4)] active:scale-95 cursor-pointer"
                    >
                        {siteSettings.home.hero.primaryCTA}
                    </button>
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
