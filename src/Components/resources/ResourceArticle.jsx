import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../portfolio/LanguageContext';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
    ArrowLeft,
    Clock,
    Calendar,
    User,
    Share2,
    Bookmark,
    CheckCircle2,
    Lightbulb,
    Target,
    AlertTriangle,
    Quote,
    Download,
    ChevronRight,
    Route,
    BarChart3,
    MapPin,
    Linkedin,
    PenTool,
    Headset,
    Search,
    LayoutPanelTop
} from 'lucide-react';
import { englishArticleContent } from './articleTranslations';
import { Link } from 'react-router-dom';

const heroVisuals = {
    'cjm-template': {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
        icon: Route,
        type: 'template',
        typeLabel: 'Template CJM'
    },
    'foda-kit': {
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
        icon: BarChart3,
        type: 'template',
        typeLabel: 'Kit FODA'
    },
    'content-calendar': {
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1600&q=80',
        icon: Calendar,
        type: 'template',
        typeLabel: 'Calendario de Contenidos'
    },
    'nps-template': {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
        icon: Target,
        type: 'template',
        typeLabel: 'Dashboard NPS'
    },
    'content-strategy': {
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
        icon: Target,
        type: 'template',
        typeLabel: 'Estrategia de Contenidos'
    },
    'cjm-guide': {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
        icon: Route,
        type: 'guide',
        typeLabel: 'Guía CJM'
    },
    'seo-local-guide': {
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1600&q=80',
        icon: MapPin,
        type: 'guide',
        typeLabel: 'Guía SEO Local'
    },
    'linkedin-strategy': {
        image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=1600&q=80',
        icon: Linkedin,
        type: 'guide',
        typeLabel: 'Estrategia LinkedIn'
    },
    'cx-metrics-guide': {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
        icon: BarChart3,
        type: 'guide',
        typeLabel: 'Métricas de CX'
    },
    'linkedin-post-anatomy': {
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&q=80',
        icon: PenTool,
        type: 'infographic',
        typeLabel: 'Infografía de Post'
    },
    'cx-optimization-process': {
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80',
        icon: Headset,
        type: 'infographic',
        typeLabel: 'Proceso CX'
    },
    'keyword-research': {
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80',
        icon: Search,
        type: 'infographic',
        typeLabel: 'Infografía Keywords'
    },
    'landing-page-elements': {
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80',
        icon: LayoutPanelTop,
        type: 'infographic',
        typeLabel: 'Infografía Landing'
    }
};

const typeBadgeStyles = {
    template: 'bg-emerald-500/90 text-white',
    guide: 'bg-blue-500/90 text-white',
    infographic: 'bg-pink-500/90 text-white'
};

