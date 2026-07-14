<script>
  import Container from "../utils/Container.svelte";

  import lang from "../../stores/lang";

  let { t } = $lang;

  const solutions = [
    {
      icon: "bolt",
      title: { en: "Pico-Hydro Installations", fr: "Installations Pico-Hydro" },
      power: "0.5-10 kW",
      description: {
        en: "Designed for household lighting, battery charging, and small appliances in individual homes or farms.",
        fr: "Conçues pour l'éclairage domestique, la recharge de batteries et les petits appareils dans les maisons ou fermes individuelles.",
      },
    },
    {
      icon: "power",
      title: { en: "Micro-Hydro Systems", fr: "Systèmes Micro-Hydro" },
      power: "10-100 kW",
      description: {
        en: "Community-scale solutions that electrify villages, schools, medical centers, and agro-processing facilities.",
        fr: "Solutions à l'échelle communautaire qui électrifient les villages, les écoles, les centres médicaux et les installations agro-industrielles.",
      },
    },
    {
      icon: "electrical_services",
      title: { en: "Mini-Hydro Plants", fr: "Centrales Mini-Hydro" },
      power: "100 kW-1 MW",
      description: {
        en: "Targeted for regional electrification or small industrial loads (in future phases)",
        fr: "Destinées à l'électrification régionale ou aux charges industrielles légères (dans les phases futures)",
      },
    },
  ];

  const designPrinciples = [
    {
      en: "Simple & low-maintenance",
      fr: "Simple et nécessitant peu d'entretien",
    },
    { en: "Locally serviceable", fr: "Réparable localement" },
    { en: "Environmentally responsible", fr: "Respectueux de l'environnement" },
  ];

  const projects = [
    {
      icon: "water_drop",
      title: {
        en: "Lubongo Micro Hydro – Tanganyika",
        fr: "Micro Hydro Lubongo – Tanganyika",
      },
      capacity: "45 kW",
      homes: {
        en: "200 homes + 1 clinic powered",
        fr: "200 foyers + 1 clinique alimentés",
      },
      year: { en: "Commissioned 2022", fr: "Mise en service 2022" },
      description: {
        en: "Local team built, community-run, diesel fully replaced.",
        fr: "Construit par une équipe locale, géré par la communauté, diesel complètement remplacé.",
      },
    },
    {
      icon: "water_drop",
      title: {
        en: "Lubongo Micro Hydro – Tanganyika",
        fr: "Micro Hydro Lubongo – Tanganyika",
      },
      capacity: "45 kW",
      homes: {
        en: "200 homes + 1 clinic powered",
        fr: "200 foyers + 1 clinique alimentés",
      },
      year: { en: "Commissioned 2022", fr: "Mise en service 2022" },
      description: {
        en: "Local team built, community-run, diesel fully replaced.",
        fr: "Construit par une équipe locale, géré par la communauté, diesel complètement remplacé.",
      },
    },
  ];

  const impactStats = [
    {
      value: "15",
      label: { en: "Projects Completed", fr: "Projets Complétés" },
    },
    { value: "95%", label: { en: "Satisfaction", fr: "Satisfaction" } },
    {
      value: "9",
      label: { en: "Communities Served", fr: "Communautés Servies" },
    },
    { value: "187", label: { en: "Lives Impacted", fr: "Vies Impactées" } },
  ];
</script>

<div class="bg-br-dark-green text-white min-h-screen">
  <div class="container mx-auto px-4 py-16 max-w-7xl">
    <!-- Solutions Section -->
    <section class="mb-20">
      <h2
        class="text-4xl md:text-5xl font-bold mb-12 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {t(
          "Hydropower for every scale",
          "Hydroélectricité pour chaque échelle",
        )}
      </h2>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        {#each solutions as solution, index}
          <div
            class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="600"
          >
            <div class="flex items-center gap-3 mb-4">
              <span class="material-symbols-outlined text-3xl text-cyan-400">
                {solution.icon}
              </span>
              <h3 class="text-2xl font-semibold">
                {t(solution.title.en, solution.title.fr)}
              </h3>
            </div>
            <p class="text-cyan-300 mb-4 font-medium">{solution.power}</p>
            <p class="text-gray-300">
              {t(solution.description.en, solution.description.fr)}
            </p>
          </div>
        {/each}
      </div>

      <!-- Design Principles -->
      <div
        class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="300"
      >
        <h3 class="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span class="material-symbols-outlined text-cyan-400">
            design_services
          </span>
          {t("Design Principles", "Principes de Conception")}
        </h3>
        <div class="grid md:grid-cols-3 gap-6">
          {#each designPrinciples as principle, index}
            <div
              class="flex items-start gap-3"
              data-aos="fade-right"
              data-aos-delay={400 + index * 100}
              data-aos-duration="500"
            >
              <span class="material-symbols-outlined text-cyan-400">
                check_circle
              </span>
              <div>{t(principle.en, principle.fr)}</div>
            </div>
          {/each}
        </div>
      </div>

      <!-- CTA Button -->
      <div
        class="text-center"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="600"
      >
        <a href="/#contact" class="btn btn-primary mx-auto">
          <span class="material-symbols-outlined">mail</span>
          {t("Contact US", "Contactez-nous")}
        </a>
      </div>
    </section>

    <!-- Projects Section -->
    <section>
      <h2
        class="text-4xl md:text-5xl font-bold mb-12 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {t("Proven results on the ground", "Résultats éprouvés sur le terrain")}
      </h2>

      <div class="space-y-8">
        {#each projects as project, index}
          <div
            class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            data-aos="fade-left"
            data-aos-delay={index * 150}
            data-aos-duration="700"
          >
            <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
              <h3 class="text-2xl font-semibold flex items-center gap-2">
                <span class="material-symbols-outlined text-cyan-400">
                  {project.icon}
                </span>
                {t(project.title.en, project.title.fr)}
              </h3>
            </div>
            <div class="flex flex-wrap items-center gap-4 mb-4 text-cyan-300">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">flash_on</span>
                {project.capacity}
              </span>
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">home</span>
                {t(project.homes.en, project.homes.fr)}
              </span>
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">
                  calendar_today
                </span>
                {t(project.year.en, project.year.fr)}
              </span>
            </div>
            <p class="text-gray-300 flex items-start gap-2">
              <span
                class="material-symbols-outlined text-cyan-400 text-sm mt-1"
              >
                groups
              </span>
              <span>{t(project.description.en, project.description.fr)}</span>
            </p>
          </div>
        {/each}

        <!-- Impact Snapshot -->
        <div
          class="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <h3 class="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span class="material-symbols-outlined text-cyan-400">insights</span
            >
            {t("Impact Snapshot", "Aperçu de l'Impact")}
          </h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each impactStats as stat, index}
              <div
                class="text-center"
                data-aos="fade-up"
                data-aos-delay={500 + index * 100}
                data-aos-duration="600"
              >
                <div class="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <p class="text-gray-300 text-sm">
                  {t(stat.label.en, stat.label.fr)}
                </p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
