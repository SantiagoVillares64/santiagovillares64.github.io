// =====================================================================
//  CONTENIDO DEL PORTFOLIO — editá acá, no hace falta tocar el diseño.
//  Cada texto puede ser "igual en los dos idiomas" o { es: "...", en: "..." }.
//  Para sumar un proyecto: copiá un bloque de PROYECTOS y cambiale el id.
// =====================================================================

window.PERFIL = {
  nombre: "Santiago Villares",
  nombreCorto: "Santi Villares",
  foto: "img/santiago-quebrada.jpg", // si se pone null se muestran las iniciales
  fotoSobre: "img/santiago-puerto-madero.jpg",
  iniciales: "SV",
  estado: { es: "Disponible para trabajar · Buenos Aires", en: "Open to work · Buenos Aires, Argentina" },
  titular: {
    es: "Me meto en mundos que no conozco <span>hasta poder liderarlos.</span>",
    en: "I dive into worlds I don't know <span>until I can lead them.</span>"
  },
  bajada: {
    es: "Soy Licenciado en Negocios Digitales (UdeSA). Armé una marca de vino a partir de una botella, coordiné una misión de 200 personas y entreno modelos de datos. Me gusta construir cosas desde cero, en equipo.",
    en: "I hold a degree in Digital Business from Universidad de San Andrés. I built a wine brand starting from just a bottle, led a 200-person mission and train data models. I like building things from scratch, with a team."
  },
  ejes: [
    { es: "Datos", en: "Data" },
    { es: "Producto", en: "Product" },
    { es: "Marca y redes", en: "Brand & social" },
    { es: "IA aplicada", en: "Applied AI" }
  ],
  cv: { es: "docs/CV_Santiago_Villares_ES.pdf", en: "docs/CV_Santiago_Villares_EN.pdf" },
  email: "santiagovillares64@gmail.com",
  linkedin: "https://www.linkedin.com/in/santiago-villares/",
  youtube: "https://www.youtube.com/@santiagovillares6994",
  sobreMi: {
    es: [
      "Lo que más me define es meterme de lleno en algo que no conozco. Así aprendí el mundo del vino para poder contar la historia de Famiglia del Favero, me certifiqué como instructor de ski para trabajar una temporada en Vermont y me metí en machine learning durante la facultad.",
      "Me mueven el esfuerzo, las ganas de aprender, la constancia y entender al otro. Fuera del trabajo juego al fútbol con San Bombazo, mi equipo amateur, y soy parte de la comunidad de jóvenes de mi parroquia, donde coordino actividades desde 2022."
    ],
    en: [
      "What defines me most is diving fully into things I don't know yet. That's how I learned the wine world to tell Famiglia del Favero's story, got certified as a ski instructor to work a season in Vermont, and got into machine learning during college.",
      "I'm driven by effort, eagerness to learn, consistency and understanding others. Outside work I play football with San Bombazo, my amateur team, and I'm part of my parish youth community, where I've coordinated activities since 2022."
    ]
  },
  datos: [
    { n: "200", t: { es: "personas en la Misión de Pascua que lideré", en: "people at the Easter Mission I led" } },
    { n: "400+", t: { es: "alumnos de ski, 100% en inglés", en: "ski students, 100% in English" } },
    { n: "3", t: { es: "cuentas que manejé como Community Manager", en: "accounts I've run as Community Manager" } },
    { n: "2026", t: { es: "Licenciado en Negocios Digitales, UdeSA", en: "BA in Digital Business, UdeSA" } }
  ]
};

window.CATEGORIAS = [
  { id: "todos", es: "Todos", en: "All" },
  { id: "datos", es: "Datos e IA", en: "Data & AI" },
  { id: "producto", es: "Producto", en: "Product" },
  { id: "negocio", es: "Negocio", en: "Business" },
  { id: "marca", es: "Marca y redes", en: "Brand & social" },
  { id: "liderazgo", es: "Liderazgo", en: "Leadership" }
];

