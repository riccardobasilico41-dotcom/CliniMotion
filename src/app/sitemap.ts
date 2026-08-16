import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/la-casa', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/pinzolo-campiglio-estate', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/pinzolo-campiglio-inverno', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/dove-siamo', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/prenota', priority: 0.9, changeFrequency: 'weekly' as const },
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
