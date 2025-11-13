<script>
  import Container from "./../utils/Container.svelte";

  // Solutions data
  const solutions = [
    {
      icon: "bolt",
      title: "Pico",
      power: "≤5 kW",
      description: "Lighting, charging, small village loads"
    },
    {
      icon: "power",
      title: "Micro",
      power: "5–100 kW",
      description: "Clinics, schools, agro-processing"
    },
    {
      icon: "electrical_services",
      title: "Mini",
      power: "100 kW–5 MW",
      description: "Mini-grids for towns and industries"
    }
  ];

  // Design principles data
  const designPrinciples = [
    "Simple & low-maintenance",
    "Locally serviceable",
    "Environmentally responsible"
  ];

  // Projects data
  const projects = [
    {
      icon: "water_drop",
      title: "Lubongo Micro Hydro — Tanganyika",
      capacity: "45 kW",
      homes: "200 homes + 1 clinic powered",
      year: "Commissioned 2022",
      description: "Local team built, community-run, diesel fully replaced."
    },
    {
      icon: "water_drop",
      title: "Lubongo Micro Hydro — Tanganyika",
      capacity: "45 kW",
      homes: "200 homes + 1 clinic powered",
      year: "Commissioned 2022",
      description: "Local team built, community-run, diesel fully replaced."
    }
  ];

  // Impact stats data
  const impactStats = [
    { value: "—", label: "Projects Completed" },
    { value: "—", label: "Total Capacity" },
    { value: "—", label: "Communities Served" },
    { value: "—", label: "Lives Impacted" }
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
        Hydropower for every scale
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
              <h3 class="text-2xl font-semibold">{solution.title}</h3>
            </div>
            <p class="text-cyan-300 mb-4 font-medium">{solution.power}</p>
            <p class="text-gray-300">{solution.description}</p>
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
          Design Principles
        </h3>
        <div class="grid md:grid-cols-3 gap-6">
          {#each designPrinciples as principle, index}
            <div 
              class="flex items-start gap-3"
              data-aos="fade-right"
              data-aos-delay={400 + (index * 100)}
              data-aos-duration="500"
            >
              <span class="material-symbols-outlined text-cyan-400">
                check_circle
              </span>
              <div>{principle}</div>
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
          Contact US
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
        Proven results on the ground
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
                {project.title}
              </h3>
            </div>
            <div class="flex flex-wrap items-center gap-4 mb-4 text-cyan-300">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">flash_on</span>
                {project.capacity}
              </span>
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">home</span>
                {project.homes}
              </span>
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">
                  calendar_today
                </span>
                {project.year}
              </span>
            </div>
            <p class="text-gray-300 flex items-start gap-2">
              <span class="material-symbols-outlined text-cyan-400 text-sm mt-1">
                groups
              </span>
              <span>{project.description}</span>
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
            <span class="material-symbols-outlined text-cyan-400">insights</span>
            Impact Snapshot
          </h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each impactStats as stat, index}
              <div 
                class="text-center"
                data-aos="fade-up"
                data-aos-delay={500 + (index * 100)}
                data-aos-duration="600"
              >
                <div class="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <p class="text-gray-300 text-sm">{stat.label}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
