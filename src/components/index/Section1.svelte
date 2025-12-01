<script>
  import Container from "../utils/Container.svelte";
  import lang from "../../stores/lang";

  let { t } = $lang;

  const achievements = [
    {
      label: { en: "Projects Delivered", fr: "Projets Livrés" },
      value: "12+",
    },
    {
      label: { en: "Households Powered", fr: "Ménages Alimentés" },
      value: "104+",
    },
    {
      label: { en: "System Uptime", fr: "Disponibilité du Système" },
      value: "93%",
    },
  ];

  const pillars = [
    {
      title: { en: "Our Work", fr: "Notre Travail" },
      copy: {
        en: "End-to-end delivery from hydrology studies to grid integration, with embedded O&M support.",
        fr: "Livraison de bout en bout, des études hydrologiques à l'intégration au réseau, avec support O&M intégré.",
      },
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="1.5"/>
               <path d="M12 8V16M8 10L16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
    {
      title: { en: "Our Approach", fr: "Notre Approche" },
      copy: {
        en: "Local technicians, modular systems, transparent reporting. Built with and for communities.",
        fr: "Techniciens locaux, systèmes modulaires, rapports transparents. Construit avec et pour les communautés.",
      },
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/>
               <path d="M4 20C4 15.58 7.58 12 12 12C16.42 12 20 15.58 20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
    {
      title: { en: "Impact", fr: "Impact" },
      copy: {
        en: "Diesel displacement, new jobs, reliable power for clinics, schools, and small industry.",
        fr: "Remplacement du diesel, nouveaux emplois, énergie fiable pour les cliniques, écoles et petites industries.",
      },
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M4 12C6 6 10 4 12 4C14 4 18 6 20 12C18 18 14 20 12 20C10 20 6 18 4 12Z" stroke="currentColor" stroke-width="1.5"/>
               <path d="M12 8V12L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
  ];

  const values = [
    {
      en: "Local partnership and training",
      fr: "Partenariat et formation locaux",
    },
    {
      en: "Reliability through robust design",
      fr: "Fiabilité grâce à une conception robuste",
    },
    {
      en: "Radical transparency on pricing and performance",
      fr: "Transparence radicale sur les prix et les performances",
    },
    {
      en: "Stewardship of rivers and ecosystems",
      fr: "Gestion responsable des rivières et des écosystèmes",
    },
  ];

  const communityImpact = [
    {
      en: "Electrification of remote villages",
      fr: "Électrification des villages isolés",
    },
    {
      en: "Improved access to healthcare (lighting + refrigeration)",
      fr: "Amélioration de l'accès aux soins de santé (éclairage + réfrigération)",
    },
    {
      en: "Enhanced school attendance and performance",
      fr: "Amélioration de la fréquentation et des performances scolaires",
    },
    {
      en: "Reduced reliance on kerosene, candles, and diesel generators",
      fr: "Réduction de la dépendance au kérosène, aux bougies et aux générateurs diesel",
    },
  ];

  const environmentalImpact = [
    {
      en: "Run-of-river systems preserve natural flows and fish migration",
      fr: "Les systèmes au fil de l'eau préservent les flux naturels et la migration des poissons",
    },
    {
      en: "No large dams, no deforestation",
      fr: "Pas de grands barrages, pas de déforestation",
    },
    {
      en: "Reduction of CO2 and black carbon emissions",
      fr: "Réduction des émissions de CO2 et de carbone noir",
    },
  ];

  const sdgs = [
    {
      en: "SDG 7 (Affordable & Clean Energy)",
      fr: "ODD 7 (Énergie propre et d'un coût abordable)",
    },
    {
      en: "SDG 13 (Climate Action)",
      fr: "ODD 13 (Mesures relatives à la lutte contre les changements climatiques)",
    },
    {
      en: "SDG 9 (Industry, Innovation & Infrastructure)",
      fr: "ODD 9 (Industrie, innovation et infrastructure)",
    },
  ];
</script>

<div id="about" class="bg-white text-gray-900">
  <!-- Hero / Ribbon -->
  <section class="relative overflow-hidden bg-white text-gray-900 py-20">
    <Container overflowHidden={false}>
      <div
        class="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center"
      >
        <div data-aos="fade-up">
          <p class="uppercase tracking-[0.35em] text-sm text-emerald-600">
            {t("About Nexus Energy Group", "À propos de Nexus Energy Group")}
          </p>
          <h2
            class="mt-4 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
          >
            {t("Who We Are", "Qui Nous Sommes")}
          </h2>

          <p class="mt-6 text-sm md:text-base text-gray-600 max-w-xl">
            {t(
              "Nexus Energy is a renewable energy startup committed to deploying small-scale hydropower solutions to serve the energy needs of underserved populations in the DRC.",
              "Nexus Energy est une startup d'énergie renouvelable engagée à déployer des solutions hydroélectriques à petite échelle pour répondre aux besoins énergétiques des populations mal desservies en RDC.",
            )}
          </p>

          <p class="mt-2 text-sm md:text-base text-gray-600 max-w-xl">
            {t(
              "Founded by Dr. Kapiamba Kashala Fabrice, with co-founders Mrs. Divine Kavunga and Dr. Jonathan Kabamba, we are building a future in which clean, sustainable electricity is accessible to every Congolese community.",
              "Fondée par Dr. Kapiamba Kashala Fabrice, avec les cofondateurs Mme Divine Kavunga et Dr. Jonathan Kabamba, nous construisons un avenir dans lequel l'électricité propre et durable est accessible à chaque communauté congolaise.",
            )}
          </p>
        </div>

        <div
          class="relative isolate rounded-3xl border border-emerald-100 bg-white px-8 py-10 shadow-[0_12px_45px_-20px_rgba(16,185,129,0.25)]"
          data-aos="zoom-in"
        >
          <div
            class="absolute -top-10 -right-12 h-24 w-24 rounded-full bg-emerald-400/20 blur-3xl"
          ></div>
          <div
            class="absolute -bottom-12 -left-14 h-28 w-28 rounded-full bg-emerald-500/10 blur-3xl"
          ></div>

          <h3 class="text-xs uppercase tracking-[0.3em] text-emerald-600">
            {t("Impact At A Glance", "Impact en un coup d'œil")}
          </h3>
          <div class="mt-6 grid gap-6">
            {#each achievements as stat (stat.label.en)}
              <div
                class="flex items-baseline justify-between border-b border-emerald-100 pb-4"
              >
                <span class="text-lg font-medium text-gray-700">
                  {t(stat.label.en, stat.label.fr)}
                </span>
                <span class="text-2xl font-semibold text-emerald-600">
                  {stat.value}
                </span>
              </div>
            {/each}
          </div>
          <p class="mt-6 text-xs tracking-wide text-gray-500">
            {t(
              "Every deployment includes on-site training, open-book pricing, and remote performance monitoring.",
              "Chaque déploiement comprend une formation sur site, une tarification transparente et une surveillance à distance des performances.",
            )}
          </p>
        </div>
        <div class="py-3"></div>
      </div>
    </Container>
  </section>

  <!-- Pillars -->
  <section class="py-20">
    <Container>
      <div class="mx-auto max-w-4xl text-center" data-aos="fade-up">
        <h3 class="text-xs uppercase tracking-[0.35em] text-emerald-600">
          {t("What We Deliver", "Ce Que Nous Livrons")}
        </h3>
        <p class="mt-3 text-3xl md:text-4xl font-semibold text-gray-900">
          {t(
            "From river to reliable kilowatts",
            "De la rivière aux kilowatts fiables",
          )}
        </p>
        <p class="mt-4 text-gray-600">
          {t(
            "Our teams co-design each project with community leaders to ensure affordability, durability, and measurable impact.",
            "Nos équipes co-conçoivent chaque projet avec les leaders communautaires pour garantir l'accessibilité, la durabilité et un impact mesurable.",
          )}
        </p>
      </div>

      <div
        class="mt-14 grid gap-6 md:grid-cols-3"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {#each pillars as pillar}
          <article
            class="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
            >
              {@html pillar.icon}
            </div>
            <h4 class="mt-5 text-xl font-semibold text-gray-900">
              {t(pillar.title.en, pillar.title.fr)}
            </h4>
            <p class="mt-3 text-sm text-gray-600 leading-relaxed">
              {t(pillar.copy.en, pillar.copy.fr)}
            </p>
          </article>
        {/each}
      </div>
      <div class="py-4"></div>
    </Container>
  </section>

  <!-- Why Hydropower Section -->
  <section class="py-20 bg-slate-50">
    <Container>
      <div class="mx-auto max-w-4xl" data-aos="fade-up">
        <h3 class="text-xs uppercase tracking-[0.35em] text-emerald-600">
          {t("Why Hydropower?", "Pourquoi l'Hydroélectricité?")}
        </h3>
        <p class="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          {t(
            "Hydropower is a proven, efficient, and renewable energy source. Our focus on run-of-river technologies avoids the environmental damage of large dams while delivering clean energy 24/7, even when solar is unavailable.",
            "L'hydroélectricité est une source d'énergie éprouvée, efficace et renouvelable. Notre accent sur les technologies au fil de l'eau évite les dommages environnementaux des grands barrages tout en fournissant de l'énergie propre 24h/24 et 7j/7, même lorsque le solaire n'est pas disponible.",
          )}
        </p>
      </div>
    </Container>
  </section>

  <!-- Impact Section -->
  <section id="impact" class="py-20">
    <Container>
      <div class="mx-auto max-w-4xl text-center mb-16" data-aos="fade-up">
        <p class="text-xs uppercase tracking-[0.35em] text-emerald-600">
          {t("Our Impact", "Notre Impact")}
        </p>
        <h2
          class="mt-4 text-3xl md:text-5xl xl:text-6xl font-bold leading-tight"
        >
          {t("Creating lasting change", "Créer un changement durable")}
        </h2>
      </div>

      <div class="grid gap-8 md:grid-cols-3 mt-14">
        <!-- Community Impact -->
        <article
          class="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          data-aos="fade-up"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h4 class="mt-5 text-xl font-semibold text-gray-900">
            {t("Community Impact", "Impact Communautaire")}
          </h4>
          <ul class="mt-4 space-y-2 text-sm text-gray-600 leading-relaxed">
            {#each communityImpact as impact}
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 mt-1">•</span>
                <span>{t(impact.en, impact.fr)}</span>
              </li>
            {/each}
          </ul>
        </article>

        <!-- Environmental Impact -->
        <article
          class="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12C6 6 10 4 12 4C14 4 18 6 20 12C18 18 14 20 12 20C10 20 6 18 4 12Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M12 8V12L14.5 14.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <h4 class="mt-5 text-xl font-semibold text-gray-900">
            {t("Environmental Impact", "Impact Environnemental")}
          </h4>
          <ul class="mt-4 space-y-2 text-sm text-gray-600 leading-relaxed">
            {#each environmentalImpact as impact}
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 mt-1">•</span>
                <span>{t(impact.en, impact.fr)}</span>
              </li>
            {/each}
          </ul>
        </article>

        <!-- SDGs -->
        <article
          class="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h4 class="mt-5 text-xl font-semibold text-gray-900">
            {t(
              "Sustainable Development Goals (SDGs)",
              "Objectifs de Développement Durable (ODD)",
            )}
          </h4>
          <p class="mt-4 text-sm text-gray-600 leading-relaxed mb-3">
            {t("Our work supports:", "Notre travail soutient:")}
          </p>
          <ul class="space-y-2 text-sm text-gray-600 leading-relaxed">
            {#each sdgs as sdg}
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 mt-1">•</span>
                <span>{t(sdg.en, sdg.fr)}</span>
              </li>
            {/each}
          </ul>
        </article>
      </div>
      <div class="py-4"></div>
    </Container>
  </section>

  <div id="vision" class="py-2"></div>
  <!-- Story -->
  <section class="relative overflow-hidden bg-slate-900 py-20 text-white">
    <div class="absolute inset-0">
      <div
        class="absolute inset-y-0 left-1/2 w-[120%] -skew-x-12 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 opacity-20"
      ></div>
    </div>

    <Container>
      <div class="relative z-10 grid gap-16 lg:grid-cols-[1fr_0.8fr]">
        <div data-aos="fade-right">
          <p class="text-xs uppercase tracking-[0.35em] text-emerald-300">
            {t("Why We Exist", "Pourquoi Nous Existons")}
          </p>

          <h3 class="mt-3 text-2xl md:text-3xl font-semibold">
            {t("Vision", "Vision")}
          </h3>
          <div class="mt-2 text-emerald-100 leading-relaxed">
            {t(
              "To create a decentralized energy ecosystem rooted in local rivers, local labor, and long-term sustainability.",
              "Créer un écosystème énergétique décentralisé enraciné dans les rivières locales, la main-d'œuvre locale et la durabilité à long terme.",
            )}
          </div>

          <h3 class="mt-3 text-2xl md:text-3xl font-semibold">
            {t("Mission", "Mission")}
          </h3>
          <div class="mt-2">
            {t(
              "To aim to deliver cost-effective, low-impact hydropower installations that power rural homes, schools, health centers, and small businesses, while promoting environmental stewardship and community ownership.",
              "Viser à fournir des installations hydroélectriques rentables et à faible impact qui alimentent les foyers ruraux, les écoles, les centres de santé et les petites entreprises, tout en promouvant la gestion environnementale et la propriété communautaire.",
            )}
          </div>

          <div class="mt-10">
            <h4
              class="flex items-center gap-3 text-lg font-semibold text-white"
            >
              <span class="inline-flex h-8 w-1.5 rounded-full bg-emerald-400"
              ></span>
              {t("Core Values", "Valeurs Fondamentales")}
            </h4>
            <ul class="mt-4 space-y-3 text-sm text-emerald-100">
              {#each values as value, index}
                <li class="flex items-start gap-3">
                  <span
                    class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs"
                  >
                    {index + 1}
                  </span>
                  <span>{t(value.en, value.fr)}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>

        <aside
          class="relative mx-auto w-full max-w-[24rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 pb-10 shadow-[0_30px_60px_-20px_rgba(15,118,110,0.45)] backdrop-blur"
          data-aos="fade-left"
        >
          <div
            class="relative aspect-square overflow-hidden rounded-b-[2.2rem]"
          >
            <img
              src="/favicon.png"
              alt="Nexus Energy field team"
              class="h-full w-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"
            ></div>
          </div>

          <div class="px-6 pt-6">
            <p class="text-xs uppercase tracking-[0.3em] text-emerald-300">
              {t("Field Leadership", "Leadership sur le Terrain")}
            </p>
            <p class="mt-2 text-sm text-emerald-100/90 leading-relaxed">
              {t(
                "Engineers, hydrologists, and community specialists working side by side to deliver bankable outcomes for clinics, schools, and agribusiness.",
                "Ingénieurs, hydrologues et spécialistes communautaires travaillant côte à côte pour fournir des résultats bancables pour les cliniques, les écoles et l'agro-industrie.",
              )}
            </p>
          </div>
        </aside>
        <div class="py-2"></div>
      </div>
    </Container>
  </section>

  <!-- CTA -->
  <section class="py-14">
    <Container>
      <div
        class="relative overflow-hidden rounded-3xl px-8 py-8"
        data-aos="zoom-in"
      >
        <div
          class="relative z-10 grid gap-8 md:grid-cols-[1.6fr_1fr] items-center"
        >
          <div>
            <p class="text-xs uppercase tracking-[0.35em]">
              {t("Let's collaborate", "Collaborons ensemble")}
            </p>
            <h4 class="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
              {t(
                "Bring dependable hydropower to your community or industrial site.",
                "Apportez l'hydroélectricité fiable à votre communauté ou site industriel.",
              )}
            </h4>
            <p class="mt-4 text-sm max-w-xl">
              {t(
                "Partner with Nexus Energy Group for feasibility studies, turnkey systems, and transparent long-term support.",
                "Associez-vous à Nexus Energy Group pour des études de faisabilité, des systèmes clés en main et un support transparent à long terme.",
              )}
            </p>
          </div>
          <div class="flex justify-start md:justify-end">
            <a
              href="/#contact"
              class="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t("Talk to our team", "Parlez à notre équipe")}
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>
</div>
