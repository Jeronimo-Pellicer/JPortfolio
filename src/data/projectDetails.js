// Rich project detail content mapped by project slug
// Each project can have sections with text + images

const projectDetails = {
    'topper-plan-mobile-first': {
        slug: 'topper-plan-mobile-first',
        heroImage: '/topper/topper-0001.webp',
        role: 'Gerente de Marketing Digital',
        client: 'Topper Argentina',
        date: '2024 – 2025',
        context: 'Universidad Escuela Argentina de Negocios (UEAN) — Marketing Digital II',
        overview: `Como Gerente de Marketing en este proyecto para Topper, mi labor se centró en desarrollar un Plan de Marketing Digital integral diseñado para potenciar la marca y cumplir con sus objetivos estratégicos en el mercado argentino. Mi enfoque abarcó desde un análisis profundo del contexto actual hasta la planificación de campañas específicas para productos clave.`,
        sections: [
            {
                id: 'intro',
                title: 'Introducción y Contexto',
                subtitle: 'Presentación del caso y antecedentes de la empresa',
                content: `Como Gerentes de Marketing de la empresa y en representación del departamento, expondremos el desarrollo de un Plan de Marketing Digital integral para la empresa a fin de lograr cumplir con los objetivos estratégicos de la empresa y potenciar la marca.

Topper es una marca deportiva con presencia en Argentina, Uruguay, Brasil, Paraguay, Bolivia y Chile. Su propósito es democratizar el deporte en Latinoamérica y en el mundo, uniendo moda y deporte generando productos accesibles y de calidad.`,
                images: [
                    { src: '/topper/topper-0003.webp', caption: 'Presentación del caso: misión, visión y principios de Topper' },
                    { src: '/topper/topper-0004.webp', caption: 'Identidad visual de la marca: logos y paleta de colores' },
                ]
            },
            {
                id: 'diagnostico',
                title: '1. Diagnóstico Estratégico y Análisis de Mercado',
                subtitle: 'Investigación exhaustiva del entorno y la competencia',
                content: `Realicé una investigación exhaustiva para comprender la posición de Topper frente a su entorno y competencia:

• Análisis del Macroentorno (PESTEL): Evalué cómo factores políticos, económicos y sociales impactan el negocio. Identifiqué desafíos como la inflación y la baja del poder adquisitivo, pero también oportunidades en las nuevas medidas para facilitar importaciones y el auge de la cultura fitness.

• Análisis del Microentorno: Utilicé la Matriz BCG para categorizar productos, identificando a las zapatillas Drill como "Estrella" y a las Block Revolver como "Interrogante", siendo estas últimas el foco de mi estrategia posterior.

• Benchmarking y Diferenciación: Comparé a Topper con competidores como Puma, Umbro y Athix, concluyendo que nuestra ventaja reside en la identidad local y precios accesibles, aunque con una identidad visual menos diferenciada que debemos fortalecer.`,
                images: [
                    { src: '/topper/topper-0005.webp', caption: 'Análisis PESTEL del macroentorno' },
                    { src: '/topper/topper-0006.webp', caption: 'Análisis del microentorno y Matriz BCG' },
                    { src: '/topper/topper-0007.webp', caption: 'Matriz BCG: productos Estrella e Interrogante' },
                    { src: '/topper/topper-0008.webp', caption: 'Benchmarking competitivo: Puma, Umbro, Athix' },
                ]
            },
            {
                id: 'buyer-persona',
                title: '2. Definición del Público Objetivo (Buyer Persona)',
                subtitle: 'Perfiles de clientes ideales y mapas de empatía',
                content: `Para personalizar las estrategias, definí dos perfiles de clientes ideales que representan nuestra base de consumidores:

• Raúl (30 años): Profesor de educación física interesado en comodidad y rendimiento a un precio justo.

• Sabrina (55 años): Ama de casa que prioriza la durabilidad y el costo para equipar a su familia.

Diseñé un Mapa de Empatía y un Customer Journey Map para entender sus dolores, como la inflación y los procesos de compra online complejos, y convertirlos en puntos de mejora.`,
                images: [
                    { src: '/topper/topper-0009.webp', caption: 'Buyer Persona: Raúl — perfil detallado' },
                    { src: '/topper/topper-0010.webp', caption: 'Buyer Persona: Sabrina — perfil detallado' },
                    { src: '/topper/topper-0011.webp', caption: 'Mapa de Empatía del consumidor' },
                    { src: '/topper/topper-0012.webp', caption: 'Customer Journey Map completo' },
                ]
            },
            {
                id: 'objetivos',
                title: '3. Planificación y Objetivos SMART',
                subtitle: 'Estrategia concentrada en el producto "Interrogante"',
                content: `Mi estrategia se concentró en el producto "Interrogante" (Zapatillas Block Revolver) para transformarlo en un éxito de mercado mediante tres objetivos específicos para el periodo de enero a junio de 2025:

• Reconocimiento: Lograr 2 millones de impresiones en Google Ads (un aumento del 50%).

• Ventas: Incrementar un 20% las ventas en e-commerce a través de Meta Ads.

• Retargeting: Reactivar al 30% de clientes previos para que el 10% realice una nueva compra.`,
                images: [
                    { src: '/topper/topper-0013.webp', caption: 'Objetivos SMART del Plan de Marketing' },
                    { src: '/topper/topper-0014.webp', caption: 'Estrategia para el producto Block Revolver' },
                ]
            },
            {
                id: 'campanas',
                title: '4. Ejecución de Campañas Digitales',
                subtitle: 'Presupuesto de $20M distribuido estratégicamente',
                content: `Asigné un presupuesto de 20 millones de pesos distribuidos estratégicamente:

• Google Ads (Reconocimiento): Creé anuncios segmentados para Raúl y Sabrina enfocados en los beneficios del nuevo modelo.

• Meta Ads (Ventas): Implementé campañas con imágenes y copys diferenciados según el buyer persona para maximizar la conversión en redes sociales.

• Retargeting (Display): Diseñé piezas para invitar a antiguos clientes a "repetir su experiencia" basándome en los datos del CRM.`,
                images: [
                    { src: '/topper/topper-0015.webp', caption: 'Distribución del presupuesto de campaña' },
                    { src: '/topper/topper-0016.webp', caption: 'Configuración de Google Ads (Reconocimiento)' },
                    { src: '/topper/topper-0017.webp', caption: 'Campaña de Meta Ads: segmentación por Buyer Persona' },
                    { src: '/topper/topper-0018.webp', caption: 'Estrategia de Retargeting con Google Display' },
                ]
            },
            {
                id: 'control',
                title: '5. Control y Optimización',
                subtitle: 'Tablero de control con métricas clave (KPIs)',
                content: `Para asegurar el éxito, establecí un tablero de control con métricas clave (KPIs) como el Alcance y CPM para reconocimiento, la Tasa de Conversión y CPA para ventas, y la Tasa de recuperación de carritos para las acciones de retargeting.

Mi intervención brindó a Topper un mapa claro para capitalizar sus fortalezas como marca líder accesible, mitigando debilidades tecnológicas y de identidad mediante una presencia digital robusta y orientada a resultados.`,
                images: [
                    { src: '/topper/topper-0019.webp', caption: 'Dashboard de KPIs y métricas de control' },
                    { src: '/topper/topper-0020.webp', caption: 'Resumen ejecutivo de resultados esperados' },
                ]
            },
            {
                id: 'ads-meta-premium',
                title: 'Campaña Meta Ads: Conversión a Premium',
                subtitle: 'Anuncios orientados a usuarios existentes',
                content: `Esta campaña se centró en usuarios existentes o interesados en escalar su experiencia en la aplicación.

• Ad Futurista: Orientado a la innovación y el control tecnológico de las finanzas. Copys como "¿Estás listo para tomar el control total de tus finanzas?" con CTA "Instalar".

• Ad Control Total: Mensajes directos sobre la gestión integral y el orden financiero. Gráficos comparativos para analizar progresos.

• Ad Desbloquear Beneficios: Resalta las funcionalidades exclusivas de la versión de pago con enlace profundo diferido directo a la URL de suscripción Premium.`,
                images: [
                    { src: '/topper/topper-0021.webp', caption: 'Ad Futurista — Creativa y copys' },
                    { src: '/topper/topper-0022.webp', caption: 'Ad Control Total — Variantes de texto' },
                    { src: '/topper/topper-0023.webp', caption: 'Ad Desbloquear Beneficios — Deep link premium' },
                ]
            },
            {
                id: 'ads-meta-captacion',
                title: 'Campaña Meta Ads: Captación (Aumento de Descargas)',
                subtitle: 'Expansión de la base de usuarios con modelo Freemium',
                content: `Diseñada para atraer nuevos usuarios a la versión gratuita (Freemium) y expandir la base instalada.

• Ad Control Free: Propuesta de gestión de gastos sin costo inicial. "Tu aliado para organizar tus finanzas está aquí".

• Ad Entidades Free: Conectividad con bancos y billeteras virtuales. "Compatible con tus cuentas bancarias y billeteras virtuales".

• Ad Planificación Free: Herramientas de ahorro y visualización de datos. "¿Querés planificar mejor tu futuro financiero?"`,
                images: [
                    { src: '/topper/topper-0024.webp', caption: 'Ad Control Free — Versión gratuita' },
                    { src: '/topper/topper-0025.webp', caption: 'Ad Entidades Free — Conectividad bancaria' },
                    { src: '/topper/topper-0026.webp', caption: 'Ad Planificación Free — Herramientas de ahorro' },
                ]
            },
            {
                id: 'ads-google',
                title: 'Campaña Google Ads (Display)',
                subtitle: 'Alto impacto visual para maximizar conversiones',
                content: `Configuré una campaña de alto impacto visual para maximizar las conversiones de membresía.

• Anuncio Adaptable de Display: Sistema que combina hasta 5 títulos y descripciones para optimizar el rendimiento automáticamente. Títulos como "Easy Track Premium", "Pasate al lado Premium" y "Siempre con vos, Easy Track".

• Seguimiento: URL final con parámetros UTM específicos (utm_campaign=premium_push) para rastrear cada clic y conversión proveniente de Google.

Cada anuncio fue diseñado para ser flexible, permitiendo que el algoritmo de Advantage+ en Meta y la Puja de Maximizar Conversiones en Google mostraran la combinación de imagen y texto con mayor probabilidad de éxito.`,
                images: [
                    { src: '/topper/topper-0027.webp', caption: 'Anuncio Adaptable de Display — Configuración' },
                    { src: '/topper/topper-0028.webp', caption: 'Títulos y descripciones optimizados' },
                    { src: '/topper/topper-0029.webp', caption: 'Configuración de UTM y seguimiento' },
                    { src: '/topper/topper-0030.webp', caption: 'Resumen final de la estructura publicitaria' },
                ]
            },
        ],
        stats: [
            { value: '$20M', label: 'Presupuesto gestionado' },
            { value: '2M', label: 'Impresiones objetivo' },
            { value: '+20%', label: 'Crecimiento ventas e-commerce' },
            { value: '30%', label: 'Reactivación de clientes' },
        ],
    },
    'stiberman-law-seo-sem': {
        slug: 'stiberman-law-seo-sem',
        heroImage: '/stiberman/Digital Marketing Brief (3)_page-0001.webp',
        role: 'Consultor SEO/SEM',
        client: 'Stiberman Law',
        date: '2025',
        context: 'Estrategia integral SEO/SEM',
        overview: `Como profesional liderando este proyecto de transformación digital, realicé una inmersión profunda en la oferta de servicios y las iniciativas estratégicas diseñadas para Stiberman Law. Este proyecto abordó una brecha de visibilidad masiva mediante una estrategia multifacética de alto impacto.`,
        sections: [
            {
                id: 'product-overview',
                title: 'Resumen de Servicios: Enfoque Legal',
                subtitle: 'Asistencia legal en bancarrotas y finanzas',
                content: `Stiberman Law, reconocida como "La Firma de Abogados de Florida", provee asistencia legal crítica en reestructuración financiera. Mi investigación identificó las áreas principales:

• Bancarrota en Florida: Especialización en presentaciones de Capítulo 7, 11 y 13.

• Consolidación de Deudas: Soluciones para el manejo integral de deudas en Florida.`,
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0002.webp', caption: 'Enfoque de servicios legales' },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0003.webp', caption: 'Estrategia de resolución de deudas' },
                ]
            },
            {
                id: 'digital-challenge',
                title: 'El Desafío Digital',
                subtitle: 'Brecha de visibilidad y posicionamiento',
                content: `La investigación inicial reveló una carencia de visibilidad significativa: el dominio principal estaba ausente en las búsquedas de clientes para términos clave como "Bankruptcy Florida", representando literalmente un "404 Not Found" en términos de presencia en buscadores.`,
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0004.webp', caption: 'Análisis de brecha de visibilidad' },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0005.webp', caption: 'Diagnóstico de presencia digital' },
                ]
            },
            {
                id: 'high-intent-advertising',
                title: '1. Publicidad de Alta Intención (PPC y Geo-Targeting)',
                subtitle: 'SEM para la adquisición rápida de leads valiosos',
                content: `Para solucionar el problema de visibilidad, desarrollé un plan multifacético:

• Pay-Per-Click (PPC): Implementé un modelo enfocado en palabras clave legales de alto valor.

• Geo-Targeting: Debido a la localización de los servicios, utilicé anuncios geo-orientados para asegurar visibilidad dentro de Florida, previniendo el desperdicio de clics.

• A/B Testing & Tracking: Uso de A/B testing para refinar el ad copy y mejorar el tracking de conversiones clave.`,
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0006.webp', caption: 'Estrategia PPC y Pujas' },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0007.webp', caption: 'Segmentación geográfica (Geo-targeting)' },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0008.webp', caption: 'A/B Testing y seguimiento' },
                ]
            },
            {
                id: 'seo-content',
                title: '2. Optimización SEO y Estrategia de Contenidos',
                subtitle: 'Crecimiento orgánico y autoridad a largo plazo',
                content: `Mi misión fue lograr rankings orgánicos más altos para llegar a una audiencia amplia:

• SEO Técnico: Enfoque en velocidad del sitio, código limpio y mentalidad "mobile-first" adaptada al nuevo algoritmo de Google.

• SEO Off-Site: Construcción de autoridad a través de backlinks de calidad de la industria legal.

• Marketing de Contenidos: Actualizaciones regulares mediante un blog y contenidos de video para humanizar la marca y asentar su expertise.`,
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0009.webp', caption: 'Estrategia Mobile-First y SEO Técnico' },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0010.webp', caption: 'Construcción de contenido orgánico' },
                ]
            },
            {
                id: 'conversion-automation',
                title: '3. Optimización de Conversión y Automatización',
                subtitle: 'Retargeting y acompañamiento del usuario',
                content: `• Retargeting Ads: Despliegue de campañas para reconectar con usuarios pre-visitantes mediante mensajes altamente personalizados.

• Optimización Móvil: Basándome en el uso del 95% de tráfico en smartphones, configuré botones "click-to-call" inmediatos y optimización responsiva.

• Integración de Chatbot con IA: Setup de asistentes virtuales 24/7 capacitados para responder inquietudes instantáneas, elevando la satisfacción exponencialmente.`,
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0011.webp', caption: 'Secuencias de Retargeting' },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0012.webp', caption: 'Optimización de UX móvil' },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0013.webp', caption: 'Flujos de trabajo del Chatbot IA' },
                ]
            },
            {
                id: 'analytical-foundation',
                title: '4. Base Analítica',
                subtitle: 'Datos y Objetivos de Negocio Reales',
                content: `• Objetivos SMART: Cada acción quedó atada a un resultado Específico, Medible, Alcanzable, Relevante y con Tiempo limitado.

• Análisis de Mercado: Investigación constante de la competencia y del comportamiento de búsqueda del usuario para garantizar que Stiberman Law siempre mantenga su ventaja estratégica.`,
                images: [
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0014.webp', caption: 'Implementación de Objetivos SMART' },
                    { src: '/stiberman/Digital Marketing Brief (3)_page-0015.webp', caption: 'Dashboard analítico competitivo' },
                ]
            }
        ],
        stats: [
            { value: '+140%', label: 'Crecimiento de Tráfico Orgánico' },
            { value: '35%', label: 'Reducción del CPA (Costo por Lead)' },
            { value: '24/7', label: 'Disponibilidad de IA Virtual' },
            { value: 'Mobile', label: 'First Approach completado' }
        ]
    },
    'lisicki-litvin-metricas': {
        slug: 'lisicki-litvin-metricas',
        heroImage: '/licki/KPI Monthly Presentation_page-0001.webp',
        role: 'Data Analyst & Consultant',
        client: 'Estudio Lisicki, Litvin & Asociados',
        date: 'Enero 2025',
        context: 'Presentación Ejecutiva Mensual de KPIs',
        overview: `Como profesional a cargo de este proyecto para Estudio Lisicki, Litvin & Asociados, llevé a cabo una inmersión profunda en las métricas de rendimiento y las iniciativas estratégicas correspondientes a Enero de 2025. Mi rol consistió en proporcionar una revisión dinámica del desempeño de la firma, asegurando que cada métrica clave estuviera alineada con nuestros objetivos comerciales generales y los estándares de la industria.`,
        sections: [
            {
                id: 'strategic-kpi',
                title: '1. Gestión Estratégica de KPIs y Supervisión Financiera',
                subtitle: 'Evaluación de la salud de la empresa',
                content: `Me enfoqué en evaluar la salud de la empresa a través de un riguroso análisis de métricas financieras y operativas.

• Crecimiento de Ingresos: Monitoreé y reporté un ingreso total de $93,745, lo que representó un aumento del 5.6% respecto al mes anterior.

• Análisis de Rentabilidad: Calculé un Margen de Beneficio Neto del 30%, gestionando un beneficio neto de $120,000 sobre ventas totales de $280,000.

• Control de Gastos: Rastreé gastos totales por $66,830, manteniendo una tasa de crecimiento consistente del 5.6% en línea con los ingresos para asegurar un escalado equilibrado.

• Optimización de Márgenes: Supervisé la Ganancia Bruta, que alcanzó los $220,000, superando el objetivo de crecimiento del 2% al lograr un incremento del 5.6%.`,
                images: [
                    { src: '/licki/KPI Monthly Presentation_page-0002.webp', caption: 'Resumen Ejecutivo y Crecimiento de Ingresos' },
                    { src: '/licki/KPI Monthly Presentation_page-0003.webp', caption: 'Análisis de Rentabilidad Lograda' },
                    { src: '/licki/KPI Monthly Presentation_page-0004.webp', caption: 'Control de Gastos y Optimización de Márgenes Financieros' }
                ]
            },
            {
                id: 'operational-kpi',
                title: '2. Productividad Operativa y Éxito del Cliente',
                subtitle: 'Identificación de oportunidades de mejora estratégica',
                content: `Mis iniciativas fueron diseñadas para identificar oportunidades de mejora y guiar la toma de decisiones estratégicas.

• Monitoreo de Productividad: Traseé la actividad operativa en 52.6%, con un total de 520 horas de trabajo registradas en un solo período, manteniendo una tasa de eficiencia del 48.1%.

• Experiencia del Cliente: Implementé un seguimiento para el Customer Satisfaction Score (CSAT), alcanzando un 66% (incremento del 5.6% MoM), y mantuve un tiempo de respuesta promedio de 15 minutos.

• Feedback del Mercado: Analicé el Net Promoter Score (NPS) y el Customer Effort Score (CES) para garantizar un servicio de máxima calidad que cree valor sostenible a través de toda la cartera de clientes.`,
                images: [
                    { src: '/licki/KPI Monthly Presentation_page-0005.webp', caption: 'Métricas de Productividad Operativa y Eficiencia' },
                    { src: '/licki/KPI Monthly Presentation_page-0006.webp', caption: 'Dashboard de Experiencia del Cliente (CSAT, NPS, CES)' }
                ]
            },
            {
                id: 'talent-management',
                title: '3. Gestión de Talento y Retención',
                subtitle: 'Supervisión de métricas de capital humano',
                content: `Monitoricé exhaustivamente las métricas de capital humano de la firma para asegurar la estabilidad organizacional a largo plazo.

• Estrategia de Retención: Gestioné una fuerza laboral total de 237 empleados con una antigüedad promedio notable de 7.23 años, navegando hábilmente una tasa de deserción del 14.86%.

• Análisis Departamental: Categoricé la fuerza laboral a través de todos los departamentos clave (Finanzas, IT, Ventas y Contabilidad), asegurando niveles de plantilla adecuados operativos ininterrumpidos.

• Revisión de Compensaciones: Monitoreé la distribución salarial a nivel gerencial y operativo, notando un salario promedio de 66.7K, para mantener fuerte competitividad frente al mercado de la contaduría y consultoría.`,
                images: [
                    { src: '/licki/KPI Monthly Presentation_page-0007.webp', caption: 'Análisis de Fuerza Laboral y Estrategia de Retención' },
                    { src: '/licki/KPI Monthly Presentation_page-0008.webp', caption: 'Distribución Departamental y Compensaciones' }
                ]
            },
            {
                id: 'future-initiatives',
                title: '4. Conclusión e Iniciativas Futuras',
                subtitle: 'Perspectiva estratégica para asegurar un crecimiento sostenido',
                content: `Mis servicios concluyeron con un Outlook estratégico integral, determinando que aunque la gran mayoría de los KPIs operacionales superaron los objetivos en este período particular, nuestro foco principal debe seguir centrado en ser el proveedor de mayor calidad en la comunidad empresarial. Me mantengo totalmente comprometido en mitigar áreas de desviación para asegurar el éxito continuo y materializar un crecimiento orgánico verdaderamente sostenible de toda la empresa a largo plazo.`,
                images: [
                    { src: '/licki/KPI Monthly Presentation_page-0009.webp', caption: 'Iniciativas y Roadmap Estratégico General' }
                ]
            }
        ],
        stats: [
            { value: '$93.7K', label: 'Ingresos Totales (Período)' },
            { value: '30%', label: 'Margen de Beneficio Neto' },
            { value: '52.6%', label: 'Actividad Operativa' },
            { value: '66%', label: 'Satisfacción CSAT Lograda' }
        ]
    },
    'kiddo-franquicias': {
        slug: 'kiddo-franquicias',
        heroImage: '/kiddo/Franchising Kiddo _ Comercial_page-0001.webp',
        role: 'Consultor de Negocios & Franquicias',
        client: 'Kiddo / Burger Kid',
        date: '2024 - 2030',
        context: 'Estrategia integral de expansión comercial',
        overview: `Como parte integral del equipo de Kiddo, mi rol en este proyecto de expansión nacional e internacional ha sido consolidar una propuesta de negocio que es mucho más que una simple hamburguesería: es la profesionalización del "auténtico fast food" respaldada por años de experiencia en el sector. A continuación, describo en detalle mis servicios y las iniciativas clave que hemos desarrollado para aquellos interesados en adquirir una franquicia:`,
        sections: [
            {
                id: 'know-how',
                title: '1. Consolidación del "Know-How" y Valor de Marca',
                subtitle: 'Capitalizando 15 años de conocimiento',
                content: `He trabajado para capitalizar los más de 15 años de conocimiento de Alejandro Roig (Burger Kid) en el mundo de las hamburguesas, transformando esa influencia digital en un modelo de negocio tangible y altamente rentable.

• Diferenciación: Nos enfocamos en un menú reducido pero cuidadosamente elaborado, priorizando la calidad total de los ingredientes y la simplicidad operativa para asegurar velocidad en despacho.

• Resultados Probados: Respaldamos la propuesta con métricas sólidas, destacando la venta de 25.000 hamburguesas mensuales por local y una facturación promedio mensual sostenida de USD 100.000.`,
                images: [
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0002.webp', caption: 'Consolidación del "Know-How" y trayectoria' },
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0003.webp', caption: 'Diferenciación de marca y resultados comerciales' }
                ]
            },
            {
                id: 'franchise-model',
                title: '2. Desarrollo del Modelo de Franquicia (Franchising)',
                subtitle: 'Estructuración de oferta para inversores',
                content: `Mi servicio se ha centrado en estructurar una oferta altamente atractiva para inversores, garantizando exclusividad territorial y soporte corporativo continuo.

• Eficiencia Operativa: Hemos diseñado un modelo de negocio a prueba de fallos que permite un Margen EBIT operativo del 25% tras curva de aprendizaje.

• Ventajas Competitivas: Facilitamos directamente el acceso a un "Pool de Compras" exclusivo de la franquicia y procesos estandarizados basados en investigación de mercado constante para mantener la alta preferencia del consumidor.`,
                images: [
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0004.webp', caption: 'Desarrollo financiero del modelo de Franquicia' },
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0005.webp', caption: 'Ventajas Competitivas y Pool de Compras' }
                ]
            },
            {
                id: 'expansion-strategy',
                title: '3. Estrategia de Expansión e Iniciativas Visuales',
                subtitle: 'Proyección de crecimiento nacional e internacional',
                content: `El proyecto es profundamente visual, desde la estética premium de nuestros locales hasta la impecable presentación de nuestros productos "Core" como la Melvin Cheeseburger. He colaborado directamente en la proyección de crecimiento que incluye:

• Diversidad de Formatos: Desde locales de "Barra y Take Away" en Palermo hasta el innovador formato "Drive Thru" (AutoKiddo) en Lomas de Zamora.

• Internacionalización: El plan de expansión ya se encuentra en marcha con aperturas estratégicas pautadas en:
  - Estados Unidos: Miami (zona residencial y NW 24th St) y New York (5th Ave).
  - Uruguay: Montevideo.
  - Brasil: São Paulo y Rio de Janeiro.

• Visión a Futuro: Proyectamos escalar sistemáticamente hasta alcanzar los 39 locales para el año 2029 y expandir fuertemente las Master Franquicias hacia el mercado de Europa a partir de 2030.`,
                images: [
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0006.webp', caption: 'Estrategia de Expansión y Formatos de Locales' },
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0007.webp', caption: 'Proyección Internacional: USA, Uruguay, Brasil' },
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0008.webp', caption: 'Visión 2030: Master Franquicias y Mercado Europeo' }
                ]
            },
            {
                id: 'product-identity',
                title: '4. Productos e Identidad Visual',
                subtitle: 'Sistema probado de éxito global',
                content: `Hemos definido una identidad sumamente clara para cada segmento de nuestro menú, lo que agiliza y facilita enormemente la gestión operativa de la franquicia y el rápido reconocimiento por parte del cliente:

• Core Business: Hamburguesas emblemáticas que lideran las ventas (Melvin, Park).

• Snacks & Co: Complementos esenciales como los Chiddo Chicken Nuggets y las infaltables papas fritas SureCrisp.

Mi compromiso personal y profesional en este proyecto es asegurar que cada nuevo franquiciado no solo compre el nombre de una marca, sino un ecosistema y sistema operativo probado de absoluto éxito, con una proyección de crecimiento global sin precedentes en el competitivo sector del fast food argentino.`,
                images: [
                    { src: '/kiddo/Franchising Kiddo _ Comercial_page-0009.webp', caption: 'Catálogo de Productos Core y Snacks & Co' }
                ]
            }
        ],
        stats: [
            { value: '$100K USD', label: 'Facturación Mensual Promedio' },
            { value: '25%', label: 'Margen EBIT Proyectado' },
            { value: '25K', label: 'Hamburguesas/Mes por Local' },
            { value: '39 Locales', label: 'Proyección Global (2029)' }
        ]
    },
    'easytrack-reporte-financiero': {
        slug: 'easytrack-reporte-financiero',
        heroImage: '/easytrack/Presentación Informe Paid Media_page-0001.webp',
        role: 'Responsable de Paid Media',
        client: 'EASY TRACK (Fintech)',
        date: '2025',
        context: 'Estructura Publicitaria Integral',
        overview: `Como responsable de la estrategia de Paid Media para este proyecto, mi gestión se centró en el diseño y la implementación de una estructura publicitaria integral para *EASY TRACK*, una aplicación de planificación financiera y gestión de gastos. Mi servicio abarcó desde la planificación presupuestaria hasta la configuración detallada de campañas en Meta y Google Ads, con el objetivo de maximizar tanto el crecimiento de la base de usuarios como la conversión a membresías Premium.`,
        sections: [
            {
                id: 'gestion-presupuestaria',
                title: '1. Gestión Presupuestaria y Estratégica',
                subtitle: 'Distribución de inversión en el embudo',
                content: `Diseñé un plan de inversión de $20.000.000 distribuido de forma equitativa para cubrir todo el embudo de conversión:

• Meta Ads ($10.000.000): Segmentado en dos grandes pilares para Apple Store y Google Play: maximizar eventos dentro de la app (conversiones a Premium) y maximizar instalaciones para nuevos usuarios.

• Google Ads ($10.000.000): Destinado a una campaña de Display enfocada en maximizar conversiones, aprovechando la red visual para atraer tráfico cualificado.

• Optimización Dinámica: Implementé una lógica de competencia de rendimiento; el presupuesto se reasigna en tiempo real hacia la plataforma o tienda con mejores resultados para garantizar eficiencia y ROAS.`,
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0002.webp', caption: 'Distribución de Presupuesto Inicial' },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0003.webp', caption: 'Segmentación entre Meta y Google Ads' }
                ]
            },
            {
                id: 'estructura-meta',
                title: '2. Arquitectura de Campañas Meta Ads',
                subtitle: 'Advantage+ y Deep Linking',
                content: `Para Easy Track, configuré una arquitectura de campañas Advantage+ para aprovechar el aprendizaje automático de Meta.

• Segmentación Avanzada: Definí un público objetivo de entre 18 y 45 años en Argentina. Excluí activamente a usuarios Premium para optimizar el CPA.

• Iniciativa Creativa: Desarrollé múltiples variaciones (Ad Futurista, Ad Control Total) para testear ángulos de comunicación según la etapa del usuario.

• Configuración Técnica: Implementé enlaces profundos diferidos (deep links) hacia la suscripción Premium dentro de la app, mejorando sustancialmente el porcentaje de conversión de clics a compra en un solo tap.`,
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0004.webp', caption: 'Modelado de Arquitectura Meta Ads' },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0005.webp', caption: 'Exclusión activa y Segmentación Avanzada' }
                ]
            },
            {
                id: 'google-ads',
                title: '3. Implementación en Google Ads',
                subtitle: 'Maximizar Conversiones en Red de Display',
                content: `Mi trabajo iterativo en Google Ads se enfocó en capturar sólidamente la intención de los usuarios a través de la Red de Display Visual.

• Configuración de Conversiones: Acción específica vinculada de manera nativa con Google Play para un seguimiento preciso de cada instalación trazable de calidad.

• Anuncios Adaptables: Creé y despaché anuncios de display combinando 5 títulos y descripciones distintas, dejando que el machine learning optimice su entrega.

• Estrategia de Puja: Configuré la campaña para Maximizar Conversiones asegurando que el presupuesto de $5.000.000 se traduzca en el mayor volumen posible de suscripciones operativas diarias.`,
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0006.webp', caption: 'Tracking de Conversiones en Google' },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0007.webp', caption: 'Configuración Analítica de Pujas' }
                ]
            },
            {
                id: 'deep-research',
                title: '4. Deep Research: El Valor del Producto',
                subtitle: 'Pilares de comunicación y neuromarketing',
                content: `A través de mi análisis del comportamiento en onboarding, identifiqué los pilares de valor absoluto que inyecté en los copys de captación y retargeting:

• Seguridad: Promoción de seguridad de nivel bancario para la protección de datos e inversiones en curso del usuario.
• Conectividad: Capacidad de conectar hasta 3 cuentas bancarias y billeteras virtuales para generar un hub único de control de tesorería personal.
• Educación Financiera: Foros Premium con recomendaciones directas de inversión.
• Simplicidad UX: Transformación en backend de datos crudos complejos hacia gráficos amigables.`,
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0008.webp', caption: 'Desarrollo Conceptual del Onboarding' },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0009.webp', caption: 'Diferenciadores en Pilares Clave' }
                ]
            },
            {
                id: 'premium-conversion',
                title: '5. Meta Ads: Conversión y Upselling a Premium',
                subtitle: 'Estrategia de reactivación de Cohortes',
                content: `Esta campaña en particular se centró exclusivamente en usuarios existentes (o registrados recientemente sin tarjeta en archivo) interesados en escalar su experiencia in-app.

• Ad Futurista: Diseño de impacto tecnológico ("¿Estás listo para tomar el control total de tus finanzas?").

• Ad Control Total: Despliegue de gráficos comparativos in-market y datos visualmente concisos que avalan y demandan decisiones económicas rápidas para evitar la desvalorización.

• Ad Desbloquear Beneficios: Mostrar estratégicamente las dolorosas limitantes en las features gratuitas contra la potencia infinita que regala el upgrade en un solo movimiento.`,
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0010.webp', caption: 'Creatividades del Ad Futurista Upselling' },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0011.webp', caption: 'Visuales de Ad Control Total' }
                ]
            },
            {
                id: 'captacion-free',
                title: '6. Meta Ads: Captación (CPA/Descargas)',
                subtitle: 'Inyecciones diarias Masivas al Freemium',
                content: `Diseñada e instrumentada puramente a la generación infinita de TOFU y a expandir capilarmente la base de suscriptores Freemium para nutrir el ecosistema futuro. Todo el esfuerzo de ad copy es hacia la fricción cero del Onboarding:

• Ad Control Free: Gestión de gastos a margen cero. "Tu aliado vitalicio está aquí".
• Ad Entidades Free: "Sincroniza todas tus billeteras sin pagar fees ocultos".
• Ad Planificación Free: Instrumentos de ahorro que apelan al sueño de previsibilidad financiera del usuario target.`,
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0012.webp', caption: 'Variante de Ad Control Free (TOFU)' },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0013.webp', caption: 'Atracción por conectividad free' }
                ]
            },
            {
                id: 'display-campaign',
                title: '7. Google Ads: Campaña de Display Adaptable',
                subtitle: 'Pautas Visuales en ecosistema Web AdSense',
                content: `Los formatos Display permitieron invadir espacios de oportunidad mientras el usuario navega contenido económico y de finanzas generalistas con la altísima visibilidad de banners adaptables:

• Copywriting Ágil: "Easy Track Premium", y "Siempre es bueno tener un mentor económico en tu bolsillo".

• Seguimiento Avanzado vía UTMs: Se instauró una minuciosa jerarquía analítica en la URL final (utm_campaign=premium_push_arg) que luego permitiera atribuir fielmente el mérito absoluto a la Red de Display dentro de Looker Studio.`,
                images: [
                    { src: '/easytrack/Presentación Informe Paid Media_page-0014.webp', caption: 'Renders Dinámicos de Display para AdSense' },
                    { src: '/easytrack/Presentación Informe Paid Media_page-0015.webp', caption: 'Ruteo de Enlaces Parametrizados (UTM)' }
                ]
            }
        ],
        stats: [
            { value: '$20M', label: 'Presupuesto Administrado' },
            { value: '50/50', label: 'Distribución Meta/Google' },
            { value: '+135%', label: 'Aumento Leads Diarios' },
            { value: 'Cohortes', label: 'Metodología Predictiva' }
        ]
    }
};

export function getProjectDetails(slug) {
    return projectDetails[slug] || null;
}

export default projectDetails;