window.PROYECTOS = [
  {
    id: "famiglia",
    cats: ["marca", "producto", "negocio"],
    fecha: "2025 – 2026",
    tipo: { es: "Trabajo · part-time", en: "Job · part-time" },
    titulo: "Famiglia del Favero",
    resumen: {
      es: "Construí una marca de vino a partir de una botella: identidad, web, catálogo, redes y los pedidos de punta a punta.",
      en: "I built a wine brand starting from just a bottle: identity, website, catalog, social media and orders end to end."
    },
    portada: { img: "img/famiglia-trio.jpg", pos: "center 60%" },
    rol: { es: "Desarrollador de Producto · equipo de 3 a 5 personas", en: "Product Developer · team of 3 to 5" },
    contexto: {
      es: "Famiglia del Favero es una marca de vinos de Mendoza. Cuando llegué, la marca solo existía como botella: no había identidad, web, catálogo ni redes.",
      en: "Famiglia del Favero is a wine brand from Mendoza. When I joined, the brand only existed as a bottle: no identity, website, catalog or social media."
    },
    hice: {
      es: [
        "Definí el posicionamiento y la identidad de la marca desde cero.",
        "Diseñé y programé el sitio web y el catálogo digital (HTML, CSS y JavaScript), con un fotoshoot propio de los vinos.",
        "Manejé el Instagram de la marca: piezas en Illustrator y Canva, edición de video y planificación de contenido.",
        "Gestioné costos, precios, stock, márgenes y KPIs, y la carga del catálogo de productos.",
        "Coordiné 3 a 4 pedidos de marca blanca de hasta 240 botellas: diseño de etiquetas, proveedores, armado y entrega.",
        "Configuré y publiqué una campaña propia en Meta Ads con presupuesto acotado, ajustando la segmentación según resultados."
      ],
      en: [
        "Defined the brand's positioning and identity from scratch.",
        "Designed and coded the website and digital catalog (HTML, CSS and JavaScript), with my own product photoshoot.",
        "Ran the brand's Instagram: graphics in Illustrator and Canva, video editing and content planning.",
        "Managed costs, pricing, stock, margins and KPIs, plus the product catalog.",
        "Coordinated 3 to 4 white-label orders of up to 240 bottles: label design, suppliers, assembly and delivery.",
        "Set up and ran a small-budget Meta Ads campaign, adjusting targeting based on results."
      ]
    },
    aprendizaje: {
      es: "En el primer pedido de 60 botellas las etiquetas llegaron dañadas: por apuro no hubo una revisión final. De ahí armé un proceso de MVP físico: antes de cualquier pedido grande, el cliente ve y aprueba una muestra real.",
      en: "In the first 60-bottle order the labels arrived damaged, because there was no final check under time pressure. That led me to create a physical MVP process: before any large order, the client sees and approves a real sample."
    },
    resultado: {
      es: "Una marca con identidad, web, catálogo y redes propias, y un proceso de pedidos que fui mejorando pedido a pedido.",
      en: "A brand with its own identity, website, catalog and social media, and an order process I improved with every order."
    },
    herramientas: ["HTML / CSS / JS", "Illustrator", "Canva", "Meta Ads", "Excel"],
    galeria: [
      { img: "img/famiglia-malbec.jpg", alt: { es: "Malbec al atardecer, del fotoshoot propio", en: "Malbec at sunset, from my own photoshoot" } },
      { img: "img/famiglia-copa.jpg", alt: { es: "Malbec-Merlot en el viñedo", en: "Malbec-Merlot in the vineyard" } },
      { img: "img/feed-fincaelrosario.jpg", alt: { es: "El feed de Instagram de la marca", en: "The brand's Instagram feed" } }
    ],
    links: [{ texto: "@fincaelrosario.ar", url: "https://www.instagram.com/fincaelrosario.ar/" }]
  },
  {
    id: "sueldate",
    cats: ["negocio", "producto"],
    fecha: "2026",
    tipo: { es: "Tesis de grado", en: "Thesis" },
    titulo: "Sueldate",
    resumen: {
      es: "Mi tesis: un SaaS B2B de adelanto de sueldo para empresas medianas. Fui el CPO/CTO del equipo.",
      en: "My thesis: a B2B SaaS for earned wage access aimed at mid-sized companies. I was the team's CPO/CTO."
    },
    portada: { img: "img/sueldate-demo-day.jpg", pos: "center 35%" },
    rol: { es: "CPO/CTO · equipo de 3 (con Mateo Iriarte como CEO y Juan Bautista Medici como CFO)", en: "CPO/CTO · team of 3 (with Mateo Iriarte as CEO and Juan Bautista Medici as CFO)" },
    contexto: {
      es: "Las empresas medianas resuelven los adelantos de sueldo a mano: cada pedido lleva entre 30 y 60 minutos y les tensiona la caja. Del lado del empleado, el 57,9% vive de sueldo a sueldo.",
      en: "Mid-sized companies handle salary advances manually: each request takes 30 to 60 minutes and strains cash flow. On the employee side, 57.9% live paycheck to paycheck."
    },
    hice: {
      es: [
        "Como CPO/CTO, definí el producto: la app del empleado (saldo visible, retiro en 2 clics e historial) y el plan de integración con sistemas de nómina.",
        "Armé el roadmap de producto: MVP y primeros 15 clientes, app nativa para iOS y Android, 3 ciudades e integración con 3+ sistemas de nómina, hasta la expansión a Uruguay.",
        "Con el equipo dimensionamos el mercado: TAM de US$ 6.200M (que llega a US$ 61.058M en 10 años, CAGR 25,7%), SAM de US$ 250M y SOM de US$ 37,5M.",
        "Diseñamos el modelo de ingresos (fee por adelanto más una suscripción mensual de USD 75, 150 o 250 según el tamaño de la empresa) y el modelo financiero completo.",
        "Comparamos la propuesta con DailyPay, Payactiv, Dayforce, Payflow, minu y el BNA."
      ],
      en: [
        "As CPO/CTO, I defined the product: the employee app (visible balance, 2-click withdrawal and history) and the payroll-system integration plan.",
        "Built the product roadmap: MVP and first 15 clients, native iOS and Android app, 3 cities and integration with 3+ payroll systems, through expansion to Uruguay.",
        "As a team we sized the market: US$ 6.2B TAM (growing to US$ 61B in 10 years, 25.7% CAGR), US$ 250M SAM and US$ 37.5M SOM.",
        "We designed the revenue model (a fee per advance plus a USD 75, 150 or 250 monthly subscription by company size) and the full financial model.",
        "We benchmarked against DailyPay, Payactiv, Dayforce, Payflow, minu and Banco Nación."
      ]
    },
    resultado: {
      es: "Un plan de negocio completo, validado con entrevistas a gerentes de RRHH y finanzas de empresas medianas, y presentado ante un jurado.",
      en: "A complete business plan, validated through interviews with HR and finance managers at mid-sized companies, and pitched to a jury."
    },
    herramientas: [{ es: "Roadmap de producto", en: "Product roadmap" }, "Excel", { es: "Modelo financiero", en: "Financial model" }, "Business Model Canvas", "Benchmarking"],
    galeria: [
      { img: "img/sueldate-app.jpg", alt: { es: "La app: saldo visible, retiro en 2 clics e historial", en: "The app: visible balance, 2-click withdrawal and history" } },
      { img: "img/sueldate-posicionamiento.jpg", alt: { es: "Mapa de posicionamiento frente a la competencia", en: "Positioning map against competitors" } },
      { img: "img/sueldate-breakeven.jpg", alt: { es: "Camino al breakeven", en: "Path to breakeven" } }
    ],
    links: []
  },
  {
    id: "melipro",
    cats: ["datos", "negocio"],
    fecha: "",
    tipo: { es: "Caso de evaluación · Mercado Libre", en: "Assessment case · Mercado Libre" },
    titulo: "MeliPro",
    resumen: {
      es: "Un caso real de 90 minutos para Mercado Libre: qué proveedores conviene sumar a un programa comercial, usando IA con criterio propio.",
      en: "A real 90-minute case for Mercado Libre: which vendors to bring into a commercial program, using AI with my own judgment."
    },
    portada: { img: "img/melipro-problema.jpg", pos: "center" },
    rol: { es: "Individual · 90 minutos, uso de IA permitido y evaluado", en: "Solo · 90 minutes, AI use allowed and assessed" },
    contexto: {
      es: "Como parte de un proceso para Analista Jr, Mercado Libre me dio una cartera de 500 proveedores de Argentina, Brasil y México. La pregunta: qué perfil responde mejor al programa MeliPro, para priorizar la próxima ola de captación.",
      en: "As part of a Junior Analyst process, Mercado Libre gave me a portfolio of 500 vendors from Argentina, Brazil and Mexico. The question: which profile responds best to the MeliPro program, to prioritize the next acquisition wave."
    },
    hice: {
      es: [
        "Resolví 6 problemas reales de calidad de datos. Por ejemplo, 19 duplicados no eran copias idénticas sino registros con ruido, y elegí la fila correcta por la consistencia interna del dato en vez de aplicar una regla mecánica.",
        "Cuestioné los resultados de la IA en cada punto dudoso: descarté 3 de 5 hallazgos que no resistían chequeos de tamaño de muestra, mediana contra media y consistencia entre cortes.",
        "Documenté qué hizo la IA y qué fue criterio mío en cada decisión."
      ],
      en: [
        "Fixed 6 real data quality issues. For example, 19 duplicates weren't identical copies but noisy records, and I picked the right row by internal consistency instead of a mechanical rule.",
        "Challenged the AI's output at every ambiguous point: I dropped 3 of 5 findings that didn't hold up to sample-size, median-vs-mean and cross-segment checks.",
        "Documented what the AI did and what was my own judgment in each decision."
      ]
    },
    resultado: {
      es: "3 criterios de priorización respaldados con evidencia para la próxima ola de captación.",
      en: "3 evidence-backed prioritization criteria for the next acquisition wave."
    },
    herramientas: ["Python", "pandas", { es: "IA generativa", en: "Generative AI" }, "PowerPoint"],
    galeria: [
      { img: "img/melipro-metodo.jpg", alt: { es: "El método: cada hallazgo de la IA, puesto a prueba", en: "The method: every AI finding, put to the test" } },
      { img: "img/melipro-hallazgos.jpg", alt: { es: "Un hallazgo que sí resistió los chequeos", en: "A finding that held up to the checks" } },
      { img: "img/melipro-criterios.jpg", alt: { es: "Los 3 criterios de priorización", en: "The 3 prioritization criteria" } }
    ],
    links: []
  },
  {
    id: "mision",
    cats: ["liderazgo"],
    fecha: "2026",
    tipo: { es: "Voluntariado", en: "Volunteering" },
    titulo: { es: "Misión de Pascua 2026", en: "Easter Mission 2026" },
    resumen: {
      es: "Fui el Rector de una misión de 200 personas: presupuesto, logística, equipos y el seguimiento de cada participante.",
      en: "I was the head of a 200-person mission: budget, logistics, teams and follow-up with every participant."
    },
    portada: { img: "img/mision-remeras.jpg", pos: "center 70%" },
    rol: { es: "Rector · Coordinador de Actividades Comunitarias desde 2022", en: "Mission head · Community Activities Coordinator since 2022" },
    contexto: {
      es: "Cada Semana Santa, un grupo de jóvenes de la parroquia sale de misión. En 2026 me tocó ser el responsable de todo el evento.",
      en: "Every Holy Week, a group of young people from the parish goes on a mission. In 2026 I was responsible for the whole event."
    },
    hice: {
      es: [
        "Administré un presupuesto de $15.000.000 ARS.",
        "Organicé comidas, pagos y transporte.",
        "Diseñé la remera de la misión en Illustrator y Photoshop y coordiné la producción de las 200.",
        "Hice el seguimiento individual de cada uno de los 200 participantes.",
        "Coordiné varios equipos de trabajo al mismo tiempo."
      ],
      en: [
        "Managed a budget of ARS 15,000,000.",
        "Organized meals, payments and transport.",
        "Designed the mission T-shirt in Illustrator and Photoshop and managed production of all 200.",
        "Followed up individually with each of the 200 participants.",
        "Coordinated several teams at the same time."
      ]
    },
    resultado: {
      es: "La misión salió en tiempo y forma, sin incidentes mayores. Es el cuarto año seguido que lidero un grupo distinto.",
      en: "The mission ran on time with no major incidents. It's my fourth consecutive year leading a different group."
    },
    herramientas: [{ es: "Presupuesto", en: "Budgeting" }, { es: "Logística", en: "Logistics" }, { es: "Liderazgo de equipos", en: "Team leadership" }, "Illustrator", "Photoshop"],
    galeria: [
      { video: "img/mision-ronda.mp4", alt: { es: "La ronda de misioneros en el parque, todos con la remera que diseñé", en: "The missionaries' circle in the park, all wearing the T-shirt I designed" } },
      { img: "img/mision-altar.jpg", alt: { es: "Hablándole a los misioneros en la iglesia", en: "Speaking to the missionaries in the church" } }
    ],
    links: []
  },
  {
    id: "sagrada",
    cats: ["marca", "producto"],
    fecha: { es: "Actualidad", en: "Current" },
    tipo: { es: "Voluntariado", en: "Volunteering" },
    titulo: { es: "Jóvenes Sagrada Familia", en: "Sagrada Familia Youth" },
    resumen: {
      es: "Manejo el Instagram de los grupos de jóvenes de la parroquia y estoy armando su sitio web.",
      en: "I run the Instagram for my parish youth groups and I'm building their website."
    },
    portada: { img: "img/sagrada-iglesia.jpg", pos: "center 40%" },
    rol: { es: "Community Manager y desarrollador web", en: "Community Manager and web developer" },
    contexto: {
      es: "La parroquia Sagrada Familia tiene varios grupos de jóvenes, desde 5to año hasta la facultad. Las fechas y la información de cada grupo estaban dispersas.",
      en: "Sagrada Familia parish has several youth groups, from high school to college. Dates and information for each group were scattered."
    },
    hice: {
      es: [
        "Gestiono la cuenta @sagradafamilia.joven: diseño de piezas, edición de reels y planificación de contenido. Hoy tiene 1.908 seguidores.",
        "Uso mi automatización de clips con IA para sacar fragmentos de charlas y homilías.",
        "Estoy desarrollando la web de los grupos: una página por grupo y un calendario que se actualiza solo desde una planilla de Google."
      ],
      en: [
        "I run the @sagradafamilia.joven account: graphics, reel editing and content planning. It now has 1,908 followers.",
        "I use my AI clip automation to pull highlights from talks and homilies.",
        "I'm building the groups' website: one page per group and a calendar that updates itself from a Google Sheet."
      ]
    },
    resultado: {
      es: "74,7 mil visualizaciones en los últimos 30 días (octubre 2026), y una web en desarrollo que va a centralizar toda la información.",
      en: "74.7K views in the last 30 days (October 2026), and a website in progress that will bring all the information together."
    },
    herramientas: ["Instagram", "Canva", "Illustrator", "HTML / CSS / JS", "Google Sheets"],
    galeria: [
      { img: "img/perfil-sagradafamilia-joven.jpg", alt: { es: "El perfil de la cuenta, con sus estadísticas", en: "The account profile and its stats" } },
      { img: "img/sagrada-capilla.jpg", alt: { es: "La capilla de la parroquia", en: "The parish chapel" } }
    ],
    links: [{ texto: "@sagradafamilia.joven", url: "https://www.instagram.com/sagradafamilia.joven/" }]
  },
  {
    id: "sanbombazo",
    cats: ["marca"],
    fecha: { es: "Actualidad", en: "Current" },
    tipo: { es: "Proyecto personal", en: "Personal project" },
    titulo: "San Bombazo",
    resumen: {
      es: "Diseñé la camiseta de mi equipo de fútbol amateur y manejo su Instagram.",
      en: "I designed my amateur football team's jersey and run its Instagram."
    },
    portada: { img: "img/san-bombazo-camiseta-frente.jpg", pos: "center 30%" },
    rol: { es: "Jugador, diseñador y Community Manager", en: "Player, designer and Community Manager" },
    contexto: {
      es: "San Bombazo es el equipo de fútbol amateur con el que juego. Necesitábamos una camiseta propia y alguien que llevara las redes.",
      en: "San Bombazo is the amateur football team I play for. We needed our own jersey and someone to run our social media."
    },
    hice: {
      es: [
        "Diseñé la camiseta del equipo en Illustrator y Photoshop.",
        "Manejo la cuenta @sanbombazofc: piezas gráficas en Illustrator y Canva y edición de video."
      ],
      en: [
        "Designed the team jersey in Illustrator and Photoshop.",
        "Run the @sanbombazofc account: graphics in Illustrator and Canva and video editing."
      ]
    },
    resultado: {
      es: "El equipo juega con la camiseta que diseñé.",
      en: "The team plays in the jersey I designed."
    },
    herramientas: ["Illustrator", "Photoshop", "Canva"],
    galeria: [
      { img: "img/san-bombazo-camiseta-espalda.jpg", alt: { es: "El diseño de la espalda", en: "The back of the jersey" } },
      { img: "img/san-bombazo-equipo.jpg", alt: { es: "El equipo con la camiseta", en: "The team wearing the jersey" } },
      { img: "img/feed-sanbombazofc.jpg", alt: { es: "El feed de @sanbombazofc", en: "The @sanbombazofc feed" } }
    ],
    links: [{ texto: "@sanbombazofc", url: "https://www.instagram.com/sanbombazofc/" }]
  },
  {
    id: "airbnb",
    cats: ["datos"],
    fecha: "",
    tipo: { es: "Proyecto académico · UdeSA", en: "Academic project · UdeSA" },
    titulo: "Airbnb Lisboa",
    resumen: {
      es: "Una red neuronal que predice si un alojamiento de Lisboa va a tener ocupación baja, media o alta.",
      en: "A neural network that predicts whether a Lisbon listing will have low, medium or high occupancy."
    },
    portada: { img: "img/airbnb-amenities.jpg", pos: "right center" },
    rol: { es: "Equipo de 2 (con Juan Bautista Medici)", en: "Team of 2 (with Juan Bautista Medici)" },
    contexto: {
      es: "Con datos reales de 25.277 alojamientos y 85 variables, el objetivo era clasificar el nivel de ocupación de cada uno.",
      en: "Using real data from 25,277 listings and 85 variables, the goal was to classify each listing's occupancy level."
    },
    hice: {
      es: [
        "Convertí 804.905 amenities en formato JSON en 19 variables nuevas, eligiendo solo las que aparecían en al menos el 5% de los avisos y separaban bien alta de baja ocupación.",
        "Apliqué target encoding al barrio y one-hot encoding al tipo de propiedad, hasta llegar a 136 variables.",
        "Probé 3 arquitecturas hasta resolver el colapso de clase y el overfitting.",
        "La red final: 64 → 32 → 16 neuronas, con BatchNorm, Dropout progresivo y ReduceLROnPlateau."
      ],
      en: [
        "Turned 804,905 JSON amenities into 19 new features, keeping only those present in at least 5% of listings that clearly separated high from low occupancy.",
        "Applied target encoding to neighborhood and one-hot encoding to property type, reaching 136 features.",
        "Tested 3 architectures until I solved class collapse and overfitting.",
        "Final network: 64 → 32 → 16 neurons, with BatchNorm, progressive Dropout and ReduceLROnPlateau."
      ]
    },
    resultado: {
      es: "95% de accuracy y F1 macro de 0,92.",
      en: "95% accuracy and a macro F1 of 0.92."
    },
    herramientas: ["Python", "Keras", "pandas", "scikit-learn"],
    galeria: [
      { img: "img/airbnb-dataset.jpg", alt: { es: "Estadísticas clave del dataset", en: "Key dataset statistics" } },
      { img: "img/airbnb-modelo.jpg", alt: { es: "Arquitectura final del modelo", en: "Final model architecture" } }
    ],
    links: []
  },
  {
    id: "brighton",
    cats: ["datos", "negocio"],
    fecha: "2025",
    tipo: { es: "Proyecto académico · UdeSA", en: "Academic project · UdeSA" },
    titulo: "Brighton & Hove Albion",
    resumen: {
      es: "Un modelo estilo Moneyball para armar un plantel de fútbol con jugadores subvaluados.",
      en: "A Moneyball-style model to build a football squad from undervalued players."
    },
    portada: { img: "img/brighton-titulares.jpg", pos: "left center" },
    rol: { es: "Equipo de 2 (con Santino Galli)", en: "Team of 2 (with Santino Galli)" },
    contexto: {
      es: "El Brighton es conocido por fichar jugadores baratos usando datos. La consigna: replicar esa lógica con un modelo de optimización.",
      en: "Brighton is known for signing cheap players using data. The task: replicate that logic with an optimization model."
    },
    hice: {
      es: [
        "Construí métricas de rendimiento propias, ajustadas por posición y por evolución en el tiempo.",
        "Armé un modelo de valor esperado para cada jugador.",
        "Planteé una programación entera en PuLP que maximiza el rendimiento del plantel con restricciones de formación, cupos por posición y un presupuesto de hasta €250M."
      ],
      en: [
        "Built my own performance metrics, adjusted by position and by trend over time.",
        "Created an expected value model for each player.",
        "Wrote an integer program in PuLP that maximizes squad performance under formation, position-slot and budget (up to €250M) constraints."
      ]
    },
    resultado: {
      es: "Un plantel óptimo de €199,8M con €97M de subvaluación frente a su valor de mercado.",
      en: "An optimal €199.8M squad, €97M below its market value."
    },
    herramientas: ["Python", "PuLP", "pandas"],
    galeria: [
      { img: "img/brighton-modelo.jpg", alt: { es: "El modelo de optimización", en: "The optimization model" } },
      { img: "img/brighton-resultado.jpg", alt: { es: "Lo que dijo la simulación", en: "What the simulation showed" } }
    ],
    links: []
  },
  {
    id: "clips",
    cats: ["datos", "marca"],
    fecha: "2026",
    tipo: { es: "Proyecto personal", en: "Personal project" },
    titulo: { es: "Clips automáticos con IA", en: "Automatic AI clips" },
    resumen: {
      es: "Un flujo en Python que mira un video de YouTube, elige los mejores momentos y los deja listos como reels.",
      en: "A Python pipeline that watches a YouTube video, picks the best moments and turns them into reels."
    },
    portada: { kpi: "YouTube → Reels", nota: { es: "sin editar a mano", en: "no manual editing" }, tono: "ink" },
    rol: { es: "Proyecto propio", en: "Solo project" },
    contexto: {
      es: "Para las redes de la parroquia, cortar a mano los mejores fragmentos de una charla o una homilía llevaba horas.",
      en: "For the parish's social media, manually cutting the best parts of a talk or homily took hours."
    },
    hice: {
      es: [
        "Armé el flujo en Google Colab con GPU.",
        "yt-dlp descarga el audio y Whisper lo transcribe con marcas de tiempo.",
        "Mando la transcripción a la API de Gemini, que devuelve en JSON los mejores clips (de 45 segundos a 3 minutos, con ideas completas), con título, inicio, fin y el motivo de la elección.",
        "El flujo recorta esos fragmentos en formato vertical y genera la descripción para publicar.",
        "Hice una segunda versión que resume charlas largas de YouTube."
      ],
      en: [
        "Built the pipeline in Google Colab with a GPU.",
        "yt-dlp downloads the audio and Whisper transcribes it with timestamps.",
        "The transcript goes to the Gemini API, which returns the best clips as JSON (45 seconds to 3 minutes, complete ideas) with title, start, end and the reason for each pick.",
        "The pipeline cuts those segments in vertical format and writes the caption.",
        "I built a second version that summarizes long YouTube talks."
      ]
    },
    resultado: {
      es: "Pasar de un video largo a clips listos para publicar lleva minutos en vez de horas.",
      en: "Going from a long video to ready-to-post clips takes minutes instead of hours."
    },
    herramientas: ["Python", "Whisper", "Gemini API", "yt-dlp", "FFmpeg", "Google Colab"],
    galeria: [],
    links: []
  },
  {
    id: "churn",
    cats: ["datos"],
    fecha: "",
    tipo: { es: "Proyecto académico · UdeSA", en: "Academic project · UdeSA" },
    titulo: { es: "Churn en telecomunicaciones", en: "Telecom churn prediction" },
    resumen: {
      es: "Un modelo que anticipa qué clientes de una telco van a darse de baja.",
      en: "A model that predicts which telecom customers are about to leave."
    },
    portada: { img: "img/churn-factores.jpg", pos: "center" },
    rol: { es: "Equipo de 2 (con Juan Bautista Medici) · Ciencia de Datos", en: "Team of 2 (with Juan Bautista Medici) · Data Science" },
    contexto: {
      es: "Con datos de 3.150 clientes de una telco iraní, de los que el 15,7% se dio de baja, la pregunta era quién se va y por qué.",
      en: "Using data on 3,150 customers of an Iranian telecom, 15.7% of whom churned, the question was who leaves and why."
    },
    hice: {
      es: [
        "Comparé Regresión Logística, Random Forest y XGBoost, con y sin balanceo de clases.",
        "Usé SMOTE para corregir el desbalance entre clientes que se quedan y que se van.",
        "Analicé la importancia de cada variable para encontrar los factores de abandono."
      ],
      en: [
        "Compared Logistic Regression, Random Forest and XGBoost, with and without class balancing.",
        "Used SMOTE to fix the imbalance between customers who stay and who leave.",
        "Analyzed feature importance to find the drivers of churn."
      ]
    },
    resultado: {
      es: "XGBoost fue el mejor modelo: 96% de accuracy, recall de 0,94 y F1 de 0,89 en la clase de baja (Random Forest quedó cerca, con 95%). Con eso propusimos alertas tempranas y ofertas personalizadas para retener clientes.",
      en: "XGBoost was the best model: 96% accuracy, 0.94 recall and 0.89 F1 on the churn class (Random Forest came close at 95%). Based on that we proposed early alerts and personalized offers to retain customers."
    },
    herramientas: ["Python", "scikit-learn", "XGBoost", "SMOTE", "pandas"],
    galeria: [
      { img: "img/churn-resumen.jpg", alt: { es: "Comparación de los tres modelos", en: "Comparison of the three models" } }
    ],
    links: []
  },
  {
    id: "golfistics",
    cats: ["producto"],
    fecha: "",
    tipo: { es: "Proyecto académico · UdeSA", en: "Academic project · UdeSA" },
    titulo: "Golfistics",
    resumen: {
      es: "Rediseño del flujo de reserva de turnos de una app de golf, con investigación de usuarios.",
      en: "Redesign of a golf app's tee-time booking flow, based on user research."
    },
    portada: { img: "img/golfistics-portada.jpg", pos: "center" },
    rol: { es: "Equipo de 4 (con Medici, López Terán y Alric)", en: "Team of 4 (with Medici, López Terán and Alric)" },
    contexto: {
      es: "Golfistics conecta a jugadores con sus clubes para reservar canchas y seguir su juego, pero tenía una calificación de 2,2/5 en la App Store y fricciones en el flujo para sacar un turno.",
      en: "Golfistics connects players with their clubs to book tee times and track their game, but it had a 2.2/5 App Store rating and friction in the booking flow."
    },
    hice: {
      es: [
        "Investigación de usuarios: protopersona, punto de vista (POV) y preguntas How Might We.",
        "Identifiqué los puntos de fricción del flujo de reserva.",
        "Propusimos mejoras de usabilidad y comunicación, prototipadas en Figma con metodologías ágiles."
      ],
      en: [
        "User research: proto-persona, point of view (POV) and How Might We questions.",
        "Identified friction points in the booking flow.",
        "Proposed usability and communication improvements, prototyped in Figma using agile methods."
      ]
    },
    resultado: {
      es: "Testeamos el prototipo con 11 usuarios: el 100% pudo entrar a reservar, el 85,5% completó la reserva y le pusieron 8,2/10 a la facilidad para actualizar el handicap.",
      en: "We tested the prototype with 11 users: 100% got into the booking flow, 85.5% completed a booking and they rated handicap updates 8.2/10 for ease of use."
    },
    herramientas: ["Figma", "Scrum", "User research", { es: "Testeo de usabilidad", en: "Usability testing" }],
    galeria: [
      { img: "img/golfistics-prototipo.jpg", alt: { es: "El prototipo en media fidelidad", en: "The mid-fidelity prototype" } },
      { img: "img/golfistics-testeos.jpg", alt: { es: "Resultados de los testeos", en: "Test results" } }
    ],
    links: []
  },
  {
    id: "newgarden",
    cats: ["negocio", "marca"],
    fecha: "",
    tipo: { es: "Proyecto académico · UdeSA", en: "Academic project · UdeSA" },
    titulo: "New Garden Club",
    resumen: {
      es: "Un modelo de suscripción premium para una cadena de dietéticas.",
      en: "A premium subscription model for a health-food store chain."
    },
    portada: { img: "img/newgarden-club.jpg", pos: "center 70%" },
    rol: { es: "Proyecto en equipo · consultoría", en: "Team project · consulting" },
    contexto: {
      es: "New Garden es una cadena de alimentos naturales. La consigna era convertir la compra ocasional en habitual y sumar una fuente de ingresos recurrente.",
      en: "New Garden is a natural food chain. The task was to turn occasional purchases into habitual ones and add a recurring revenue stream."
    },
    hice: {
      es: [
        "Relevé el contexto de mercado y las oportunidades del negocio.",
        "Definí 4 perfiles: jóvenes profesionales y público fit como principales, familias y consumo corporativo como secundarios.",
        "Diseñé la propuesta de valor y 3 planes de suscripción: Esencial, Gourmet y Funcional.",
        "Comparé con casos internacionales como NatureBox y Thrive Market."
      ],
      en: [
        "Assessed the market context and the business's opportunities.",
        "Defined 4 profiles: young professionals and fitness-minded buyers as primary, families and corporate buyers as secondary.",
        "Designed the value proposition and 3 subscription plans: Essential, Gourmet and Functional.",
        "Benchmarked against NatureBox and Thrive Market."
      ]
    },
    resultado: {
      es: "Una propuesta de club por suscripción que suma recurrencia y un flujo de ingresos mensual estable.",
      en: "A subscription club proposal that adds recurring purchases and a stable monthly revenue stream."
    },
    herramientas: [{ es: "Segmentación", en: "Segmentation" }, "Benchmarking", { es: "Propuesta de valor", en: "Value proposition" }],
    galeria: [
      { img: "img/newgarden-perfiles.jpg", alt: { es: "Los perfiles apuntados", en: "Target profiles" } },
      { img: "img/newgarden-planes.jpg", alt: { es: "Los 3 planes de suscripción", en: "The 3 subscription plans" } }
    ],
    links: []
  }
];

