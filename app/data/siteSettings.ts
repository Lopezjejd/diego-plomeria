export interface SiteSettings {
    company: {
        name: string;
        logoText: string;
        description: string;
        whatsapp: string;
        phone: string;
        email: string;
        serviceArea: string;
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
    seo: {
        domain: string;
        siteName: string;
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
        name: "IRGASA",
        logoText: "IRGASA",
        description: "Servicios profesionales de plomería a domicilio en Medellín y área metropolitana. Instalaciones, reparaciones y redes de gas certificadas.",
        whatsapp: "573137367480",
        phone: "3137367480",
        email: "contacto@irgasa.com",
        serviceArea: "Medellín y Área Metropolitana, Antioquia",
        workingHours: "Atención 24 Horas",
        trustIndicator: "Más de 5 empresas de Antioquia confían en nosotros",
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
        instagram: "https://instagram.com/irgasa",
        facebook: "https://facebook.com/irgasa",
    },
    seo: {
        domain: "https://irgasa.com",
        siteName: "IRGASA",
    },
    home: {
        hero: {
            badge: "Disponibles 24/7 en Medellín",
            title: "Plomeros Expertos en Medellín",
            subtitle: "Servicios profesionales de plomería en tu hogar o negocio. Llegamos rápido y con calidad garantizada.",
            primaryCTA: "Solicitar Servicio Ahora",
        },
        zonas: {
            badge: "Cobertura Total",
            title: "Servicio a Domicilio en Todo Medellín",
            description: "Atendemos en tu ubicación con rapidez y calidad garantizada.",
        },
    },
};