// Contenido completo de cada artículo/recurso gratuito
const articleContent = {
    'cjm-template': {
        title: 'Template de Customer Journey Map',
        subtitle: 'Mapea cada punto de contacto con tu cliente desde el descubrimiento hasta la fidelización',
        readTime: '12 min',
        date: '2024',
        author: 'Equipo de Estrategia Digital',
        heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
        sections: [
            {
                type: 'intro',
                content: `El Customer Journey Map (CJM) es una de las herramientas más poderosas en el arsenal de cualquier estratega de marketing digital. No es simplemente un diagrama bonito; es una representación visual que te permite meterte en la mente de tu cliente y entender exactamente qué siente, piensa y hace en cada interacción con tu marca.

En esta guía completa, no solo te daremos acceso a nuestro template profesional, sino que te enseñaremos exactamente cómo usarlo para transformar la experiencia de tus clientes.`
            },
            {
                type: 'heading',
                content: '¿Qué es un Customer Journey Map y por qué lo necesitas?'
            },
            {
                type: 'paragraph',
                content: `Un Customer Journey Map es una representación visual del proceso completo que atraviesa un cliente desde el momento en que descubre tu marca hasta que se convierte en un cliente fiel (y potencialmente, en un embajador de tu marca).

Imagina que pudieras ver una película de la vida de tu cliente ideal: sus frustraciones, sus momentos de alegría, sus dudas y sus victorias. Eso es exactamente lo que un CJM bien construido te permite hacer.`
            },
            {
                type: 'stats',
                items: [
                    { value: '20%', label: 'Aumento promedio en conversiones' },
                    { value: '33%', label: 'Reducción en costos de adquisición' },
                    { value: '54%', label: 'Mejora en satisfacción del cliente' }
                ]
            },
            {
                type: 'heading',
                content: 'Las 6 etapas del Customer Journey'
            },
            {
                type: 'numbered-list',
                items: [
                    {
                        title: 'Awareness (Conciencia)',
                        content: 'El cliente descubre que tiene un problema o necesidad. Aquí es donde tu contenido educativo brilla: blogs, videos, posts en redes sociales.'
                    },
                    {
                        title: 'Consideration (Consideración)',
                        content: 'El cliente investiga activamente soluciones. Compara opciones, lee reseñas, pide recomendaciones. Tu trabajo es posicionarte como la mejor opción.'
                    },
                    {
                        title: 'Decision (Decisión)',
                        content: 'Momento crítico donde el cliente elige. Los testimonios, garantías y una propuesta de valor clara son fundamentales.'
                    },
                    {
                        title: 'Purchase (Compra)',
                        content: 'La transacción en sí. Debe ser fluida, sin fricciones. Cada paso extra que añadas aquí es una oportunidad para perder la venta.'
                    },
                    {
                        title: 'Retention (Retención)',
                        content: 'Post-venta. Onboarding, soporte, seguimiento. Aquí es donde conviertes compradores en clientes leales.'
                    },
                    {
                        title: 'Advocacy (Promoción)',
                        content: 'El cliente se convierte en embajador. Recomienda tu marca, deja reseñas positivas, comparte en redes sociales.'
                    }
                ]
            },
            {
                type: 'tip',
                content: 'No todas las empresas necesitan las 6 etapas. Un e-commerce de productos de bajo costo puede tener un journey más corto, mientras que un servicio B2B de alto ticket tendrá un journey mucho más largo y complejo.'
            },
            {
                type: 'heading',
                content: 'Cómo usar nuestro Template paso a paso'
            },
            {
                type: 'paragraph',
                content: `Nuestro template está diseñado en Excel/Google Sheets para máxima compatibilidad y facilidad de uso. Incluye:`
            },
            {
                type: 'checklist',
                items: [
                    'Matriz principal con las 6 etapas predefinidas',
                    'Columnas para touchpoints, emociones y acciones',
                    'Sección de "momentos de verdad" y puntos de dolor',
                    'Área de oportunidades de mejora',
                    'Dashboard visual automático',
                    'Guía de uso incluida en pestaña separada'
                ]
            },
            {
                type: 'heading',
                content: 'Errores comunes al crear un Customer Journey Map'
            },
            {
                type: 'warning',
                items: [
                    'Basarse en suposiciones en lugar de datos reales',
                    'Crear un journey demasiado genérico',
                    'Olvidar las emociones del cliente',
                    'No involucrar a todo el equipo en el proceso',
                    'Crear el mapa y nunca actualizarlo'
                ]
            },
            {
                type: 'quote',
                content: 'El mejor Customer Journey Map es aquel que se actualiza constantemente con datos reales de tus clientes.',
                author: 'Harvard Business Review'
            },
            {
                type: 'heading',
                content: 'Métricas clave para cada etapa del Journey'
            },
            {
                type: 'table',
                headers: ['Etapa', 'Métricas Clave', 'Herramientas'],
                rows: [
                    ['Awareness', 'Impresiones, Alcance, Brand mentions', 'Google Analytics, Social listening'],
                    ['Consideration', 'Tiempo en página, Páginas/sesión, CTR', 'Hotjar, Google Analytics'],
                    ['Decision', 'Tasa de conversión, Abandono de carrito', 'CRM, Analytics'],
                    ['Purchase', 'Ticket promedio, Tiempo de checkout', 'Plataforma e-commerce'],
                    ['Retention', 'NPS, Churn rate, Repeat purchase', 'Encuestas, CRM'],
                    ['Advocacy', 'Referidos, Reseñas, UGC', 'Programa de referidos']
                ]
            },
            {
                type: 'cta',
                title: '¿Listo para mapear el journey de tus clientes?',
                description: 'Descarga nuestro template gratuito y comienza a transformar la experiencia de tus clientes hoy mismo.',
                buttonText: 'Descargar Template Gratis'
            }
        ]
    },
    'foda-kit': {
        title: 'Kit completo de Análisis FODA',
        subtitle: 'Analiza Fortalezas, Oportunidades, Debilidades y Amenazas de tu negocio',
        readTime: '15 min',
        date: '2024',
        author: 'Equipo de Estrategia Digital',
        heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
        sections: [
            {
                type: 'intro',
                content: `El análisis FODA (también conocido como SWOT en inglés) es una de las herramientas estratégicas más utilizadas en el mundo empresarial. Sin embargo, la mayoría de las empresas lo hacen mal: crean una lista superficial de puntos sin profundizar en el análisis ni desarrollar un plan de acción.

En esta guía, te enseñaremos a realizar un análisis FODA que realmente impulse tu estrategia empresarial, no solo uno que termine archivado en un cajón.`
            },
            {
                type: 'heading',
                content: '¿Qué es el Análisis FODA?'
            },
            {
                type: 'paragraph',
                content: `FODA es un acrónimo que representa cuatro elementos de análisis estratégico:

**Fortalezas (F)**: Atributos internos positivos que te dan ventaja competitiva.
**Oportunidades (O)**: Factores externos que puedes aprovechar para crecer.
**Debilidades (D)**: Atributos internos que te ponen en desventaja.
**Amenazas (A)**: Factores externos que podrían dañar tu negocio.`
            },
            {
                type: 'stats',
                items: [
                    { value: '72%', label: 'De empresas exitosas usan FODA regularmente' },
                    { value: '3x', label: 'Más probabilidad de alcanzar objetivos' },
                    { value: '45%', label: 'Mejor anticipación de riesgos' }
                ]
            },
            {
                type: 'heading',
                content: 'La diferencia entre análisis interno y externo'
            },
            {
                type: 'paragraph',
                content: `Uno de los errores más comunes es confundir factores internos con externos. Aquí está la regla de oro:`
            },
            {
                type: 'checklist',
                items: [
                    'Interno (F y D): Lo que TÚ controlas - equipo, recursos, procesos, tecnología',
                    'Externo (O y A): Lo que NO controlas - mercado, competencia, regulaciones, economía'
                ]
            },
            {
                type: 'heading',
                content: 'Cómo identificar Fortalezas reales'
            },
            {
                type: 'paragraph',
                content: `Las fortalezas no son solo "lo que haces bien". Son ventajas competitivas sostenibles. Pregúntate:`
            },
            {
                type: 'numbered-list',
                items: [
                    {
                        title: '¿Es difícil de copiar?',
                        content: 'Si tu competencia puede replicarlo fácilmente, no es una fortaleza real.'
                    },
                    {
                        title: '¿Genera valor para el cliente?',
                        content: 'Debe traducirse en beneficios tangibles para tu mercado objetivo.'
                    },
                    {
                        title: '¿Es sostenible en el tiempo?',
                        content: 'Las fortalezas temporales no construyen ventaja competitiva duradera.'
                    }
                ]
            },
            {
                type: 'tip',
                content: 'Realiza encuestas a tus clientes preguntando "¿Por qué nos eligieron?" Las respuestas revelan tus verdaderas fortalezas desde la perspectiva que importa.'
            },
            {
                type: 'heading',
                content: 'La Matriz de Cruce Estratégico (el secreto que pocos conocen)'
            },
            {
                type: 'paragraph',
                content: `El verdadero poder del FODA no está en la lista de puntos, sino en la matriz de cruce. Esta técnica combina elementos para generar estrategias específicas:`
            },
            {
                type: 'table',
                headers: ['Combinación', 'Estrategia', 'Ejemplo'],
                rows: [
                    ['F + O', 'Estrategias Ofensivas', 'Usar fortalezas para capitalizar oportunidades'],
                    ['F + A', 'Estrategias Defensivas', 'Usar fortalezas para minimizar amenazas'],
                    ['D + O', 'Estrategias de Reorientación', 'Superar debilidades aprovechando oportunidades'],
                    ['D + A', 'Estrategias de Supervivencia', 'Minimizar debilidades y evitar amenazas']
                ]
            },
            {
                type: 'warning',
                items: [
                    'Ser demasiado optimista con las fortalezas',
                    'Ignorar debilidades por incomodidad',
                    'Confundir deseos con oportunidades reales',
                    'No priorizar los elementos identificados',
                    'Hacer el análisis solo una vez al año'
                ]
            },
            {
                type: 'heading',
                content: 'Qué incluye nuestro Kit FODA'
            },
            {
                type: 'checklist',
                items: [
                    'Matriz FODA visual con formato profesional',
                    'Sistema de puntuación para priorizar elementos (1-5)',
                    'Matriz de cruce estratégico automatizada',
                    'Plantilla de plan de acción con responsables y fechas',
                    'Ejemplos completados por industria (retail, servicios, SaaS)',
                    'Guía de facilitación para sesiones grupales'
                ]
            },
            {
                type: 'quote',
                content: 'La estrategia sin táctica es el camino más lento hacia la victoria. La táctica sin estrategia es el ruido antes de la derrota.',
                author: 'Sun Tzu'
            },
            {
                type: 'cta',
                title: '¿Listo para analizar tu negocio estratégicamente?',
                description: 'Descarga nuestro kit completo de análisis FODA y desarrolla una estrategia basada en datos reales.',
                buttonText: 'Descargar Kit FODA Gratis'
            }
        ]
    },
    'cjm-guide': {
        title: 'Cómo crear un Customer Journey Map en 5 pasos',
        subtitle: 'Guía paso a paso para construir tu primer Customer Journey Map',
        readTime: '10 min',
        date: '2024',
        author: 'Equipo de Estrategia Digital',
        heroImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80',
        sections: [
            {
                type: 'intro',
                content: `Crear un Customer Journey Map puede parecer abrumador al principio, pero con el proceso correcto, cualquier empresa puede hacerlo. En esta guía práctica, te llevaremos paso a paso desde cero hasta tener un mapa completo y accionable.

Lo mejor: no necesitas ser un experto en UX ni tener herramientas costosas. Solo necesitas disposición para entender a tu cliente.`
            },
            {
                type: 'heading',
                content: 'Paso 1: Define tu objetivo y alcance'
            },
            {
                type: 'paragraph',
                content: `Antes de empezar a mapear, necesitas claridad sobre qué quieres lograr. Un CJM puede servir para múltiples propósitos:`
            },
            {
                type: 'checklist',
                items: [
                    'Identificar puntos de fricción en el proceso de compra',
                    'Mejorar la experiencia de onboarding',
                    'Reducir la tasa de abandono (churn)',
                    'Optimizar campañas de marketing',
                    'Alinear equipos internos alrededor del cliente'
                ]
            },
            {
                type: 'tip',
                content: 'Empieza con un alcance pequeño. Es mejor mapear perfectamente el journey de compra que hacer un mapa superficial de toda la experiencia.'
            },
            {
                type: 'heading',
                content: 'Paso 2: Investiga a tu cliente ideal'
            },
            {
                type: 'paragraph',
                content: `El peor error es crear un journey basado en suposiciones. Necesitas datos reales. Aquí están las mejores fuentes:`
            },
            {
                type: 'numbered-list',
                items: [
                    {
                        title: 'Entrevistas con clientes actuales',
                        content: 'Habla con 5-10 clientes. Pregunta sobre su proceso de decisión, frustraciones y momentos de satisfacción.'
                    },
                    {
                        title: 'Análisis de datos existentes',
                        content: 'Google Analytics, CRM, tickets de soporte. Los datos cuantitativos complementan las historias cualitativas.'
                    },
                    {
                        title: 'Observación directa',
                        content: 'Herramientas como Hotjar te permiten ver cómo los usuarios interactúan con tu sitio.'
                    },
                    {
                        title: 'Encuestas post-compra',
                        content: 'Pregunta "¿Qué casi te hace no comprar?" Las respuestas son oro puro.'
                    }
                ]
            },
            {
                type: 'heading',
                content: 'Paso 3: Mapea los touchpoints actuales'
            },
            {
                type: 'paragraph',
                content: `Un touchpoint es cualquier interacción entre tu cliente y tu marca. Pueden ser:`
            },
            {
                type: 'table',
                headers: ['Tipo', 'Ejemplos', 'Importancia'],
                rows: [
                    ['Digitales', 'Web, email, redes sociales, app', 'Alta - medibles y optimizables'],
                    ['Físicos', 'Tienda, eventos, packaging', 'Media - experienciales'],
                    ['Humanos', 'Ventas, soporte, éxito del cliente', 'Alta - alto impacto emocional'],
                    ['Indirectos', 'Reseñas, boca a boca, prensa', 'Variable - difíciles de controlar']
                ]
            },
            {
                type: 'heading',
                content: 'Paso 4: Identifica puntos de dolor y momentos de verdad'
            },
            {
                type: 'paragraph',
                content: `No todos los touchpoints son iguales. Algunos son críticos para la decisión del cliente:`
            },
            {
                type: 'warning',
                items: [
                    'Momento de primera impresión (tienes 7 segundos)',
                    'Momento de precio/valor (justifica tu costo)',
                    'Momento de fricción en checkout',
                    'Momento post-compra (confirma que tomó buena decisión)',
                    'Momento de problema/soporte (define la lealtad)'
                ]
            },
            {
                type: 'heading',
                content: 'Paso 5: Diseña el journey ideal y planifica mejoras'
            },
            {
                type: 'paragraph',
                content: `Ahora que tienes el mapa actual, es hora de diseñar el futuro. Para cada punto de dolor identificado:`
            },
            {
                type: 'checklist',
                items: [
                    'Define el estado ideal (¿cómo debería ser la experiencia?)',
                    'Identifica el gap entre actual e ideal',
                    'Prioriza por impacto vs. esfuerzo',
                    'Asigna responsables y fechas',
                    'Define métricas de éxito'
                ]
            },
            {
                type: 'quote',
                content: 'Los clientes no esperan que seas perfecto. Esperan que arregles las cosas cuando salen mal.',
                author: 'Donald Porter, British Airways'
            },
            {
                type: 'cta',
                title: '¿Listo para crear tu primer Customer Journey Map?',
                description: 'Usa nuestra guía junto con el template para resultados profesionales.',
                buttonText: 'Ver Template de CJM'
            }
        ]
    },
    'seo-local-guide': {
        title: 'Guía de SEO local para negocios de servicios',
        subtitle: 'Posiciona tu negocio local en Google y atrae clientes de tu zona',
        readTime: '14 min',
        date: '2024',
        author: 'Equipo de Estrategia Digital',
        heroImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80',
        sections: [
            {
                type: 'intro',
                content: `Si tienes un negocio local de servicios (consultorio, taller, restaurante, agencia, etc.), el SEO local no es opcional: es supervivencia. El 46% de todas las búsquedas en Google tienen intención local, y el 88% de las búsquedas locales en móvil resultan en una visita o llamada dentro de 24 horas.

Esta guía te enseñará exactamente cómo aparecer en el "map pack" de Google y atraer clientes de tu zona geográfica.`
            },
            {
                type: 'stats',
                items: [
                    { value: '46%', label: 'Búsquedas con intención local' },
                    { value: '88%', label: 'Resultan en visita/llamada en 24h' },
                    { value: '76%', label: 'Visitan negocio el mismo día' }
                ]
            },
            {
                type: 'heading',
                content: 'Google My Business: Tu activo más importante'
            },
            {
                type: 'paragraph',
                content: `Google My Business (ahora Google Business Profile) es gratuito y es el factor #1 para aparecer en búsquedas locales. Aquí está el checklist completo de optimización:`
            },
            {
                type: 'checklist',
                items: [
                    'Reclama y verifica tu perfil (si aún no lo has hecho)',
                    'Completa TODOS los campos (Google premia perfiles completos)',
                    'Usa tu nombre real de negocio (no añadas keywords spam)',
                    'Selecciona categorías precisas (principal + secundarias)',
                    'Añade fotos de calidad (mínimo 10, actualiza mensualmente)',
                    'Configura horarios correctos (incluyendo festivos)',
                    'Activa mensajes y reservas si aplica',
                    'Publica posts semanalmente (eventos, ofertas, novedades)'
                ]
            },
            {
                type: 'heading',
                content: 'La estrategia de reseñas que funciona'
            },
            {
                type: 'paragraph',
                content: `Las reseñas son el segundo factor más importante para SEO local. Pero no se trata solo de cantidad:`
            },
            {
                type: 'numbered-list',
                items: [
                    {
                        title: 'Pide reseñas sistemáticamente',
                        content: 'Crea un proceso: después de cada servicio exitoso, envía un email o WhatsApp con el link directo a reseñas.'
                    },
                    {
                        title: 'Responde TODAS las reseñas',
                        content: 'Positivas y negativas. Google valora la interacción. Las respuestas a reseñas negativas muestran profesionalismo.'
                    },
                    {
                        title: 'Busca keywords naturales en reseñas',
                        content: 'Cuando pidas reseñas, sugiere que mencionen el servicio específico: "¿Podrías mencionar qué servicio te realizamos?"'
                    },
                    {
                        title: 'Diversifica las plataformas',
                        content: 'Google es prioritario, pero Facebook, Yelp y plataformas de industria también importan.'
                    }
                ]
            },
            {
                type: 'warning',
                items: [
                    'NUNCA compres reseñas falsas (Google las detecta y penaliza)',
                    'No ofrezcas descuentos a cambio de reseñas (viola políticas)',
                    'No ignores reseñas negativas (es peor que responder mal)'
                ]
            },
            {
                type: 'heading',
                content: 'Keywords locales: Cómo encontrarlas'
            },
            {
                type: 'paragraph',
                content: `Las keywords locales tienen un patrón predecible:`
            },
            {
                type: 'table',
                headers: ['Patrón', 'Ejemplo', 'Volumen típico'],
                rows: [
                    ['[Servicio] + [Ciudad]', 'dentista Madrid', 'Alto'],
                    ['[Servicio] + cerca de mí', 'dentista cerca de mí', 'Muy alto (móvil)'],
                    ['[Servicio] + [Barrio]', 'dentista Chamberí', 'Medio'],
                    ['mejor + [Servicio] + [Ciudad]', 'mejor dentista Madrid', 'Medio'],
                    ['[Servicio] + urgente + [Ciudad]', 'dentista urgente Madrid', 'Bajo pero muy convertidor']
                ]
            },
            {
                type: 'tip',
                content: 'Usa Google Suggest: escribe tu servicio + tu ciudad y mira las sugerencias automáticas. Esas son búsquedas reales de tu mercado.'
            },
            {
                type: 'heading',
                content: 'NAP Consistency: El error que arruina tu SEO local'
            },
            {
                type: 'paragraph',
                content: `NAP significa Name, Address, Phone. Google usa esta información para verificar que tu negocio es legítimo. Si tu NAP es inconsistente en diferentes sitios web, Google pierde confianza.`
            },
            {
                type: 'checklist',
                items: [
                    'Usa exactamente el mismo nombre en todas partes',
                    'Mismo formato de dirección (no "Calle" en uno y "C/" en otro)',
                    'Mismo número de teléfono (con o sin código de país, pero consistente)',
                    'Audita directorios locales, redes sociales, tu web',
                    'Usa herramientas como Moz Local para detectar inconsistencias'
                ]
            },
            {
                type: 'quote',
                content: 'El SEO local no es sobre hackear el algoritmo. Es sobre ser el negocio más relevante y confiable para tu comunidad.',
                author: 'Guía de SEO Local de Moz'
            },
            {
                type: 'cta',
                title: '¿Listo para dominar el SEO local?',
                description: 'Implementa estas estrategias y mide tus resultados. El SEO local es un maratón, no un sprint.',
                buttonText: 'Ver más recursos de SEO'
            }
        ]
    },
    'linkedin-strategy': {
        title: 'Estrategia de contenido en LinkedIn para profesionales',
        subtitle: 'Construye tu marca personal y genera oportunidades de negocio',
        readTime: '11 min',
        date: '2024',
        author: 'Equipo de Estrategia Digital',
        heroImage: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=1200&q=80',
        sections: [
            {
                type: 'intro',
                content: `LinkedIn ya no es solo un currículum online. Es la plataforma de contenido profesional más poderosa del mundo, con más de 900 millones de usuarios y el mayor alcance orgánico de cualquier red social.

Si eres profesional, emprendedor o líder de negocio, una estrategia de contenido en LinkedIn puede generar clientes, oportunidades laborales y posicionamiento como experto en tu industria. Esta guía te muestra exactamente cómo hacerlo.`
            },
            {
                type: 'stats',
                items: [
                    { value: '900M+', label: 'Usuarios activos en LinkedIn' },
                    { value: '9%', label: 'Alcance orgánico promedio (vs 2% en Facebook)' },
                    { value: '4x', label: 'Más conversiones B2B que otras redes' }
                ]
            },
            {
                type: 'heading',
                content: 'Cómo funciona el algoritmo de LinkedIn en 2024'
            },
            {
                type: 'paragraph',
                content: `Entender el algoritmo es crucial. LinkedIn evalúa tu contenido en tres fases:`
            },
            {
                type: 'numbered-list',
                items: [
                    {
                        title: 'Fase de prueba (primeros 60-90 minutos)',
                        content: 'Tu post se muestra a un pequeño grupo de conexiones. Si genera engagement rápido (likes, comentarios), pasa a la siguiente fase.'
                    },
                    {
                        title: 'Fase de distribución',
                        content: 'Si superas la prueba, LinkedIn expande el alcance a conexiones de segundo grado y seguidores.'
                    },
                    {
                        title: 'Fase viral (opcional)',
                        content: 'Los posts con engagement excepcional entran al feed de personas fuera de tu red.'
                    }
                ]
            },
            {
                type: 'tip',
                content: 'Los comentarios valen 4x más que los likes para el algoritmo. Incentiva la conversación con preguntas al final de tus posts.'
            },
            {
                type: 'heading',
                content: '5 formatos de post que generan engagement'
            },
            {
                type: 'checklist',
                items: [
                    'Historia personal con aprendizaje profesional (el más efectivo)',
                    'Lista de consejos prácticos (fácil de consumir)',
                    'Opinión contraria fundamentada (genera debate)',
                    'Caso de estudio con datos (demuestra expertise)',
                    'Celebración de logros de otros (networking genuino)'
                ]
            },
            {
                type: 'heading',
                content: 'La anatomía del post perfecto en LinkedIn'
            },
            {
                type: 'paragraph',
                content: `Un post efectivo tiene una estructura clara:`
            },
            {
                type: 'table',
                headers: ['Elemento', 'Función', 'Ejemplo'],
                rows: [
                    ['Hook (primeras 2 líneas)', 'Detener el scroll', '"Rechacé un trabajo que pagaba 3x más. Aquí está por qué:"'],
                    ['Cuerpo', 'Entregar valor', 'Desarrollo de la historia con contexto y detalles'],
                    ['Cierre con CTA', 'Generar acción', '"¿Te ha pasado algo similar? Cuéntame en comentarios"'],
                    ['Espaciado', 'Facilitar lectura', 'Una idea por línea, líneas cortas, espacios entre párrafos']
                ]
            },
            {
                type: 'warning',
                items: [
                    'Links en el post reducen alcance (mejor en comentarios)',
                    'Más de 5 hashtags penaliza el alcance',
                    'Editar el post en los primeros 10 minutos reinicia el algoritmo',
                    'Pedir likes directamente es penalizado',
                    'Contenido copiado o muy promocional tiene bajo alcance'
                ]
            },
            {
                type: 'heading',
                content: 'Frecuencia y horarios óptimos'
            },
            {
                type: 'paragraph',
                content: `La consistencia importa más que la frecuencia perfecta:`
            },
            {
                type: 'checklist',
                items: [
                    'Mínimo recomendado: 2-3 posts por semana',
                    'Mejores días: martes, miércoles y jueves',
                    'Mejores horarios: 7-8am y 5-6pm (hora local de tu audiencia)',
                    'Evitar: fines de semana (menor actividad profesional)',
                    'Comentar en posts de otros: diariamente (construye relaciones)'
                ]
            },
            {
                type: 'quote',
                content: 'Tu red es tu patrimonio neto. Invierte en construirla.',
                author: 'Porter Gale'
            },
            {
                type: 'cta',
                title: '¿Listo para construir tu marca personal en LinkedIn?',
                description: 'Empieza con un post esta semana. La consistencia vence a la perfección.',
                buttonText: 'Ver Calendario de Contenidos'
            }
        ]
    },
    'linkedin-post-anatomy': {
        title: 'Anatomía de un buen post en LinkedIn/Instagram',
        subtitle: 'Desglose visual de los elementos que hacen viral un post',
        readTime: '8 min',
        date: '2024',
        author: 'Equipo de Estrategia Digital',
        heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
        sections: [
            {
                type: 'intro',
                content: `¿Por qué algunos posts explotan en engagement mientras otros mueren en el olvido? No es suerte. Es estructura. Los posts virales siguen patrones predecibles que puedes replicar.

En esta guía desglosamos la anatomía completa de un post efectivo, tanto para LinkedIn como para Instagram, con ejemplos reales y plantillas que puedes usar hoy.`
            },
            {
                type: 'heading',
                content: 'El Hook: Las primeras 2 líneas que lo deciden todo'
            },
            {
                type: 'paragraph',
                content: `Tienes 1.3 segundos para capturar atención. El hook debe generar una de estas emociones:`
            },
            {
                type: 'checklist',
                items: [
                    'Curiosidad: "Descubrí algo que cambió mi negocio..."',
                    'Sorpresa: "Rechacé un cliente que me ofrecía $50,000..."',
                    'Identificación: "Si te cuesta delegar, lee esto..."',
                    'Controversia: "La mayoría de los consejos de productividad son basura..."',
                    'Promesa de valor: "3 errores que están matando tu engagement..."'
                ]
            },
            {
                type: 'warning',
                items: [
                    'Hooks clickbait sin sustancia (prometes y no cumples)',
                    'Empezar con "Hola, hoy quiero hablar de..." (aburrido)',
                    'Hooks muy largos (máximo 125 caracteres visibles)',
                    'Usar emojis excesivos al inicio'
                ]
            },
            {
                type: 'heading',
                content: 'El Cuerpo: Estructura que retiene'
            },
            {
                type: 'paragraph',
                content: `El cuerpo debe ser fácil de escanear. La gente no lee, escanea. Usa estos principios:`
            },
            {
                type: 'numbered-list',
                items: [
                    {
                        title: 'Una idea por línea',
                        content: 'Cada línea debe poder leerse de forma independiente.'
                    },
                    {
                        title: 'Párrafos de máximo 2-3 líneas',
                        content: 'Bloques de texto grandes ahuyentan lectores.'
                    },
                    {
                        title: 'Usa espacios en blanco',
                        content: 'El espacio entre líneas descansa la vista.'
                    },
                    {
                        title: 'Incluye un "momento de giro"',
                        content: 'Algo inesperado que mantenga el interés.'
                    }
                ]
            },
            {
                type: 'heading',
                content: 'El CTA: Cómo pedir interacción sin ser spammy'
            },
            {
                type: 'table',
                headers: ['Tipo de CTA', 'Efectividad', 'Ejemplo'],
                rows: [
                    ['Pregunta abierta', 'Muy alta', '"¿Cuál ha sido tu mayor aprendizaje este año?"'],
                    ['Invitación a debate', 'Alta', '"¿Estás de acuerdo o crees que me equivoco?"'],
                    ['Guardar para después', 'Media', '"Guarda este post si te fue útil"'],
                    ['Compartir', 'Media', '"Comparte con alguien que necesite leer esto"'],
                    ['Like directo', 'Baja (penalizado)', '"Dale like si..."']
                ]
            },
            {
                type: 'heading',
                content: 'Diferencias clave: LinkedIn vs Instagram'
            },
            {
                type: 'paragraph',
                content: `Aunque comparten principios, cada plataforma tiene sus particularidades:`
            },
            {
                type: 'table',
                headers: ['Aspecto', 'LinkedIn', 'Instagram'],
                rows: [
                    ['Longitud ideal', '1200-1500 caracteres', '150-300 caracteres (salvo carruseles)'],
                    ['Hashtags', '3-5 máximo', '5-15 relevantes'],
                    ['Mejor contenido', 'Historias profesionales, consejos', 'Visual, lifestyle, behind-the-scenes'],
                    ['Frecuencia', '3-5/semana', '1/día o más'],
                    ['Mejor horario', '7-8am, 5-6pm', '11am-1pm, 7-9pm']
                ]
            },
            {
                type: 'tip',
                content: 'En LinkedIn el texto es el rey. En Instagram el visual es el rey y el texto es contexto. Adapta tu contenido a cada plataforma.'
            },
            {
                type: 'quote',
                content: 'La gente no comparte contenido. Comparte emociones. Haz que tu audiencia sienta algo.',
                author: 'Jonah Berger, "Contagious"'
            },
            {
                type: 'cta',
                title: '¿Listo para crear posts que generen engagement?',
                description: 'Aplica esta estructura en tu próximo post y mide la diferencia.',
                buttonText: 'Ver Calendario de Contenidos'
            }
        ]
    },
    'cx-optimization-process': {
        title: 'Proceso de optimización de atención al cliente en 6 etapas',
        subtitle: 'El ciclo completo de mejora continua en servicio al cliente',
        readTime: '13 min',
        date: '2024',
        author: 'Equipo de Estrategia Digital',
        heroImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
        sections: [
            {
                type: 'intro',
                content: `La atención al cliente no es un departamento. Es una estrategia de negocio. Las empresas con excelente servicio al cliente crecen 4-8% más rápido que sus competidores y tienen clientes con un lifetime value 6-14 veces mayor.

Esta guía presenta un framework de 6 etapas para optimizar sistemáticamente tu servicio al cliente, desde el diagnóstico hasta la mejora continua.`
            },
            {
                type: 'stats',
                items: [
                    { value: '4-8%', label: 'Más crecimiento con buen servicio' },
                    { value: '6-14x', label: 'Mayor lifetime value' },
                    { value: '67%', label: 'Churn prevenible con mejor atención' }
                ]
            },
            {
                type: 'heading',
                content: 'Etapa 1: Diagnóstico de la situación actual'
            },
            {
                type: 'paragraph',
                content: `No puedes mejorar lo que no mides. El diagnóstico inicial debe incluir:`
            },
            {
                type: 'checklist',
                items: [
                    'Análisis de tickets/casos actuales (volumen, tipos, tiempos)',
                    'Encuestas de satisfacción existentes (CSAT, NPS)',
                    'Entrevistas con el equipo de soporte (insights cualitativos)',
                    'Mystery shopping (experimentar el servicio como cliente)',
                    'Análisis de reseñas y menciones en redes sociales'
                ]
            },
            {
                type: 'heading',
                content: 'Etapa 2: Definición de objetivos y KPIs'
            },
            {
                type: 'table',
                headers: ['Métrica', 'Qué mide', 'Benchmark'],
                rows: [
                    ['First Response Time', 'Velocidad de primera respuesta', '<1 hora (email), <1 min (chat)'],
                    ['Resolution Time', 'Tiempo total de resolución', '<24 horas'],
                    ['First Contact Resolution', '% resuelto en primer contacto', '>70%'],
                    ['CSAT', 'Satisfacción con interacción', '>85%'],
                    ['NPS', 'Lealtad del cliente', '>50']
                ]
            },
            {
                type: 'heading',
                content: 'Etapa 3: Diseño de procesos y protocolos'
            },
            {
                type: 'numbered-list',
                items: [
                    {
                        title: 'Mapea el flujo actual',
                        content: 'Documenta cada paso desde que llega un ticket hasta que se cierra.'
                    },
                    {
                        title: 'Identifica cuellos de botella',
                        content: '¿Dónde se acumulan tickets? ¿Qué pasos generan más demoras?'
                    },
                    {
                        title: 'Crea scripts y plantillas',
                        content: 'Respuestas predefinidas para casos comunes ahorran tiempo y garantizan consistencia.'
                    },
                    {
                        title: 'Define escalaciones',
                        content: 'Criterios claros de cuándo y cómo escalar un caso.'
                    }
                ]
            },
            {
                type: 'heading',
                content: 'Etapa 4: Implementación y capacitación'
            },
            {
                type: 'paragraph',
                content: `El mejor proceso falla sin un equipo capacitado. La implementación debe incluir:`
            },
            {
                type: 'checklist',
                items: [
                    'Capacitación en nuevos procesos y herramientas',
                    'Role-playing de escenarios difíciles',
                    'Documentación accesible (base de conocimiento interna)',
                    'Período de prueba con supervisión cercana',
                    'Feedback loop con el equipo'
                ]
            },
            {
                type: 'heading',
                content: 'Etapa 5: Medición y análisis'
            },
            {
                type: 'paragraph',
                content: `Después de implementar, mide obsesivamente:`
            },
            {
                type: 'tip',
                content: 'Crea un dashboard en tiempo real con tus KPIs principales. Cuando todo el equipo puede ver las métricas, la accountability aumenta naturalmente.'
            },
            {
                type: 'warning',
                items: [
                    'Medir solo volumen (cantidad no es calidad)',
                    'Ignorar métricas cualitativas',
                    'No segmentar por tipo de cliente o canal',
                    'Revisar métricas solo mensualmente (hazlo diario o semanal)'
                ]
            },
            {
                type: 'heading',
                content: 'Etapa 6: Mejora continua'
            },
            {
                type: 'paragraph',
                content: `El servicio al cliente nunca está "terminado". Establece un ciclo de mejora:`
            },
            {
                type: 'numbered-list',
                items: [
                    {
                        title: 'Reuniones semanales de equipo',
                        content: 'Revisar casos difíciles, compartir aprendizajes.'
                    },
                    {
                        title: 'Análisis mensual de tendencias',
                        content: '¿Qué tipos de tickets aumentan? ¿Qué productos generan más problemas?'
                    },
                    {
                        title: 'Feedback trimestral de clientes',
                        content: 'Encuestas profundas, entrevistas con clientes clave.'
                    },
                    {
                        title: 'Actualización semestral de procesos',
                        content: 'Revisar y mejorar scripts, flujos, herramientas.'
                    }
                ]
            },
            {
                type: 'quote',
                content: 'Tus clientes más insatisfechos son tu mayor fuente de aprendizaje.',
                author: 'Bill Gates'
            },
            {
                type: 'cta',
                title: '¿Listo para transformar tu servicio al cliente?',
                description: 'Empieza con el diagnóstico. Sin medición no hay mejora.',
                buttonText: 'Ver Template de NPS'
            }
        ]
    },
    'keyword-research': {
        title: 'Palabras clave: cómo encontrarlas y usarlas',
        subtitle: 'Guía completa de investigación de keywords para SEO',
        readTime: '12 min',
        date: '2024',
        author: 'Equipo de Estrategia Digital',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
        sections: [
            {
                type: 'intro',
                content: `Las palabras clave son el fundamento del SEO. Elegir las keywords correctas puede multiplicar tu tráfico orgánico; elegir las incorrectas puede hacerte invisible para tu audiencia ideal.

Esta guía te enseña el proceso completo de investigación de keywords: desde encontrar oportunidades hasta implementarlas estratégicamente en tu contenido.`
            },
            {
                type: 'heading',
                content: 'Tipos de palabras clave'
            },
            {
                type: 'table',
                headers: ['Tipo', 'Descripción', 'Ejemplo', 'Competencia'],
                rows: [
                    ['Head keywords', '1-2 palabras, muy genéricas', '"marketing digital"', 'Muy alta'],
                    ['Long-tail', '3+ palabras, específicas', '"agencia marketing digital B2B Madrid"', 'Baja-media'],
                    ['LSI', 'Semánticamente relacionadas', '"estrategia online", "publicidad web"', 'Variable'],
                    ['Transaccionales', 'Intención de compra', '"contratar agencia SEO"', 'Alta'],
                    ['Informacionales', 'Buscan aprender', '"qué es SEO"', 'Media']
                ]
            },
            {
                type: 'tip',
                content: 'Para negocios pequeños o nuevos, enfócate en long-tail keywords. Menos volumen pero más conversión y menos competencia.'
            },
            {
                type: 'heading',
                content: 'Herramientas de investigación de keywords'
            },
            {
                type: 'numbered-list',
                items: [
                    {
                        title: 'Google Keyword Planner (Gratis)',
                        content: 'Datos directos de Google. Requiere cuenta de Google Ads pero no necesitas gastar dinero.'
                    },
                    {
                        title: 'Google Suggest y Related Searches',
                        content: 'Escribe tu keyword y mira las sugerencias automáticas. Son búsquedas reales.'
                    },
                    {
                        title: 'Ubersuggest (Freemium)',
                        content: 'Buena herramienta de Neil Patel con versión gratuita limitada.'
                    },
                    {
                        title: 'Ahrefs/SEMrush (Pago)',
                        content: 'Las más completas para profesionales. Análisis de competencia incluido.'
                    },
                    {
                        title: 'Answer The Public (Freemium)',
                        content: 'Excelente para encontrar preguntas que hace tu audiencia.'
                    }
                ]
            },
            {
                type: 'heading',
                content: 'El proceso de investigación paso a paso'
            },
            {
                type: 'checklist',
                items: [
                    'Lista tus productos/servicios principales',
                    'Piensa como tu cliente (¿qué buscaría?)',
                    'Usa herramientas para expandir ideas',
                    'Analiza la competencia (¿para qué rankean?)',
                    'Evalúa volumen vs. dificultad',
                    'Agrupa keywords por intención',
                    'Prioriza por oportunidad de negocio'
                ]
            },
            {
                type: 'heading',
                content: 'Dónde colocar las keywords'
            },
            {
                type: 'table',
                headers: ['Ubicación', 'Importancia', 'Notas'],
                rows: [
                    ['Título (H1)', 'Crítica', 'Incluir keyword principal al inicio'],
                    ['URL', 'Alta', 'Corta, con keyword, sin stopwords'],
                    ['Meta description', 'Media (UX)', 'No afecta ranking pero sí CTR'],
                    ['Subtítulos (H2, H3)', 'Alta', 'Keywords secundarias y variaciones'],
                    ['Primer párrafo', 'Alta', 'Mencionar keyword en las primeras 100 palabras'],
                    ['Imágenes (alt text)', 'Media', 'Describir imagen incluyendo keyword si es natural'],
                    ['Contenido', 'Alta', 'Densidad natural, no forzar']
                ]
            },
            {
                type: 'warning',
                items: [
                    'Keyword stuffing (repetir en exceso)',
                    'Usar la misma keyword en todas las páginas (canibalización)',
                    'Ignorar la intención de búsqueda',
                    'No optimizar imágenes',
                    'Crear contenido solo para keywords sin valor real'
                ]
            },
            {
                type: 'heading',
                content: 'Intención de búsqueda: el factor que muchos ignoran'
            },
            {
                type: 'paragraph',
                content: `Google prioriza resultados que coinciden con la intención del usuario. Si alguien busca "mejores zapatillas running", quiere una lista comparativa, no la página de producto de una zapatilla específica.`
            },
            {
                type: 'checklist',
                items: [
                    'Informacional: Quiere aprender (artículos, guías)',
                    'Navegacional: Busca un sitio específico (marca, URL)',
                    'Comercial: Investiga antes de comprar (comparativas, reviews)',
                    'Transaccional: Listo para comprar (páginas de producto, precios)'
                ]
            },
            {
                type: 'quote',
                content: 'El mejor SEO es crear contenido tan bueno que la gente quiera enlazarlo.',
                author: 'Rand Fishkin, fundador de Moz'
            },
            {
                type: 'cta',
                title: '¿Listo para encontrar tus keywords ganadoras?',
                description: 'Empieza con las herramientas gratuitas y ve escalando según tus necesidades.',
                buttonText: 'Ver Guía de SEO Local'
            }
        ]
    },
    'landing-page-elements': {
        title: 'Elementos clave de una landing page que convierte',
        subtitle: 'Anatomía completa de una página de aterrizaje optimizada',
        readTime: '10 min',
        date: '2024',
        author: 'Equipo de Estrategia Digital',
        heroImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
        sections: [
            {
                type: 'intro',
                content: `Una landing page bien diseñada puede doblar o triplicar tu tasa de conversión. Pero la mayoría de las landing pages fallan porque ignoran principios básicos de persuasión y diseño centrado en conversión.

En esta guía desglosamos cada elemento de una landing page efectiva, desde el hero section hasta el footer, con ejemplos y mejores prácticas.`
            },
            {
                type: 'stats',
                items: [
                    { value: '2.35%', label: 'Tasa de conversión promedio' },
                    { value: '5.31%', label: 'Top 25% de landing pages' },
                    { value: '11.45%', label: 'Top 10% de landing pages' }
                ]
            },
            {
                type: 'heading',
                content: '1. Hero Section: Los primeros 5 segundos'
            },
            {
                type: 'paragraph',
                content: `El hero section es lo primero que ve el visitante. Debe responder tres preguntas instantáneamente:`
            },
            {
                type: 'checklist',
                items: [
                    '¿Qué es esto? (Propuesta de valor clara)',
                    '¿Es para mí? (Identificación con el problema/solución)',
                    '¿Qué debo hacer? (CTA visible)'
                ]
            },
            {
                type: 'tip',
                content: 'Usa la técnica del "test de los 5 segundos": muestra tu landing page a alguien por 5 segundos y pregúntale qué ofreces. Si no puede responder, tu hero necesita trabajo.'
            },
            {
                type: 'heading',
                content: '2. Propuesta de Valor: El mensaje que importa'
            },
            {
                type: 'paragraph',
                content: `Tu propuesta de valor debe ser:`
            },
            {
                type: 'numbered-list',
                items: [
                    {
                        title: 'Específica',
                        content: '"Aumenta tus ventas" es vago. "Incrementa conversiones 40% en 90 días" es específico.'
                    },
                    {
                        title: 'Diferenciadora',
                        content: '¿Por qué tú y no la competencia? Destaca tu ventaja única.'
                    },
                    {
                        title: 'Orientada al beneficio',
                        content: 'No qué haces, sino qué obtiene el cliente.'
                    }
                ]
            },
            {
                type: 'heading',
                content: '3. Social Proof: Confianza que convierte'
            },
            {
                type: 'table',
                headers: ['Tipo', 'Efectividad', 'Mejor uso'],
                rows: [
                    ['Testimonios con foto', 'Muy alta', 'B2C, servicios'],
                    ['Logos de clientes', 'Alta', 'B2B, enterprise'],
                    ['Casos de estudio', 'Alta', 'Servicios de alto ticket'],
                    ['Números/estadísticas', 'Media-alta', 'Cualquier industria'],
                    ['Reviews de terceros', 'Alta', 'E-commerce, apps'],
                    ['Menciones en prensa', 'Media', 'Startups, credibilidad']
                ]
            },
            {
                type: 'heading',
                content: '4. Beneficios vs Características'
            },
            {
                type: 'paragraph',
                content: `Un error común es listar características. Los clientes compran beneficios:`
            },
            {
                type: 'table',
                headers: ['Característica', 'Beneficio'],
                rows: [
                    ['Software en la nube', 'Accede desde cualquier lugar'],
                    ['Soporte 24/7', 'Nunca te quedarás atascado'],
                    ['IA integrada', 'Ahorra 10 horas semanales'],
                    ['Dashboard en tiempo real', 'Toma decisiones informadas al instante']
                ]
            },
            {
                type: 'heading',
                content: '5. El CTA perfecto'
            },
            {
                type: 'checklist',
                items: [
                    'Un solo CTA principal por página (no confundas)',
                    'Color contrastante que destaque',
                    'Texto orientado a acción ("Empezar gratis" > "Enviar")',
                    'Tamaño prominente pero no agresivo',
                    'Repetir CTA estratégicamente a lo largo de la página'
                ]
            },
            {
                type: 'warning',
                items: [
                    'Múltiples CTAs compitiendo',
                    'CTA genérico como "Enviar" o "Click aquí"',
                    'CTA que se pierde en el diseño',
                    'No repetir CTA en páginas largas'
                ]
            },
            {
                type: 'heading',
                content: '6. Elementos de confianza'
            },
            {
                type: 'checklist',
                items: [
                    'Garantías (devolución, satisfacción)',
                    'Certificaciones y sellos de seguridad',
                    'Política de privacidad visible',
                    'Información de contacto real',
                    'Fotos del equipo (humaniza la marca)'
                ]
            },
            {
                type: 'heading',
                content: '7. Optimización para móvil'
            },
            {
                type: 'paragraph',
                content: `Más del 60% del tráfico web es móvil. Tu landing page DEBE ser mobile-first:`
            },
            {
                type: 'checklist',
                items: [
                    'CTA tocable con el pulgar (mínimo 44px)',
                    'Formularios cortos (nombre y email máximo)',
                    'Imágenes optimizadas (velocidad)',
                    'Texto legible sin zoom',
                    'Click-to-call para número de teléfono'
                ]
            },
            {
                type: 'quote',
                content: 'Una landing page no es sobre ti. Es sobre el visitante y cómo puedes resolver su problema.',
                author: 'Peep Laja, CXL'
            },
            {
                type: 'cta',
                title: '¿Listo para crear landing pages que conviertan?',
                description: 'Aplica estos principios en tu próxima página y mide los resultados.',
                buttonText: 'Ver más recursos de marketing'
            }
        ]
    }
};