// Proyectos más chicos: se muestran en una lista compacta.
window.MAS_PROYECTOS = [
  { titulo: { es: "Imágenes de Marte", en: "Mars image classification" }, texto: { es: "CNN propia (65%) y luego transfer learning con MobileNetV2 (94%) sobre 2.506 imágenes.", en: "Custom CNN (65%), then transfer learning with MobileNetV2 (94%) on 2,506 images." }, tag: "Keras" },
  { titulo: { es: "Predictor del Mundial 2026", en: "World Cup 2026 predictor" }, texto: { es: "Poisson bivariada y ratings Elo para predecir resultados de los 48 equipos en fase de grupos.", en: "Bivariate Poisson and Elo ratings to predict group-stage scores for all 48 teams." }, tag: "Python" },
  { titulo: { es: "Pit stops en Fórmula 1", en: "Formula 1 pit stops" }, texto: { es: "Cuántas posiciones pierde un piloto según la duración de su parada, con escenarios mejor, esperado y peor.", en: "How many positions a driver loses based on pit stop length, with best, expected and worst cases." }, tag: "pandas" },
  { titulo: { es: "Industria del fast fashion", en: "Fast fashion industry" }, texto: { es: "Cinco fuerzas de Porter, rentabilidad y ciclo de vida del sector: Inditex, H&M y Shein. Equipo de 4.", en: "Porter's five forces, profitability and industry life cycle: Inditex, H&M and Shein. Team of 4." }, tag: { es: "Estrategia", en: "Strategy" } },
  { titulo: { es: "Proyección financiera de AMD", en: "AMD financial projection" }, texto: { es: "Aporté en estados contables, ratios de rentabilidad y FODA en el contexto de su expansión en IA. Equipo de 5.", en: "I worked on financial statements, profitability ratios and SWOT in the context of its AI expansion. Team of 5." }, tag: { es: "Finanzas", en: "Finance" } }
];

