import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/app/data/services";
import ServiceHero from "@/app/components/service/ServiceHero";
import ProblemList from "@/app/components/service/ProblemList";
import TechnologySection from "@/app/components/service/TechnologySection";
import LocationsSection from "@/app/components/service/LocationsSection";
import ServiceFAQ from "@/app/components/service/ServiceFAQ";
import OtherServices from "@/app/components/service/OtherServices";
import WhatsAppButton from "@/app/components/service/WhatsAppButton";

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

    return {
        title: service.seo.title,
        description: service.seo.description,
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
            {/* HERO */}
            <ServiceHero
                title={service.header.title}
                subtitle={service.header.subtitle}
                badge={service.header.badge}
                primaryCTA={service.cta.primaryText}
                secondaryCTA={service.cta.secondaryText}
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

            {/* FINAL CTA (Optional, can reuse Site-wide CTA if exists) */}
            <section className="py-20 bg-blue-base text-white-light text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        ¿Necesitas ayuda inmediata?
                    </h2>
                    <p className="text-xl mb-10 text-white-base/90">
                        Atendemos emergencias las 24 horas del día.
                    </p>
                    <button className="px-10 py-5 bg-white text-blue-base rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
                        Escríbenos por WhatsApp
                    </button>
                </div>
            </section>
        </main>
    );
}
