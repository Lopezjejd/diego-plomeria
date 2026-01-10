"use client";

import React from "react";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
            {/* BACKGROUND ASSETS */}
            <div className="absolute inset-0 z-0">
                {/* Mobile Background: Video */}
                <div className="md:hidden w-full h-full relative">
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

                {/* Desktop Background: Image */}
                <div className="hidden md:block w-full h-full relative">
                    <img
                        src="/hero/bg-desk.jpeg"
                        alt="Fondo Plomería Medellín"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />
            </div>

            {/* CONTENT */}
            <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center max-w-4xl pt-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-base/30 bg-green-base/10 backdrop-blur-md mb-8 animate-fade-in-down">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-light"
                    >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span className="text-green-light text-sm font-medium tracking-wide">
                        Disponibles en todo Medellín
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white-light mb-6 tracking-tight drop-shadow-lg">
                    Plomeros Expertos <br className="hidden md:block" />
                    en <span className="text-blue-light">Medellín</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-white-base/90 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                    Soluciones rápidas y garantizadas para tu hogar. <br className="hidden sm:block" />
                    Llegamos en menos de 60 minutos.
                </p>

                {/* CTA Button */}
                <button className="group relative flex items-center gap-3 px-8 py-4 bg-blue-base hover:bg-blue-dark text-white-light rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-base/40 active:scale-95 mb-10 cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Solicitar Servicio Ahora
                </button>

                {/* Success Indicator */}
                <div className="flex items-center gap-2 text-white-dark/80 text-sm md:text-base">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-white-light"
                    >
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    <span>Más de 500 servicios exitosos este mes</span>
                </div>
            </div>

            {/* ADDITIONAL STYLES FOR ANIMATIONS */}
            <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default Hero;