window.EXPERIENCIA = [
  {
    fecha: { es: "Dic 2025 – Mar 2026", en: "Dec 2025 – Mar 2026" },
    puesto: { es: "Instructor de Ski", en: "Ski Instructor" },
    lugar: "Vail Resorts · Vermont, EE. UU.",
    texto: { es: "Temporada full-time con certificación PSIA Alpine Level 1. Enseñé a más de 400 alumnos, 100% en inglés.", en: "Full-time season with PSIA Alpine Level 1 certification. Taught 400+ students, 100% in English." },
    foto: ["img/vail-pista.jpg", "img/vail-aerosilla.jpg"],
    fotoAlt: [
      { es: "Con otros instructores frente a la góndola de Stowe, Vermont", en: "With fellow instructors by the Stowe gondola, Vermont" },
      { es: "En la aerosilla, con mi credencial de instructor", en: "On the chairlift, wearing my instructor badge" }
    ]
  },
  {
    fecha: { es: "Mar 2025 – May 2026", en: "Mar 2025 – May 2026" },
    puesto: { es: "Desarrollador de Producto", en: "Product Developer" },
    lugar: "Famiglia del Favero · Buenos Aires y Mendoza",
    texto: { es: "Construí la marca desde cero: identidad, web, catálogo, redes, precios y pedidos de marca blanca.", en: "Built the brand from scratch: identity, website, catalog, social media, pricing and white-label orders." },
    proyecto: "famiglia"
  },
  {
    fecha: { es: "2022 – actualidad", en: "2022 – present" },
    puesto: { es: "Coordinador de Actividades Comunitarias", en: "Community Activities Coordinator" },
    lugar: { es: "Voluntariado católico · Parroquia Sagrada Familia", en: "Catholic volunteering · Sagrada Familia parish" },
    texto: { es: "Cuatro años seguidos liderando un grupo distinto. En 2026, Rector de la Misión de Pascua.", en: "Four years in a row leading a different group. In 2026, head of the Easter Mission." },
    proyecto: "mision"
  },
  {
    fecha: { es: "2022 – 2026", en: "2022 – 2026" },
    puesto: { es: "Licenciatura en Negocios Digitales", en: "BA in Digital Business" },
    lugar: "Universidad de San Andrés",
    texto: { es: "Foco en Investigación Operativa, Arquitectura de Datos, Marketing Digital y Gestión de Productos Digitales. Tesis: Sueldate.", en: "Focus on Operations Research, Data Architecture, Digital Marketing and Digital Product Management. Thesis: Sueldate." },
    foto: "img/udesa-recibida.jpg",
    fotoAlt: { es: "El día que me recibí, con mi familia", en: "Graduation day, with my family" },
    proyecto: "sueldate"
  }
];

