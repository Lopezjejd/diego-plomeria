"use client";

import React from "react";
import Link from "next/link";

interface OtherService {
    slug: string;
    title: string;
    icon: string;
}

interface OtherServicesProps {
    services: OtherService[];
}

const IconWrapper = ({ name }: { name: string }) => {
    switch (name) {
        case "water":
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
            );
        case "pipe":
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M2 12h20" />
                </svg>
            );
        case "gas":
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 10v4m4-2-4 4-4-4M3 12h18" />
                </svg>
            );
        default:
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                </svg>
            );
    }
};

const OtherServices = ({ services }: OtherServicesProps) => {
    return (
        <section className="py-20 bg-white-base dark:bg-black-base">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black-base dark:text-white-light">
                        Otros Servicios
                    </h2>
                    <Link href="/" className="text-blue-base font-bold text-sm hover:underline">
                        Ver todos
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/servicios/${service.slug}`}
                            className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-black-dark border border-black-base/5 dark:border-white-light/5 hover:border-blue-base/30 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-blue-base/10 flex items-center justify-center text-blue-base group-hover:bg-blue-base group-hover:text-white-light transition-colors">
                                <IconWrapper name={service.icon} />
                            </div>
                            <span className="text-lg font-bold text-black-base dark:text-white-light">
                                {service.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherServices;
