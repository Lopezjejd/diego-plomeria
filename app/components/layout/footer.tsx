"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/app/data/services";
import { siteSettings } from "@/app/data/siteSettings";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black-base border-t border-black-base/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Branding & Logo */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/hero/icon.png"
                                    alt={siteSettings.company.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-black-base dark:text-white-light">
                                {siteSettings.company.logoText}
                            </span>
                        </Link>
                        <p className="text-black-light/70 dark:text-white-dark/70 text-sm leading-relaxed max-w-xs">
                            {siteSettings.company.description}
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-4 mt-2">
                            {siteSettings.social.instagram && (
                                <Link href={siteSettings.social.instagram} className="w-10 h-10 rounded-xl bg-black-base/5 dark:bg-white-light/5 flex items-center justify-center text-black-base dark:text-white-light hover:bg-blue-base hover:text-white-light transition-all">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                </Link>
                            )}
                            {siteSettings.social.facebook && (
                                <Link href={siteSettings.social.facebook} className="w-10 h-10 rounded-xl bg-black-base/5 dark:bg-white-light/5 flex items-center justify-center text-black-base dark:text-white-light hover:bg-blue-base hover:text-white-light transition-all">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-bold text-black-base dark:text-white-light uppercase tracking-widest mb-6 border-l-4 border-blue-base pl-3">
                            Servicios
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {services.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/servicios/${service.slug}`}
                                        className="text-black-light/70 dark:text-white-dark/70 hover:text-blue-base dark:hover:text-blue-base transition-colors text-sm font-medium"
                                    >
                                        {service.header.title.split(' en ')[0]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold text-black-base dark:text-white-light uppercase tracking-widest mb-6 border-l-4 border-blue-base pl-3">
                            Contacto
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-base mt-0.5 shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <span className="text-black-light/70 dark:text-white-dark/70 text-sm">{siteSettings.company.phone}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-base mt-0.5 shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                <span className="text-black-light/70 dark:text-white-dark/70 text-sm break-all">{siteSettings.company.email}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-base mt-0.5 shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span className="text-black-light/70 dark:text-white-dark/70 text-sm">{siteSettings.company.address}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-base mt-0.5 shrink-0"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                <span className="text-black-light/70 dark:text-white-dark/70 text-sm font-bold text-blue-base">{siteSettings.company.workingHours}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links / Legal */}
                    <div>
                        <h4 className="text-sm font-bold text-black-base dark:text-white-light uppercase tracking-widest mb-6 border-l-4 border-blue-base pl-3">
                            Información
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {siteSettings.navigation.footer.map((cat) => (
                                <React.Fragment key={cat.category}>
                                    {cat.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-black-light/70 dark:text-white-dark/70 hover:text-blue-base dark:hover:text-blue-base transition-colors text-sm font-medium"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-black-base/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-black-light/50 dark:text-white-dark/50 text-xs">
                        © {new Date().getFullYear()} {siteSettings.company.name}. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-3">
                        <span className="text-black-light/50 dark:text-white-dark/50 text-xs font-medium">
                            Hecho por
                        </span>
                        <Link
                            href="https://lopezdev.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 group/link"
                        >
                            <div className="flex items-center">
                                <span className="text-lg font-black tracking-tighter text-black-base dark:text-white-light group-hover/link:underline decoration-green-500/30 underline-offset-4">Lopez</span>
                                <span className="text-lg font-black tracking-tighter text-green-500 group-hover/link:underline decoration-green-500/30 underline-offset-4">Dev</span>
                            </div>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-green-500 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
