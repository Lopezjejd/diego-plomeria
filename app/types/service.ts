export interface ServiceConfig {
  slug: string
  imageUrl: string

  seo: {
    title: string
    description: string
    keywords?: string[]
  }

  header: {
    title: string
    subtitle: string
    badge?: string
  }

  cta: {
    primaryText: string
    secondaryText?: string
  }

  problems: {
    icon: string
    title: string
    description: string
  }[]

  technology: {
    title: string
    description: string
    items: {
      icon: string
      title: string
      description: string
    }[]
  }

  locations: {
    label: string
  }[]

  faq: {
    question: string
    answer: string
  }[]

  otherServices: {
    slug: string
    title: string
    icon: string
  }[]
}
