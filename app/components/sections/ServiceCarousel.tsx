"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { services } from "@/app/data/services";
import ScrollReveal from "../ui/ScrollReveal";

import PulseGrid from "../ui/PulseGrid";

const ServiceCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(nextSlide, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused, nextSlide]);

    return (
        <section id="servicios" className="relative overflow-hidden">
            <PulseGrid>
                <div className="container mx-auto px-6 py-24 relative z-10">
                    <ScrollReveal className="text-center mb-16">
                        <span className="text-blue-light font-bold tracking-widest uppercase text-sm mb-4 block">
                            Nuestra Especialidad
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white-light mb-6">
                            Servicios Profesionales
                        </h2>
                        <p className="text-lg text-white-light font-bold max-w-2xl mx-auto">
                            Soluciones rápidas y garantizadas para cada necesidad. Tecnología de punta al servicio de tu hogar o empresa.
                        </p>
                    </ScrollReveal>

                    <div
                        className="relative max-w-5xl mx-auto"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Carousel Container */}
                        <div className="relative overflow-hidden rounded-[40px] shadow-2xl bg-white/5 backdrop-blur-md border border-white/10">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {services.map((service) => (
                                    <div key={service.slug} className="w-full gap-8 shrink-0 p-8 ">
                                        <div className="grid grid-cols-1  items-center">
                                            <div className="flex flex-col max-w-[500px] items-left pl-8">
                                                <div className="w-16 h-16 rounded-2xl bg-blue-base/20 text-blue-light flex items-center justify-center mb-8">
                                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M12 2v20M2 12h20M7.07 7.07l9.86 9.86M7.07 16.93l9.86-9.86" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-3xl md:text-5xl font-black text-white-light mb-6 leading-tight">
                                                    {service.header.title.split(' en ')[0]}
                                                </h3>
                                                <p className="text-xl text-white-light/80 mb-10 leading-relaxed">
                                                    {service.seo.description}
                                                </p>
                                                <Link
                                                    href={`/servicios/${service.slug}`}
                                                    className="inline-flex items-center gap-3 px-8 py-4 bg-blue-base hover:bg-white text-white-light hover:text-blue-base rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                                                >
                                                    Ver Detalles del Servicio
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Controls */}
                        <button
                            onClick={prevSlide}
                            className="absolute -left-5 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-blue-base shadow-xl border border-white/10 flex items-center justify-center text-white-light hover:bg-white hover:text-blue-base transition-all z-20"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute -right-5 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-blue-base shadow-xl border border-white/10 flex items-center justify-center text-white-light hover:bg-white hover:text-blue-base transition-all z-20"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>

                        {/* Indicators */}
                        <div className="flex justify-center gap-3 mt-10">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-10 bg-blue-base" : "w-2 bg-white/20"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </PulseGrid>
        </section>
    );
};

export default ServiceCarousel;
