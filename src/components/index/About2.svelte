<script>
  import Container from "./../utils/Container.svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<div class="bg-br-dark-green text-white min-h-screen">
  <div class="container mx-auto px-4 py-16 max-w-7xl">
    <!-- Solutions Section -->
    <section class="mb-20">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center">
        Hydropower for every scale
      </h2>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Pico -->
        <div
          class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <span class="material-symbols-outlined text-3xl text-cyan-400"
              >bolt</span
            >
            <h3 class="text-2xl font-semibold">Pico</h3>
          </div>
          <p class="text-cyan-300 mb-4 font-medium">≤5 kW</p>
          <p class="text-gray-300">Lighting, charging, small village loads</p>
        </div>

        <!-- Micro -->
        <div
          class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <span class="material-symbols-outlined text-3xl text-cyan-400"
              >power</span
            >
            <h3 class="text-2xl font-semibold">Micro</h3>
          </div>
          <p class="text-cyan-300 mb-4 font-medium">5–100 kW</p>
          <p class="text-gray-300">Clinics, schools, agro-processing</p>
        </div>

        <!-- Mini -->
        <div
          class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <span class="material-symbols-outlined text-3xl text-cyan-400"
              >electrical_services</span
            >
            <h3 class="text-2xl font-semibold">Mini</h3>
          </div>
          <p class="text-cyan-300 mb-4 font-medium">100 kW–5 MW</p>
          <p class="text-gray-300">Mini-grids for towns and industries</p>
        </div>
      </div>

      <!-- Design Principles -->
      <div
        class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8"
      >
        <h3 class="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span class="material-symbols-outlined text-cyan-400"
            >design_services</span
          >
          Design Principles
        </h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="flex items-start gap-3">
            <span class="material-symbols-outlined text-cyan-400">
              check_circle
            </span>
            <div>Simple & low-maintenance</div>
          </div>
          <div class="flex items-start gap-3">
            <span class="material-symbols-outlined text-cyan-400">
              check_circle
            </span>
            <div>Locally serviceable</div>
          </div>
          <div class="flex items-start gap-3">
            <span class="material-symbols-outlined text-cyan-400">
              check_circle
            </span>
            <div>Environmentally responsible</div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <a href="/#contact" class="btn btn-primary mx-auto">
          <span class="material-symbols-outlined">mail</span>
          Contact US
        </a>
      </div>
    </section>

    <!-- Projects Section -->
    <section>
      <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center">
        Proven results on the ground
      </h2>

      <div class="space-y-8">
        <!-- Lubongo Micro Hydro -->
        <div
          class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
            <h3 class="text-2xl font-semibold flex items-center gap-2">
              <span class="material-symbols-outlined text-cyan-400"
                >water_drop</span
              >
              Lubongo Micro Hydro — Tanganyika
            </h3>
          </div>
          <div class="flex flex-wrap items-center gap-4 mb-4 text-cyan-300">
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">flash_on</span>
              45 kW
            </span>
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">home</span>
              200 homes + 1 clinic powered
            </span>
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-sm"
                >calendar_today</span
              >
              Commissioned 2022
            </span>
          </div>
          <p class="text-gray-300 flex items-start gap-2">
            <span class="material-symbols-outlined text-cyan-400 text-sm mt-1"
              >groups</span
            >
            <span>Local team built, community-run, diesel fully replaced.</span>
          </p>
        </div>
        <!--  -->

        <!-- Lubongo Micro Hydro -->
        <div
          class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
            <h3 class="text-2xl font-semibold flex items-center gap-2">
              <span class="material-symbols-outlined text-cyan-400"
                >water_drop</span
              >
              Lubongo Micro Hydro — Tanganyika
            </h3>
          </div>
          <div class="flex flex-wrap items-center gap-4 mb-4 text-cyan-300">
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">flash_on</span>
              45 kW
            </span>
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">home</span>
              200 homes + 1 clinic powered
            </span>
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-sm"
                >calendar_today</span
              >
              Commissioned 2022
            </span>
          </div>
          <p class="text-gray-300 flex items-start gap-2">
            <span class="material-symbols-outlined text-cyan-400 text-sm mt-1"
              >groups</span
            >
            <span>Local team built, community-run, diesel fully replaced.</span>
          </p>
        </div>
        <!--  -->

        <!-- Impact Snapshot -->
        <div
          class="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
        >
          <h3 class="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span class="material-symbols-outlined text-cyan-400">insights</span
            >
            Impact Snapshot
          </h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-cyan-400 mb-2">—</div>
              <p class="text-gray-300 text-sm">Projects Completed</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-cyan-400 mb-2">—</div>
              <p class="text-gray-300 text-sm">Total Capacity</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-cyan-400 mb-2">—</div>
              <p class="text-gray-300 text-sm">Communities Served</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-cyan-400 mb-2">—</div>
              <p class="text-gray-300 text-sm">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
