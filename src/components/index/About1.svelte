<script>
  import Container from "./../utils/Container.svelte";
</script>

<div id="about" />

<!-- Ribbon -->
<div class="bg-br-dark-green py-14 text-br-white">
  <Container>
    <div class="text-xl">
      <span class="decoration-br-green underline underline-offset-2">
        Nexus Energy Group
      </span>
      designs and delivers pico, micro and mini hydropower systems across the DRC.
      Each project is engineered for simplicity, durability and community ownership.
    </div>
  </Container>
</div>

<!-- Stats -->
<Container>
  <section class="py-16 text-center">
    <!-- Highlights -->
    <div class="mb-10">
      <h3
        class="text-xl sm:text-2xl font-semibold text-gray-800 flex flex-col sm:flex-row justify-center items-center gap-2"
      >
        [X]+ projects delivered · [Y] households powered ·
        <span class="text-emerald-600 font-semibold">98% uptime</span>
      </h3>
      <p class="mt-3 text-gray-600 flex items-center justify-center gap-2">
        Local training and transparent pricing on every site
      </p>
    </div>

    <!-- Sections -->
    <div class="mt-12 grid gap-6 sm:grid-cols-3">
      <div
        class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
      >
        <div class="flex justify-center">
          <span class="material-symbols-outlined text-emerald-600 text-4xl"
            >engineering</span
          >
        </div>
        <h4 class="mt-3 text-lg font-semibold text-gray-800">Our Work</h4>
        <p class="mt-2 text-sm text-gray-600">
          From site assessment to long-term O&M.
        </p>
      </div>

      <div
        class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
      >
        <div class="flex justify-center">
          <span class="material-symbols-outlined text-emerald-600 text-4xl"
            >groups</span
          >
        </div>
        <h4 class="mt-3 text-lg font-semibold text-gray-800">Our Approach</h4>
        <p class="mt-2 text-sm text-gray-600">
          Local teams, simple engineering, real results.
        </p>
      </div>

      <div
        class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
      >
        <div class="flex justify-center">
          <span class="material-symbols-outlined text-emerald-600 text-4xl"
            >eco</span
          >
        </div>
        <h4 class="mt-3 text-lg font-semibold text-gray-800">Impact</h4>
        <p class="mt-2 text-sm text-gray-600">
          Replacing diesel, creating jobs, powering growth.
        </p>
      </div>
    </div>
  </section>
</Container>
<!--  -->

<div class="text-gray-800 min-h-screen relative bg-white">
  <div class="min-h-screen py-8">
    <Container>
      <div class="h-font text-4xl md:text-6xl font-bold uppercase">
        <div class="text-br-green text-2xl md:text-3xl font-normal">
          About us
        </div>
        Powering resilient communities through hydropower
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="">
          Our Mission is to expand access to clean, affordable energy through
          practical, small-scale hydropower and we carry a vision of a DRC where
          communities thrive with local, renewable power.

          <div class="">
            <!-- Values -->
            <div class="my-8">
              <h3
                class="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2"
              >
                <span class="inline-block w-1.5 h-6 bg-emerald-600 rounded">
                </span>
                Our Values
              </h3>
              <p class="text-gray-600 leading-relaxed mb-4">
                At Nexus Énergie, our work is guided by four core values that
                shape how we build and maintain every project:
              </p>
              <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li>Local Partnership</li>
                <li>Reliability</li>
                <li>Transparency</li>
                <li>Environmental Care</li>
              </ul>
            </div>

            <!-- Team -->
            <div class="mb-8">
              <h3
                class="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2"
              >
                <span class="inline-block w-1.5 h-6 bg-emerald-600 rounded"
                ></span>
                Our Team
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Our team brings together engineers, technicians, and community
                specialists with deep experience in rural electrification. From
                hydrology and civil works to community training and long-term
                operations, each member plays a vital role in ensuring that our
                projects deliver consistent, measurable results across
                provinces.
              </p>
            </div>

            <!-- Partners -->
            <div class="max-w-3xl">
              <h3
                class="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2"
              >
                <span class="inline-block w-1.5 h-6 bg-emerald-600 rounded"
                ></span>
                Partners
              </h3>
              <p class="text-gray-600 leading-relaxed">
                We collaborate with local cooperatives, donors, and technical
                institutions to ensure every installation is built for long-term
                success. Together, we create frameworks for sustainable growth,
                knowledge sharing, and locally managed energy systems.
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex items-center justify-center px-2 md:px-4 mx-auto max-w-[30rem] min-h-[65vh] md:min-h-min"
        >
          <img src="/favicon.png" alt="logo" />
        </div>
      </div>
    </Container>
  </div>
</div>
