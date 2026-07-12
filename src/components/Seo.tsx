import { Helmet } from 'react-helmet-async'

type SeoProps = {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}

const SITE = 'https://gabrielalima.me'

export function Seo({ title, description, path, image, type = 'website' }: SeoProps) {
  const url = `${SITE}${path}`
  const ogImage = image ? `${SITE}${image}` : `${SITE}/images/shared/portrait.png`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
