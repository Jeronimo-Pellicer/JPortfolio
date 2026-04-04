// Rich project detail content mapped by project slug
// Each project can have sections with text + images
// Bilingual support: fields use { es: '...', en: '...' } objects

// Recursively resolve bilingual { es, en } objects to the active language
function resolveLanguage(obj, lang) {
    if (obj === null || obj === undefined) return obj;
    if (typeof obj !== 'object') return obj;
    // If it's a bilingual object { es, en }, resolve it
    if (obj.es !== undefined && obj.en !== undefined && Object.keys(obj).length === 2) {
        return obj[lang] || obj.es;
    }
    // If it's an array, resolve each element
    if (Array.isArray(obj)) {
        return obj.map(item => resolveLanguage(item, lang));
    }
    // Otherwise, resolve each property
    const resolved = {};
    for (const key of Object.keys(obj)) {
        resolved[key] = resolveLanguage(obj[key], lang);
    }
    return resolved;
}

const projectDetails = {
    'topper-plan-mobile-first': {
        slug: 'topper-plan-mobile-first',
        heroImage: '/topper/topper-0001.webp',
        role: { es: 'Gerente de Marketing Digital', en: 'Digital Marketing Manager' },
        client: 'Topper Argentina',
        date: '2024 – 2025',
        context: { es: 'Universidad Escuela Argentina de Negocios (UEAN) — Marketing Digital II', en: 'Universidad Escuela Argentina de Negocios (UEAN) — Digital Marketing II' },
        overview: { es: `Como equipo de Marketing en este proyecto para Topper, mi labor se centró en desarrollar un Plan de Marketing Digital integral diseñado para potenciar la marca y cumplir con sus objetivos estratégicos en el mercado argentino. Mi enfoque abarcó desde un análisis profundo del contexto actual hasta la planificación de campañas específicas para productos clave.`, en: `As part of the Marketing team on this Topper project, my work focused on developing a comprehensive Digital Marketing Plan designed to strengthen the brand and meet its strategic objectives in the Argentine market. My approach spanned from an in-depth analysis of the current context to planning specific campaigns for key products.` },
        sections: [
            {
                id: 'intro',
                title: { es: 'Introducción y Contexto', en: 'Introduction and Context' },
                subtitle: { es: 'Presentación del caso y antecedentes de la empresa', en: 'Case presentation and company background' },
                content: { es: `Como Gerentes de Marketing de la empresa y en representación del departamento, expondremos el desarrollo de un Plan de Marketing Digital integral para la empresa a fin de lograr cumplir con los objetivos estratégicos de la empresa y potenciar la marca.

Topper es una marca deportiva con presencia en Argentina, Uruguay, Brasil, Paraguay, Bolivia y Chile. Su propósito es democratizar el deporte en Latinoamérica y en el mundo, uniendo moda y deporte generando productos accesibles y de calidad.`, en: `As Marketing Managers of the company and on behalf of the department, we will present the development of a comprehensive Digital Marketing Plan for the company in order to achieve the company's strategic objectives and strengthen the brand.

Topper is a sports brand with presence in Argentina, Uruguay, Brazil, Paraguay, Bolivia and Chile. Its purpose is to democratize sports in Latin America and worldwide, merging fashion and sports to create accessible, quality products.` },
                images: [
                    { src: '/topper/topper-0003.webp', caption: { es: 'Presentación del caso: misión, visión y principios de Topper', en: 'Case presentation: Topper mission, vision and principles' } },
                    { src: '/topper/topper-0004.webp', caption: { es: 'Identidad visual de la marca: logos y paleta de colores', en: 'Brand visual identity: logos and color palette' } },
                ]
            },
            {
                id: 'diagnostico',
                title: { es: '1. Diagnóstico Estratégico y Análisis de Mercado', en: '1. Strategic Diagnosis and Market Analysis' },
                subtitle: { es: 'Investigación exhaustiva del entorno y la competencia', en: 'Comprehensive research of the environment and competition' },
                content: { es: `Realicé una investigación exhaustiva para comprender la posición de Topper frente a su entorno y competencia:

• Análisis del Macroentorno (PESTEL): Evalué cómo factores políticos, económicos y sociales impactan el negocio. Identifiqué desafíos como la inflación y la baja del poder adquisitivo, pero también oportunidades en las nuevas medidas para facilitar importaciones y el auge de la cultura fitness.

• Análisis del Microentorno: Utilicé la Matriz BCG para categorizar productos, identificando a las zapatillas Drill como "Estrella" y a las Block Revolver como "Interrogante", siendo estas últimas el foco de mi estrategia posterior.

• Benchmarking y Diferenciación: Comparé a Topper con competidores como Puma, Umbro y Athix, concluyendo que nuestra ventaja reside en la identidad local y precios accesibles, aunque con una identidad visual menos diferenciada que debemos fortalecer.`, en: `I conducted comprehensive research to understand Topper's position within its environment and competition:

• Macro-environment Analysis (PESTEL): I evaluated how political, economic and social factors impact the business. I identified challenges such as inflation and declining purchasing power, but also opportunities in new measures to facilitate imports and the rise of fitness culture.

• Micro-environment Analysis: I used the BCG Matrix to categorize products, identifying Drill sneakers as "Star" and Block Revolver as "Question Mark", with the latter becoming the focus of my subsequent strategy.

• Benchmarking and Differentiation: I compared Topper with competitors like Puma, Umbro and Athix, concluding that our advantage lies in local identity and accessible prices, although with a less differentiated visual identity that we need to strengthen.` },
                images: [
                    { src: '/topper/topper-0005.webp', caption: { es: 'Análisis PESTEL del macroentorno', en: 'PESTEL macro-environment analysis' } },
                    { src: '/topper/topper-0006.webp', caption: { es: 'Análisis del microentorno y Matriz BCG', en: 'Micro-environment analysis and BCG Matrix' } },
                    { src: '/topper/topper-0007.webp', caption: { es: 'Matriz BCG: productos Estrella e Interrogante', en: 'BCG Matrix: Star and Question Mark products' } },
                    { src: '/topper/topper-0008.webp', caption: { es: 'Benchmarking competitivo: Puma, Umbro, Athix', en: 'Competitive benchmarking: Puma, Umbro, Athix' } },
                ]
            },
            {
                id: 'buyer-persona',
                title: { es: '2. Definición del Público Objetivo (Buyer Persona)', en: '2. Target Audience Definition (Buyer Persona)' },
                subtitle: { es: 'Perfiles de clientes ideales y mapas de empatía', en: 'Ideal customer profiles and empathy maps' },
                content: { es: `Para personalizar las estrategias, definí dos perfiles de clientes ideales que representan nuestra base de consumidores:

• Raúl (30 años): Profesor de educación física interesado en comodidad y rendimiento a un precio justo.

• Sabrina (55 años): Ama de casa que prioriza la durabilidad y el costo para equipar a su familia.

Diseñé un Mapa de Empatía y un Customer Journey Map para entender sus dolores, como la inflación y los procesos de compra online complejos, y convertirlos en puntos de mejora.`, en: `To personalize strategies, I defined two ideal customer profiles that represent our consumer base:

• Raúl (30 years old): Physical education teacher interested in comfort and performance at a fair price.

• Sabrina (55 years old): Homemaker who prioritizes durability and cost to equip her family.

I designed an Empathy Map and a Customer Journey Map to understand their pain points, such as inflation and complex online purchasing processes, and turn them into improvement opportunities.` },
                images: [
                    { src: '/topper/topper-0009.webp', caption: { es: 'Buyer Persona: Raúl — perfil detallado', en: 'Buyer Persona: Raúl — detailed profile' } },
                    { src: '/topper/topper-0010.webp', caption: { es: 'Buyer Persona: Sabrina — perfil detallado', en: 'Buyer Persona: Sabrina — detailed profile' } },
                    { src: '/topper/topper-0011.webp', caption: { es: 'Mapa de Empatía del consumidor', en: 'Consumer Empathy Map' } },
                    { src: '/topper/topper-0012.webp', caption: { es: 'Customer Journey Map completo', en: 'Complete Customer Journey Map' } },
                ]
            },
            {
                id: 'objetivos',
                title: { es: '3. Planificación y Objetivos SMART', en: '3. Planning and SMART Objectives' },
                subtitle: { es: 'Estrategia concentrada en el producto "Interrogante"', en: 'Strategy focused on the "Question Mark" product' },
                content: { es: `Mi estrategia se concentró en el producto "Interrogante" (Zapatillas Block Revolver) para transformarlo en un éxito de mercado mediante tres objetivos específicos para el periodo de enero a junio de 2025:

• Reconocimiento: Lograr 2 millones de impresiones en Google Ads (un aumento del 50%).

• Ventas: Incrementar un 20% las ventas en e-commerce a través de Meta Ads.

• Retargeting: Reactivar al 30% de clientes previos para que el 10% realice una nueva compra.`, en: `My strategy focused on the "Question Mark" product (Block Revolver Sneakers) to transform it into a market success through three specific objectives for the January to June 2025 period:

• Awareness: Achieve 2 million impressions on Google Ads (a 50% increase).

• Sales: Increase e-commerce sales by 20% through Meta Ads.

• Retargeting: Reactivate 30% of previous customers so that 10% make a new purchase.` },
                images: [
                    { src: '/topper/topper-0013.webp', caption: { es: 'Objetivos SMART del Plan de Marketing', en: 'Marketing Plan SMART Objectives' } },
                    { src: '/topper/topper-0014.webp', caption: { es: 'Estrategia para el producto Block Revolver', en: 'Strategy for the Block Revolver product' } },
                ]
            },
            {
                id: 'campanas',
                title: { es: '4. Ejecución de Campañas Digitales', en: '4. Digital Campaign Execution' },
                subtitle: { es: 'Presupuesto de $20M distribuido estratégicamente', en: '$20M budget strategically distributed' },
                content: { es: `Asigné un presupuesto de 20 millones de pesos distribuidos estratégicamente:

• Google Ads (Reconocimiento): Creé anuncios segmentados para Raúl y Sabrina enfocados en los beneficios del nuevo modelo.

• Meta Ads (Ventas): Implementé campañas con imágenes y copys diferenciados según el buyer persona para maximizar la conversión en redes sociales.

• Retargeting (Display): Diseñé piezas para invitar a antiguos clientes a "repetir su experiencia" basándome en los datos del CRM.`, en: `I allocated a budget of 20 million pesos distributed strategically:

• Google Ads (Awareness): I created segmented ads for Raúl and Sabrina focused on the benefits of the new model.

• Meta Ads (Sales): I implemented campaigns with differentiated images and copy according to buyer persona to maximize social media conversion.

• Retargeting (Display): I designed creatives to invite former customers to "repeat their experience" based on CRM data.` },
                images: [
                    { src: '/topper/topper-0015.webp', caption: { es: 'Distribución del presupuesto de campaña', en: 'Campaign budget distribution' } },
                    { src: '/topper/topper-0016.webp', caption: { es: 'Configuración de Google Ads (Reconocimiento)', en: 'Google Ads setup (Awareness)' } },
                    { src: '/topper/topper-0017.webp', caption: { es: 'Campaña de Meta Ads: segmentación por Buyer Persona', en: 'Meta Ads campaign: Buyer Persona segmentation' } },
                    { src: '/topper/topper-0018.webp', caption: { es: 'Estrategia de Retargeting con Google Display', en: 'Retargeting strategy with Google Display' } },
                ]
            },
            {
                id: 'control',
                title: { es: '5. Control y Optimización', en: '5. Control and Optimization' },
                subtitle: { es: 'Tablero de control con métricas clave (KPIs)', en: 'Control dashboard with key metrics (KPIs)' },
                content: { es: `Para asegurar el éxito, establecí un tablero de control con métricas clave (KPIs) como el Alcance y CPM para reconocimiento, la Tasa de Conversión y CPA para ventas, y la Tasa de recuperación de carritos para las acciones de retargeting.

Mi intervención brindó a Topper un mapa claro para capitalizar sus fortalezas como marca líder accesible, mitigando debilidades tecnológicas y de identidad mediante una presencia digital robusta y orientada a resultados.`, en: `To ensure success, I established a control dashboard with key metrics (KPIs) such as Reach and CPM for awareness, Conversion Rate and CPA for sales, and Cart Recovery Rate for retargeting actions.

My intervention provided Topper with a clear roadmap to capitalize on its strengths as an accessible leading brand, mitigating technological and identity weaknesses through a robust, results-oriented digital presence.` },
                images: [
                    { src: '/topper/topper-0019.webp', caption: { es: 'Dashboard de KPIs y métricas de control', en: 'KPI dashboard and control metrics' } },
                    { src: '/topper/topper-0020.webp', caption: { es: 'Resumen ejecutivo de resultados esperados', en: 'Executive summary of expected results' } },
                ]
            },
            {
                id: 'ads-meta-premium',
                title: { es: 'Campaña Meta Ads: Conversión a Premium', en: 'Meta Ads Campaign: Premium Conversion' },
                subtitle: { es: 'Anuncios orientados a usuarios existentes', en: 'Ads targeting existing users' },
                content: { es: `Esta campaña se centró en usuarios existentes o interesados en escalar su experiencia en la aplicación.

• Ad Futurista: Orientado a la innovación y el control tecnológico de las finanzas. Copys como "¿Estás listo para tomar el control total de tus finanzas?" con CTA "Instalar".

• Ad Control Total: Mensajes directos sobre la gestión integral y el orden financiero. Gráficos comparativos para analizar progresos.

• Ad Desbloquear Beneficios: Resalta las funcionalidades exclusivas de la versión de pago con enlace profundo diferido directo a la URL de suscripción Premium.`, en: `This campaign focused on existing users or those interested in upgrading their app experience.

• Futuristic Ad: Focused on innovation and technological financial control. Copy like "Are you ready to take full control of your finances?" with CTA "Install".

• Total Control Ad: Direct messaging about comprehensive management and financial order. Comparative graphics to analyze progress.

• Unlock Benefits Ad: Highlights exclusive paid version features with deferred deep link directly to the Premium subscription URL.` },
                images: [
                    { src: '/topper/topper-0021.webp', caption: { es: 'Ad Futurista — Creativa y copys', en: 'Futuristic Ad — Creative and copy' } },
                    { src: '/topper/topper-0022.webp', caption: { es: 'Ad Control Total — Variantes de texto', en: 'Total Control Ad — Text variants' } },
                    { src: '/topper/topper-0023.webp', caption: { es: 'Ad Desbloquear Beneficios — Deep link premium', en: 'Unlock Benefits Ad — Premium deep link' } },
                ]
            },
            {
                id: 'ads-meta-captacion',
                title: { es: 'Campaña Meta Ads: Captación (Aumento de Descargas)', en: 'Meta Ads Campaign: Acquisition (Download Growth)' },
                subtitle: { es: 'Expansión de la base de usuarios con modelo Freemium', en: 'User base expansion with Freemium model' },
                content: { es: `Diseñada para atraer nuevos usuarios a la versión gratuita (Freemium) y expandir la base instalada.

• Ad Control Free: Propuesta de gestión de gastos sin costo inicial. "Tu aliado para organizar tus finanzas está aquí".

• Ad Entidades Free: Conectividad con bancos y billeteras virtuales. "Compatible con tus cuentas bancarias y billeteras virtuales".

• Ad Planificación Free: Herramientas de ahorro y visualización de datos. "¿Querés planificar mejor tu futuro financiero?"`, en: `Designed to attract new users to the free version (Freemium) and expand the installed base.

• Free Control Ad: Expense management proposal at no initial cost. "Your ally to organize your finances is here".

• Free Entities Ad: Connectivity with banks and virtual wallets. "Compatible with your bank accounts and virtual wallets".

• Free Planning Ad: Savings tools and data visualization. "Want to better plan your financial future?"` },
                images: [
                    { src: '/topper/topper-0024.webp', caption: { es: 'Ad Control Free — Versión gratuita', en: 'Free Control Ad — Free version' } },
                    { src: '/topper/topper-0025.webp', caption: { es: 'Ad Entidades Free — Conectividad bancaria', en: 'Free Entities Ad — Banking connectivity' } },
                    { src: '/topper/topper-0026.webp', caption: { es: 'Ad Planificación Free — Herramientas de ahorro', en: 'Free Planning Ad — Savings tools' } },
                ]
            },
            {
                id: 'ads-google',
                title: { es: 'Campaña Google Ads (Display)', en: 'Google Ads Campaign (Display)' },
                subtitle: { es: 'Alto impacto visual para maximizar conversiones', en: 'High visual impact to maximize conversions' },
                content: { es: `Configuré una campaña de alto impacto visual para maximizar las conversiones de membresía.

• Anuncio Adaptable de Display: Sistema que combina hasta 5 títulos y descripciones para optimizar el rendimiento automáticamente. Títulos como "Easy Track Premium", "Pasate al lado Premium" y "Siempre con vos, Easy Track".

• Seguimiento: URL final con parámetros UTM específicos (utm_campaign=premium_push) para rastrear cada clic y conversión proveniente de Google.

Cada anuncio fue diseñado para ser flexible, permitiendo que el algoritmo de Advantage+ en Meta y la Puja de Maximizar Conversiones en Google mostraran la combinación de imagen y texto con mayor probabilidad de éxito.`, en: `I configured a high visual impact campaign to maximize membership conversions.

• Responsive Display Ad: System that combines up to 5 headlines and descriptions to automatically optimize performance. Headlines like "Easy Track Premium", "Switch to Premium" and "Always with you, Easy Track".

• Tracking: Final URL with specific UTM parameters (utm_campaign=premium_push) to track every click and conversion from Google.

Each ad was designed to be flexible, allowing Meta's Advantage+ algorithm and Google's Maximize Conversions bidding to show the image and text combination with the highest probability of success.` },
                images: [
                    { src: '/topper/topper-0027.webp', caption: { es: 'Anuncio Adaptable de Display — Configuración', en: 'Responsive Display Ad — Setup' } },
                    { src: '/topper/topper-0028.webp', caption: { es: 'Títulos y descripciones optimizados', en: 'Optimized headlines and descriptions' } },
                    { src: '/topper/topper-0029.webp', caption: { es: 'Configuración de UTM y seguimiento', en: 'UTM setup and tracking' } },
                    { src: '/topper/topper-0030.webp', caption: { es: 'Resumen final de la estructura publicitaria', en: 'Final summary of ad structure' } },
                ]
            },
        ],
        stats: [
            { value: '$20M', label: { es: 'Presupuesto gestionado', en: 'Managed Budget' } },
            { value: '2M', label: { es: 'Impresiones objetivo', en: 'Target Impressions' } },
            { value: '+20%', label: { es: 'Crecimiento ventas e-commerce', en: 'E-commerce Sales Growth' } },
            { value: '30%', label: { es: 'Reactivación de clientes', en: 'Client Reactivation' } },
        ],
    },
    'stiberman-law-seo-sem': {
        slug: 'stiberman-law-seo-sem',
        heroImage: '/stiberman/Digital Marketing Brief (3)_page-0001.webp',
        role: { es: 'Consultor SEO/SEM', en: 'SEO/SEM Consultant' },
        client: 'Stiberman Law',
        date: '2025',
        context: { es: 'Estrategia integral SEO/SEM', en: 'Comprehensive SEO/SEM Strategy' },
        overview: { es: `Como profesional liderando este proyecto de transformación digital, realicé una inmersión profunda en la oferta de servicios y las iniciativas estratégicas diseñadas para Stiberman Law. Este proyecto abordó una brecha de visibilidad masiva mediante una estrategia multifacética de alto impacto.`, en: `As a professional leading this digital transformation project, I conducted a deep dive into the service offerings and strategic initiatives designed for Stiberman Law. This project addressed a massive visibility gap through a high-impact multifaceted strategy.` },
        sections: [
            {
                id: 'product-overview',
                title: { es: 'Resumen de Servicios: Enfoque Legal', en: 'Service Overview: Legal Focus' },
                subtitle: { es: 'Asistencia legal en bancarrotas y finanzas', en: 'Legal assistance in bankruptcy and finance' },
                content: { es: `Stiberman Law, reconocida como "La Firma de Abogados de Florida", provee asistencia legal crítica en reestructuración financiera. Mi investigación identificó las áreas principales:

• Bancarrota en Florida: Especialización en presentaciones de Capítulo 7, 11 y 13.

• Consolidación de Deudas: Soluciones para el manejo integral de deudas en Florida.`, en: `Stiberman Law, recognized as "The Florida Law Firm", provides critical legal assistance in financial restructuring. My research identified the main areas:

• Florida Bankruptcy: Specialization in Chapter 7, 11 and 13 filings.

• Debt Consolidation: Solutions for comprehensive debt management in Florida.` },
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0002.webp', caption: { es: 'Enfoque de servicios legales', en: 'Legal services focus' } },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0003.webp', caption: { es: 'Estrategia de resolución de deudas', en: 'Debt resolution strategy' } },
                ]
            },
            {
                id: 'digital-challenge',
                title: { es: 'El Desafío Digital', en: 'The Digital Challenge' },
                subtitle: { es: 'Brecha de visibilidad y posicionamiento', en: 'Visibility and positioning gap' },
                content: { es: `La investigación inicial reveló una carencia de visibilidad significativa: el dominio principal estaba ausente en las búsquedas de clientes para términos clave como "Bankruptcy Florida", representando literalmente un "404 Not Found" en términos de presencia en buscadores.`, en: `Initial research revealed a significant visibility gap: the main domain was absent from client searches for key terms like "Bankruptcy Florida", literally representing a "404 Not Found" in terms of search engine presence.` },
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0004.webp', caption: { es: 'Análisis de brecha de visibilidad', en: 'Visibility gap analysis' } },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0005.webp', caption: { es: 'Diagnóstico de presencia digital', en: 'Digital presence diagnosis' } },
                ]
            },
            {
                id: 'high-intent-advertising',
                title: { es: '1. Publicidad de Alta Intención (PPC y Geo-Targeting)', en: '1. High-Intent Advertising (PPC and Geo-Targeting)' },
                subtitle: { es: 'SEM para la adquisición rápida de leads valiosos', en: 'SEM for rapid acquisition of valuable leads' },
                content: { es: `Para solucionar el problema de visibilidad, desarrollé un plan multifacético:

• Pay-Per-Click (PPC): Implementé un modelo enfocado en palabras clave legales de alto valor.

• Geo-Targeting: Debido a la localización de los servicios, utilicé anuncios geo-orientados para asegurar visibilidad dentro de Florida, previniendo el desperdicio de clics.

• A/B Testing & Tracking: Uso de A/B testing para refinar el ad copy y mejorar el tracking de conversiones clave.`, en: `To solve the visibility problem, I developed a multifaceted plan:

• Pay-Per-Click (PPC): I implemented a model focused on high-value legal keywords.

• Geo-Targeting: Due to the localized nature of the services, I used geo-targeted ads to ensure visibility within Florida, preventing click waste.

• A/B Testing & Tracking: Used A/B testing to refine ad copy and improve key conversion tracking.` },
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0006.webp', caption: { es: 'Estrategia PPC y Pujas', en: 'PPC and Bidding Strategy' } },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0007.webp', caption: { es: 'Segmentación geográfica (Geo-targeting)', en: 'Geographic segmentation (Geo-targeting)' } },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0008.webp', caption: { es: 'A/B Testing y seguimiento', en: 'A/B Testing and tracking' } },
                ]
            },
            {
                id: 'seo-content',
                title: { es: '2. Optimización SEO y Estrategia de Contenidos', en: '2. SEO Optimization and Content Strategy' },
                subtitle: { es: 'Crecimiento orgánico y autoridad a largo plazo', en: 'Organic growth and long-term authority' },
                content: { es: `Mi misión fue lograr rankings orgánicos más altos para llegar a una audiencia amplia:

• SEO Técnico: Enfoque en velocidad del sitio, código limpio y mentalidad "mobile-first" adaptada al nuevo algoritmo de Google.

• SEO Off-Site: Construcción de autoridad a través de backlinks de calidad de la industria legal.

• Marketing de Contenidos: Actualizaciones regulares mediante un blog y contenidos de video para humanizar la marca y asentar su expertise.`, en: `My mission was to achieve higher organic rankings to reach a broader audience:

• Technical SEO: Focus on site speed, clean code and "mobile-first" mindset adapted to Google's new algorithm.

• Off-Site SEO: Authority building through quality backlinks from the legal industry.

• Content Marketing: Regular updates through a blog and video content to humanize the brand and establish expertise.` },
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0009.webp', caption: { es: 'Estrategia Mobile-First y SEO Técnico', en: 'Mobile-First Strategy and Technical SEO' } },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0010.webp', caption: { es: 'Construcción de contenido orgánico', en: 'Organic content building' } },
                ]
            },
            {
                id: 'conversion-automation',
                title: { es: '3. Optimización de Conversión y Automatización', en: '3. Conversion Optimization and Automation' },
                subtitle: { es: 'Retargeting y acompañamiento del usuario', en: 'Retargeting and user engagement' },
                content: { es: `• Retargeting Ads: Despliegue de campañas para reconectar con usuarios pre-visitantes mediante mensajes altamente personalizados.

• Optimización Móvil: Basándome en el uso del 95% de tráfico en smartphones, configuré botones "click-to-call" inmediatos y optimización responsiva.

• Integración de Chatbot con IA: Setup de asistentes virtuales 24/7 capacitados para responder inquietudes instantáneas, elevando la satisfacción exponencialmente.`, en: `• Retargeting Ads: Deployment of campaigns to reconnect with pre-visiting users through highly personalized messages.

• Mobile Optimization: Based on 95% of traffic coming from smartphones, I configured immediate "click-to-call" buttons and responsive optimization.

• AI Chatbot Integration: Setup of 24/7 virtual assistants trained to respond to instant inquiries, exponentially increasing satisfaction.` },
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0011.webp', caption: { es: 'Secuencias de Retargeting', en: 'Retargeting sequences' } },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0012.webp', caption: { es: 'Optimización de UX móvil', en: 'Mobile UX optimization' } },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0013.webp', caption: { es: 'Flujos de trabajo del Chatbot IA', en: 'AI Chatbot workflows' } },
                ]
            },
            {
                id: 'analytical-foundation',
                title: { es: '4. Base Analítica', en: '4. Analytical Foundation' },
                subtitle: { es: 'Datos y Objetivos de Negocio Reales', en: 'Data and Real Business Objectives' },
                content: { es: `• Objetivos SMART: Cada acción quedó atada a un resultado Específico, Medible, Alcanzable, Relevante y con Tiempo limitado.

• Análisis de Mercado: Investigación constante de la competencia y del comportamiento de búsqueda del usuario para garantizar que Stiberman Law siempre mantenga su ventaja estratégica.`, en: `• SMART Objectives: Each action was tied to a Specific, Measurable, Achievable, Relevant and Time-bound result.

• Market Analysis: Constant research of competition and user search behavior to ensure Stiberman Law always maintains its strategic advantage.` },
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0014.webp', caption: { es: 'Implementación de Objetivos SMART', en: 'SMART Objectives implementation' } },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0015.webp', caption: { es: 'Dashboard analítico competitivo', en: 'Competitive analytics dashboard' } },
                ]
            }
        ],
        stats: [
            { value: '+140%', label: { es: 'Crecimiento de Tráfico Orgánico', en: 'Organic Traffic Growth' } },
            { value: '35%', label: { es: 'Reducción del CPA (Costo por Lead)', en: 'CPA Reduction (Cost per Lead)' } },
            { value: '24/7', label: { es: 'Disponibilidad de IA Virtual', en: 'Virtual AI Availability' } },
            { value: 'Mobile', label: { es: 'First Approach completado', en: 'First Approach completed' } }
        ]
    },
    'lisicki-litvin-metricas': {
        slug: 'lisicki-litvin-metricas',
        heroImage: '/licki/KPI Monthly Presentation_page-0001.webp',
        role: 'Data Analyst & Consultant',
        client: 'Estudio Lisicki, Litvin & Asociados',
        date: { es: 'Enero 2025', en: 'January 2025' },
        context: { es: 'Presentación Ejecutiva Mensual de KPIs', en: 'Monthly Executive KPI Presentation' },
        overview: { es: `Como profesional a cargo de este proyecto para Estudio Lisicki, Litvin & Asociados, llevé a cabo una inmersión profunda en las métricas de rendimiento y las iniciativas estratégicas correspondientes a Enero de 2025. Mi rol consistió en proporcionar una revisión dinámica del desempeño de la firma, asegurando que cada métrica clave estuviera alineada con nuestros objetivos comerciales generales y los estándares de la industria.`, en: `As the professional in charge of this project for Estudio Lisicki, Litvin & Asociados, I conducted a deep dive into performance metrics and strategic initiatives for January 2025. My role consisted of providing a dynamic review of the firm's performance, ensuring that each key metric was aligned with our overall business objectives and industry standards.` },
        sections: [
            {
                id: 'strategic-kpi',
                title: { es: '1. Gestión Estratégica de KPIs y Supervisión Financiera', en: '1. Strategic KPI Management and Financial Oversight' },
                subtitle: { es: 'Evaluación de la salud de la empresa', en: 'Company health assessment' },
                content: { es: `Me enfoqué en evaluar la salud de la empresa a través de un riguroso análisis de métricas financieras y operativas.

• Crecimiento de Ingresos: Monitoreé y reporté un ingreso total de $93,745, lo que representó un aumento del 5.6% respecto al mes anterior.

• Análisis de Rentabilidad: Calculé un Margen de Beneficio Neto del 30%, gestionando un beneficio neto de $120,000 sobre ventas totales de $280,000.

• Control de Gastos: Rastreé gastos totales por $66,830, manteniendo una tasa de crecimiento consistente del 5.6% en línea con los ingresos para asegurar un escalado equilibrado.

• Optimización de Márgenes: Supervisé la Ganancia Bruta, que alcanzó los $220,000, superando el objetivo de crecimiento del 2% al lograr un incremento del 5.6%.`, en: `I focused on evaluating the company's health through rigorous analysis of financial and operational metrics.

• Revenue Growth: I monitored and reported total revenue of $93,745, representing a 5.6% increase from the previous month.

• Profitability Analysis: I calculated a 30% Net Profit Margin, managing a net profit of $120,000 on total sales of $280,000.

• Expense Control: I tracked total expenses of $66,830, maintaining a consistent growth rate of 5.6% in line with revenue to ensure balanced scaling.

• Margin Optimization: I oversaw Gross Profit, which reached $220,000, exceeding the 2% growth target by achieving a 5.6% increase.` },
                images: [
                    { src: '/licki/KPI Monthly Presentation_page-0002.webp', caption: { es: 'Resumen Ejecutivo y Crecimiento de Ingresos', en: 'Executive Summary and Revenue Growth' } },
                    { src: '/licki/KPI Monthly Presentation_page-0003.webp', caption: { es: 'Análisis de Rentabilidad Lograda', en: 'Achieved Profitability Analysis' } },
                    { src: '/licki/KPI Monthly Presentation_page-0004.webp', caption: { es: 'Control de Gastos y Optimización de Márgenes Financieros', en: 'Expense Control and Financial Margin Optimization' } }
                ]
            },
            {
                id: 'operational-kpi',
                title: { es: '2. Productividad Operativa y Éxito del Cliente', en: '2. Operational Productivity and Client Success' },
                subtitle: { es: 'Identificación de oportunidades de mejora estratégica', en: 'Identifying strategic improvement opportunities' },
                content: { es: `Mis iniciativas fueron diseñadas para identificar oportunidades de mejora y guiar la toma de decisiones estratégicas.

• Monitoreo de Productividad: Traseé la actividad operativa en 52.6%, con un total de 520 horas de trabajo registradas en un solo período, manteniendo una tasa de eficiencia del 48.1%.

• Experiencia del Cliente: Implementé un seguimiento para el Customer Satisfaction Score (CSAT), alcanzando un 66% (incremento del 5.6% MoM), y mantuve un tiempo de respuesta promedio de 15 minutos.

• Feedback del Mercado: Analicé el Net Promoter Score (NPS) y el Customer Effort Score (CES) para garantizar un servicio de máxima calidad que cree valor sostenible a través de toda la cartera de clientes.`, en: `My initiatives were designed to identify improvement opportunities and guide strategic decision-making.

• Productivity Monitoring: I tracked operational activity at 52.6%, with a total of 520 work hours logged in a single period, maintaining an efficiency rate of 48.1%.

• Client Experience: I implemented tracking for the Customer Satisfaction Score (CSAT), reaching 66% (5.6% MoM increase), and maintained an average response time of 15 minutes.

• Market Feedback: I analyzed the Net Promoter Score (NPS) and Customer Effort Score (CES) to ensure maximum quality service that creates sustainable value across the entire client portfolio.` },
                images: [
                    { src: '/licki/KPI Monthly Presentation_page-0005.webp', caption: { es: 'Métricas de Productividad Operativa y Eficiencia', en: 'Operational Productivity and Efficiency Metrics' } },
                    { src: '/licki/KPI Monthly Presentation_page-0006.webp', caption: { es: 'Dashboard de Experiencia del Cliente (CSAT, NPS, CES)', en: 'Client Experience Dashboard (CSAT, NPS, CES)' } }
                ]
            },
            {
                id: 'talent-management',
                title: { es: '3. Gestión de Talento y Retención', en: '3. Talent Management and Retention' },
                subtitle: { es: 'Supervisión de métricas de capital humano', en: 'Human capital metrics oversight' },
                content: { es: `Monitoricé exhaustivamente las métricas de capital humano de la firma para asegurar la estabilidad organizacional a largo plazo.

• Estrategia de Retención: Gestioné una fuerza laboral total de 237 empleados con una antigüedad promedio notable de 7.23 años, navegando hábilmente una tasa de deserción del 14.86%.

• Análisis Departamental: Categoricé la fuerza laboral a través de todos los departamentos clave (Finanzas, IT, Ventas y Contabilidad), asegurando niveles de plantilla adecuados operativos ininterrumpidos.

• Revisión de Compensaciones: Monitoreé la distribución salarial a nivel gerencial y operativo, notando un salario promedio de 66.7K, para mantener fuerte competitividad frente al mercado de la contaduría y consultoría.`, en: `I comprehensively monitored the firm's human capital metrics to ensure long-term organizational stability.

• Retention Strategy: I managed a total workforce of 237 employees with a notable average tenure of 7.23 years, skillfully navigating an attrition rate of 14.86%.

• Departmental Analysis: I categorized the workforce across all key departments (Finance, IT, Sales and Accounting), ensuring adequate staffing levels for uninterrupted operations.

• Compensation Review: I monitored salary distribution at managerial and operational levels, noting an average salary of 66.7K, to maintain strong competitiveness against the accounting and consulting market.` },
                images: [
                    { src: '/licki/KPI Monthly Presentation_page-0007.webp', caption: { es: 'Análisis de Fuerza Laboral y Estrategia de Retención', en: 'Workforce Analysis and Retention Strategy' } },
                    { src: '/licki/KPI Monthly Presentation_page-0008.webp', caption: { es: 'Distribución Departamental y Compensaciones', en: 'Departmental Distribution and Compensation' } }
                ]
            },
            {
                id: 'future-initiatives',
                title: { es: '4. Conclusión e Iniciativas Futuras', en: '4. Conclusion and Future Initiatives' },
                subtitle: { es: 'Perspectiva estratégica para asegurar un crecimiento sostenido', en: 'Strategic outlook to ensure sustained growth' },
                content: { es: `Mis servicios concluyeron con un Outlook estratégico integral, determinando que aunque la gran mayoría de los KPIs operacionales superaron los objetivos en este período particular, nuestro foco principal debe seguir centrado en ser el proveedor de mayor calidad en la comunidad empresarial. Me mantengo totalmente comprometido en mitigar áreas de desviación para asegurar el éxito continuo y materializar un crecimiento orgánico verdaderamente sostenible de toda la empresa a largo plazo.`, en: `My services concluded with a comprehensive strategic Outlook, determining that although the vast majority of operational KPIs exceeded targets in this particular period, our main focus should remain centered on being the highest quality provider in the business community. I remain fully committed to mitigating areas of deviation to ensure continued success and materialize truly sustainable organic growth for the entire company in the long term.` },
                images: [
                    { src: '/licki/KPI Monthly Presentation_page-0009.webp', caption: { es: 'Iniciativas y Roadmap Estratégico General', en: 'Strategic Initiatives and General Roadmap' } }
                ]
            }
        ],
        stats: [
            { value: '$93.7K', label: { es: 'Ingresos Totales (Período)', en: 'Total Revenue (Period)' } },
            { value: '30%', label: { es: 'Margen de Beneficio Neto', en: 'Net Profit Margin' } },
            { value: '52.6%', label: { es: 'Actividad Operativa', en: 'Operational Activity' } },
            { value: '66%', label: { es: 'Satisfacción CSAT Lograda', en: 'CSAT Satisfaction Achieved' } }
        ]
    },
    'kiddo-franquicias': {
        slug: 'kiddo-franquicias',
        heroImage: '/kiddo/Franchising Kiddo _ Comercial_page-0001.webp',
        role: { es: 'Consultor de Negocios & Franquicias', en: 'Business & Franchise Consultant' },
        client: 'Kiddo / Burger Kid',
        date: '2024 - 2030',
        context: { es: 'Estrategia integral de expansión comercial', en: 'Comprehensive Commercial Expansion Strategy' },
        overview: { es: `Como parte integral del equipo de Kiddo, mi rol en este proyecto de expansión nacional e internacional ha sido consolidar una propuesta de negocio que es mucho más que una simple hamburguesería: es la profesionalización del "auténtico fast food" respaldada por años de experiencia en el sector. A continuación, describo en detalle mis servicios y las iniciativas clave que hemos desarrollado para aquellos interesados en adquirir una franquicia:`, en: `As an integral part of the Kiddo team, my role in this national and international expansion project has been to consolidate a business proposition that is much more than a simple burger joint: it is the professionalization of "authentic fast food" backed by years of industry experience. Below, I describe in detail my services and the key initiatives we have developed for those interested in acquiring a franchise:` },
        sections: [
            {
                id: 'know-how',
                title: { es: '1. Consolidación del "Know-How" y Valor de Marca', en: '1. Consolidating the "Know-How" and Brand Value' },
                subtitle: { es: 'Capitalizando 15 años de conocimiento', en: 'Capitalizing on 15 years of knowledge' },
                content: { es: `He trabajado para capitalizar los más de 15 años de conocimiento de Alejandro Roig (Burger Kid) en el mundo de las hamburguesas, transformando esa influencia digital en un modelo de negocio tangible y altamente rentable.

• Diferenciación: Nos enfocamos en un menú reducido pero cuidadosamente elaborado, priorizando la calidad total de los ingredientes y la simplicidad operativa para asegurar velocidad en despacho.

• Resultados Probados: Respaldamos la propuesta con métricas sólidas, destacando la venta de 25.000 hamburguesas mensuales por local y una facturación promedio mensual sostenida de USD 100.000.`, en: `I have worked to capitalize on over 15 years of knowledge from Alejandro Roig (Burger Kid) in the burger world, transforming that digital influence into a tangible and highly profitable business model.

• Differentiation: We focus on a reduced but carefully crafted menu, prioritizing total ingredient quality and operational simplicity to ensure fast dispatch.

• Proven Results: We back the proposition with solid metrics, highlighting 25,000 monthly burger sales per location and a sustained average monthly revenue of USD 100,000.` },
                images: [
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0002.webp', caption: { es: 'Consolidación del "Know-How" y trayectoria', en: '"Know-How" consolidation and track record' } },
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0003.webp', caption: { es: 'Diferenciación de marca y resultados comerciales', en: 'Brand differentiation and commercial results' } }
                ]
            },
            {
                id: 'franchise-model',
                title: { es: '2. Desarrollo del Modelo de Franquicia (Franchising)', en: '2. Franchise Model Development (Franchising)' },
                subtitle: { es: 'Estructuración de oferta para inversores', en: 'Structuring investment offerings' },
                content: { es: `Mi servicio se ha centrado en estructurar una oferta altamente atractiva para inversores, garantizando exclusividad territorial y soporte corporativo continuo.

• Eficiencia Operativa: Hemos diseñado un modelo de negocio a prueba de fallos que permite un Margen EBIT operativo del 25% tras curva de aprendizaje.

• Ventajas Competitivas: Facilitamos directamente el acceso a un "Pool de Compras" exclusivo de la franquicia y procesos estandarizados basados en investigación de mercado constante para mantener la alta preferencia del consumidor.`, en: `My service has focused on structuring a highly attractive offering for investors, guaranteeing territorial exclusivity and continuous corporate support.

• Operational Efficiency: We have designed a fail-proof business model that allows a 25% operational EBIT Margin after the learning curve.

• Competitive Advantages: We directly facilitate access to an exclusive franchise "Purchasing Pool" and standardized processes based on constant market research to maintain high consumer preference.` },
                images: [
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0004.webp', caption: { es: 'Desarrollo financiero del modelo de Franquicia', en: 'Financial development of the Franchise model' } },
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0005.webp', caption: { es: 'Ventajas Competitivas y Pool de Compras', en: 'Competitive Advantages and Purchasing Pool' } }
                ]
            },
            {
                id: 'expansion-strategy',
                title: { es: '3. Estrategia de Expansión e Iniciativas Visuales', en: '3. Expansion Strategy and Visual Initiatives' },
                subtitle: { es: 'Proyección de crecimiento nacional e internacional', en: 'National and international growth projection' },
                content: { es: `El proyecto es profundamente visual, desde la estética premium de nuestros locales hasta la impecable presentación de nuestros productos "Core" como la Melvin Cheeseburger. He colaborado directamente en la proyección de crecimiento que incluye:

• Diversidad de Formatos: Desde locales de "Barra y Take Away" en Palermo hasta el innovador formato "Drive Thru" (AutoKiddo) en Lomas de Zamora.

• Internacionalización: El plan de expansión ya se encuentra en marcha con aperturas estratégicas pautadas en:
  - Estados Unidos: Miami (zona residencial y NW 24th St) y New York (5th Ave).
  - Uruguay: Montevideo.
  - Brasil: São Paulo y Rio de Janeiro.

• Visión a Futuro: Proyectamos escalar sistemáticamente hasta alcanzar los 39 locales para el año 2029 y expandir fuertemente las Master Franquicias hacia el mercado de Europa a partir de 2030.`, en: `The project is deeply visual, from the premium aesthetics of our locations to the impeccable presentation of our "Core" products like the Melvin Cheeseburger. I have collaborated directly on the growth projection that includes:

• Format Diversity: From "Bar and Take Away" locations in Palermo to the innovative "Drive Thru" format (AutoKiddo) in Lomas de Zamora.

• Internationalization: The expansion plan is already underway with strategic openings scheduled in:
  - United States: Miami (residential area and NW 24th St) and New York (5th Ave).
  - Uruguay: Montevideo.
  - Brazil: São Paulo and Rio de Janeiro.

• Future Vision: We project to systematically scale to reach 39 locations by 2029 and strongly expand Master Franchises into the European market starting in 2030.` },
                images: [
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0006.webp', caption: { es: 'Estrategia de Expansión y Formatos de Locales', en: 'Expansion Strategy and Location Formats' } },
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0007.webp', caption: { es: 'Proyección Internacional: USA, Uruguay, Brasil', en: 'International Projection: USA, Uruguay, Brazil' } },
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0008.webp', caption: { es: 'Visión 2030: Master Franquicias y Mercado Europeo', en: 'Vision 2030: Master Franchises and European Market' } }
                ]
            },
            {
                id: 'product-identity',
                title: { es: '4. Productos e Identidad Visual', en: '4. Products and Visual Identity' },
                subtitle: { es: 'Sistema probado de éxito global', en: 'Proven system for global success' },
                content: { es: `Hemos definido una identidad sumamente clara para cada segmento de nuestro menú, lo que agiliza y facilita enormemente la gestión operativa de la franquicia y el rápido reconocimiento por parte del cliente:

• Core Business: Hamburguesas emblemáticas que lideran las ventas (Melvin, Park).

• Snacks & Co: Complementos esenciales como los Chiddo Chicken Nuggets y las infaltables papas fritas SureCrisp.

Mi compromiso personal y profesional en este proyecto es asegurar que cada nuevo franquiciado no solo compre el nombre de una marca, sino un ecosistema y sistema operativo probado de absoluto éxito, con una proyección de crecimiento global sin precedentes en el competitivo sector del fast food argentino.`, en: `We have defined an extremely clear identity for each segment of our menu, which greatly streamlines and facilitates the franchise's operational management and rapid customer recognition:

• Core Business: Flagship burgers that lead sales (Melvin, Park).

• Snacks & Co: Essential complements like Chiddo Chicken Nuggets and the essential SureCrisp fries.

My personal and professional commitment in this project is to ensure that each new franchisee doesn't just buy a brand name, but a proven ecosystem and operating system of absolute success, with unprecedented global growth projection in the competitive Argentine fast food sector.` },
                images: [
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0009.webp', caption: { es: 'Catálogo de Productos Core y Snacks & Co', en: 'Core Products and Snacks & Co Catalog' } }
                ]
            }
        ],
        stats: [
            { value: '$100K USD', label: { es: 'Facturación Mensual Promedio', en: 'Average Monthly Revenue' } },
            { value: '25%', label: { es: 'Margen EBIT Proyectado', en: 'Projected EBIT Margin' } },
            { value: '25K', label: { es: 'Hamburguesas/Mes por Local', en: 'Burgers/Month per Location' } },
            { value: '39 Locales', label: { es: 'Proyección Global (2029)', en: 'Global Projection (2029)' } }
        ]
    },
    'easytrack-reporte-financiero': {
        slug: 'easytrack-reporte-financiero',
        heroImage: '/easytrack/Presentación Informe Paid Media_page-0001.webp',
        role: { es: 'Responsable de Paid Media', en: 'Paid Media Manager' },
        client: 'EASY TRACK (Fintech)',
        date: '2025',
        context: { es: 'Estructura Publicitaria Integral', en: 'Comprehensive Advertising Structure' },
        overview: { es: `Como responsable de la estrategia de Paid Media para este proyecto, mi gestión se centró en el diseño y la implementación de una estructura publicitaria integral para *EASY TRACK*, una aplicación de planificación financiera y gestión de gastos. Mi servicio abarcó desde la planificación presupuestaria hasta la configuración detallada de campañas en Meta y Google Ads, con el objetivo de maximizar tanto el crecimiento de la base de usuarios como la conversión a membresías Premium.`, en: `As the person responsible for the Paid Media strategy on this project, my management focused on the design and implementation of a comprehensive advertising structure for *EASY TRACK*, a financial planning and expense management application. My service spanned from budget planning to detailed campaign configuration in Meta and Google Ads, with the goal of maximizing both user base growth and Premium membership conversion.` },
        sections: [
            {
                id: 'gestion-presupuestaria',
                title: { es: '1. Gestión Presupuestaria y Estratégica', en: '1. Budget and Strategic Management' },
                subtitle: { es: 'Distribución de inversión en el embudo', en: 'Investment distribution across the funnel' },
                content: { es: `Diseñé un plan de inversión de $20.000.000 distribuido de forma equitativa para cubrir todo el embudo de conversión:

• Meta Ads ($10.000.000): Segmentado en dos grandes pilares para Apple Store y Google Play: maximizar eventos dentro de la app (conversiones a Premium) y maximizar instalaciones para nuevos usuarios.

• Google Ads ($10.000.000): Destinado a una campaña de Display enfocada en maximizar conversiones, aprovechando la red visual para atraer tráfico cualificado.

• Optimización Dinámica: Implementé una lógica de competencia de rendimiento; el presupuesto se reasigna en tiempo real hacia la plataforma o tienda con mejores resultados para garantizar eficiencia y ROAS.`, en: `I designed a $20,000,000 investment plan distributed equitably to cover the entire conversion funnel:

• Meta Ads ($10,000,000): Segmented into two major pillars for Apple Store and Google Play: maximizing in-app events (Premium conversions) and maximizing installations for new users.

• Google Ads ($10,000,000): Dedicated to a Display campaign focused on maximizing conversions, leveraging the visual network to attract qualified traffic.

• Dynamic Optimization: I implemented a performance competition logic; the budget is reallocated in real-time toward the platform or store with the best results to guarantee efficiency and ROAS.` },
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0002.webp', caption: { es: 'Distribución de Presupuesto Inicial', en: 'Initial Budget Distribution' } },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0003.webp', caption: { es: 'Segmentación entre Meta y Google Ads', en: 'Segmentation between Meta and Google Ads' } }
                ]
            },
            {
                id: 'estructura-meta',
                title: { es: '2. Arquitectura de Campañas Meta Ads', en: '2. Meta Ads Campaign Architecture' },
                subtitle: { es: 'Advantage+ y Deep Linking', en: 'Advantage+ and Deep Linking' },
                content: { es: `Para Easy Track, configuré una arquitectura de campañas Advantage+ para aprovechar el aprendizaje automático de Meta.

• Segmentación Avanzada: Definí un público objetivo de entre 18 y 45 años en Argentina. Excluí activamente a usuarios Premium para optimizar el CPA.

• Iniciativa Creativa: Desarrollé múltiples variaciones (Ad Futurista, Ad Control Total) para testear ángulos de comunicación según la etapa del usuario.

• Configuración Técnica: Implementé enlaces profundos diferidos (deep links) hacia la suscripción Premium dentro de la app, mejorando sustancialmente el porcentaje de conversión de clics a compra en un solo tap.`, en: `For Easy Track, I configured an Advantage+ campaign architecture to leverage Meta's machine learning.

• Advanced Segmentation: I defined a target audience between 18 and 45 years old in Argentina. I actively excluded Premium users to optimize CPA.

• Creative Initiative: I developed multiple variations (Futuristic Ad, Total Control Ad) to test communication angles based on user stage.

• Technical Configuration: I implemented deferred deep links to the Premium subscription within the app, substantially improving the click-to-purchase conversion rate in a single tap.` },
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0004.webp', caption: { es: 'Modelado de Arquitectura Meta Ads', en: 'Meta Ads Architecture Modeling' } },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0005.webp', caption: { es: 'Exclusión activa y Segmentación Avanzada', en: 'Active Exclusion and Advanced Segmentation' } }
                ]
            },
            {
                id: 'google-ads',
                title: { es: '3. Implementación en Google Ads', en: '3. Google Ads Implementation' },
                subtitle: { es: 'Maximizar Conversiones en Red de Display', en: 'Maximize Conversions on Display Network' },
                content: { es: `Mi trabajo iterativo en Google Ads se enfocó en capturar sólidamente la intención de los usuarios a través de la Red de Display Visual.

• Configuración de Conversiones: Acción específica vinculada de manera nativa con Google Play para un seguimiento preciso de cada instalación trazable de calidad.

• Anuncios Adaptables: Creé y despaché anuncios de display combinando 5 títulos y descripciones distintas, dejando que el machine learning optimice su entrega.

• Estrategia de Puja: Configuré la campaña para Maximizar Conversiones asegurando que el presupuesto de $5.000.000 se traduzca en el mayor volumen posible de suscripciones operativas diarias.`, en: `My iterative work on Google Ads focused on solidly capturing user intent through the Visual Display Network.

• Conversion Configuration: Specific action natively linked with Google Play for precise tracking of each quality traceable installation.

• Responsive Ads: I created and dispatched display ads combining 5 different headlines and descriptions, letting machine learning optimize their delivery.

• Bidding Strategy: I configured the campaign to Maximize Conversions ensuring that the $5,000,000 budget translates into the highest possible volume of daily operational subscriptions.` },
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0006.webp', caption: { es: 'Tracking de Conversiones en Google', en: 'Google Conversion Tracking' } },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0007.webp', caption: { es: 'Configuración Analítica de Pujas', en: 'Analytical Bidding Configuration' } }
                ]
            },
            {
                id: 'deep-research',
                title: { es: '4. Deep Research: El Valor del Producto', en: '4. Deep Research: The Product Value' },
                subtitle: { es: 'Pilares de comunicación y neuromarketing', en: 'Communication pillars and neuromarketing' },
                content: { es: `A través de mi análisis del comportamiento en onboarding, identifiqué los pilares de valor absoluto que inyecté en los copys de captación y retargeting:

• Seguridad: Promoción de seguridad de nivel bancario para la protección de datos e inversiones en curso del usuario.
• Conectividad: Capacidad de conectar hasta 3 cuentas bancarias y billeteras virtuales para generar un hub único de control de tesorería personal.
• Educación Financiera: Foros Premium con recomendaciones directas de inversión.
• Simplicidad UX: Transformación en backend de datos crudos complejos hacia gráficos amigables.`, en: `Through my analysis of onboarding behavior, I identified the absolute value pillars that I injected into acquisition and retargeting copy:

• Security: Promotion of bank-level security for protection of user data and ongoing investments.
• Connectivity: Ability to connect up to 3 bank accounts and virtual wallets to generate a unique personal treasury control hub.
• Financial Education: Premium forums with direct investment recommendations.
• UX Simplicity: Backend transformation of complex raw data into user-friendly graphics.` },
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0008.webp', caption: { es: 'Desarrollo Conceptual del Onboarding', en: 'Onboarding Conceptual Development' } },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0009.webp', caption: { es: 'Diferenciadores en Pilares Clave', en: 'Key Pillar Differentiators' } }
                ]
            },
            {
                id: 'premium-conversion',
                title: { es: '5. Meta Ads: Conversión y Upselling a Premium', en: '5. Meta Ads: Premium Conversion and Upselling' },
                subtitle: { es: 'Estrategia de reactivación de Cohortes', en: 'Cohort Reactivation Strategy' },
                content: { es: `Esta campaña en particular se centró exclusivamente en usuarios existentes (o registrados recientemente sin tarjeta en archivo) interesados en escalar su experiencia in-app.

• Ad Futurista: Diseño de impacto tecnológico ("¿Estás listo para tomar el control total de tus finanzas?").

• Ad Control Total: Despliegue de gráficos comparativos in-market y datos visualmente concisos que avalan y demandan decisiones económicas rápidas para evitar la desvalorización.

• Ad Desbloquear Beneficios: Mostrar estratégicamente las dolorosas limitantes en las features gratuitas contra la potencia infinita que regala el upgrade en un solo movimiento.`, en: `This particular campaign focused exclusively on existing users (or recently registered without a card on file) interested in upgrading their in-app experience.

• Futuristic Ad: Technological impact design ("Are you ready to take full control of your finances?").

• Total Control Ad: Deployment of in-market comparative graphics and visually concise data that support and demand quick economic decisions to avoid devaluation.

• Unlock Benefits Ad: Strategically showcasing the painful limitations of free features against the infinite power that upgrading grants in a single move.` },
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0010.webp', caption: { es: 'Creatividades del Ad Futurista Upselling', en: 'Futuristic Upselling Ad Creatives' } },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0011.webp', caption: { es: 'Visuales de Ad Control Total', en: 'Total Control Ad Visuals' } }
                ]
            },
            {
                id: 'captacion-free',
                title: { es: '6. Meta Ads: Captación (CPA/Descargas)', en: '6. Meta Ads: Acquisition (CPA/Downloads)' },
                subtitle: { es: 'Inyecciones diarias Masivas al Freemium', en: 'Massive Daily Injections to Freemium' },
                content: { es: `Diseñada e instrumentada puramente a la generación infinita de TOFU y a expandir capilarmente la base de suscriptores Freemium para nutrir el ecosistema futuro. Todo el esfuerzo de ad copy es hacia la fricción cero del Onboarding:

• Ad Control Free: Gestión de gastos a margen cero. "Tu aliado vitalicio está aquí".
• Ad Entidades Free: "Sincroniza todas tus billeteras sin pagar fees ocultos".
• Ad Planificación Free: Instrumentos de ahorro que apelan al sueño de previsibilidad financiera del usuario target.`, en: `Designed and instrumented purely for infinite TOFU generation and to capillarily expand the Freemium subscriber base to nurture the future ecosystem. All ad copy effort is directed toward zero-friction Onboarding:

• Free Control Ad: Expense management at zero margin. "Your lifelong ally is here".
• Free Entities Ad: "Sync all your wallets without paying hidden fees".
• Free Planning Ad: Savings instruments that appeal to the target user's dream of financial predictability.` },
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0012.webp', caption: { es: 'Variante de Ad Control Free (TOFU)', en: 'Free Control Ad Variant (TOFU)' } },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0013.webp', caption: { es: 'Atracción por conectividad free', en: 'Free connectivity attraction' } }
                ]
            },
            {
                id: 'display-campaign',
                title: { es: '7. Google Ads: Campaña de Display Adaptable', en: '7. Google Ads: Responsive Display Campaign' },
                subtitle: { es: 'Pautas Visuales en ecosistema Web AdSense', en: 'Visual Ads in the AdSense Web Ecosystem' },
                content: { es: `Los formatos Display permitieron invadir espacios de oportunidad mientras el usuario navega contenido económico y de finanzas generalistas con la altísima visibilidad de banners adaptables:

• Copywriting Ágil: "Easy Track Premium", y "Siempre es bueno tener un mentor económico en tu bolsillo".

• Seguimiento Avanzado vía UTMs: Se instauró una minuciosa jerarquía analítica en la URL final (utm_campaign=premium_push_arg) que luego permitiera atribuir fielmente el mérito absoluto a la Red de Display dentro de Looker Studio.`, en: `Display formats allowed us to invade opportunity spaces while users browse economic and general finance content with the extremely high visibility of responsive banners:

• Agile Copywriting: "Easy Track Premium", and "It's always good to have an economic mentor in your pocket".

• Advanced Tracking via UTMs: A meticulous analytical hierarchy was established in the final URL (utm_campaign=premium_push_arg) that would later faithfully attribute absolute merit to the Display Network within Looker Studio.` },
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0014.webp', caption: { es: 'Renders Dinámicos de Display para AdSense', en: 'Dynamic Display Renders for AdSense' } },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0015.webp', caption: { es: 'Ruteo de Enlaces Parametrizados (UTM)', en: 'Parameterized Link Routing (UTM)' } }
                ]
            }
        ],
        stats: [
            { value: '$20M', label: { es: 'Presupuesto Administrado', en: 'Managed Budget' } },
            { value: '50/50', label: { es: 'Distribución Meta/Google', en: 'Meta/Google Distribution' } },
            { value: '+135%', label: { es: 'Aumento Leads Diarios', en: 'Daily Leads Increase' } },
            { value: 'Cohortes', label: { es: 'Metodología Predictiva', en: 'Predictive Methodology' } }
        ]
    }
};

export function getProjectDetails(slug, language = 'es') {
    const raw = projectDetails[slug];
    if (!raw) return null;
    return resolveLanguage(raw, language);
}

export default projectDetails;
