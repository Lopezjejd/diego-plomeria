import { ServiceConfig } from "@/app/types/service"

export const services: ServiceConfig[] = [
    {
        slug: "instalacion-redes-gas",
        seo: {
            title: "Instalación de Redes de Gas en Medellín | Plomería Diego López",
            description:
                "Instalamos redes de gas en edificaciones residenciales, comerciales y de servicios, cumpliendo las normas vigentes."
        },

        header: {
            title: "Instalación de redes de gas",
            subtitle:
                "Instalamos redes de gas en edificaciones residenciales, comerciales y de servicios, cumpliendo las normas vigentes. Instalamos gasodomésticos y equipos industriales bajo diseños aprobados.",
            badge: "Certificado y Seguro"
        },

        cta: {
            primaryText: "Solicitar instalación",
            secondaryText: "Servicio profesional en Medellín"
        },

        problems: [
            {
                icon: "gas",
                title: "Necesita instalación de gas",
                description: "Instalación profesional y certificada."
            },
            {
                icon: "stove",
                title: "Equipos industriales",
                description: "Instalamos gasodomésticos y equipos."
            },
            {
                icon: "risk",
                title: "Cumplimiento normativo",
                description: "Trabajos bajo diseños aprobados."
            }
        ],

        technology: {
            title: "Instalación profesional",
            description: "Cumpliendo todas las normas vigentes",
            items: [
                {
                    icon: "inspection",
                    title: "Diseños aprobados",
                    description:
                        "Trabajamos con diseños certificados."
                },
                {
                    icon: "sensor",
                    title: "Instalación segura",
                    description:
                        "Garantizamos seguridad en cada instalación."
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
                question: "¿Qué tipo de edificaciones cubren?",
                answer:
                    "Trabajamos en edificaciones residenciales, comerciales y de servicios."
            },
            {
                question: "¿Están certificados?",
                answer:
                    "Sí, cumplimos con todas las normas vigentes y trabajamos con diseños aprobados."
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
            title: "Instalación de Redes de Acueducto y Alcantarillado | Medellín",
            description:
                "Instalación de tuberías, aparatos sanitarios, tanques y sistemas de presurización en casas, edificios y fincas."
        },

        header: {
            title: "Instalaciones de redes de acueducto y alcantarillado",
            subtitle:
                "Instalación de tuberías, aparatos sanitarios, tanques y sistemas de presurización en casas, edificios y fincas.",
            badge: "Instalación Completa"
        },

        cta: {
            primaryText: "Solicitar cotización",
            secondaryText: "Servicio para todo tipo de edificaciones"
        },

        problems: [
            {
                icon: "water",
                title: "Necesita instalación nueva",
                description: "Instalamos sistemas completos de acueducto."
            },
            {
                icon: "drain",
                title: "Aparatos sanitarios",
                description: "Instalamos todo tipo de aparatos sanitarios."
            },
            {
                icon: "pressure",
                title: "Sistemas de presurización",
                description: "Instalamos y configuramos sistemas de presión."
            }
        ],

        technology: {
            title: "Instalación completa y profesional",
            description: "De tuberías a sistemas de presurización",
            items: [
                {
                    icon: "pipe",
                    title: "Tuberías y conexiones",
                    description:
                        "Instalamos redes completas de distribución."
                },
                {
                    icon: "inspection",
                    title: "Aparatos y tanques",
                    description:
                        "Instalamos aparatos sanitarios y tanques."
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
                question: "¿Trabajan en fincas?",
                answer:
                    "Sí, instalamos sistemas en casas, edificios y fincas."
            },
            {
                question: "¿Incluye sistemas de presión?",
                answer:
                    "Sí, instalamos sistemas de presurización completos."
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
                "Realizamos diseños de redes de abastecimiento, desagüe de aguas lluvias y residuales cumpliendo normas constructivas."
        },

        header: {
            title: "Diseño de redes de acueducto y alcantarillado (interno y externo)",
            subtitle:
                "Realizamos diseños de redes de abastecimiento, desagüe de aguas lluvias y residuales para casas, edificios, urbanizaciones y negocios, cumpliendo normas constructivas y requisitos de legalización.",
            badge: "Diseños Certificados"
        },

        cta: {
            primaryText: "Solicitar diseño",
            secondaryText: "Diseños para legalización"
        },

        problems: [
            {
                icon: "pipe",
                title: "Necesita diseño profesional",
                description: "Diseños que cumplen normas constructivas."
            },
            {
                icon: "bill",
                title: "Legalización",
                description: "Diseños para requisitos de legalización."
            },
            {
                icon: "water",
                title: "Urbanizaciones y edificios",
                description: "Diseños para proyectos de cualquier escala."
            }
        ],

        technology: {
            title: "Diseños profesionales certificados",
            description: "Cumpliendo normas y requisitos de legalización",
            items: [
                {
                    icon: "inspection",
                    title: "Normas constructivas",
                    description:
                        "Diseños que cumplen todas las normas."
                },
                {
                    icon: "pipe",
                    title: "Abastecimiento y desagüe",
                    description:
                        "Diseños de redes de agua y alcantarillado."
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
                    "Sí, nuestros diseños cumplen con todos los requisitos de legalización."
            },
            {
                question: "¿Trabajan para urbanizaciones?",
                answer:
                    "Sí, diseñamos para casas, edificios, urbanizaciones y negocios."
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
            title: "Reparación de Fugas y Mantenimiento de Desagües | Medellín",
            description:
                "Reparación de fugas, diagnóstico de problemas hidráulicos, desobstrucción de desagües y mantenimiento con sonda eléctrica."
        },

        header: {
            title: "Reparación de fugas y mantenimiento de desagües",
            subtitle:
                "Reparación de fugas, diagnóstico de problemas hidráulicos, desobstrucción de desagües, desmonte de aparatos sanitarios y mantenimiento de desagües con sonda eléctrica.",
            badge: "Atención Rápida"
        },

        cta: {
            primaryText: "Solicitar reparación",
            secondaryText: "Servicio de emergencia disponible"
        },

        problems: [
            {
                icon: "water",
                title: "Fugas de agua",
                description: "Reparamos todo tipo de fugas."
            },
            {
                icon: "drain",
                title: "Desagües tapados",
                description: "Desobstrucción con sonda eléctrica."
            },
            {
                icon: "odor",
                title: "Problemas hidráulicos",
                description: "Diagnóstico y solución de problemas."
            }
        ],

        technology: {
            title: "Reparación y mantenimiento profesional",
            description: "Con tecnología de punta",
            items: [
                {
                    icon: "inspection",
                    title: "Diagnóstico preciso",
                    description:
                        "Identificamos el problema rápidamente."
                },
                {
                    icon: "pressure",
                    title: "Sonda eléctrica",
                    description:
                        "Mantenimiento de desagües con tecnología avanzada."
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
                question: "¿Reparan fugas sin romper?",
                answer:
                    "Dependiendo del caso, usamos métodos que minimizan daños."
            },
            {
                question: "¿Qué es la sonda eléctrica?",
                answer:
                    "Es una herramienta profesional para desobstruir y mantener desagües de forma efectiva."
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

