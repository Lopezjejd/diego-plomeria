import { MetadataRoute } from 'next'
import { services } from '@/app/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://irgasa.com'

    // Página principal
    const mainPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ]

    // Páginas de servicios
    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/servicios/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
    }))

    return [...mainPages, ...servicePages]
}
