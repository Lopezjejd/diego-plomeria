"use client";

import React from "react";
import PulseGrid from "../ui/PulseGrid";

interface Problem {
    icon: string;
    title: string;
    description: string;
}

interface ProblemListProps {
    problems: Problem[];
}

const IconWrapper = ({ name }: { name: string }) => {
    switch (name) {
        case "water":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
            );
        case "bill":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <line x1="6" y1="8" x2="18" y2="8" />
                    <line x1="6" y1="12" x2="18" y2="12" />
                    <line x1="6" y1="16" x2="18" y2="16" />
                </svg>
            );
        case "noise":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 10v4" />
                    <path d="M6 6v12" />
                    <path d="M10 3v18" />
                    <path d="M14 8v8" />
                    <path d="M18 5v14" />
                    <path d="M22 10v4" />
                </svg>
            );
        case "drain":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                    <path d="m17 7-5 5 5 5" />
                    <path d="m7 7 5 5-5 5" />
                </svg>
            );
        case "odor":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 10c0-2-1-3-3-3s-3 1-3 3 1 3 3 3 3-1 3-3z" />
                    <path d="M20 10c0-2-1-3-3-3s-3 1-3 3 1 3 3 3 3-1 3-3z" />
                    <path d="M15 14c0-2-1-3-3-3s-3 1-3 3 1 3 3 3 3-1 3-3z" />
                </svg>
            );
        case "overflow":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            );
        case "smell":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 10c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5S5 12.5 5 10z" />
                    <path d="M14 10c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5z" />
                </svg>
            );
        case "stove":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="7.5" cy="7.5" r="1.5" />
                    <circle cx="16.5" cy="7.5" r="1.5" />
                    <circle cx="7.5" cy="16.5" r="1.5" />
                    <circle cx="16.5" cy="16.5" r="1.5" />
                </svg>
            );
        case "risk":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 13 2-2 4 4-4 4-2-2" />
                    <path d="M12 8v5" />
                    <path d="M12 16v.01" />
                    <circle cx="12" cy="12" r="10" />
                </svg>
            );
        default:
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            );
    }
};

const ProblemList = ({ problems }: ProblemListProps) => {
    return (
        <section className="relative overflow-hidden">
            <PulseGrid variant="red">
                <div className="container mx-auto px-6 py-24 relative z-10">
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 border border-white/20 shadow-sm transition-all duration-300">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                className="text-white"
                            >
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                <path d="M12 9v4" />
                                <path d="M12 17h.01" />
                            </svg>
                            <h2 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase">
                                ¿Te pasa alguno de estos problemas?
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {problems.map((problem, index) => (
                            <div
                                key={index}
                                className="p-8 aspect-square w-70 mx-auto flex flex-col items-center text-center justify-center rounded-[40px] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-red-900/20 hover:shadow-red-900/30 hover:border-white/20 transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                    <IconWrapper name={problem.icon} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {problem.title}
                                </h3>
                                <p className="text-white/80 leading-relaxed text-sm">
                                    {problem.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </PulseGrid>
        </section>
    );
};

export default ProblemList;

