import { siteSettings } from "@/app/data/siteSettings";
import { Metadata } from "next";
import Hero from "./components/sections/Hero";
import ServiceCarousel from "./components/sections/ServiceCarousel";
import Features from "./components/sections/Features";
import Zonas from "./components/sections/Zonas";
import { BreadcrumbJsonLd } from "./components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Plomeros Expertos en Medellín | Servicios a Domicilio 24 Horas",
  description: "Servicio de plomería profesional a domicilio en Medellín. Instalación de redes de gas, detección de fugas y mantenimiento hidráulico. ¡Llegan en minutos!",
  keywords: [
    "plomero medellín",
    "plomería 24 horas medellín",
    "plomeros a domicilio medellín",
    "destape de cañerías medellín",
    "reparación de fugas de agua medellín",
    "instalación de redes de gas medellín",
    "EPM plomeros",
    "IRGASA"
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", item: "https://irgasa.com" }
        ]}
      />
      <main className="grow">
        <Hero />

        <Features />
        <Zonas />
        <ServiceCarousel />
      </main>
    </div>
  );
}

