<script>
  import Container from "../utils/Container.svelte";

  // Navigation links array
  const navLinks = [
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

<footer class="bg-br-green text-white">
  <Container>
    <div class="py-12 md:py-16">
      <div class="grid gap-8 md:grid-cols-3 items-center">
        <!-- Logo -->
        <div class="flex items-center gap-4" data-aos="fade-up">
          <img
            src="/favicon.png"
            alt="Nexus Energy Group Logo"
            class="h-12 w-12 object-contain"
          />
          <div>
            <h3 class="text-xl font-bold">Nexus Energy Group</h3>
            <p class="text-sm opacity-90">Hydropower for communities</p>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">
            Quick Links
          </h4>
          <nav class="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            {#each navLinks as link}
              <a href={link.href} class="hover:opacity-80 transition">
                {link.label}
              </a>
            {/each}
          </nav>
        </div>

        <!-- Designer Credit -->
        <div class="text-center md:text-right" data-aos="fade-up" data-aos-delay="200">
          <p class="text-sm opacity-90">
            Designed by
            <a
              href="https://glorykatende.com"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold hover:opacity-80 transition underline"
            >
              Glory K.
            </a>
          </p>
          <p class="text-xs mt-2 opacity-75">
            © {new Date().getFullYear()} Nexus Energy Group
          </p>
        </div>
      </div>
    </div>
  </Container>
</footer>
