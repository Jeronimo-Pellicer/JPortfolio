import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

export const translations = {
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            projectsPage: 'All Projects',
            contact: 'Contact',
            hireMe: 'Hire Me',
        },
        // Hero Section
        hero: {
            welcome: 'Welcome to my portfolio',
            greeting: "Hi, I'm",
            name: 'Jerónimo',
            subtitle: 'A passionate',
            role: 'Digital Business Student & Customer Experience Analyst',
            description: 'specialized in data-driven customer experience optimization and digital marketing.',
            viewWork: 'View My Work',
            getInTouch: 'Get In Touch',
            location: 'Buenos Aires, AR (GMT-3)',
            openToWork: 'Open to Work',
            yearsExperience: 'Years of Experience',
            projectsCompleted: 'Projects Completed',
            connectWithMe: 'Connect with me',
        },
        // About Section
        about: {
            title: 'About Me',
            heading: 'Data-Driven Customer Experience',
            subtitle: 'Empathetic professional focused on digital transformation',
            paragraph1: "I'm currently studying Digital Business Administration at UEAN while working as a Customer Experience Analyst at Estudio Notarial Castro. I led the optimization of the client service system through data analysis, reducing response times and improving satisfaction in high-confidentiality critical procedures.",
            paragraph2: 'With certifications in Digital Marketing from The University of Manchester, I combine analytical skills with strategic thinking. I specialize in SEO, content marketing, social media strategies, and analytics, all focused on driving business success.',
            paragraph3: 'I thrive in dynamic environments with clear goals and precise objectives. I actively seek challenges that represent opportunities for professional growth, whether through data analysis, process optimization, or digital marketing initiatives.',
            techLabel: 'Technologies & Skills:',
            skills: {
                cleanCode: { title: 'Clean Code', description: 'Writing maintainable, scalable code with best practices' },
                design: { title: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces' },
                performance: { title: 'Performance', description: 'Optimizing for speed and seamless experiences' },
                passion: { title: 'Passion', description: 'Dedicated to continuous learning and growth' },
            },
        },
        // Projects Section
        projects: {
            title: 'My Work',
            heading: 'Featured Projects',
            description: 'A selection of projects that showcase my skills and passion for creating impactful digital solutions.',
            viewAll: 'View All Projects',
            viewDetails: 'View Details',
            filter: {
                all: 'All Projects',
                strategy: 'Strategy',
                marketing: 'Marketing',
                analytics: 'Analytics',
                design: 'Design',
            },
            project1: {
                title: 'Kiddo Franchising Strategy',
                description: 'Development of a commercial expansion strategy and franchising model for a gastronomic brand, focusing on scalability and business modeling.',
            },
            project2: {
                title: 'Topper Mobile-First Plan',
                description: 'Creation of a comprehensive digital marketing brief and paid media campaign planning for a leading apparel brand, specifically optimized for mobile user acquisition.',
            },
            project3: {
                title: 'EasyTrack Financial Report',
                description: 'Paid Media performance analysis for a personal finance (fintech) application, optimizing campaign ROI and user tracking.',
            },
            project4: {
                title: 'Lisicki Litvin Corp Metrics',
                description: 'Design of executive KPI Monthly Presentations and dashboards for a top-tier accounting firm to visualize operational efficiency and service metrics.',
            },
            project5: {
                title: 'Stiberman Law SEO/SEM',
                description: 'Strategic Digital Marketing Brief focused on SEO and SEM positioning for a US-based Bankruptcy Law Firm.',
            },
            project6: {
                title: 'Social Media Dashboard',
                description: 'Unified dashboard for managing multiple social media accounts with scheduling and analytics.',
            },
            liveDemo: 'Live Demo',
            source: 'Source',
        },
        // Contact Section
        contact: {
            title: 'Get In Touch',
            heading: "Let's Connect",
            description: "Looking for someone to optimize your customer experience or drive your digital strategy? Let's talk about how I can help your business grow.",
            info: {
                email: 'Email',
                location: 'Location',
                locationValue: 'Buenos Aires, Argentina',
                phone: 'Phone',
            },
            social: 'Connect with me',
            available: 'Available for opportunities',
            availableText: "I'm open to new challenges in customer experience, data analysis, and digital marketing. Let's discuss how I can add value to your team.",
            form: {
                name: 'Your Name',
                namePlaceholder: 'John Doe',
                email: 'Your Email',
                emailPlaceholder: 'john@example.com',
                subject: 'Subject',
                subjectPlaceholder: 'Project Inquiry',
                message: 'Your Message',
                messagePlaceholder: 'Tell me about your project...',
                send: 'Send Message',
                sending: 'Sending...',
                success: 'Message Sent!',
                successMessage: "Thank you for reaching out. I'll get back to you soon.",
            },
        },
        // FAQ Section
        faq: {
            title: 'Strategic Insights',
            heading: '5 Key Insights',
            description: 'Strategic perspectives on the future of customer experience and digital marketing',
            questions: [
                {
                    q: 'What is Artificial Experience (AX) and how does it transform customer experience?',
                    a: 'Artificial Experience represents the natural evolution of Customer Experience by seamlessly integrating artificial intelligence at every customer touchpoint. Unlike traditional chatbots, AX uses generative AI and machine learning to create personalized, predictive, and conversational experiences that adapt in real-time to each user\'s individual needs. This technology enables anticipating problems before they occur, offering genuinely relevant recommendations, and providing 24/7 assistance with a level of empathy and contextual understanding that was previously impossible. Companies implementing AX are seeing significant reductions in response times, increases in customer satisfaction, and greater operational efficiency, all while freeing their human teams to focus on higher strategic value interactions.'
                },
                {
                    q: 'How is Phygital Marketing integrated into an effective omnichannel strategy?',
                    a: 'Phygital marketing represents the strategic convergence between physical and digital experiences, creating an ecosystem where both worlds complement each other seamlessly. Successful implementation requires synchronizing data in real-time across all channels, allowing a customer to start their journey on social media, continue in-store with personalized assistance based on their digital history, and complete the purchase via a mobile app without losing context at any moment. Enabling technologies include smart QR codes, augmented reality for virtual product trials, beacons for location-based experiences, and unified identity management systems. The fundamental goal is to eliminate friction between channels and create a fluid experience that recognizes and values the customer regardless of which touchpoint they choose to use.'
                },
                {
                    q: 'Why is measuring Customer Effort Score (CES) crucial in 2026 and how does it differ from other metrics?',
                    a: 'Customer Effort Score has emerged as the most predictive metric of customer loyalty in the digital age, even surpassing the traditional Net Promoter Score in certain contexts. This metric specifically evaluates how much effort a customer must invest to resolve their need, complete a purchase, or receive support. Research has consistently demonstrated that customers who experience low effort have significantly higher probability of repeat purchases and brand recommendations. Effective CES measurement involves immediate post-interaction surveys, friction point analysis in the customer journey through session replay tools, and sentiment analysis in support conversations. Leading organizations are using AI to automatically identify high-effort patterns and prioritize improvements that generate the greatest impact on customer experience.'
                },
                {
                    q: 'How to implement effective Social Commerce beyond simply posting products on social media?',
                    a: 'Authentic social commerce goes far beyond creating catalogs on Instagram or Facebook. It requires building genuine communities where user-generated content, live product demonstrations, and peer-to-peer recommendations naturally drive purchase decisions. The most successful strategies integrate micro-influencers who share authentic values with the brand, implement one-click purchase functionalities directly from short videos, and use conversational AI to respond to queries in comments and direct messages instantly. The critical aspect is maintaining the social and community experience while reducing friction on the path to conversion. Brands that master social commerce are seeing that between 20% and 40% of their digital sales come directly from social platforms, without needing to drive traffic to traditional websites.'
                },
                {
                    q: 'What role does AI-powered Hyper-Personalization play in customer retention?',
                    a: 'Hyper-personalization represents the next evolutionary level beyond traditional segmentation, using artificial intelligence to create unique experiences for each individual based on real-time behavior, situational context, complete interaction history, and predictive signals. Unlike basic personalization that simply inserts a name in an email, hyper-personalization dynamically adjusts website content, product recommendations, marketing messages, dynamic pricing, and even communication tone according to psychographic profile and specific customer journey moment. Enabling technologies include customer data platforms (CDP) that unify data from multiple sources, deep learning-based recommendation engines, and experience orchestration systems that automatically activate optimal content for each interaction. Companies correctly implementing hyper-personalization are seeing conversion increases of 15% to 25% and substantial increases in customer lifetime value by making each customer feel that the experience was designed exclusively for them.'
                }
            ]
        },
        // Footer
        footer: {
            tagline: 'Optimizing customer experiences through data and strategy',
            copyright: 'All rights reserved. Built with passion.',
            booksRecommend: 'Books I Recommend',
        },
        // Marquee Sections
        marquee: {
            trustedBy: 'Trusted By',
            toolsTechnologies: 'Tools & Technologies',
        },
        // Books Section
        books: {
            title: 'Books I Recommend',
            description: 'A selection of books that have influenced my thinking about business, design, and personal development.',
            backToHome: 'Back to Home',
            buyOnAmazon: 'Buy on Amazon',
            opinions: {
                atomicHabits: 'A fundamental book on habit building. Clear explains clearly and practically how small changes can generate extraordinary results. The "1% better each day" methodology is transformative and applicable to any area of life.',
                leanStartup: 'Revolutionary for understanding product development and startup methodology. Ries introduces key concepts like MVP and pivoting that are essential in today\'s digital world. A must-read for entrepreneurs and technology professionals.',
                thinkingFast: 'Kahneman explores the two systems of thinking that govern our decisions. It\'s fascinating to discover how our brain makes decisions and the cognitive biases that affect us. Essential for understanding human behavior in business and design.',
                hooked: 'Excellent for understanding how digital applications and products create habits in users. The "Hook" model is very practical for designing experiences that truly engage. Useful for both product managers and UX designers.',
                designEveryday: 'A design classic that remains relevant. Norman explains the fundamental principles of user-centered design in an accessible way. Although some examples are old, the concepts about usability and affordances are timeless.',
            },
        },
        // Project Detail
        projectDetail: {
            notFound: 'Project Not Found',
            notFoundMessage: "The project you're looking for doesn't exist.",
            backToProjects: 'Back to Projects',
            overview: 'Project Overview',
            technologies: 'Technologies Used',
        },
        // Navigation
        nav: {
            aboutMe: 'ABOUT ME',
            projects: 'PROJECTS',
            contactMe: 'CONTACT ME',
            resume: 'RESUME',
        },
    },
    es: {
        // Navegación
        nav: {
            home: 'Inicio',
            about: 'Sobre Mí',
            projects: 'Proyectos',
            projectsPage: 'Todos los Proyectos',
            contact: 'Contacto',
            hireMe: 'Contrátame',
        },
        // Sección Hero
        hero: {
            welcome: 'Bienvenido a mi portafolio',
            greeting: 'Hola, soy',
            name: 'Jerónimo',
            subtitle: 'Un apasionado',
            role: 'Estudiante de Negocios Digitales y Analista de Experiencia del Cliente',
            description: 'especializado en optimización de experiencia del cliente basada en datos y marketing digital.',
            viewWork: 'Ver Mi Trabajo',
            getInTouch: 'Contactar',
            location: 'Buenos Aires, AR (GMT-3)',
            openToWork: 'Disponible para trabajar',
            yearsExperience: 'Años de Experiencia',
            projectsCompleted: 'Proyectos Completados',
            connectWithMe: 'Conéctate conmigo',
        },
        // Sección Sobre Mí
        about: {
            title: 'Sobre Mí',
            heading: 'Experiencia del Cliente Basada en Datos',
            subtitle: 'Profesional empático enfocado en la transformación digital',
            paragraph1: 'Actualmente estudio Licenciatura en Administración en Internet en UEAN mientras trabajo como Analista de Experiencia del Cliente en Estudio Notarial Castro. Lideré la optimización del sistema de atención mediante análisis de datos, reduciendo tiempos de respuesta y mejorando la satisfacción en trámites críticos de alta confidencialidad.',
            paragraph2: 'Con certificaciones en Marketing Digital de The University of Manchester, combino habilidades analíticas con pensamiento estratégico. Me especializo en SEO, marketing de contenido, estrategias en redes sociales y analítica, todo enfocado en impulsar el éxito empresarial.',
            paragraph3: 'Me adapto fácilmente a entornos dinámicos con metas claras y objetivos precisos. Busco activamente desafíos que representen oportunidades de crecimiento profesional, ya sea mediante análisis de datos, optimización de procesos o iniciativas de marketing digital.',
            techLabel: 'Tecnologías y Habilidades:',
            skills: {
                cleanCode: { title: 'Código Limpio', description: 'Escribiendo código mantenible y escalable con mejores prácticas' },
                design: { title: 'Diseño UI/UX', description: 'Creando interfaces intuitivas y hermosas' },
                performance: { title: 'Rendimiento', description: 'Optimizando para velocidad y experiencias fluidas' },
                passion: { title: 'Pasión', description: 'Dedicado al aprendizaje continuo y crecimiento' },
            },
        },
        // Sección Proyectos
        projects: {
            title: 'Mi Trabajo',
            heading: 'Proyectos Destacados',
            description: 'Una selección de proyectos que muestran mis habilidades y pasión por crear soluciones digitales impactantes.',
            viewAll: 'Ver Todos los Proyectos',
            filter: {
                all: 'Todos los Proyectos',
                strategy: 'Estrategia',
                marketing: 'Marketing',
                analytics: 'Analítica',
                design: 'Diseño',
            },
            viewDetails: 'Ver Detalles',
            project1: {
                title: 'Kiddo Estrategia de Franquicias',
                description: 'Desarrollo de una estrategia de expansión comercial y modelo de franquicias para una marca gastronómica, enfocada en escalabilidad y modelado de negocio.',
            },
            project2: {
                title: 'Topper Plan Mobile-First',
                description: 'Creación de un brief integral de marketing digital y planificación de campañas de medios pagos para una marca líder de indumentaria, específicamente optimizado para adquisición de usuarios móviles.',
            },
            project3: {
                title: 'EasyTrack Reporte Financiero',
                description: 'Análisis de rendimiento de Paid Media para una aplicación de finanzas personales (fintech), optimizando el ROI de campañas y seguimiento de usuarios.',
            },
            project4: {
                title: 'Lisicki Litvin Corp Métricas',
                description: 'Diseño de presentaciones ejecutivas mensuales de KPIs y dashboards para una firma contable de primer nivel para visualizar eficiencia operativa y métricas de servicio.',
            },
            project5: {
                title: 'Stiberman Law SEO/SEM',
                description: 'Brief Estratégico de Marketing Digital enfocado en posicionamiento SEO y SEM para una firma de abogados de quiebras con sede en EE.UU.',
            },
            project6: {
                title: 'Dashboard Redes Sociales',
                description: 'Panel unificado para gestionar múltiples cuentas de redes sociales con programación y análisis.',
            },
            liveDemo: 'Demo en Vivo',
            source: 'Código',
            viewDetails: 'Ver Detalles',
        },
        // Sección Contacto
        contact: {
            title: 'Contáctame',
            heading: 'Conectemos',
            description: '¿Buscas a alguien para optimizar la experiencia del cliente o impulsar tu estrategia digital? Hablemos sobre cómo puedo ayudar a que tu negocio crezca.',
            info: {
                email: 'Email',
                location: 'Ubicación',
                locationValue: 'Buenos Aires, Argentina',
                phone: 'Teléfono',
            },
            social: 'Conéctate conmigo',
            available: 'Disponible para oportunidades',
            availableText: 'Estoy abierto a nuevos desafíos en experiencia del cliente, análisis de datos y marketing digital. Hablemos sobre cómo puedo agregar valor a tu equipo.',
            form: {
                name: 'Tu Nombre',
                namePlaceholder: 'Juan Pérez',
                email: 'Tu Email',
                emailPlaceholder: 'juan@ejemplo.com',
                subject: 'Asunto',
                subjectPlaceholder: 'Consulta de Proyecto',
                message: 'Tu Mensaje',
                messagePlaceholder: 'Cuéntame sobre tu proyecto...',
                send: 'Enviar Mensaje',
                sending: 'Enviando...',
                success: '¡Mensaje Enviado!',
                successMessage: 'Gracias por contactarme. Te responderé pronto.',
            },
        },
        // FAQ Section
        faq: {
            title: 'Insights Estratégicos',
            heading: '5 Insights Clave',
            description: 'Perspectivas estratégicas sobre el futuro de la experiencia del cliente y el marketing digital',
            questions: [
                {
                    q: '¿Qué es la Artificial Experience (AX) y cómo transforma la experiencia del cliente?',
                    a: 'La Artificial Experience representa la evolución natural de la Customer Experience al integrar inteligencia artificial de manera fluida en cada punto de contacto con el cliente. A diferencia de los chatbots tradicionales, la AX utiliza IA generativa y aprendizaje automático para crear experiencias personalizadas, predictivas y conversacionales que se adaptan en tiempo real a las necesidades individuales de cada usuario. Esta tecnología permite anticipar problemas antes de que ocurran, ofrecer recomendaciones genuinamente relevantes y proporcionar asistencia 24/7 con un nivel de empatía y comprensión contextual que antes era imposible. Las empresas que implementan AX están observando reducciones significativas en tiempos de respuesta, aumentos en satisfacción del cliente y mayor eficiencia operativa, todo mientras liberan a sus equipos humanos para enfocarse en interacciones de mayor valor estratégico.'
                },
                {
                    q: '¿Cómo se integra el Phygital Marketing en una estrategia omnicanal efectiva?',
                    a: 'El marketing phygital representa la convergencia estratégica entre experiencias físicas y digitales, creando un ecosistema donde ambos mundos se complementan sin fisuras. La implementación exitosa requiere sincronizar datos en tiempo real entre todos los canales, permitiendo que un cliente comience su journey en redes sociales, continúe en tienda física con asistencia personalizada basada en su historial digital, y finalice la compra mediante una app móvil sin perder contexto en ningún momento. Las tecnologías habilitadoras incluyen códigos QR inteligentes, realidad aumentada para pruebas virtuales de productos, beacons para experiencias basadas en ubicación y sistemas de gestión de identidad unificada. El objetivo fundamental es eliminar la fricción entre canales y crear una experiencia fluida que reconozca y valore al cliente independientemente del punto de contacto que elija utilizar.'
                },
                {
                    q: '¿Por qué es crucial medir el Customer Effort Score (CES) en 2026 y cómo se diferencia de otras métricas?',
                    a: 'El Customer Effort Score ha emergido como la métrica más predictiva de lealtad del cliente en la era digital, superando incluso al tradicional Net Promoter Score en ciertos contextos. Esta métrica evalúa específicamente cuánto esfuerzo debe invertir un cliente para resolver su necesidad, completar una compra o recibir soporte. La investigación ha demostrado consistentemente que los clientes que experimentan bajo esfuerzo tienen significativamente mayor probabilidad de repetir compras y recomendar la marca. La medición efectiva del CES implica encuestas post-interacción inmediatas, análisis de puntos de fricción en el customer journey mediante herramientas de session replay y análisis de sentimiento en conversaciones de soporte. Las organizaciones líderes están utilizando IA para identificar automáticamente patrones de alto esfuerzo y priorizar mejoras que generen el mayor impacto en la experiencia del cliente.'
                },
                {
                    q: '¿Cómo implementar Social Commerce efectivo más allá de simplemente publicar productos en redes sociales?',
                    a: 'El social commerce auténtico va mucho más allá de crear catálogos en Instagram o Facebook. Requiere construir comunidades genuinas donde el contenido generado por usuarios, las transmisiones en vivo con demostraciones de productos y las recomendaciones peer-to-peer impulsen naturalmente las decisiones de compra. Las estrategias más exitosas integran micro-influencers que comparten valores auténticos con la marca, implementan funcionalidades de compra en un solo clic directamente desde videos cortos, y utilizan IA conversacional para responder consultas en comentarios y mensajes directos de manera instantánea. El aspecto crítico es mantener la experiencia social y comunitaria mientras se reduce la fricción en el camino hacia la conversión. Las marcas que dominan social commerce están viendo que entre el 20% y 40% de sus ventas digitales provienen directamente de plataformas sociales, sin necesidad de dirigir tráfico hacia sitios web tradicionales.'
                },
                {
                    q: '¿Qué papel juega la Hyper-Personalization impulsada por IA en la retención de clientes?',
                    a: 'La hiperpersonalización representa el siguiente nivel evolutivo más allá de la segmentación tradicional, utilizando inteligencia artificial para crear experiencias únicas para cada individuo basándose en comportamiento en tiempo real, contexto situacional, historial completo de interacciones y señales predictivas. A diferencia de la personalización básica que simplemente inserta un nombre en un email, la hiperpersonalización ajusta dinámicamente el contenido del sitio web, las recomendaciones de productos, los mensajes de marketing, los precios dinámicos y hasta el tono de las comunicaciones según el perfil psicográfico y el momento específico del customer journey. Las tecnologías habilitadoras incluyen customer data platforms (CDP) que unifican datos de múltiples fuentes, motores de recomendación basados en aprendizaje profundo y sistemas de orquestación de experiencias que activan automáticamente el contenido óptimo para cada interacción. Las empresas que implementan correctamente la hiperpersonalización están observando incrementos en conversión del 15% al 25% y aumentos sustanciales en customer lifetime value al hacer que cada cliente sienta que la experiencia fue diseñada exclusivamente para él.'
                }
            ]
        },
        // Footer
        footer: {
            tagline: 'Optimizando experiencias del cliente a través de datos y estrategia',
            copyright: 'Todos los derechos reservados. Construido con pasión.',
            booksRecommend: 'Libros que Recomiendo',
        },
        // Secciones Marquee
        marquee: {
            trustedBy: 'Confían en Mí',
            toolsTechnologies: 'Herramientas y Tecnologías',
        },
        // Sección Libros
        books: {
            title: 'Libros que Recomiendo',
            description: 'Una selección de libros que han influido en mi forma de pensar sobre negocios, diseño y desarrollo personal.',
            backToHome: 'Volver al Inicio',
            buyOnAmazon: 'Comprar en Amazon',
            opinions: {
                atomicHabits: 'Un libro fundamental sobre la construcción de hábitos. Clear explica de manera clara y práctica cómo pequeños cambios pueden generar resultados extraordinarios. La metodología de "1% mejor cada día" es transformadora y aplicable a cualquier área de la vida.',
                leanStartup: 'Revolucionario para entender la metodología de desarrollo de productos y startups. Ries introduce conceptos clave como MVP y pivoteo que son esenciales en el mundo digital actual. Una lectura obligada para emprendedores y profesionales de tecnología.',
                thinkingFast: 'Kahneman explora los dos sistemas de pensamiento que gobiernan nuestras decisiones. Es fascinante descubrir cómo nuestro cerebro toma decisiones y los sesgos cognitivos que nos afectan. Fundamental para entender el comportamiento humano en negocios y diseño.',
                hooked: 'Excelente para entender cómo las aplicaciones y productos digitales crean hábitos en los usuarios. El modelo del "Hook" es muy práctico para diseñar experiencias que realmente enganchen. Útil tanto para product managers como para diseñadores UX.',
                designEveryday: 'Un clásico del diseño que sigue siendo relevante. Norman explica los principios fundamentales del diseño centrado en el usuario de manera accesible. Aunque algunos ejemplos son antiguos, los conceptos sobre usabilidad y affordances son atemporales.',
            },
        },
        // Detalle de Proyecto
        projectDetail: {
            notFound: 'Proyecto No Encontrado',
            notFoundMessage: 'El proyecto que estás buscando no existe.',
            backToProjects: 'Volver a Proyectos',
            overview: 'Descripción del Proyecto',
            technologies: 'Tecnologías Utilizadas',
        },
        // Navegación
        nav: {
            aboutMe: 'SOBRE MÍ',
            projects: 'PROYECTOS',
            contactMe: 'CONTÁCTAME',
            resume: 'CV',
        },
    },
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('es'); // Idioma por defecto: español

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'es' : 'en');
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}
