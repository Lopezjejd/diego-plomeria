export interface SiteSettings {
    company: {
        name: string;
        logoText: string;
        description: string;
        whatsapp: string;
        phone: string;
        email: string;
        address: string;
        workingHours: string;
        trustIndicator: string;
    };
    navigation: {
        main: { label: string; href: string }[];
        footer: {
            category: string;
            links: { label: string; href: string }[];
        }[];
    };
    social: {
        instagram?: string;
        facebook?: string;
        tiktok?: string;
    };
    home: {
        hero: {
            title: string;
            subtitle: string;
            badge: string;
            primaryCTA: string;
        };
        zonas: {
            badge: string;
            title: string;
            description: string;
        };
    };
}

export const siteSettings: SiteSettings = {
    company: {
        name: "Diego Plomería",
        logoText: "Plomeria",
        description: "Servicios profesionales de plomería 24/7 en Medellín. Expertos en detección de fugas y mantenimiento.",
        whatsapp: "573137367480", // Reemplazar con el real
        phone: "30137367480",
        email: "contao@diegoplomeria.com",
        address: "Medellín, Antioquia",
        workingHours: "Atención 24 Horas",
        trustIndicator: "Mas de 5 empresas de antioquia confian en nosotros",
    },
    navigation: {
        main: [
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "#servicios" },
            { label: "Zonas", href: "#zonas" },
        ],
        footer: [
            {
                category: "Legales",
                links: [
                    { label: "Términos y Condiciones", href: "/legal/terminos" },
                    { label: "Privacidad", href: "/legal/privacidad" },
                ],
            },
        ],
    },
    social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
    },
    home: {
        hero: {
            badge: "Disponibles 24/7 en Medellín",
            title: "Plomeros Expertos en Medellín",
            subtitle: "Soluciones rápidas y garantizadas para tu hogar. Llegamos en menos de 60 minutos.",
            primaryCTA: "Solicitar Servicio Ahora",
        },
        zonas: {
            badge: "Cobertura Total",
            title: "Disponibles en todo Medellín",
            description: "Trabajo, rapidez y calidad garantizada en cada rincón de la ciudad.",
        },
    },
};
