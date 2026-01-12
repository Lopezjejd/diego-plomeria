import { ServiceConfig } from "@/app/types/service"

export const services: ServiceConfig[] = [
    {
        slug: "instalacion-redes-gas",
        seo: {
            title: "Instalación de Redes de Gas a Domicilio en Medellín",
            description:
                "Instalación profesional de redes de gas a domicilio en Medellín. Atendemos hogares, comercios e industrias bajo normativas vigentes. Servicio certificado IRGASA.",
            keywords: [
                "instalación gas medellín",
                "redes de gas medellín",
                "plomero gas medellín",
                "instalación gas domicilio",
                "gas natural medellín",
                "EPM gas instalación",
                "gasodomésticos medellín",
                "IRGASA gas"
            ]
        },

        header: {
            title: "Instalación de Redes de Gas a Domicilio",
            subtitle:
                "Instalamos redes de gas en tu hogar, comercio o industria cumpliendo todas las normas vigentes. Servicio profesional a domicilio en Medellín y área metropolitana.",
            badge: "Certificado y Seguro"
        },

        cta: {
            primaryText: "Solicitar Instalación",
            secondaryText: "Servicio a domicilio en Medellín"
        },

        problems: [
            {
                icon: "gas",
                title: "Necesita instalación de gas",
                description: "Instalación profesional y certificada a domicilio."
            },
            {
                icon: "stove",
                title: "Equipos industriales",
                description: "Instalamos gasodomésticos y equipos en tu ubicación."
            },
            {
                icon: "risk",
                title: "Cumplimiento normativo",
                description: "Trabajos bajo diseños aprobados y certificados."
            }
        ],

        technology: {
            title: "Instalación profesional a domicilio",
            description: "Cumpliendo todas las normas vigentes",
            items: [
                {
                    icon: "inspection",
                    title: "Diseños aprobados",
                    description:
                        "Trabajamos con diseños certificados en tu proyecto."
                },
                {
                    icon: "sensor",
                    title: "Instalación segura",
                    description:
                        "Garantizamos seguridad en cada instalación a domicilio."
                }
            ]
        },

        locations: [
            { label: "Medellín" },
            { label: "El Poblado" },
            { label: "Envigado" },
            { label: "Bello" },
            { label: "Sabaneta" }
        ],

        faq: [
            {
                question: "¿Atienden a domicilio en todo Medellín?",
                answer:
                    "Sí, atendemos a domicilio en Medellín y toda el área metropolitana incluyendo Envigado, Bello, Itagüí y Sabaneta."
            },
            {
                question: "¿Están certificados para instalar gas?",
                answer:
                    "Sí, cumplimos con todas las normas vigentes y trabajamos con diseños aprobados por las entidades competentes."
            }
        ],

        otherServices: [
            {
                slug: "instalacion-acueducto-alcantarillado",
                title: "Instalación de Acueducto",
                icon: "water"
            },
            {
                slug: "diseno-redes",
                title: "Diseño de Redes",
                icon: "pipe"
            }
        ]
    },

    // ============================
    // INSTALACIÓN DE ACUEDUCTO Y ALCANTARILLADO
    // ============================
    {
        slug: "instalacion-acueducto-alcantarillado",
        seo: {
            title: "Instalación de Acueducto y Alcantarillado a Domicilio | Medellín",
            description:
                "Servicio profesional de instalación de acueducto y alcantarillado a domicilio en Medellín. Tuberías, aparatos sanitarios y sistemas de presurización. IRGASA.",
            keywords: [
                "instalación acueducto medellín",
                "alcantarillado medellín",
                "plomero acueducto",
                "tuberías medellín",
                "aparatos sanitarios medellín",
                "sistemas presurización",
                "tanques agua medellín",
                "IRGASA acueducto"
            ]
        },

        header: {
            title: "Instalación de Acueducto y Alcantarillado a Domicilio",
            subtitle:
                "Instalamos tuberías, aparatos sanitarios, tanques y sistemas de presurización directamente en tu hogar, edificio o finca. Servicio profesional a domicilio.",
            badge: "Instalación Completa"
        },

        cta: {
            primaryText: "Solicitar Cotización",
            secondaryText: "Servicio a domicilio para todo tipo de proyectos"
        },

        problems: [
            {
                icon: "water",
                title: "Necesita instalación nueva",
                description: "Instalamos sistemas completos de acueducto a domicilio."
            },
            {
                icon: "drain",
                title: "Aparatos sanitarios",
                description: "Instalamos todo tipo de aparatos en tu ubicación."
            },
            {
                icon: "pressure",
                title: "Sistemas de presurización",
                description: "Instalamos y configuramos sistemas de presión a domicilio."
            }
        ],

        technology: {
            title: "Instalación completa a domicilio",
            description: "De tuberías a sistemas de presurización en tu ubicación",
            items: [
                {
                    icon: "pipe",
                    title: "Tuberías y conexiones",
                    description:
                        "Instalamos redes completas de distribución en tu proyecto."
                },
                {
                    icon: "inspection",
                    title: "Aparatos y tanques",
                    description:
                        "Instalamos aparatos sanitarios y tanques a domicilio."
                }
            ]
        },

        locations: [
            { label: "Medellín" },
            { label: "Envigado" },
            { label: "Bello" },
            { label: "Itagüí" },
            { label: "Sabaneta" }
        ],

        faq: [
            {
                question: "¿Trabajan en fincas y edificios?",
                answer:
                    "Sí, nos desplazamos a domicilio para instalar sistemas en casas, edificios, fincas y proyectos comerciales."
            },
            {
                question: "¿Incluye sistemas de presión?",
                answer:
                    "Sí, instalamos sistemas de presurización completos directamente en tu ubicación."
            }
        ],

        otherServices: [
            {
                slug: "instalacion-redes-gas",
                title: "Instalación de Gas",
                icon: "gas"
            },
            {
                slug: "diseno-redes",
                title: "Diseño de Redes",
                icon: "pipe"
            }
        ]
    },

    // ============================
    // DISEÑO DE REDES
    // ============================
    {
        slug: "diseno-redes",
        seo: {
            title: "Diseño de Redes de Acueducto y Alcantarillado | Medellín",
            description:
                "Diseño profesional de redes de acueducto y alcantarillado para proyectos en Medellín. Planos certificados para legalización y construcción. Servicio IRGASA.",
            keywords: [
                "diseño acueducto medellín",
                "diseño alcantarillado",
                "planos hidráulicos medellín",
                "legalización redes",
                "diseño redes agua",
                "planos sanitarios medellín",
                "ingeniero hidráulico medellín",
                "IRGASA diseño"
            ]
        },

        header: {
            title: "Diseño de Redes de Acueducto y Alcantarillado",
            subtitle:
                "Realizamos diseños profesionales de redes de abastecimiento y alcantarillado para tu proyecto. Planos certificados para legalización y construcción en Medellín.",
            badge: "Diseños Certificados"
        },

        cta: {
            primaryText: "Solicitar Diseño",
            secondaryText: "Diseños para legalización y construcción"
        },

        problems: [
            {
                icon: "pipe",
                title: "Necesita diseño profesional",
                description: "Diseños que cumplen normas para tu proyecto."
            },
            {
                icon: "bill",
                title: "Legalización",
                description: "Diseños válidos para requisitos de legalización."
            },
            {
                icon: "water",
                title: "Urbanizaciones y edificios",
                description: "Diseños para proyectos de cualquier escala."
            }
        ],

        technology: {
            title: "Diseños profesionales para tu proyecto",
            description: "Cumpliendo normas y requisitos de legalización",
            items: [
                {
                    icon: "inspection",
                    title: "Normas constructivas",
                    description:
                        "Diseños que cumplen todas las normas vigentes."
                },
                {
                    icon: "pipe",
                    title: "Abastecimiento y desagüe",
                    description:
                        "Diseños completos de redes hidráulicas y sanitarias."
                }
            ]
        },

        locations: [
            { label: "Medellín" },
            { label: "El Poblado" },
            { label: "Envigado" },
            { label: "Bello" },
            { label: "Sabaneta" }
        ],

        faq: [
            {
                question: "¿Los diseños sirven para legalización?",
                answer:
                    "Sí, nuestros diseños cumplen con todos los requisitos para legalización ante entidades competentes."
            },
            {
                question: "¿Diseñan para urbanizaciones?",
                answer:
                    "Sí, diseñamos para casas, edificios, urbanizaciones y proyectos comerciales de cualquier escala."
            }
        ],

        otherServices: [
            {
                slug: "instalacion-acueducto-alcantarillado",
                title: "Instalación de Acueducto",
                icon: "water"
            },
            {
                slug: "reparacion-fugas-mantenimiento",
                title: "Reparación y Mantenimiento",
                icon: "drain"
            }
        ]
    },

    // ============================
    // REPARACIÓN Y MANTENIMIENTO
    // ============================
    {
        slug: "reparacion-fugas-mantenimiento",
        seo: {
            title: "Reparación de Fugas y Mantenimiento a Domicilio | Medellín",
            description:
                "Reparación profesional de fugas y mantenimiento de desagües a domicilio en Medellín. Atención de emergencias 24/7. Sonda eléctrica y diagnóstico especializado. IRGASA.",
            keywords: [
                "reparación fugas medellín",
                "plomero emergencia medellín",
                "destape desagües medellín",
                "mantenimiento plomería",
                "fugas agua medellín",
                "sonda eléctrica medellín",
                "plomero 24 horas medellín",
                "IRGASA reparaciones"
            ]
        },

        header: {
            title: "Reparación de Fugas y Mantenimiento a Domicilio",
            subtitle:
                "Atendemos emergencias de plomería directamente en tu hogar o negocio. Reparación de fugas, destape de desagües y mantenimiento profesional con sonda eléctrica.",
            badge: "Atención 24/7"
        },

        cta: {
            primaryText: "Solicitar Reparación",
            secondaryText: "Servicio de emergencia a domicilio"
        },

        problems: [
            {
                icon: "water",
                title: "Fugas de agua",
                description: "Reparamos todo tipo de fugas en tu ubicación."
            },
            {
                icon: "drain",
                title: "Desagües tapados",
                description: "Destape profesional con sonda eléctrica a domicilio."
            },
            {
                icon: "odor",
                title: "Problemas hidráulicos",
                description: "Diagnóstico y solución directamente en tu hogar."
            }
        ],

        technology: {
            title: "Reparación profesional a domicilio",
            description: "Con tecnología de punta en tu ubicación",
            items: [
                {
                    icon: "inspection",
                    title: "Diagnóstico preciso",
                    description:
                        "Identificamos el problema rápidamente en tu hogar."
                },
                {
                    icon: "pressure",
                    title: "Sonda eléctrica",
                    description:
                        "Mantenimiento de desagües con tecnología avanzada a domicilio."
                }
            ]
        },

        locations: [
            { label: "Medellín" },
            { label: "Laureles" },
            { label: "El Poblado" },
            { label: "Envigado" },
            { label: "Bello" }
        ],

        faq: [
            {
                question: "¿Atienden emergencias a domicilio?",
                answer:
                    "Sí, atendemos emergencias 24/7 directamente en tu hogar o negocio en Medellín y área metropolitana."
            },
            {
                question: "¿Qué es la sonda eléctrica?",
                answer:
                    "Es una herramienta profesional que llevamos a tu ubicación para desobstruir y mantener desagües de forma efectiva."
            }
        ],

        otherServices: [
            {
                slug: "instalacion-redes-gas",
                title: "Instalación de Gas",
                icon: "gas"
            },
            {
                slug: "diseno-redes",
                title: "Diseño de Redes",
                icon: "pipe"
            }
        ]
    }
]