window.REDES = [
  {
    cuenta: "@sagradafamilia.joven",
    url: "https://www.instagram.com/sagradafamilia.joven/",
    img: "img/perfil-sagradafamilia-joven.jpg",
    estado: { es: "Actual", en: "Current" },
    texto: { es: "Los grupos de jóvenes de mi parroquia: piezas, reels y clips de charlas. 1.908 seguidores y 74,7 mil visualizaciones en 30 días.", en: "My parish youth groups: graphics, reels and clips from talks. 1,908 followers and 74.7K views in 30 days." }
  },
  {
    cuenta: "@fincaelrosario.ar",
    url: "https://www.instagram.com/fincaelrosario.ar/",
    img: "img/feed-fincaelrosario.jpg",
    estado: "2025 – 2026",
    texto: { es: "Famiglia del Favero, la marca de vinos: fotoshoot propio, piezas en Illustrator y Canva, y una campaña en Meta Ads.", en: "Famiglia del Favero, the wine brand: my own photoshoot, Illustrator and Canva graphics, and a Meta Ads campaign." }
  },
  {
    cuenta: "@sanbombazofc",
    url: "https://www.instagram.com/sanbombazofc/",
    img: "img/feed-sanbombazofc.jpg",
    estado: { es: "Actual", en: "Current" },
    texto: { es: "Mi equipo de fútbol amateur. Diseñé la camiseta en Illustrator y Photoshop y manejo la cuenta.", en: "My amateur football team. I designed the jersey in Illustrator and Photoshop and run the account." }
  }
];

