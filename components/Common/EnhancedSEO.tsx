
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'business.business';
  schema?: object;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonicalUrl,
  keywords,
  image = 'https://www.erghoprev.com.br/logo-coreta.png',
  type = 'website',
  schema
}) => {
  const siteName = 'ErghoPrev - Ergonomia e Saúde Ocupacional';

  return (
    <Helmet>
      {/* Tags Padrão */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="ErghoPrev" />

      {/* Resource Hints para Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema || {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ErghoPrev",
          "image": image,
          "telephone": "5541997801951",
          "email": "contato@erghoprev.com.br",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "addressCountry": "BR"
          },
          "url": "https://www.erghoprev.com.br",
          "priceRange": "$$",
          "description": description
        })}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
