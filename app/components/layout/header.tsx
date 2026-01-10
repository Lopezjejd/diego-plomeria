"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/app/data/services";
import { siteSettings } from "@/app/data/siteSettings";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "py-3 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black-base/5 shadow-lg"
                : "py-5 bg-white dark:bg-black-base"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/hero/icon.png"
                            alt={`${siteSettings.company.name} Logo`}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl md:text-2xl font-black tracking-tight text-black-base dark:text-white-light">
                        {siteSettings.company.logoText} <span className="text-blue-base">Medellín</span>
                    </span>
                </Link>

                {/* DESKTOP NAV - Horizontal */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-bold text-black-base dark:text-white-light hover:text-blue-base transition-colors">Inicio</Link>
                    <Link href="#servicios" className="text-sm font-bold text-black-base dark:text-white-light hover:text-blue-base transition-colors">Servicios</Link>
                    <Link href="#zonas" className="text-sm font-bold text-black-base dark:text-white-light hover:text-blue-base transition-colors">Zonas</Link>
                </nav>

                {/* RIGHT ACTIONS */}
                <div className="flex items-center gap-3">
                    {/* Call Button - Always visible on mobile */}
                    <Link
                        href={`tel:${siteSettings.company.phone}`}
                        className="flex items-center justify-center w-11 h-11 bg-blue-base/10 text-blue-base rounded-full hover:bg-blue-base hover:text-white-light transition-all duration-300 shadow-sm active:scale-90"
                        aria-label="Llamar"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                    </Link>

                    {/* Blue Services Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-base text-white-light rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-blue-base/20"
                        aria-label="Ver servicios"
                    >
                        <span>Servicios</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* DROPDOWN MENU - Compact Approach */}
            <div className={`absolute top-full right-6 mt-4 w-[280px] bg-white/98 dark:bg-black/98 backdrop-blur-xl z-40 rounded-3xl border border-black-base/5 shadow-2xl transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible pointer-events-none -translate-y-4"}`}>
                <div className="p-4 flex flex-col gap-2">
                    <p className="px-4 py-2 text-[10px] font-bold text-black-light/40 dark:text-white-dark/40 uppercase tracking-[0.2em]">
                        Nuestros Servicios
                    </p>
                    <div className="flex flex-col gap-2">
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/servicios/${service.slug}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-black-base/5 dark:bg-white-light/5 hover:bg-blue-base transition-all duration-300"
                            >
                                <span className="text-sm font-bold text-black-base dark:text-white-light group-hover:text-white-light">{service.header.title.split(' en ')[0]}</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-base group-hover:text-white-light transition-all">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-2 pt-4 border-t border-black-base/5 dark:border-white-light/5">
                        <Link
                            href={`https://wa.me/${siteSettings.company.whatsapp}`}
                            className="w-full flex items-center justify-center gap-2 py-3 bg-blue-base text-white-light rounded-xl font-bold text-sm shadow-lg shadow-blue-base/20 transition-all active:scale-95"
                        >
                            Solicitar ahora
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
