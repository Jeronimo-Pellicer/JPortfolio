import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, openGraphType = 'website' }) {
    const siteName = 'JP Studio';
    const finalTitle = title || 'JP | Digital Growth Studio';
    const finalDescription = description || 'JP Digital Growth Studio: diseño UX basado en datos, marketing digital y herramientas gratuitas para marketers y estudiantes.';
    const finalUrl = url ? `https://jpstudio.app${url}` : 'https://jpstudio.app';
    const image = '/og-image.jpg'; // Always from public/og-image.jpg

    return (
        <Helmet>
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="es_AR" />
            <meta property="og:type" content={openGraphType} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={finalTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}
