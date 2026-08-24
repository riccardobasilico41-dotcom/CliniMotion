import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { getAllViaggi } from '@/lib/viaggi'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/viaggi', priority: 0.9, changeFrequency: 'weekly' as const },
    ...getAllViaggi().map((v) => ({
      path: `/viaggi/${v.slug}`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    })),
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
