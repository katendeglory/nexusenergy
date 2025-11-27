<script>
  import Container from "../utils/Container.svelte";

  const achievements = [
    { label: "Projects Delivered", value: "12+" },
    { label: "Households Powered", value: "104+" },
    { label: "System Uptime", value: "93%" },
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

  // Solutions data
  const solutions = [
    {
      icon: "bolt",
      title: "Pico-Hydro Installations",
      power: "0.5-10 kW",
      description:
        "Designed for household lighting, battery charging, and small appliances in individual homes or farms.",
    },
    {
      icon: "power",
      title: "Micro-Hydro Systems",
      power: "10-100 kW",
      description:
        "Community-scale solutions that electrify villages, schools, medical centers, and agro-processing facilities.",
    },
    {
      icon: "electrical_services",
      title: "Mini-Hydro Plants",
      power: "100 kW-1 MW",
      description:
        "Targeted for regional electrification or small industrial loads (in future phases)",
    },
  ];

  // Design principles data
  const designPrinciples = [
    "Simple & low-maintenance",
    "Locally serviceable",
    "Environmentally responsible",
  ];

  // Projects data
  const projects = [
    {
      icon: "water_drop",
      title: "Lubongo Micro Hydro — Tanganyika",
      capacity: "45 kW",
      homes: "200 homes + 1 clinic powered",
      year: "Commissioned 2022",
      description: "Local team built, community-run, diesel fully replaced.",
    },
    {
      icon: "water_drop",
      title: "Lubongo Micro Hydro — Tanganyika",
      capacity: "45 kW",
      homes: "200 homes + 1 clinic powered",
      year: "Commissioned 2022",
      description: "Local team built, community-run, diesel fully replaced.",
    },
  ];

  // Impact stats data
  const impactStats = [
    { value: "15", label: "Projects Completed" },
    { value: "95%", label: "Satisfaction" },
    { value: "9", label: "Communities Served" },
    { value: "187", label: "Lives Impacted" },
  ];

  // Services data
  const services = [
    {
      title: "Technical Site Assessments",
      description: "Comprehensive evaluation of potential hydropower sites",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
    {
      title: "Feasibility and Impact Studies",
      description:
        "Detailed analysis of project viability and environmental impact",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
    {
      title: "System Design and Component Sourcing",
      description:
        "Custom engineering solutions with reliable component procurement",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M3 21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
               <path d="M5 21V7L13 2L21 7V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M9 9V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
               <path d="M9 21V13H15V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
    {
      title: "Installation and Commissioning",
      description: "Professional installation and system activation",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
               <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
    {
      title: "Local Operator Training and Long-term Maintenance",
      description: "Empowering communities with skills and ongoing support",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
  ];

  // Careers data
  // const careerBenefits = [
  //   {
  //     title: "Build skills in renewable energy",
  //     icon: `<svg viewBox="0 0 24 24" fill="none">
  //              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //            </svg>`,
  //   },
  //   {
  //     title: "Work directly with communities",
  //     icon: `<svg viewBox="0 0 24 24" fill="none">
  //              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //              <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //              <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //            </svg>`,
  //   },
  //   {
  //     title: "Real impact, visible results",
  //     icon: `<svg viewBox="0 0 24 24" fill="none">
  //              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //            </svg>`,
  //   },
  // ];

  // FAQ data
  const faqs = [
    {
      question: "What size of project can you build?",
      answer: "From 1 kW pico units to 5 MW mini-grids.",
    },
    {
      question: "How long does a project take?",
      answer: "6–12 months on average, depending on site access.",
    },
    {
      question: "Do you provide financing?",
      answer: "We help structure partnerships but do not directly fund.",
    },
    {
      question: "Who owns the plant?",
      answer: "Community, cooperative, or private — defined early in design.",
    },
    {
      question: "How much maintenance is needed?",
      answer:
        "Basic monthly checks and yearly inspections — we train local teams.",
    },
  ];

  // Team data
  const team = [
    {
      name: "Kapiamba Kashala Fabrice",
      title: "PhD, MBA",
      role: "Founder & CEO",
      bio: "PhD in Chemical, Environmental and Materials Engineering, University of Miami. Specializes in clean energy systems, process engineering, and sustainability-driven infrastructure. Over 10 years of R&D and field deployment experience.",
      photo: "/team/kapiamba-fabrice.jpg", // Placeholder for photo
      linkedin: "https://www.linkedin.com/in/kapiamba-fabrice/",
    },
    {
      name: "Divine Kavunga",
      role: "Co-Founder | Community Partnerships",
      bio: "Bridges technical implementation with social engagement. Works closely with villages, cooperatives, and civil society to ensure local inclusion and feedback.",
      photo: "/team/divine-kavunga.jpg", // Placeholder for photo
      linkedin: "https://www.linkedin.com/in/divine-kavunga/",
    },
    {
      name: "Jonathan Kabamba",
      role: "Co-Founder | Technical Operations",
      bio: "Background in electrical engineering and infrastructure logistics. Leads installation strategy, procurement, and workforce training.",
      photo: "/team/jonathan-kabamba.jpg", // Placeholder for photo
      linkedin: "https://www.linkedin.com/in/jonathankabamba/",
    },
  ];

  // Impact data
  const communityImpact = [
    "Electrification of remote villages",
    "Improved access to healthcare (lighting + refrigeration)",
    "Enhanced school attendance and performance",
    "Reduced reliance on kerosene, candles, and diesel generators",
  ];

  const environmentalImpact = [
    "Run-of-river systems preserve natural flows and fish migration",
    "No large dams, no deforestation",
    "Reduction of CO2 and black carbon emissions",
  ];

  const sdgs = [
    "SDG 7 (Affordable & Clean Energy)",
    "SDG 13 (Climate Action)",
    "SDG 9 (Industry, Innovation & Infrastructure)",
  ];

  // Contact data
  const contactInfo = {
    email: "contact@nexusenergy.org",
    phone: "+1 419 280 8399",
    linkedin: {
      company: "https://www.linkedin.com/company/nexus-energy",
      founder: "https://www.linkedin.com/in/kapiamba-fabrice/",
    },
  };

  // Form state
  let formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  let sending = false;

  function handleSubmit() {
    // Handle form submission
    console.log("Form submitted:", formData);

    sending = true;
    let templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    emailjs.send("service_nexus", "template_nexus", templateParams).then(
      (response) => {
        sending = false;
        console.log("SUCCESS!", response.status, response.text);
        alert(`🙂 Thank you for your message!`);
        formData = { name: "", email: "", subject: "", message: "" };
      },
      (error) => {
        console.log(`🙂 The email service is down!`);
        console.log("FAILED...", error);
        sending = false;
      },
    );
  }
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
            class="mt-4 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
          >
            Who We Are
          </h2>

          <p class="mt-6 text-sm md:text-base text-gray-600 max-w-xl">
            Nexus Energy is a renewable energy startup committed to deploying
            small-scale hydropower solutions to serve the energy needs of
            underserved populations in the DRC.
          </p>

          <p class="mt-2 text-sm md:text-base text-gray-600 max-w-xl">
            Founded by Dr. Kapiamba Kashala Fabrice, with co-founders Mrs.
            Divine Kavunga and Dr. Jonathan Kabamba, we are building a future in
            which clean, sustainable electricity is accessible to every
            Congolese community.
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
          Why Hydropower?
        </h3>
        <p class="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          Hydropower is a proven, efficient, and renewable energy source. Our
          focus on run-of-river technologies avoids the environmental damage of
          large dams while delivering clean energy 24/7, even when solar is
          unavailable.
        </p>
      </div>
    </Container>
  </section>

  <!-- Impact Section -->
  <section id="impact" class="py-20">
    <Container>
      <div class="mx-auto max-w-4xl text-center mb-16" data-aos="fade-up">
        <p class="text-xs uppercase tracking-[0.35em] text-emerald-600">
          Our Impact
        </p>
        <h2
          class="mt-4 text-3xl md:text-5xl xl:text-6xl font-bold leading-tight"
        >
          Creating lasting change
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
            Community Impact
          </h4>
          <ul class="mt-4 space-y-2 text-sm text-gray-600 leading-relaxed">
            {#each communityImpact as impact}
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 mt-1">•</span>
                <span>{impact}</span>
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
            Environmental Impact
          </h4>
          <ul class="mt-4 space-y-2 text-sm text-gray-600 leading-relaxed">
            {#each environmentalImpact as impact}
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 mt-1">•</span>
                <span>{impact}</span>
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
            Sustainable Development Goals (SDGs)
          </h4>
          <p class="mt-4 text-sm text-gray-600 leading-relaxed mb-3">
            Our work supports:
          </p>
          <ul class="space-y-2 text-sm text-gray-600 leading-relaxed">
            {#each sdgs as sdg}
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 mt-1">•</span>
                <span>{sdg}</span>
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
            Why We Exist
          </p>

          <h3 class="mt-3 text-2xl md:text-3xl font-semibold">Vision</h3>
          <div class="mt-2 text-emerald-100 leading-relaxed">
            To create a decentralized energy ecosystem rooted in local rivers,
            local labor, and long-term sustainability.
          </div>

          <h3 class="mt-3 text-2xl md:text-3xl font-semibold">Mission</h3>
          <div class="mt-2">
            To aim to deliver cost-effective, low-impact hydropower
            installations that power rural homes, schools, health centers, and
            small businesses, while promoting environmental stewardship and
            community ownership.
          </div>

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
              data-aos-delay={400 + index * 100}
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
              <span
                class="material-symbols-outlined text-cyan-400 text-sm mt-1"
              >
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
            <span class="material-symbols-outlined text-cyan-400">insights</span
            >
            Impact Snapshot
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
                <p class="text-gray-300 text-sm">{stat.label}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<div class="bg-white text-gray-900">
  <!-- Services Section -->
  <section id="services" class="py-20">
    <Container>
      <div class="mx-auto max-w-4xl text-center mb-16" data-aos="fade-up">
        <p class="text-xs uppercase tracking-[0.35em] text-emerald-600">
          Our Core Services
        </p>
        <h2
          class="mt-4 text-3xl md:text-5xl xl:text-6xl font-bold leading-tight"
        >
          From idea to reliable operation
        </h2>
        <p class="mt-6 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          We support you at every stage of your hydropower project.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {#each services as service, index}
          <article
            class="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
            >
              {@html service.icon}
            </div>
            <h3 class="mt-5 text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p class="mt-3 text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </article>
        {/each}
      </div>
      <div class="py-4"></div>
    </Container>
  </section>

  <!-- Careers Section -->
  <!-- <section id="careers" class="relative overflow-hidden bg-slate-50 py-20">
    <Container>
      <div class="grid gap-12 lg:grid-cols-[1fr_0.9fr] items-center">
        <div data-aos="fade-right">
          <p class="text-xs uppercase tracking-[0.35em] text-emerald-600">
            Join Our Team
          </p>
          <h2
            class="mt-4 text-3xl md:text-5xl font-bold leading-tight text-gray-900"
          >
            Join a team shaping local energy
          </h2>
          <p class="mt-6 text-base text-gray-600">Why work with us:</p>

          <div class="mt-8 space-y-6">
            {#each careerBenefits as benefit, index}
              <div
                class="flex items-start gap-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
                >
                  {@html benefit.icon}
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h4>
                </div>
              </div>
            {/each}
          </div>

          <div class="mt-10" data-aos="fade-up" data-aos-delay="300">
            <a
              href="/#contact"
              class="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl hover:bg-emerald-700"
            >
              Contact Us to Apply Now
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
            Make An Impact
          </h3>
          <p class="mt-6 text-sm text-gray-600 leading-relaxed">
            Join engineers, hydrologists, and community specialists working side
            by side to deliver clean energy solutions across the DRC.
          </p>
        </div>
      </div>
    </Container>
  </section> -->

  <!-- Team Section -->
  <section id="team" class="py-20 bg-slate-50">
    <Container>
      <div class="mx-auto max-w-4xl text-center mb-16" data-aos="fade-up">
        <p class="text-xs uppercase tracking-[0.35em] text-emerald-600">
          Our Team
        </p>
        <h2
          class="mt-4 text-3xl md:text-5xl xl:text-6xl font-bold leading-tight"
        >
          Meet the team
        </h2>
      </div>

      <div class="grid gap-8 md:grid-cols-3 mt-14">
        {#each team as member, index}
          <article
            class="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div
              class="relative aspect-square w-full overflow-hidden rounded-xl mb-5 bg-gray-100"
            >
              <img
                src={member.photo}
                alt={member.name}
                class="h-full w-full object-cover"
                on:error={(e) => {
                  e.currentTarget.src = "/favicon.png";
                }}
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            {#if member.title}
              <p class="text-sm text-emerald-600 mt-1">{member.title}</p>
            {/if}
            <p class="text-sm font-medium text-gray-700 mt-2">
              {member.role}
            </p>
            <p class="mt-4 text-sm text-gray-600 leading-relaxed">
              {member.bio}
            </p>
            {#if member.linkedin}
              <div class="mt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                  LinkedIn
                </a>
              </div>
            {/if}
          </article>
        {/each}
      </div>
      <div class="py-4"></div>
    </Container>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="py-20">
    <Container>
      <div class="mx-auto max-w-4xl text-center mb-16" data-aos="fade-up">
        <p class="text-xs uppercase tracking-[0.35em] text-emerald-600">
          Get Answers
        </p>
        <h2 class="mt-4 text-3xl md:text-5xl font-bold leading-tight">
          Common Questions
        </h2>
      </div>

      <div class="mx-auto max-w-3xl space-y-4">
        {#each faqs as faq, index}
          <details
            class="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <summary
              class="flex cursor-pointer items-center justify-between gap-4"
            >
              <h3 class="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <svg
                class="h-5 w-5 shrink-0 text-emerald-600 transition-transform group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </summary>
            <p class="mt-4 text-sm text-gray-600 leading-relaxed pl-0">
              {faq.answer}
            </p>
          </details>
        {/each}
      </div>
    </Container>
  </section>

  <!-- Contact Section -->
  <section
    id="contact"
    class="relative overflow-hidden bg-slate-900 py-20 text-white"
  >
    <div class="absolute inset-0">
      <div
        class="absolute inset-y-0 left-1/2 w-[120%] -skew-x-12 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 opacity-20"
      ></div>
    </div>
    <Container>
      <div class="relative z-10">
        <div class="mx-auto max-w-4xl text-center mb-16" data-aos="fade-up">
          <p class="text-xs uppercase tracking-[0.35em] text-emerald-300">
            Contact Us
          </p>
          <h2 class="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Let's Build the Future Together
          </h2>
          <p
            class="mt-6 text-sm md:text-base text-emerald-100 max-w-2xl mx-auto"
          >
            Interested in partnering, funding, volunteering, or submitting a
            potential hydro site? Let us know.
          </p>
        </div>

        <div class="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <!-- Contact Form -->
          <div
            class="relative isolate rounded-3xl border border-white/10 bg-white/5 px-8 py-10 shadow-[0_30px_60px_-20px_rgba(15,118,110,0.45)] backdrop-blur"
            data-aos="fade-right"
          >
            <h3
              class="text-xs uppercase tracking-[0.3em] text-emerald-300 mb-6"
            >
              Send Us a Message
            </h3>
            <form on:submit|preventDefault={handleSubmit} class="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  bind:value={formData.name}
                  required
                  class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  bind:value={formData.email}
                  required
                  class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  bind:value={formData.subject}
                  required
                  class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  bind:value={formData.message}
                  rows="4"
                  required
                  class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8" data-aos="fade-left">
            <div>
              <h3
                class="text-xs uppercase tracking-[0.3em] text-emerald-300 mb-4"
              >
                Contact Information
              </h3>
              <div class="space-y-4">
                <div>
                  <p class="text-xs text-emerald-300 mb-2">Email</p>
                  <p class="text-sm text-emerald-100">
                    <a
                      href="mailto:{contactInfo.email}"
                      class="hover:text-emerald-300 transition"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p class="text-xs text-emerald-300 mb-2">Phone/WhatsApp</p>
                  <p class="text-sm text-emerald-100">
                    <a
                      href="https://wa.me/{contactInfo.phone.replace(
                        /[^0-9]/g,
                        '',
                      )}"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="hover:text-emerald-300 transition"
                    >
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
                <div>
                  <p class="text-xs text-emerald-300 mb-2">LinkedIn</p>
                  <div class="space-y-2 text-sm text-emerald-100">
                    <p>
                      <a
                        href={contactInfo.linkedin.company}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:text-emerald-300 transition"
                      >
                        Nexus Energy
                      </a>
                    </p>
                    <p>
                      <a
                        href={contactInfo.linkedin.founder}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:text-emerald-300 transition"
                      >
                        Dr. Kapiamba Fabrice
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded-xl border border-white/10 bg-white/5 p-6">
              <p class="text-sm text-emerald-100 leading-relaxed">
                Our team typically responds within 24–48 hours. For urgent
                project inquiries, please call or use WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</div>
