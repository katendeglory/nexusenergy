<script>
  import Container from "../utils/Container.svelte";

  import lang from "../../stores/lang";

  let { t } = $lang;

  // Navigation links array
  const navLinks = [
    { label: { en: "Home", fr: "Accueil" }, href: "/#home" },
    { label: { en: "About", fr: "À propos" }, href: "/#about" },
    { label: { en: "Vision", fr: "Vision" }, href: "/#vision" },
    { label: { en: "Services", fr: "Services" }, href: "/#services" },
    { label: { en: "Team", fr: "Équipe" }, href: "/#team" },
    { label: { en: "FAQ", fr: "FAQ" }, href: "/#faq" },
    { label: { en: "Contact", fr: "Contact" }, href: "/#contact" },
  ];
</script>

<footer class="bg-white border-t border-gray-200">
  <Container>
    <div class="py-16 md:py-20">
      <!-- Main Footer Content -->
      <div class="grid gap-12 md:grid-cols-4 mb-12">
        <!-- Company Information -->
        <div class="md:col-span-2" data-aos="fade-up">
          <div class="flex items-center gap-4 mb-6">
            <img
              src="/favicon.png"
              alt="Nexus Energy Group Logo"
              class="h-14 w-14 object-contain"
            />
            <div>
              <h3 class="text-2xl font-bold text-gray-900">
                Nexus Energy Group
              </h3>
              <p class="text-sm text-gray-600 mt-1">
                {t(
                  "Hydropower for communities",
                  "Hydroélectricité pour les communautés",
                )}
              </p>
            </div>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed max-w-md">
            {t(
              "Delivering reliable, community-owned hydropower solutions across the DRC. From feasibility to operations, we're with you every step of the way.",
              "Fournir des solutions hydroélectriques fiables et communautaires dans toute la RDC. De la faisabilité aux opérations, nous sommes avec vous à chaque étape.",
            )}
          </p>
        </div>

        <!-- Quick Links -->
        <div data-aos="fade-up" data-aos-delay="100">
          <h4
            class="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-900"
          >
            {t("Navigation", "Navigation")}
          </h4>
          <nav class="space-y-3">
            {#each navLinks as link}
              <a
                href={link.href}
                class="block text-sm text-gray-600 hover:text-emerald-600 transition-colors duration-200"
              >
                {t(link.label.en, link.label.fr)}
              </a>
            {/each}
          </nav>
        </div>

        <!-- Contact Info -->
        <div data-aos="fade-up" data-aos-delay="200">
          <h4
            class="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-900"
          >
            {t("Get In Touch", "Contactez-nous")}
          </h4>
          <div class="space-y-4 text-sm">
            <div>
              <p class="text-gray-500 mb-1">{t("Email", "E-mail")}</p>
              <a
                href="mailto:info@nexusenergygroup.org"
                class="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                info@nexusenergygroup.org
              </a>
            </div>
            <div>
              <p class="text-gray-500 mb-1">{t("Phone", "Téléphone")}</p>
              <a
                href="tel:+14192808399"
                class="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                +1 419 280 8399
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-200">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-xs text-gray-500">
            © {new Date().getFullYear()} Nexus Energy Group. {t(
              "All rights reserved.",
              "Tous droits réservés.",
            )}
          </p>
          <p class="text-xs text-gray-500">
            {t("Designed by", "Conçu par")}
            <a
              href="https://glorykatende.com"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors ml-1"
            >
              Glory K.
            </a>
          </p>
        </div>
      </div>
    </div>
  </Container>
</footer>
