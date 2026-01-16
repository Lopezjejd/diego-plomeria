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
            <div className="container mx-auto px-6 flex items-center justify-between gap-6">
                <div className="flex items-center gap-8">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-25 sm:w-45 h-10 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/hero/icono.png"
                                alt={`${siteSettings.company.name} Logo`}
                                fill
                                className="object-cover"

                            />
                        </div>

                    </Link>

                    {/* DESKTOP NAV - Horizontal */}
                    <nav className="flex items-center gap-4">
                        <Link href="/" className="group flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-black-base border-2 border-blue-base hover:border-blue-base/40 text-blue-base dark:text-white-light hover:text-blue-base rounded-2xl font-bold text-sm transition-all duration-300 active:scale-95 shadow-lg shadow-black-base/5 hover:shadow-blue-base/5">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-base dark:text-white-light group-hover:text-blue-base transition-colors">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            <span className="hidden sm:inline">Inicio</span>
                        </Link>
                    </nav>
                </div>

                {/* RIGHT ACTIONS */}
                <div
                    className="relative flex items-center gap-3"
                >
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

                    {/* DROPDOWN MENU - Compact Approach */}
                    <div className={`absolute top-full right-0 w-[280px] pt-4 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible pointer-events-none -translate-y-2"}`}>
                        <div className="bg-white/98 dark:bg-black/98 backdrop-blur-xl rounded-2xl border border-black-base/5 shadow-2xl p-4 flex flex-col gap-2">
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
                </div>
            </div>
        </header>
    );
};

export default Header;
