<script>
  import Container from "../utils/Container.svelte";

  import lang from "../../stores/lang";

  let { t } = $lang;

  const services = [
    {
      title: {
        en: "Technical Site Assessments",
        fr: "Évaluations Techniques de Sites",
      },
      description: {
        en: "Comprehensive evaluation of potential hydropower sites",
        fr: "Évaluation complète des sites hydroélectriques potentiels",
      },
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
    {
      title: {
        en: "Feasibility and Impact Studies",
        fr: "Études de Faisabilité et d'Impact",
      },
      description: {
        en: "Detailed analysis of project viability and environmental impact",
        fr: "Analyse détaillée de la viabilité du projet et de l'impact environnemental",
      },
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
    {
      title: {
        en: "System Design and Component Sourcing",
        fr: "Conception de Systèmes et Approvisionnement en Composants",
      },
      description: {
        en: "Custom engineering solutions with reliable component procurement",
        fr: "Solutions d'ingénierie personnalisées avec approvisionnement fiable en composants",
      },
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M3 21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
               <path d="M5 21V7L13 2L21 7V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M9 9V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
               <path d="M9 21V13H15V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
    {
      title: {
        en: "Installation and Commissioning",
        fr: "Installation et Mise en Service",
      },
      description: {
        en: "Professional installation and system activation",
        fr: "Installation professionnelle et activation du système",
      },
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
               <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
             </svg>`,
    },
    {
      title: {
        en: "Local Operator Training and Long-term Maintenance",
        fr: "Formation des Opérateurs Locaux et Maintenance à Long Terme",
      },
      description: {
        en: "Empowering communities with skills and ongoing support",
        fr: "Autonomiser les communautés avec des compétences et un soutien continu",
      },
      icon: `<svg viewBox="0 0 24 24" fill="none">
               <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`,
    },
  ];

  const faqs = [
    {
      question: {
        en: "What size of project can you build?",
        fr: "Quelle taille de projet pouvez-vous construire?",
      },
      answer: {
        en: "From 1 kW pico units to 5 MW mini-grids.",
        fr: "Des unités pico de 1 kW aux mini-réseaux de 5 MW.",
      },
    },
    {
      question: {
        en: "How long does a project take?",
        fr: "Combien de temps dure un projet?",
      },
      answer: {
        en: "6–12 months on average, depending on site access.",
        fr: "6 à 12 mois en moyenne, selon l'accès au site.",
      },
    },
    {
      question: {
        en: "Do you provide financing?",
        fr: "Proposez-vous un financement?",
      },
      answer: {
        en: "We help structure partnerships but do not directly fund.",
        fr: "Nous aidons à structurer des partenariats mais ne finançons pas directement.",
      },
    },
    {
      question: {
        en: "Who owns the plant?",
        fr: "Qui est propriétaire de la centrale?",
      },
      answer: {
        en: "Community, cooperative, or private – defined early in design.",
        fr: "Communauté, coopérative ou privé – défini dès la conception.",
      },
    },
    {
      question: {
        en: "How much maintenance is needed?",
        fr: "Combien d'entretiens sont nécessaires?",
      },
      answer: {
        en: "Basic monthly checks and yearly inspections – we train local teams.",
        fr: "Vérifications mensuelles de base et inspections annuelles – nous formons les équipes locales.",
      },
    },
  ];

  const team = [
    {
      name: "Kapiamba Kashala Fabrice",
      title: "PhD, MBA",
      role: { en: "Founder & CEO", fr: "Fondateur et PDG" },
      bio: {
        en: "PhD in Chemical, Environmental and Materials Engineering, University of Miami. Specializes in clean energy systems, process engineering, and sustainability-driven infrastructure. Over 10 years of R&D and field deployment experience.",
        fr: "Doctorat en génie chimique, environnemental et des matériaux, Université de Miami. Spécialisé dans les systèmes d'énergie propre, l'ingénierie des procédés et les infrastructures axées sur la durabilité. Plus de 10 ans d'expérience en R&D et déploiement sur le terrain.",
      },
      photo: "/team/kapiamba-fabrice.jpg",
      linkedin: "https://www.linkedin.com/in/kapiamba-fabrice/",
    },
    {
      name: "Divine Kavunga",
      role: {
        en: "Co-Founder | Community Partnerships",
        fr: "Co-Fondatrice | Partenariats Communautaires",
      },
      bio: {
        en: "Bridges technical implementation with social engagement. Works closely with villages, cooperatives, and civil society to ensure local inclusion and feedback.",
        fr: "Fait le lien entre la mise en œuvre technique et l'engagement social. Travaille en étroite collaboration avec les villages, les coopératives et la société civile pour assurer l'inclusion locale et les retours d'information.",
      },
      photo: "/team/divine-kavunga.jpg",
      linkedin: "https://www.linkedin.com/in/divine-kavunga/",
    },
    {
      name: "Jonathan Kabamba",
      role: {
        en: "Co-Founder | Technical Operations",
        fr: "Co-Fondateur | Opérations Techniques",
      },
      bio: {
        en: "Background in electrical engineering and infrastructure logistics. Leads installation strategy, procurement, and workforce training.",
        fr: "Formation en génie électrique et logistique des infrastructures. Dirige la stratégie d'installation, l'approvisionnement et la formation de la main-d'œuvre.",
      },
      photo: "/team/jonathan-kabamba.jpg",
      linkedin: "https://www.linkedin.com/in/jonathankabamba/",
    },
  ];

  const contactInfo = {
    email: "contact@nexusenergy.org",
    phone: "+1 419 280 8399",
    linkedin: {
      company: "https://www.linkedin.com/company/nexus-energy",
      founder: "https://www.linkedin.com/in/kapiamba-fabrice/",
    },
  };

  let formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  let sending = false;

  function handleSubmit() {
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
        alert(
          t("🙂 Thank you for your message!", "🙂 Merci pour votre message!"),
        );
        formData = { name: "", email: "", subject: "", message: "" };
      },
      (error) => {
        console.log("🙂 The email service is down!");
        console.log("FAILED...", error);
        sending = false;
      },
    );
  }
</script>

<div class="bg-white text-gray-900">
  <!-- Services Section -->
  <section id="services" class="py-20">
    <Container>
      <div class="mx-auto max-w-4xl text-center mb-16" data-aos="fade-up">
        <p class="text-xs uppercase tracking-[0.35em] text-emerald-600">
          {t("Our Core Services", "Nos Services Principaux")}
        </p>
        <h2
          class="mt-4 text-3xl md:text-5xl xl:text-6xl font-bold leading-tight"
        >
          {t(
            "From idea to reliable operation",
            "De l'idée à l'exploitation fiable",
          )}
        </h2>
        <p class="mt-6 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          {t(
            "We support you at every stage of your hydropower project.",
            "Nous vous accompagnons à chaque étape de votre projet hydroélectrique.",
          )}
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
              {t(service.title.en, service.title.fr)}
            </h3>
            <p class="mt-3 text-sm text-gray-600 leading-relaxed">
              {t(service.description.en, service.description.fr)}
            </p>
          </article>
        {/each}
      </div>
      <div class="py-4"></div>
    </Container>
  </section>

  <!-- Team Section -->
  <section id="team" class="py-20 bg-slate-50">
    <Container>
      <div class="mx-auto max-w-4xl text-center mb-16" data-aos="fade-up">
        <p class="text-xs uppercase tracking-[0.35em] text-emerald-600">
          {t("Our Team", "Notre Équipe")}
        </p>
        <h2
          class="mt-4 text-3xl md:text-5xl xl:text-6xl font-bold leading-tight"
        >
          {t("Meet the team", "Rencontrez l'équipe")}
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
              {t(member.role.en, member.role.fr)}
            </p>
            <p class="mt-4 text-sm text-gray-600 leading-relaxed">
              {t(member.bio.en, member.bio.fr)}
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
          {t("Get Answers", "Obtenez des Réponses")}
        </p>
        <h2 class="mt-4 text-3xl md:text-5xl font-bold leading-tight">
          {t("Common Questions", "Questions Fréquentes")}
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
                {t(faq.question.en, faq.question.fr)}
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
              {t(faq.answer.en, faq.answer.fr)}
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
            {t("Contact Us", "Contactez-nous")}
          </p>
          <h2 class="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            {t(
              "Let's Build the Future Together",
              "Construisons l'Avenir Ensemble",
            )}
          </h2>
          <p
            class="mt-6 text-sm md:text-base text-emerald-100 max-w-2xl mx-auto"
          >
            {t(
              "Interested in partnering, funding, volunteering, or submitting a potential hydro site? Let us know.",
              "Intéressé par un partenariat, un financement, du bénévolat ou la soumission d'un site hydroélectrique potentiel? Faites-le nous savoir.",
            )}
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
              {t("Send Us a Message", "Envoyez-nous un Message")}
            </h3>
            <form on:submit|preventDefault={handleSubmit} class="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder={t("Name", "Nom")}
                  bind:value={formData.name}
                  required
                  class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("Email", "E-mail")}
                  bind:value={formData.email}
                  required
                  class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t("Subject", "Sujet")}
                  bind:value={formData.subject}
                  required
                  class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition"
                />
              </div>
              <div>
                <textarea
                  placeholder={t("Message", "Message")}
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
                {t("Send Message", "Envoyer le Message")}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8" data-aos="fade-left">
            <div>
              <h3
                class="text-xs uppercase tracking-[0.3em] text-emerald-300 mb-4"
              >
                {t("Contact Information", "Informations de Contact")}
              </h3>
              <div class="space-y-4">
                <div>
                  <p class="text-xs text-emerald-300 mb-2">
                    {t("Email", "E-mail")}
                  </p>
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
                  <p class="text-xs text-emerald-300 mb-2">
                    {t("Phone/WhatsApp", "Téléphone/WhatsApp")}
                  </p>
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
                {t(
                  "Our team typically responds within 24–48 hours. For urgent project inquiries, please call or use WhatsApp.",
                  "Notre équipe répond généralement dans les 24 à 48 heures. Pour les demandes de projets urgents, veuillez appeler ou utiliser WhatsApp.",
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</div>