window.SKILLS = [
  { grupo: { es: "Datos", en: "Data" }, items: ["SQL", "Python", "pandas · NumPy", "scikit-learn", "Keras / TensorFlow", "XGBoost", "PuLP", "Power BI", "Power Query", "Tableau", { es: "Excel avanzado", en: "Advanced Excel" }] },
  { grupo: { es: "IA aplicada", en: "Applied AI" }, items: ["Whisper", "Gemini API", "yt-dlp · FFmpeg", { es: "Herramientas de código con IA", en: "AI coding tools" }, "Git"] },
  { grupo: { es: "Producto y web", en: "Product & web" }, items: ["Figma", "Scrum · Kanban", "HTML · CSS · JavaScript", "Notion"] },
  { grupo: { es: "Marketing y diseño", en: "Marketing & design" }, items: ["Meta Ads", "Google Ads", "Illustrator", "Canva", { es: "Edición de video", en: "Video editing" }, { es: "Photoshop (básico)", en: "Photoshop (basic)" }] }
];

window.CERTIFICADOS = [
  { nombre: { es: "SQL Avanzado", en: "SQL (Advanced)" }, emisor: "HackerRank", fecha: { es: "Sept 2026", en: "Sep 2026" }, archivo: "docs/certificado-sql.pdf" },
  { nombre: "Power BI", emisor: "Santander Open Academy", fecha: { es: "Ago 2026", en: "Aug 2026" }, archivo: "docs/certificado-power-bi.pdf" },
  { nombre: "Google Ads Search", emisor: "Google Skillshop", fecha: { es: "Sept 2026", en: "Sep 2026" }, archivo: "docs/certificado-google-ads.pdf" },
  { nombre: "PSIA Alpine Level 1", emisor: "Professional Ski Instructors of America", fecha: "2025", archivo: null }
];

