<script>
  import { onMount } from 'svelte';

  let mobileMenu = false;
  let form = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  let submitting = false;
  let success = null;

  function toggleMenu() {
    mobileMenu = !mobileMenu;
  }

  function closeMenu() {
    mobileMenu = false;
  }

  async function submitForm() {
    submitting = true;
    success = null;
    // Mock submission - replace with real API endpoint
    await new Promise((r) => setTimeout(r, 700));
    submitting = false;
    success = true;
    form = { name: '', email: '', phone: '', message: '' };
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenu();
    }
  }

  onMount(() => {
    // reduce motion respects
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  });
</script><!-- Single-file Svelte + Tailwind single-page site inspired by Anzana. --><div class="min-h-screen bg-gray-50 text-gray-900 antialiased">
  <!-- NAV -->
  <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-4">
          <button aria-label="logo" class="flex items-center gap-3" on:click={() => scrollToId('home')}>
            <svg class="w-10 h-10 rounded-md p-1 bg-gradient-to-br from-green-600 to-emerald-500 text-white shadow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
              <path d="M3 12c0 5 4 9 9 9s9-4 9-9-4-9-9-9S3 7 3 12z" fill="white" opacity="0.06" />
              <path d="M7 12c0-2.76 2.24-5 5-5v10c-2.76 0-5-2.24-5-5z" fill="white" opacity="0.12" />
              <path d="M12 3v18" stroke="white" stroke-width="0.6" opacity="0.6" />
            </svg>
            <span class="font-semibold text-lg">Nexus Énergie</span>
          </button>
          <nav class="hidden md:flex gap-2 items-center ml-4">
            <a class="px-3 py-2 text-sm hover:text-emerald-600" on:click={() => scrollToId('about')}>About</a>
            <a class="px-3 py-2 text-sm hover:text-emerald-600" on:click={() => scrollToId('solutions')}>Solutions</a>
            <a class="px-3 py-2 text-sm hover:text-emerald-600" on:click={() => scrollToId('projects')}>Projects</a>
            <a class="px-3 py-2 text-sm hover:text-emerald-600" on:click={() => scrollToId('services')}>Services</a>
            <a class="px-3 py-2 text-sm hover:text-emerald-600" on:click={() => scrollToId('contact')}>Contact</a>
          </nav>
        </div><div class="flex items-center gap-4">
      <button class="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm shadow hover:bg-emerald-500" on:click={() => scrollToId('contact')}>Request a feasibility study</button>

      <button class="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Open menu" on:click={toggleMenu}>
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
    </div>
  </div>
</div>