export default function ResourceArticle({ resourceId, onBack }) {
    const { t, language } = useLanguage();
    
    // Select content based on language
    const article = language === 'en' 
        ? englishArticleContent[resourceId] 
        : articleContent[resourceId];
    
    // Define which resources are templates (only templates should show CTA)
    const templateIds = ['cjm-template', 'foda-kit', 'social-media-calendar', 'nps-template', 'content-grid'];
    const isTemplate = templateIds.includes(resourceId);

    const visual = heroVisuals[resourceId] || {};
    const heroImage = visual.image || article?.heroImage;
    const HeroIcon = visual.icon;
    const resolvedType = visual.type || (isTemplate ? 'template' : 'guide');
    const badgeLabel = t.resources.article.typeLabels[resourceId] || t.resources.article.defaultLabels[resolvedType] || 'Resource';
    const badgeClass = typeBadgeStyles[resolvedType] || 'bg-white/15 text-white';
    
    if (!article) {
        return (
            <div className="text-center py-20">
                <p className="text-slate-400">{t.resources.article.notFound}</p>
                <Button onClick={onBack} className="mt-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t.resources.article.backToResources}
                </Button>
            </div>
        );
    }

    const renderSection = (section, index) => {
        switch (section.type) {
            case 'intro':
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-300 leading-relaxed whitespace-pre-line"
                    >
                        {section.content}
                    </motion.div>
                );
            
            case 'heading':
                return (
                    <motion.h2
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-white mt-12 mb-6"
                    >
                        {section.content}
                    </motion.h2>
                );
            
            case 'paragraph':
                return (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-300 leading-relaxed whitespace-pre-line"
                    >
                        {section.content}
                    </motion.p>
                );
            
            case 'stats':
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-4 my-8"
                    >
                        {section.items.map((stat, i) => (
                            <div key={i} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                );
            
            case 'checklist':
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3 my-6"
                    >
                        {section.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">{item}</span>
                            </div>
                        ))}
                    </motion.div>
                );
            
            case 'numbered-list':
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 my-8"
                    >
                        {section.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-base mt-0.5">
                                    {i + 1}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                    <p className="text-slate-400 text-sm">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                );
            
            case 'tip':
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="my-8 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl"
                    >
                        <div className="flex items-start gap-3">
                            <Lightbulb className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-emerald-300 mb-1">Tip profesional</p>
                                <p className="text-slate-300 text-sm">{section.content}</p>
                            </div>
                        </div>
                    </motion.div>
                );
            
            case 'warning':
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="my-8 p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl"
                    >
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-amber-300 mb-3">Errores a evitar</p>
                                <ul className="space-y-2">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                                            <span className="text-amber-400">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                );
            
            case 'quote':
                return (
                    <motion.blockquote
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="my-10 pl-6 border-l-4 border-violet-500"
                    >
                        <Quote className="w-8 h-8 text-violet-400/50 mb-2" />
                        <p className="text-xl text-white italic mb-3">{section.content}</p>
                        <cite className="text-slate-400 text-sm">— {section.author}</cite>
                    </motion.blockquote>
                );
            
            case 'table':
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="my-8 overflow-x-auto"
                    >
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-white/5">
                                    {section.headers.map((header, i) => (
                                        <th key={i} className="text-left p-4 text-white font-semibold border-b border-white/10">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {section.rows.map((row, i) => (
                                    <tr key={i} className="hover:bg-white/5">
                                        {row.map((cell, j) => (
                                            <td key={j} className="p-4 text-slate-300 border-b border-white/5">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                );
            
            case 'cta':
                // Only render CTA for template resources
                if (!isTemplate) {
                    return null;
                }
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="my-12 p-8 bg-gradient-to-br from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-3xl text-center"
                    >
                        <Target className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">{section.title}</h3>
                        <p className="text-slate-300 mb-6">{section.description}</p>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            {section.buttonText}
                        </Button>
                    </motion.div>
                );
            
            default:
                return null;
        }
    };

    return (
        <article className="max-w-4xl mx-auto">
            {/* Back button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <Button
                    variant="ghost"
                    onClick={onBack}
                    className="text-slate-400 hover:text-white hover:bg-white/10"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver a recursos
                </Button>
            </motion.div>

            {/* Hero image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-8"
            >
                <img
                    src={heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                {(HeroIcon || badgeLabel) && (
                    <div className={`absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-md border border-white/20 ${badgeClass}`}>
                        {HeroIcon && <HeroIcon className="w-4 h-4" />}
                        <span className="text-sm font-semibold">{badgeLabel}</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            </motion.div>

            {/* Article header */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-10"
            >
                <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/30 mb-4">
                    Recurso Gratuito
                </Badge>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {article.title}
                </h1>
                
                <p className="text-xl text-slate-400 mb-6">
                    {article.subtitle}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} de lectura</span>
                    </div>
                </div>

                {/* Share buttons */}
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                    <span className="text-sm text-slate-500">Compartir:</span>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-white/10">
                        <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-white/10">
                        <Bookmark className="w-4 h-4" />
                    </Button>
                </div>
            </motion.header>

            {/* Article content */}
            <div className="prose prose-invert prose-lg max-w-none">
                {article.sections.map((section, index) => renderSection(section, index))}
            </div>

            {/* Related resources */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 pt-10 border-t border-white/10"
            >
                <h3 className="text-xl font-bold text-white mb-6">Recursos relacionados</h3>
                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        onClick={onBack}
                        className="border-white/20 text-white hover:bg-white/10"
                    >
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Ver todos los recursos
                    </Button>
                </div>
            </motion.div>
        </article>
    );
}