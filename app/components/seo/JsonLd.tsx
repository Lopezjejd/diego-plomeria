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
        "@type": "PlumbingService", // More specific than LocalBusiness
        "@id": "https://irgasa.com/#organization",
        "name": "IRGASA",
        "url": "https://irgasa.com",
        "logo": "https://irgasa.com/icon.svg",
        "image": "https://irgasa.com/icon.svg",
        "description": siteSettings.company.description,
        "telephone": `+57${siteSettings.company.phone}`,
        "email": siteSettings.company.email,
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Medellín",
            "addressRegion": "Antioquia",
            "addressCountry": "CO"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Medellín y Área Metropolitana, Antioquia, Colombia"
        },
        "serviceArea": [
            { "@type": "Place", "name": "Medellín" },
            { "@type": "Place", "name": "Envigado" },
            { "@type": "Place", "name": "Bello" },
            { "@type": "Place", "name": "Itagüí" },
            { "@type": "Place", "name": "Sabaneta" },
            { "@type": "Place", "name": "La Estrella" },
            { "@type": "Place", "name": "Caldas" }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.2476,
            "longitude": -75.5658
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            siteSettings.social.instagram,
            siteSettings.social.facebook,
            siteSettings.social.tiktok
        ].filter(Boolean),
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Plomería a Domicilio",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Instalación de Redes de Gas a Domicilio",
                        "description": "Instalación profesional y certificada de redes de gas en Medellín."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Plomería y Alcantarillado",
                        "description": "Instalación y reparación de tuberías y sistemas sanitarios."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mantenimiento y Reparación de Fugas 24/7",
                        "description": "Atención de emergencias de plomería en todo el Valle de Aburrá."
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
        "areaServed": [
            { "@type": "City", "name": "Medellín" },
            { "@type": "City", "name": "Envigado" },
            { "@type": "City", "name": "Itagüí" },
            { "@type": "City", "name": "Bello" },
            { "@type": "City", "name": "Sabaneta" }
        ],
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

// Breadcrumb Schema
export function BreadcrumbJsonLd({ items }: { items: { name: string, item: string }[] }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item
        }))
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
