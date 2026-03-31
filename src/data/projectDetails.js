// Rich project detail content mapped by project slug
// Each project can have sections with text + images

const projectDetails = {
    'topper-plan-mobile-first': {
        slug: 'topper-plan-mobile-first',
        heroImage: '/topper/topper-0001.jpg',
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
                    { src: '/topper/topper-0003.jpg', caption: 'Presentación del caso: misión, visión y principios de Topper' },
                    { src: '/topper/topper-0004.jpg', caption: 'Identidad visual de la marca: logos y paleta de colores' },
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
                    { src: '/topper/topper-0005.jpg', caption: 'Análisis PESTEL del macroentorno' },
                    { src: '/topper/topper-0006.jpg', caption: 'Análisis del microentorno y Matriz BCG' },
                    { src: '/topper/topper-0007.jpg', caption: 'Matriz BCG: productos Estrella e Interrogante' },
                    { src: '/topper/topper-0008.jpg', caption: 'Benchmarking competitivo: Puma, Umbro, Athix' },
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
                    { src: '/topper/topper-0009.jpg', caption: 'Buyer Persona: Raúl — perfil detallado' },
                    { src: '/topper/topper-0010.jpg', caption: 'Buyer Persona: Sabrina — perfil detallado' },
                    { src: '/topper/topper-0011.jpg', caption: 'Mapa de Empatía del consumidor' },
                    { src: '/topper/topper-0012.jpg', caption: 'Customer Journey Map completo' },
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
                    { src: '/topper/topper-0013.jpg', caption: 'Objetivos SMART del Plan de Marketing' },
                    { src: '/topper/topper-0014.jpg', caption: 'Estrategia para el producto Block Revolver' },
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
                    { src: '/topper/topper-0015.jpg', caption: 'Distribución del presupuesto de campaña' },
                    { src: '/topper/topper-0016.jpg', caption: 'Configuración de Google Ads (Reconocimiento)' },
                    { src: '/topper/topper-0017.jpg', caption: 'Campaña de Meta Ads: segmentación por Buyer Persona' },
                    { src: '/topper/topper-0018.jpg', caption: 'Estrategia de Retargeting con Google Display' },
                ]
            },
            {
                id: 'control',
                title: '5. Control y Optimización',
                subtitle: 'Tablero de control con métricas clave (KPIs)',
                content: `Para asegurar el éxito, establecí un tablero de control con métricas clave (KPIs) como el Alcance y CPM para reconocimiento, la Tasa de Conversión y CPA para ventas, y la Tasa de recuperación de carritos para las acciones de retargeting.

Mi intervención brindó a Topper un mapa claro para capitalizar sus fortalezas como marca líder accesible, mitigando debilidades tecnológicas y de identidad mediante una presencia digital robusta y orientada a resultados.`,
                images: [
                    { src: '/topper/topper-0019.jpg', caption: 'Dashboard de KPIs y métricas de control' },
                    { src: '/topper/topper-0020.jpg', caption: 'Resumen ejecutivo de resultados esperados' },
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
                    { src: '/topper/topper-0021.jpg', caption: 'Ad Futurista — Creativa y copys' },
                    { src: '/topper/topper-0022.jpg', caption: 'Ad Control Total — Variantes de texto' },
                    { src: '/topper/topper-0023.jpg', caption: 'Ad Desbloquear Beneficios — Deep link premium' },
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
                    { src: '/topper/topper-0024.jpg', caption: 'Ad Control Free — Versión gratuita' },
                    { src: '/topper/topper-0025.jpg', caption: 'Ad Entidades Free — Conectividad bancaria' },
                    { src: '/topper/topper-0026.jpg', caption: 'Ad Planificación Free — Herramientas de ahorro' },
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
                    { src: '/topper/topper-0027.jpg', caption: 'Anuncio Adaptable de Display — Configuración' },
                    { src: '/topper/topper-0028.jpg', caption: 'Títulos y descripciones optimizados' },
                    { src: '/topper/topper-0029.jpg', caption: 'Configuración de UTM y seguimiento' },
                    { src: '/topper/topper-0030.jpg', caption: 'Resumen final de la estructura publicitaria' },
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
};

export function getProjectDetails(slug) {
    return projectDetails[slug] || null;
}

export default projectDetails;
