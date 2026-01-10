import { ServiceConfig } from "@/app/types/service"

export const services: ServiceConfig[] = [
    {
        slug: "deteccion-de-fugas",
        seo: {
            title: "Detección de Fugas en Medellín | Plomeros Medellín",
            description:
                "Detectamos fugas de agua sin romper pisos ni paredes. Servicio 24/7 en Medellín."
        },

        header: {
            title: "Detección de Fugas en Medellín",
            subtitle:
                "Tecnología no invasiva para detectar fugas sin romper sus pisos ni paredes.",
            badge: "Garantía Certificada"
        },

        cta: {
            primaryText: "Solicitar servicio ahora",
            secondaryText: "Disponible 24/7 en el área metropolitana"
        },

        problems: [
            {
                icon: "water",
                title: "Humedad en paredes",
                description: "Manchas de agua, pintura inflada o moho visible."
            },
            {
                icon: "bill",
                title: "Facturas altas",
                description: "Incrementos injustificados en el cobro de EPM."
            },
            {
                icon: "noise",
                title: "Ruido de agua",
                description: "Sonido constante incluso con llaves cerradas."
            }
        ],

        technology: {
            title: "Así solucionamos el problema",
            description: "Detectamos el punto exacto sin dañar tu casa",
            items: [
                {
                    icon: "thermal",
                    title: "Cámaras térmicas",
                    description:
                        "Identificamos cambios de temperatura para localizar la fuga."
                },
                {
                    icon: "geophone",
                    title: "Geófono",
                    description:
                        "Escuchamos fugas subterráneas con precisión milimétrica."
                }
            ]
        },

        locations: [
            { label: "El Poblado" },
            { label: "Laureles" },
            { label: "Envigado" },
            { label: "Bello" },
            { label: "Sabaneta" }
        ],

        faq: [
            {
                question: "¿Cuánto cuesta la visita de revisión?",
                answer:
                    "El valor depende del tipo de inspección y la zona. Te informamos antes de ir."
            },
            {
                question: "¿Cubren daños estéticos?",
                answer:
                    "Nuestro método evita romper pisos y paredes, minimizando daños."
            }
        ],

        otherServices: [
            {
                slug: "destape-de-canerias",
                title: "Destape de Cañerías",
                icon: "pipe"
            },
            {
                slug: "fugas-de-gas",
                title: "Fugas de Gas",
                icon: "gas"
            }
        ]
    },

    // ============================
    // DESTAPE DE CAÑERÍAS
    // ============================
    {
        slug: "destape-de-canerias",
        seo: {
            title: "Destape de Cañerías en Medellín | Servicio Rápido",
            description:
                "Destapamos cañerías y desagües de forma rápida y segura. Atención inmediata en Medellín."
        },

        header: {
            title: "Destape de Cañerías en Medellín",
            subtitle:
                "Solucionamos obstrucciones sin dañar tus tuberías.",
            badge: "Atención Inmediata"
        },

        cta: {
            primaryText: "Destapar ahora",
            secondaryText: "Servicio para hogares y apartamentos"
        },

        problems: [
            {
                icon: "drain",
                title: "Desagües lentos",
                description: "El agua tarda en drenar o se devuelve."
            },
            {
                icon: "odor",
                title: "Malos olores",
                description: "Olores fuertes provenientes de sifones o cañerías."
            },
            {
                icon: "overflow",
                title: "Reboses",
                description: "Inodoros o lavaplatos que se tapan constantemente."
            }
        ],

        technology: {
            title: "Cómo destapamos tus cañerías",
            description: "Métodos seguros y efectivos",
            items: [
                {
                    icon: "pressure",
                    title: "Presión controlada",
                    description:
                        "Eliminamos obstrucciones sin romper tuberías."
                },
                {
                    icon: "inspection",
                    title: "Inspección previa",
                    description:
                        "Evaluamos el estado antes de intervenir."
                }
            ]
        },

        locations: [
            { label: "Medellín" },
            { label: "Envigado" },
            { label: "Bello" },
            { label: "Itagüí" }
        ],

        faq: [
            {
                question: "¿Qué tipos de cañerías destapan?",
                answer:
                    "Destapamos lavaplatos, baños, sifones, lavaderos y desagües en general."
            },
            {
                question: "¿El servicio daña las tuberías?",
                answer:
                    "No. Usamos técnicas seguras que protegen la instalación."
            }
        ],

        otherServices: [
            {
                slug: "deteccion-de-fugas",
                title: "Detección de Fugas",
                icon: "water"
            },
            {
                slug: "fugas-de-gas",
                title: "Fugas de Gas",
                icon: "gas"
            }
        ]
    },

    // ============================
    // FUGAS DE GAS
    // ============================
    {
        slug: "fugas-de-gas",
        seo: {
            title: "Detección de Fugas de Gas en Medellín | Emergencias",
            description:
                "Detectamos fugas de gas de forma segura y profesional. Atención urgente en Medellín."
        },

        header: {
            title: "Detección de Fugas de Gas",
            subtitle:
                "Protegemos tu hogar y tu familia ante riesgos de gas.",
            badge: "Emergencias 24/7"
        },

        cta: {
            primaryText: "Solicitar revisión urgente",
            secondaryText: "Atención inmediata en Medellín"
        },

        problems: [
            {
                icon: "smell",
                title: "Olor a gas",
                description: "Olor persistente en cocina o zonas cerradas."
            },
            {
                icon: "stove",
                title: "Equipos defectuosos",
                description: "Estufas o calentadores que fallan."
            },
            {
                icon: "risk",
                title: "Riesgo de accidentes",
                description: "Posible peligro para personas y vivienda."
            }
        ],

        technology: {
            title: "Detección segura y precisa",
            description: "Métodos certificados para tu tranquilidad",
            items: [
                {
                    icon: "sensor",
                    title: "Sensores de gas",
                    description:
                        "Detectamos concentraciones peligrosas."
                },
                {
                    icon: "inspection",
                    title: "Revisión técnica",
                    description:
                        "Evaluamos conexiones y válvulas."
                }
            ]
        },

        locations: [
            { label: "Medellín" },
            { label: "Laureles" },
            { label: "El Poblado" },
            { label: "Sabaneta" }
        ],

        faq: [
            {
                question: "¿Qué hago si huelo gas?",
                answer:
                    "Cierra la válvula principal y contáctanos de inmediato."
            },
            {
                question: "¿Trabajan con gas natural?",
                answer:
                    "Sí, realizamos inspecciones en instalaciones residenciales."
            }
        ],

        otherServices: [
            {
                slug: "deteccion-de-fugas",
                title: "Detección de Fugas de Agua",
                icon: "water"
            },
            {
                slug: "destape-de-canerias",
                title: "Destape de Cañerías",
                icon: "pipe"
            }
        ]
    }
]

