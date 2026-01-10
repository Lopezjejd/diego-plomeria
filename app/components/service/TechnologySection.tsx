"use client";

import React from "react";

interface TechItem {
    icon: string;
    title: string;
    description: string;
}

interface TechnologySectionProps {
    title: string;
    description: string;
    items: TechItem[];
}

const IconWrapper = ({ name }: { name: string }) => {
    switch (name) {
        case "thermal":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20" />
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
            );
        case "geophone":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v10" />
                    <path d="m16 8-4 4-4-4" />
                    <path d="M3 12h18" />
                    <path d="M21 12v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8" />
                </svg>
            );
        case "pressure":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 12L16 8" />
                    <path d="M12 7v1" />
                    <path d="M12 16v1" />
                    <path d="M7 12h1" />
                    <path d="M16 12h1" />
                </svg>
            );
        case "inspection":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M7 8h10" />
                    <path d="M7 12h10" />
                    <path d="M7 16h10" />
                </svg>
            );
        case "sensor":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 10v4" />
                    <path d="m16 12-4 4-4-4" />
                    <path d="M3 12h18" />
                </svg>
            );
        default:
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            );
    }
};

const TechnologySection = ({ title, description, items }: TechnologySectionProps) => {
    return (
        <section className="py-20 bg-white-base dark:bg-black-base">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-base/30 bg-blue-base/10 backdrop-blur-md mb-6">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-base"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span className="text-blue-base text-sm font-bold tracking-wide uppercase">
                            Nuestra Tecnología
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-black-dark dark:text-white-light mb-6">
                        {title}
                    </h2>
                    <p className="text-lg text-black-light dark:text-white-dark/70 max-w-2xl">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-8 rounded-3xl bg-white dark:bg-black-dark shadow-xl shadow-black/5 flex-1 min-w-[280px]"
                        >
                            <div className="w-16 h-16 rounded-full bg-blue-base/10 flex items-center justify-center text-blue-base mb-6">
                                <IconWrapper name={item.icon} />
                            </div>
                            <h3 className="text-2xl font-bold text-black-base dark:text-white-light mb-4">
                                {item.title}
                            </h3>
                            <p className="text-black-light/70 dark:text-white-dark/70">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
