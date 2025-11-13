<script>
  import Container from "./../utils/Container.svelte";

  const achievements = [
    { label: "Projects Delivered", value: "12+" },
    { label: "Households Powered", value: "500+" },
    { label: "System Uptime", value: "98%" },
  ];

  const pillars = [
    {
      title: "Our Work",
      copy: "End-to-end delivery from hydrology studies to grid integration, with embedded O&M support.",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="1.5"/>
               <path d="M12 8V16M8 10L16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
    {
      title: "Our Approach",
      copy: "Local technicians, modular systems, transparent reporting. Built with and for communities.",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/>
               <path d="M4 20C4 15.58 7.58 12 12 12C16.42 12 20 15.58 20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
    {
      title: "Impact",
      copy: "Diesel displacement, new jobs, reliable power for clinics, schools, and small industry.",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M4 12C6 6 10 4 12 4C14 4 18 6 20 12C18 18 14 20 12 20C10 20 6 18 4 12Z" stroke="currentColor" stroke-width="1.5"/>
               <path d="M12 8V12L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
  ];

  const values = [
    "Local partnership and training",
    "Reliability through robust design",
    "Radical transparency on pricing and performance",
    "Stewardship of rivers and ecosystems",
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
            About Nexus Energy Group
          </p>
          <h2
            class="mt-4 text-3xl md:text-5xl xl:text-6xl font-bold leading-tight"
          >
            Hydropower systems engineered for community resilience across the
            DRC
          </h2>
          <p class="mt-6 text-sm md:text-base text-gray-600 max-w-xl">
            We deliver pico, micro, and mini hydropower solutions that are
            simple to operate, reliable in tough environments, and built with
            local ownership at the center.
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
            Impact At A Glance
          </h3>
          <div class="mt-6 grid gap-6">
            {#each achievements as stat (stat.label)}
              <div
                class="flex items-baseline justify-between border-b border-emerald-100 pb-4"
              >
                <span class="text-lg font-medium text-gray-700">
                  {stat.label}
                </span>
                <span class="text-2xl font-semibold text-emerald-600">
                  {stat.value}
                </span>
              </div>
            {/each}
          </div>
          <p class="mt-6 text-xs tracking-wide text-gray-500">
            Every deployment includes on-site training, open-book pricing, and
            remote performance monitoring.
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
          What We Deliver
        </h3>
        <p class="mt-3 text-3xl md:text-4xl font-semibold text-gray-900">
          From river to reliable kilowatts
        </p>
        <p class="mt-4 text-gray-600">
          Our teams co-design each project with community leaders to ensure
          affordability, durability, and measurable impact.
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
              {pillar.title}
            </h4>
            <p class="mt-3 text-sm text-gray-600 leading-relaxed">
              {pillar.copy}
            </p>
            <span
              class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
            >
              Contact us
              <svg
                class="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </article>
        {/each}
      </div>
    </Container>
  </section>

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
            Why We Exist
          </p>
          <h3 class="mt-3 text-3xl md:text-4xl font-semibold">
            Powering resilient communities through small hydro
          </h3>
          <p class="mt-5 text-emerald-100 leading-relaxed">
            We see a future where rural communities across the DRC thrive with
            electricity that is locally owned, climate-resilient, and
            affordable. Our mission is to expand access to clean
            hydropower—designed for low complexity, high reliability, and
            long-term viability.
          </p>

          <div class="mt-10">
            <h4
              class="flex items-center gap-3 text-lg font-semibold text-white"
            >
              <span class="inline-flex h-8 w-1.5 rounded-full bg-emerald-400"
              ></span>
              Core Values
            </h4>
            <ul class="mt-4 space-y-3 text-sm text-emerald-100">
              {#each values as value, index}
                <li class="flex items-start gap-3">
                  <span
                    class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs"
                  >
                    {index + 1}
                  </span>
                  <span>{value}</span>
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
              Field Leadership
            </p>
            <p class="mt-2 text-sm text-emerald-100/90 leading-relaxed">
              Engineers, hydrologists, and community specialists working side by
              side to deliver bankable outcomes for clinics, schools, and
              agribusiness.
            </p>
          </div>
        </aside>
      </div>
    </Container>
  </section>

  <!-- CTA -->
  <section class="py-20">
    <Container>
      <div
        class="relative overflow-hidden rounded-3xl px-8 py-8"
        data-aos="zoom-in"
      >
        <div
          class="relative z-10 grid gap-8 md:grid-cols-[1.6fr_1fr] items-center"
        >
          <div>
            <p class="text-xs uppercase tracking-[0.35em]">Let’s collaborate</p>
            <h4 class="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
              Bring dependable hydropower to your community or industrial site.
            </h4>
            <p class="mt-4 text-sm max-w-xl">
              Partner with Nexus Energy Group for feasibility studies, turnkey
              systems, and transparent long-term support.
            </p>
          </div>
          <div class="flex justify-start md:justify-end">
            <a
              href="/#contact"
              class="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Talk to our team
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
