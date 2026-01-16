"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

const features = [
    {
        title: "Ingenieros Calificados",
        description: "Contamos con un equipo de ingenieros expertos en soluciones hidráulicas y detección técnica de fallas.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-base group-hover:text-white transition-colors duration-300">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        )
    },
    {
        title: "Experiencia Corporativa",
        description: "Hemos trabajado con las empresas más grandes de Antioquia, garantizando estándares de calidad industrial.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-base group-hover:text-white transition-colors duration-300">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        )
    },
    {
        title: "Garantía Total",
        description: "Ofrecemos respaldo real en cada trabajo realizado, asegurando tu tranquilidad y la de tu empresa.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-base group-hover:text-white transition-colors duration-300">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        )
    }
];

const Features = () => {
    return (
        <section className="py-24 w-full bg-white dark:bg-black-dark overflow-hidden mx-auto">
            <div className="container w-full mx-auto px-6">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    {/* Header Content */}
                    <ScrollReveal animation="fade-up">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-blue-base font-bold tracking-widest uppercase text-sm block">
                                Nuestra Excelencia
                            </span>
                            <div className="h-px w-12 bg-blue-base/20" />
                            <div className="px-3 py-1 rounded-full bg-green-base/10 border border-green-base/20 text-green-base text-xs font-bold">
                                20+ Años de Experiencia
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-black-base dark:text-white-light mb-8 leading-[1.1] tracking-tight">
                            Confianza respaldada por <span className="text-blue-base">resultados reales</span>
                        </h2>
                        <p className="text-lg text-black-light/70 dark:text-white-dark/70 mb-16 max-w-2xl mx-auto leading-relaxed">
                            No somos solo plomeros, somos profesionales de la ingeniería dedicados a resolver los retos más complejos en Antioquia.
                        </p>
                    </ScrollReveal>

                    {/* Features Grid - 3 columns on desktop for balance */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {features.map((feature, index) => (
                            <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                                <div className="flex flex-col items-center text-center gap-6 group p-8 rounded-3xl bg-black-base/5 dark:bg-white-light/5 border border-black-base/5 dark:border-white-light/10 hover:bg-white dark:hover:bg-white-light/10 hover:shadow-2xl hover:shadow-blue-base/10 transition-all duration-300 h-full">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-base/10 flex items-center justify-center group-hover:bg-blue-base group-hover:text-white transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black-base dark:text-white-light mb-3 transition-colors group-hover:text-blue-base dark:group-hover:text-blue-light">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-black-light/60 dark:text-white-dark/60 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
