<script>
  import Container from "../utils/Container.svelte";

  // Services data
  const services = [
    {
      title: "Feasibility Studies",
      description: "Site screening & power estimates",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
    {
      title: "Engineering & Design",
      description: "Civil works, turbines, and grid layout",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
    {
      title: "Construction Support",
      description: "Supervision & quality assurance",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M3 21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
               <path d="M5 21V7L13 2L21 7V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M9 9V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
               <path d="M9 21V13H15V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
    {
      title: "Operations & Maintenance",
      description: "Training and spare parts",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
               <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
    {
      title: "Financing Advisory",
      description: "Connecting projects with partners",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
  ];

  // Careers data
  const careerBenefits = [
    {
      title: "Build skills in renewable energy",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
    {
      title: "Work directly with communities",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
    {
      title: "Real impact, visible results",
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
  ];

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

  // Contact data
  const contactInfo = {
    emails: {
      general: "info@nexusenergy.com",
      projects: "projects@nexusenergy.com",
      careers: "careers@nexusenergy.com",
    },
    phone: "+141 928 083 99",
    address: "Democratic Republic of Congo",
  };

  // Form state
  let formData = {
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  };

  function handleSubmit() {
    // Handle form submission
    console.log("Form submitted:", formData);

    // Here here
    // if (1 < 2) return;
    // sending = true;
    // let templateParams = message;
    // emailjs
    //   .send("service_nourane_decor", "template_nourane_decor", templateParams)
    //   .then(
    //     (response) => {
    //       sending = false;
    //       console.log("SUCCESS!", response.status, response.text);
    //       alert(`🙂 Merci pour votre message !`);
    //       message = { name: "", email: "", tel: "", object: "", content: "" };
    //     },
    //     (error) => {
    //       console.log(`🙂 The email service is down!`);
    //       console.log("FAILED...", error);
    //       sending = false;
    //     },
    //   );
  }
</script>

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
  <section id="careers" class="relative overflow-hidden bg-slate-50 py-20">
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
            Get In Touch
          </p>
          <h2 class="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Start your project with us
          </h2>
          <p
            class="mt-6 text-sm md:text-base text-emerald-100 max-w-2xl mx-auto"
          >
            Tell us about your site — we'll handle the rest.
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
              Send Inquiry
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
                  type="tel"
                  placeholder="Phone/WhatsApp"
                  bind:value={formData.phone}
                  class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Location"
                  bind:value={formData.location}
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
                Send Inquiry
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
                  <div class="space-y-2 text-sm text-emerald-100">
                    <p>
                      <span class="text-gray-400">General:</span>
                      {contactInfo.emails.general}
                    </p>
                    <p>
                      <span class="text-gray-400">Projects:</span>
                      {contactInfo.emails.projects}
                    </p>
                    <p>
                      <span class="text-gray-400">Careers:</span>
                      {contactInfo.emails.careers}
                    </p>
                  </div>
                </div>
                <div>
                  <p class="text-xs text-emerald-300 mb-2">Phone/WhatsApp</p>
                  <p class="text-sm text-emerald-100">{contactInfo.phone}</p>
                </div>
                <div>
                  <p class="text-xs text-emerald-300 mb-2">Address</p>
                  <p class="text-sm text-emerald-100">{contactInfo.address}</p>
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
