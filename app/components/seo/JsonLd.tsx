import { siteSettings } from "@/app/data/siteSettings"

interface ServiceJsonLdProps {
    serviceName: string
    serviceDescription: string
    serviceSlug: string
}

// Schema.org JSON-LD for Service Area Business (no physical address)
export function LocalBusinessJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://irgasa.com/#organization",
        "name": "IRGASA",
        "url": "https://irgasa.com",
        "logo": "https://irgasa.com/icon.svg",
        "image": "https://irgasa.com/icon.svg",
        "description": siteSettings.company.description,
        "telephone": `+57${siteSettings.company.phone}`,
        "email": siteSettings.company.email,
        "priceRange": "$$",
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Medellín y Área Metropolitana, Antioquia, Colombia"
        },
        "serviceArea": [
            {
                "@type": "Place",
                "name": "Medellín"
            },
            {
                "@type": "Place",
                "name": "Envigado"
            },
            {
                "@type": "Place",
                "name": "Bello"
            },
            {
                "@type": "Place",
                "name": "Itagüí"
            },
            {
                "@type": "Place",
                "name": "Sabaneta"
            }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.2476,
            "longitude": -75.5658
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            siteSettings.social.instagram,
            siteSettings.social.facebook
        ].filter(Boolean),
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Plomería a Domicilio",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Instalación de Redes de Gas"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Instalación de Acueducto y Alcantarillado"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Diseño de Redes"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Reparación de Fugas y Mantenimiento"
                    }
                }
            ]
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

// Schema.org JSON-LD for individual Service pages
export function ServiceJsonLd({ serviceName, serviceDescription, serviceSlug }: ServiceJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription,
        "url": `https://irgasa.com/servicios/${serviceSlug}`,
        "provider": {
            "@type": "LocalBusiness",
            "@id": "https://irgasa.com/#organization",
            "name": "IRGASA"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Medellín y Área Metropolitana"
        },
        "serviceType": "Plumbing Service",
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceType": "A domicilio",
            "serviceLocation": {
                "@type": "Place",
                "name": "Medellín y Área Metropolitana"
            }
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

// Schema.org JSON-LD for FAQ sections
interface FaqItem {
    question: string
    answer: string
}

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
