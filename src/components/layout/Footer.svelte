<script>
  import Container from "../utils/Container.svelte";

  // Navigation links array
  export const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Approach", href: "/#approach" },
    { label: "Impact", href: "/#impact" },
    { label: "Services", href: "/#services" },
    { label: "Careers", href: "/#careers" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];
</script>

<footer class="bg-white border-t border-gray-200">
  <Container>
    <div class="py-16 md:py-20">
      <!-- Main Footer Content -->
      <div class="grid gap-12 md:grid-cols-4 mb-12">
        <!-- Company Info -->
        <div class="md:col-span-2" data-aos="fade-up">
          <div class="flex items-center gap-4 mb-6">
            <img
              src="/favicon.png"
              alt="Nexus Energy Group Logo"
              class="h-14 w-14 object-contain"
            />
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Nexus Energy Group</h3>
              <p class="text-sm text-gray-600 mt-1">Hydropower for communities</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed max-w-md">
            Delivering reliable, community-owned hydropower solutions across the DRC. 
            From feasibility to operations, we're with you every step of the way.
          </p>
        </div>

        <!-- Quick Links -->
        <div data-aos="fade-up" data-aos-delay="100">
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-900">
            Navigation
          </h4>
          <nav class="space-y-3">
            {#each navLinks as link}
              <a 
                href={link.href} 
                class="block text-sm text-gray-600 hover:text-emerald-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            {/each}
          </nav>
        </div>

        <!-- Contact Info -->
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-900">
            Get In Touch
          </h4>
          <div class="space-y-4 text-sm">
            <div>
              <p class="text-gray-500 mb-1">Email</p>
              <a 
                href="mailto:info@[domain].com" 
                class="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                info@[domain].com
              </a>
            </div>
            <div>
              <p class="text-gray-500 mb-1">Phone</p>
              <a 
                href="tel:+[country code] [number]" 
                class="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                +[country code] [number]
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-xs text-gray-500">
            © {new Date().getFullYear()} Nexus Energy Group. All rights reserved.
          </p>
          <p class="text-xs text-gray-500">
            Designed by
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