window.IDIOMAS = [
  { es: "Español · nativo", en: "Spanish · native" },
  { es: "Inglés · avanzado (Cambridge IGCSE), usado a diario trabajando en EE. UU.", en: "English · advanced (Cambridge IGCSE), used daily working in the US" }
];

// Textos fijos de la interfaz
window.UI = {
  nav: { proyectos: { es: "Proyectos", en: "Projects" }, experiencia: { es: "Experiencia", en: "Experience" }, redes: { es: "Redes", en: "Social" }, contacto: { es: "Contacto", en: "Contact" } },
  verProyectos: { es: "Ver proyectos", en: "See projects" },
  descargarCV: { es: "Descargar CV", en: "Download CV" },
  sobreMi: { es: "Sobre mí", en: "About me" },
  proyectosTitulo: { es: "Lo que construí", en: "What I've built" },
  proyectosBajada: { es: "Trabajo, facultad y proyectos propios. Tocá uno para ver el caso completo.", en: "Work, college and personal projects. Tap one to see the full case." },
  verCaso: { es: "Ver caso", en: "View case" },
  masProyectos: { es: "Más proyectos de la facultad", en: "More college projects" },
  contexto: { es: "Contexto", en: "Context" },
  hice: { es: "Lo que hice", en: "What I did" },
  aprendizaje: { es: "Lo que aprendí", en: "What I learned" },
  resultado: { es: "Resultado", en: "Outcome" },
  herramientas: { es: "Herramientas", en: "Tools" },
  cerrar: { es: "Cerrar", en: "Close" },
  experienciaTitulo: { es: "Por dónde pasé", en: "Where I've been" },
  redesTitulo: { es: "Redes que manejo", en: "Accounts I run" },
  redesBajada: { es: "Como Community Manager diseño piezas, edito video y planifico contenido.", en: "As a Community Manager I design graphics, edit video and plan content." },
  skillsTitulo: { es: "Herramientas y certificados", en: "Skills & certificates" },
  idiomas: { es: "Idiomas", en: "Languages" },
  verCertificado: { es: "Ver certificado", en: "View certificate" },
  contactoTitulo: { es: "¿Hablamos?", en: "Let's talk" },
  contactoBajada: { es: "Estoy buscando mi próximo trabajo full-time. Escribime y te respondo.", en: "I'm looking for my next full-time role. Drop me a line." },
  youtubeNota: { es: "En YouTube están los vlogs de mi viaje por Europa.", en: "My YouTube channel has vlogs from my trip around Europe." },
  copiar: { es: "Copiar mail", en: "Copy email" },
  copiado: { es: "Copiado", en: "Copied" }
};
