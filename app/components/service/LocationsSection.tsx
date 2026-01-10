"use client";

import React from "react";
import Image from "next/image";

interface Location {
    label: string;
}

interface LocationsSectionProps {
    locations: Location[];
}

const LocationsSection = ({ locations }: LocationsSectionProps) => {
    return (
        <section className="py-20 bg-white dark:bg-black-dark overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black-base dark:text-white-light mb-4">
                        Cobertura en todo Medellín
                    </h2>
                    <p className="text-black-light/70 dark:text-white-dark/70">
                        Llegamos en menos de 60 minutos a tu sector.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                        src="/services/map.png"
                        alt="Mapa de cobertura Medellín"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" />

                    <div className="absolute inset-0 flex items-end p-8">
                        <div className="flex flex-wrap gap-2 relative z-10">
                            {locations.map((loc, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-full bg-blue-base border border-white/20 text-white-light text-sm font-bold shadow-lg"
                                >
                                    {loc.label}
                                </span>
                            ))}
                            <span className="px-4 py-2 rounded-full bg-blue-base border border-white/20 text-white-light text-sm font-bold shadow-lg">
                                + Sabaneta
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationsSection;
