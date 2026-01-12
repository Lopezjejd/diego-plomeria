import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/app/data/services";
import { siteSettings } from "@/app/data/siteSettings";
import ServiceHero from "@/app/components/service/ServiceHero";
import ProblemList from "@/app/components/service/ProblemList";
import TechnologySection from "@/app/components/service/TechnologySection";
import LocationsSection from "@/app/components/service/LocationsSection";
import ServiceFAQ from "@/app/components/service/ServiceFAQ";
import OtherServices from "@/app/components/service/OtherServices";
import WhatsAppButton from "@/app/components/service/WhatsAppButton";
import { ServiceJsonLd, FaqJsonLd } from "@/app/components/seo/JsonLd";

export const revalidate = 3600; // Refrescar cada hora

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) return {};

    const canonicalUrl = `https://irgasa.com/servicios/${service.slug}`;

    return {
        title: service.seo.title,
        description: service.seo.description,
        keywords: service.seo.keywords,

        openGraph: {
            title: service.seo.title,
            description: service.seo.description,
            url: canonicalUrl,
            siteName: "IRGASA",
            locale: "es_CO",
            type: "website",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: `${service.header.title} - IRGASA Medellín`,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: service.seo.title,
            description: service.seo.description,
            images: ["/og-image.png"],
        },

        alternates: {
            canonical: canonicalUrl,
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="grow">
            {/* JSON-LD Structured Data */}
            <ServiceJsonLd
                serviceName={service.header.title}
                serviceDescription={service.seo.description}
                serviceSlug={service.slug}
            />
            <FaqJsonLd faqs={service.faq} />

            {/* HERO */}
            <ServiceHero
                title={service.header.title}
                subtitle={service.header.subtitle}
                badge={service.header.badge}
                primaryCTA={service.cta.primaryText}
                secondaryCTA={service.cta.secondaryText}
                serviceName={service.header.title}
                backgroundImage={service.slug}
            />

            {/* PROBLEMS LIST */}
            <ProblemList problems={service.problems} />

            {/* TECHNOLOGY SECTION */}
            <TechnologySection
                title={service.technology.title}
                description={service.technology.description}
                items={service.technology.items}
            />

            {/* LOCATIONS / COVERAGE */}
            <LocationsSection locations={service.locations} />

            {/* FAQ */}
            <ServiceFAQ faqs={service.faq} />

            {/* RELATED SERVICES */}
            <OtherServices services={service.otherServices} />

            {/* FLOATING CTA */}
            <WhatsAppButton serviceName={service.header.title} />

            {/* FINAL CTA */}
            <section className="py-24 bg-blue-base text-white-light text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-black/10 to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                        ¿Necesitas ayuda inmediata?
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 text-white-base/90 max-w-2xl mx-auto font-medium">
                        Atendemos a domicilio las 24 horas del día en todo Medellín y el Valle de Aburrá.
                    </p>
                    <Link
                        href={`https://wa.me/${siteSettings.company.whatsapp}?text=${encodeURIComponent(`Hola, me gustaría solicitar el servicio de ${service.header.title} a domicilio.`)}`}
                        target="_blank"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-base rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)] active:scale-95"
                    >
                        Solicitar Servicio por WhatsApp
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