{#if mobileMenu}
  <nav class="md:hidden bg-white border-t border-gray-100">
    <div class="px-6 py-4 space-y-2">
      <a class="block py-2" on:click={() => scrollToId('about')}>About</a>
      <a class="block py-2" on:click={() => scrollToId('solutions')}>Solutions</a>
      <a class="block py-2" on:click={() => scrollToId('projects')}>Projects</a>
      <a class="block py-2" on:click={() => scrollToId('services')}>Services</a>
      <a class="block py-2" on:click={() => scrollToId('contact')}>Contact</a>
    </div>
  </nav>
{/if}

  </header>  <main>
    <!-- HERO -->
    <section id="home" class="relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-24 lg:pt-20 lg:pb-36">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Reliable rural electrification with small-scale hydropower</h1>
            <p class="mt-4 text-lg text-gray-700 max-w-2xl">Practical, locally-led solutions that power homes, farms and small industry — built to last. We design and deliver run-of-river pico, micro and mini hydropower systems with transparent costs and long-term local support.</p><div class="mt-6 flex flex-wrap gap-3">
          <button class="px-5 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 shadow" on:click={() => scrollToId('contact')}>Request a feasibility study</button>
          <button class="px-5 py-3 rounded-lg border border-gray-200 bg-white text-sm hover:bg-gray-50" on:click={() => scrollToId('projects')}>View projects</button>
        </div>

        <div class="mt-8 grid grid-cols-3 gap-4 max-w-md">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="text-xs text-gray-500">Projects delivered</div>
            <div class="mt-1 text-xl font-semibold">[X]</div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="text-xs text-gray-500">People served</div>
            <div class="mt-1 text-xl font-semibold">[Y]</div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="text-xs text-gray-500">Availability</div>
            <div class="mt-1 text-xl font-semibold">~98%</div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5">
        <div class="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-emerald-500 to-green-600 p-6 text-white">
          <div class="flex items-center gap-4">
            <div class="flex-shrink-0 w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v18" /><path d="M3 12h18" /></svg>
            </div>
            <div>
              <div class="text-sm font-semibold">Start a project</div>
              <div class="text-sm opacity-90 mt-1">Submit your site for screening and get a quick feasibility estimate.</div>
            </div>
          </div>

          <form class="mt-6 grid grid-cols-1 gap-3" on:submit|preventDefault={submitForm}>
            <input class="w-full rounded-md p-3 text-gray-900" placeholder="Site name or nearest town" bind:value={form.name} required />
            <input class="w-full rounded-md p-3 text-gray-900" placeholder="Email" type="email" bind:value={form.email} required />
            <input class="w-full rounded-md p-3 text-gray-900" placeholder="Phone / WhatsApp" bind:value={form.phone} />
            <button class="w-full px-4 py-3 rounded-md bg-white text-emerald-600 font-semibold hover:bg-white/90" type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Submit for screening'}</button>
            {#if success}
              <div class="text-sm text-white/90">Thanks — we received your request. A specialist will follow up.</div>
            {/if}
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- decorative SVG -->
  <div class="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden lg:block">
    <svg viewBox="0 0 600 800" class="w-full h-full opacity-20" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#g1)" />
    </svg>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="py-20 border-t border-gray-100">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="grid lg:grid-cols-3 gap-8 items-start">
      <div class="lg:col-span-2">
        <h2 class="text-2xl font-bold">Powering resilient, productive communities</h2>
        <p class="mt-4 text-gray-700 max-w-2xl">Nexus Énergie brings practical, high-impact hydropower to communities and small industries. We combine straightforward engineering, responsible environmental practice and local capacity building so projects are technically reliable, financially transparent and socially beneficial.</p>

        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-white p-5 rounded-lg shadow-sm">
            <h3 class="font-semibold">Our Mission</h3>
            <p class="mt-2 text-sm text-gray-600">Expand access to clean, affordable energy through practical, small-scale hydropower.</p>
          </div>
          <div class="bg-white p-5 rounded-lg shadow-sm">
            <h3 class="font-semibold">Our Values</h3>
            <ul class="mt-2 text-sm text-gray-600 space-y-1">
              <li>Local partnership</li>
              <li>Reliability</li>
              <li>Transparency</li>
              <li>Environmental care</li>
            </ul>
          </div>
        </div>

        <div class="mt-6">
          <h4 class="font-semibold">Team</h4>
          <p class="mt-2 text-sm text-gray-600">Engineers, technicians and community specialists delivering real results across provinces.</p>
        </div>
      </div>

      <aside class="bg-white p-6 rounded-xl shadow-md">
        <div class="text-sm text-gray-500">Download</div>
        <div class="mt-3">
          <a class="inline-block px-4 py-2 rounded-md bg-emerald-600 text-white text-sm" href="#">Company profile (PDF)</a>
        </div>
        <div class="mt-6">
          <h5 class="text-sm font-semibold">Partners</h5>
          <p class="mt-2 text-sm text-gray-600">Local cooperatives · Donors · Technical institutions</p>
        </div>
      </aside>
    </div>
  </div>
</section>

<!-- SOLUTIONS -->
<section id="solutions" class="py-20">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-2xl font-bold">Scalable hydropower solutions for every site</h2>
      <p class="mt-2 text-gray-600 max-w-2xl mx-auto">We deliver tailored solutions across three power bands. Each solution balances simplicity, cost and maintainability so communities get dependable service and predictable lifetime costs.</p>
    </div>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Pico -->
      <div class="bg-white rounded-2xl p-6 shadow">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Pico (≤5 kW)</h3>
          <div class="text-sm text-gray-500">Lighting · Charging</div>
        </div>
        <p class="mt-3 text-sm text-gray-600">Small, low-head systems that power a handful of households and small productive loads. Ideal for dispersed settlements or minimal demand.</p>
        <ul class="mt-3 text-sm text-gray-600 space-y-1">
          <li>Household lighting</li>
          <li>Phone charging stations</li>
          <li>One small grain mill</li>
        </ul>
        <div class="mt-4">
          <button class="px-4 py-2 rounded-md bg-emerald-50 text-emerald-700 text-sm">See pico examples</button>
        </div>
      </div>

      <!-- Micro -->
      <div class="bg-white rounded-2xl p-6 shadow">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Micro (5–100 kW)</h3>
          <div class="text-sm text-gray-500">Village-scale</div>
        </div>
        <p class="mt-3 text-sm text-gray-600">Village-scale systems for households, clinics, schools and small agro-processors. Supports productive uses such as milling and refrigeration.</p>
        <ul class="mt-3 text-sm text-gray-600 space-y-1">
          <li>Village electrification</li>
          <li>Clinic refrigeration</li>
          <li>Village mills & ICT</li>
        </ul>
        <div class="mt-4">
          <button class="px-4 py-2 rounded-md bg-emerald-50 text-emerald-700 text-sm">Download micro spec</button>
        </div>
      </div>

      <!-- Mini -->
      <div class="bg-white rounded-2xl p-6 shadow">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Mini (100 kW–5 MW)</h3>
          <div class="text-sm text-gray-500">Mini-grids & town supply</div>
        </div>
        <p class="mt-3 text-sm text-gray-600">Larger mini-grids powering towns, agro-processing and small factories. Designed with distribution planning and commercial accounts in mind.</p>
        <ul class="mt-3 text-sm text-gray-600 space-y-1">
          <li>Town mini-grids</li>
          <li>Cold storage & agro-processing</li>
          <li>Small industry supply</li>
        </ul>
        <div class="mt-4">
          <button class="px-4 py-2 rounded-md bg-emerald-50 text-emerald-700 text-sm">Request pre-feasibility</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="py-20 border-t border-gray-100">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="flex items-start justify-between">
      <div>
        <h2 class="text-2xl font-bold">Projects that demonstrate impact</h2>
        <p class="mt-2 text-gray-600">Browse our portfolio of completed and in-progress projects. Each case study explains the technical solution, local benefits and lessons learned.</p>
      </div>
      <div>
        <button class="px-4 py-2 rounded-md bg-emerald-600 text-white">View all projects</button>
      </div>
    </div>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Card 1 -->
      <article class="bg-white rounded-2xl shadow overflow-hidden">
        <div class="h-40 bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-white text-sm font-semibold">Lubongo Micro Hydro</div>
        <div class="p-4">
          <div class="text-xs text-gray-500">Tanganyika — 45 kW · 2022</div>
          <h3 class="mt-2 font-semibold">Lubongo Micro Hydro</h3>
          <p class="mt-2 text-sm text-gray-600">45 kW micro-hydro powering 200 homes, a clinic and two mills. Community-run O&M with Nexus Énergie support.</p>
          <div class="mt-4 flex items-center justify-between">
            <a class="text-emerald-600 text-sm">Read case study</a>
            <span class="text-xs text-gray-500">Beneficiaries: 200+</span>
          </div>
        </div>
      </article>

      <!-- Card 2 -->
      <article class="bg-white rounded-2xl shadow overflow-hidden">
        <div class="h-40 bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white text-sm font-semibold">Kivu Riverside Mini-Grid</div>
        <div class="p-4">
          <div class="text-xs text-gray-500">South Kivu — 250 kW · 2023</div>
          <h3 class="mt-2 font-semibold">Kivu Riverside Mini-Grid</h3>
          <p class="mt-2 text-sm text-gray-600">250 kW mini-grid powering several neighbourhoods and local agro-processing businesses.</p>
          <div class="mt-4 flex items-center justify-between">
            <a class="text-emerald-600 text-sm">Read case study</a>
            <span class="text-xs text-gray-500">Beneficiaries: 4,200+</span>
          </div>
        </div>
      </article>

      <!-- Card 3 -->
      <article class="bg-white rounded-2xl shadow overflow-hidden">
        <div class="h-40 bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white text-sm font-semibold">Mulemba Pico Cluster</div>
        <div class="p-4">
          <div class="text-xs text-gray-500">Haut-Katanga — Cluster</div>
          <h3 class="mt-2 font-semibold">Mulemba Pico Cluster</h3>
          <p class="mt-2 text-sm text-gray-600">Three pico installations supplying lighting and community charging points.</p>
          <div class="mt-4 flex items-center justify-between">
            <a class="text-emerald-600 text-sm">Read case study</a>
            <span class="text-xs text-gray-500">Beneficiaries: Cluster</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- SERVICES (extra page condensed) -->
<section id="services" class="py-20">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 class="text-2xl font-bold">Services — end-to-end support</h2>
    <p class="mt-2 text-gray-600 max-w-2xl">We provide the technical, commercial and operational services needed to plan, build and run small hydropower projects reliably and transparently.</p>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">Prefeasibility</h4>
        <p class="mt-2 text-sm text-gray-600">Remote screening, catchment indicators, initial LCOE and go/no-go advice.</p>
      </div>
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">Field assessment</h4>
        <p class="mt-2 text-sm text-gray-600">Head & flow measurement, seasonal gauging and recommended turbine range.</p>
      </div>
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">Engineering & procurement</h4>
        <p class="mt-2 text-sm text-gray-600">Civil design, penstock sizing, turbine & generator specs and tender documents.</p>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">Construction & commissioning</h4>
        <p class="mt-2 text-sm text-gray-600">On-site supervision, QA checkpoints, mechanical & electrical commissioning.</p>
      </div>
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">O&M & financing advisory</h4>
        <p class="mt-2 text-sm text-gray-600">Preventive maintenance, remote monitoring and financial modeling for donors & DFIs.</p>
      </div>
    </div>

  </div>
</section>

<!-- TECHNOLOGY -->
<section id="technology" class="py-20 border-t border-gray-100">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 class="text-2xl font-bold">Technology — simple, proven run-of-river designs</h2>
    <p class="mt-2 text-gray-600 max-w-2xl">We use low-complexity run-of-river designs and proven electromechanical components so projects run year after year with predictable maintenance needs.</p>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">Intake & conveyance</h4>
        <p class="mt-2 text-sm text-gray-600">Low-impact intakes, debris screens and penstock sizing for balanced cost and durability.</p>
      </div>
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">Turbine selection</h4>
        <p class="mt-2 text-sm text-gray-600">Cross-flow, Francis or Pelton depending on head and flow characteristics; generators chosen for local serviceability.</p>
      </div>
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">Control & monitoring</h4>
        <p class="mt-2 text-sm text-gray-600">SCADA-lite telemetry, remote alerts, and simple data logging for uptime and performance analysis.</p>
      </div>
    </div>

    <div class="mt-8 bg-white p-6 rounded-lg shadow-sm">
      <h4 class="font-semibold">Power formula (engineering note)</h4>
      <p class="mt-2 text-sm text-gray-600">P ≈ ρ·g·Q·H·η — where P is power, ρ is water density, g gravity, Q flow, H head, η overall efficiency. Final design uses measured Q-H curves.</p>
    </div>
  </div>
</section>

<!-- IMPACT -->
<section id="impact" class="py-20">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 class="text-2xl font-bold">Impact — real energy, real change</h2>
    <p class="mt-2 text-gray-600 max-w-2xl">Every project improves lives and builds resilience.</p>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <div class="text-sm text-gray-500">Households electrified</div>
        <div class="mt-2 text-xl font-semibold">[X]</div>
      </div>
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <div class="text-sm text-gray-500">Jobs created</div>
        <div class="mt-2 text-xl font-semibold">[Y]</div>
      </div>
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <div class="text-sm text-gray-500">CO₂ avoided</div>
        <div class="mt-2 text-xl font-semibold">[Z] t/yr</div>
      </div>
    </div>

    <div class="mt-6 bg-white rounded-lg p-6 shadow-sm">
      <h4 class="font-semibold">Beneficiary stories</h4>
      <blockquote class="mt-3 text-sm text-gray-700 italic">“Our mill runs every day now. The power is steady and clean.” — Local operator, South Kivu</blockquote>
    </div>
  </div>
</section>

<!-- MARKETS / WHERE WE WORK -->
<section id="markets" class="py-20 border-t border-gray-100">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 class="text-2xl font-bold">Where we work — focused delivery across the DRC</h2>
    <p class="mt-2 text-gray-600 max-w-2xl">We focus on provinces where hydropower potential aligns with community demand and practical logistics.</p>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">Site selection criteria</h4>
        <ul class="mt-2 text-sm text-gray-600 space-y-1">
          <li>Reliable head & flow</li>
          <li>Access for construction & O&M</li>
          <li>Local demand and social acceptance</li>
          <li>Clear land & water agreements</li>
        </ul>
      </div>
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">Submit a site</h4>
        <p class="mt-2 text-sm text-gray-600">Provide the nearest town, province and any known head/flow info and we will screen the site.</p>
        <div class="mt-4">
          <button class="px-4 py-2 rounded-md bg-emerald-600 text-white">Submit site</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CAREERS -->
<section id="careers" class="py-20">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 class="text-2xl font-bold">Careers — join a team shaping local energy</h2>
    <p class="mt-2 text-gray-600">Build skills in renewable energy and work directly with communities. Apprenticeships and training programs available.</p>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">Site Engineer</h4>
        <p class="mt-2 text-sm text-gray-600">Lead field assessments and supervise construction. Apply with CV and cover letter.</p>
      </div>
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">O&M Technician</h4>
        <p class="mt-2 text-sm text-gray-600">Maintain turbines and electrical systems. Hands-on apprenticeship available.</p>
      </div>
      <div class="bg-white rounded-lg p-5 shadow-sm">
        <h4 class="font-semibold">Community Liaison</h4>
        <p class="mt-2 text-sm text-gray-600">Manage stakeholder engagement and training activities.</p>
      </div>
    </div>

    <div class="mt-6">
      <button class="px-4 py-2 rounded-md bg-emerald-600 text-white">Apply now</button>
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq" class="py-20 border-t border-gray-100">
  <div class="max-w-4xl mx-auto px-6 lg:px-8">
    <h2 class="text-2xl font-bold">FAQ</h2>
    <dl class="mt-6 space-y-4">
      <div>
        <dt class="font-semibold">What size of project can you build?</dt>
        <dd class="mt-1 text-gray-600">From 1 kW pico units to 5 MW mini-grids.</dd>
      </div>
      <div>
        <dt class="font-semibold">How long does a project take?</dt>
        <dd class="mt-1 text-gray-600">6–12 months on average for micro projects; timelines vary by logistics.</dd>
      </div>
      <div>
        <dt class="font-semibold">Do you provide financing?</dt>
        <dd class="mt-1 text-gray-600">We help structure partnerships but do not directly fund projects.</dd>
      </div>
      <div>
        <dt class="font-semibold">Who owns the plant?</dt>
        <dd class="mt-1 text-gray-600">Ownership is defined early — community cooperative, private operator or hybrid models are common.</dd>
      </div>
    </dl>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-20">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div>
        <h2 class="text-2xl font-bold">Start your project with us</h2>
        <p class="mt-2 text-gray-600">Tell us about your site — a project specialist will follow up with next steps.</p>

        <div class="mt-6 bg-white p-6 rounded-lg shadow-sm">
          <form on:submit|preventDefault={submitForm} class="grid grid-cols-1 gap-3">
            <input class="rounded-md p-3 border border-gray-200" placeholder="Full name" bind:value={form.name} required />
            <input class="rounded-md p-3 border border-gray-200" placeholder="Email" type="email" bind:value={form.email} required />
            <input class="rounded-md p-3 border border-gray-200" placeholder="Phone / WhatsApp" bind:value={form.phone} />
            <textarea class="rounded-md p-3 border border-gray-200" rows="4" placeholder="Tell us about your site, loads and timeline" bind:value={form.message}></textarea>
            <div class="flex gap-3">
              <button class="px-4 py-2 rounded-md bg-emerald-600 text-white" type="submit">Send inquiry</button>
              <button class="px-4 py-2 rounded-md border border-gray-200 bg-white" type="button" on:click={() => { form = { name: '', email: '', phone: '', message: '' }; }}>Reset</button>
            </div>
            {#if success}
              <div class="text-sm text-emerald-700">Thanks — we received your inquiry. We'll be in touch.</div>
            {/if}
          </form>
        </div>

        <div class="mt-6 text-sm text-gray-600 space-y-1">
          <div>General: <a href="mailto:info@example.com" class="text-emerald-600">info@example.com</a></div>
          <div>Projects: <a href="mailto:projects@example.com" class="text-emerald-600">projects@example.com</a></div>
          <div>Careers: <a href="mailto:careers@example.com" class="text-emerald-600">careers@example.com</a></div>
          <div>Phone / WhatsApp: +[country code] [number]</div>
        </div>
      </div>

      <aside class="bg-white p-6 rounded-lg shadow-sm">
        <h3 class="font-semibold">Quick contacts</h3>
        <ul class="mt-3 text-sm text-gray-600 space-y-2">
          <li>Office: [Street, City, Province, DRC]</li>
          <li>WhatsApp: +[country code] [number]</li>
          <li>Office hours: Mon–Fri, 8:00–17:00</li>
        </ul>

        <div class="mt-6">
          <h4 class="font-semibold">Low-bandwidth</h4>
          <p class="mt-1 text-sm text-gray-600">Prefer WhatsApp? Send a short message with the site name to the number above.</p>
        </div>
      </aside>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="py-10 border-t border-gray-100 mt-12 bg-white">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div class="flex items-center gap-3">
        <svg class="w-8 h-8 rounded-md p-1 bg-gradient-to-br from-green-600 to-emerald-500 text-white" viewBox="0 0 24 24" fill="none"><path d="M3 12c0 5 4 9 9 9s9-4 9-9-4-9-9-9S3 7 3 12z" fill="white" opacity="0.06" /></svg>
        <div>
          <div class="font-semibold">Nexus Énergie</div>
          <div class="text-sm text-gray-500">© {new Date().getFullYear()} Nexus Énergie — All rights reserved</div>
        </div>
      </div>

      <div class="flex gap-4 text-sm text-gray-600">
        <a class="hover:text-emerald-600">Privacy</a>
        <a class="hover:text-emerald-600">Terms</a>
        <a class="hover:text-emerald-600">Contact</a>
      </div>
    </div>
  </div>
</footer>

  </main>
</div><style>
  /* keep minimal - tailwind handles most styles */
</style>
