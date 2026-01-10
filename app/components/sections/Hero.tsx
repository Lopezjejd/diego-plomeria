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
        <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
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
                            poster="/hero/hero-backup.png"
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src="/hero/video hero.mp4" type="video/mp4" />
                        </video>
                    </div>
                )}

                {/* Desktop Background: Video & Image Placeholder */}
                {isMobile === false && (
                    <div className="w-full h-full relative">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="/hero/bg-desk.jpeg"
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src="/hero/video-desk.mp4" type="video/mp4" />
                        </video>
                        <Image
                            src="/hero/bg-desk.jpeg"
                            alt={`Fondo Plomería ${siteSettings.company.address}`}
                            fill
                            className="object-cover -z-10"
                            priority
                        />
                    </div>
                )}

                {/* SSR/Initial State: Image only */}
                {isMobile === null && (
                    <div className="w-full h-full relative">
                        <Image
                            src="/hero/bg-desk.jpeg"
                            alt={`Fondo Plomería ${siteSettings.company.address}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />
            </div>

            {/* CONTENT */}
            <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center max-w-4xl pt-10">
                {/* Badge */}
                <ScrollReveal animation="fade-up" delay={500}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-light/10 border border-green-light/20 text-green-light text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
                        {siteSettings.home.hero.badge}
                    </span>
                </ScrollReveal>

                {/* Main Heading */}
                <ScrollReveal animation="fade-up" delay={600}>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white-light mb-8 tracking-tighter leading-[0.85] drop-shadow-2xl"
                        dangerouslySetInnerHTML={{ __html: siteSettings.home.hero.title.replace('Medellín', `<span class="text-blue-light italic">Medellín</span>`) }}
                    />
                </ScrollReveal>

                {/* Subheading */}
                <ScrollReveal animation="fade-up" delay={700}>
                    <p className="text-lg md:text-2xl text-white-base/90 mb-12 max-w-2xl leading-relaxed drop-shadow-md font-medium">
                        {siteSettings.home.hero.subtitle}
                    </p>
                </ScrollReveal>

                {/* CTA Button */}
                <ScrollReveal animation="fade-up" delay={800}>
                    <div className="flex flex-col sm:flex-row gap-5 mb-16">
                        <button
                            onClick={() => window.open(`https://wa.me/${siteSettings.company.whatsapp}`, '_blank')}
                            className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-blue-base hover:bg-blue-dark text-white-light rounded-[24px] font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_50px_rgba(30,111,230,0.4)] active:scale-95 cursor-pointer"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:rotate-12 transition-transform">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            {siteSettings.home.hero.primaryCTA}
                        </button>
                    </div>
                </ScrollReveal>

                {/* Trust Indicator - Company Focus */}
                <ScrollReveal animation="fade-up" delay={1000}>
                    <div className="inline-flex items-center gap-3 px-6 py-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 text-white-light shadow-2xl">
                        <div className="w-10 h-10 rounded-full bg-blue-base/20 flex items-center justify-center text-blue-light shadow-inner">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <span className="text-sm md:text-base font-bold tracking-wide uppercase">
                            {siteSettings.company.trustIndicator}
                        </span>
                    </div>
                </ScrollReveal>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;
