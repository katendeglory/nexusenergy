<script>
  import { onMount, onDestroy } from "svelte";
  import Container from "../utils/Container.svelte";

  // Edit your nav items here
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

  const whatsappHref = "https://wa.me/+243820090304";

  let isOpen = false;
  let scrolled = false;

  function toggleMenu() {
    isOpen = !isOpen;
    lockScroll(isOpen);
  }
  function closeMenu() {
    isOpen = false;
    lockScroll(false);
  }
  function onLinkClick() {
    closeMenu();
  }

  function lockScroll(locked) {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (locked) {
      root.style.overflow = "hidden";
      root.style.height = "100%";
    } else {
      root.style.overflow = "";
      root.style.height = "";
    }
  }

  function handleScroll() {
    scrolled = typeof window !== "undefined" && window.scrollY > 8;
  }
  function handleKeyDown(e) {
    if (e.key === "Escape" && isOpen) closeMenu();
  }

  onMount(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
  });
  onDestroy(() => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("keydown", handleKeyDown);
    lockScroll(false);
  });
</script>

<!-- NAV BAR -->
<header
  id="header"
  class={`fixed top-0 left-0 z-[100] w-full transition-all duration-200 text-sm
    ${scrolled ? "bg-br-dark-green/95 backdrop-blur supports-[backdrop-filter]:bg-br-dark-green/80 shadow-sm" : "bg-br-dark-green"}`}
>
  <Container overflowHidden={false}>
    <div
      id="inner-header"
      class="h-[4.5rem] flex items-center justify-between text-gray-200"
    >
      <!-- Brand (shared layout with mobile to avoid jump) -->
      <a class="brand flex items-center" href="/#home" aria-label="Go to home">
        <img src="/favicon.png" class="brand-logo" alt="home" />
        <div class="brand-text">
          <span class="tracking-wide">Nexus</span>
          <span class="tracking-wide">Energy</span>
        </div>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center">
        {#each navLinks as link, i (link.href)}
          <a
            class="mr-4 hover:text-white/90 transition-colors"
            href={link.href}
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <!-- Desktop action -->
      <div class="hidden lg:flex items-center">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary !py-2 !px-4"
          aria-label="Contact us via WhatsApp"
        >
          Contact us
          <ion-icon name="logo-whatsapp" class="text-2xl ml-2" />
        </a>
      </div>

      <!-- Mobile burger -->
      <button
        class="lg:hidden relative h-10 w-10 inline-flex items-center justify-center text-white"
        on:click={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span class="sr-only">{isOpen ? "Close" : "Open"} menu</span>
        <!-- Three bars with explicit positions (morph to X) -->
        <span
          class="absolute left-1/2 block h-[2px] w-6 -translate-x-1/2 bg-white rounded transition-transform duration-200"
          style={`top: 12px; transform: ${isOpen ? "translate(-50%, 8px) rotate(45deg)" : "translate(-50%, 0) rotate(0)"};`}
        />
        <span
          class="absolute left-1/2 block h-[2px] w-6 -translate-x-1/2 bg-white rounded transition-opacity duration-150"
          style={`top: 18px; opacity: ${isOpen ? 0 : 1};`}
        />
        <span
          class="absolute left-1/2 block h-[2px] w-6 -translate-x-1/2 bg-white rounded transition-transform duration-200"
          style={`top: 24px; transform: ${isOpen ? "translate(-50%, -4px) rotate(-45deg)" : "translate(-50%, 0) rotate(0)"};`}
        />
      </button>
    </div>
  </Container>
</header>

<!-- MOBILE FULLSCREEN MENU -->
{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    id="mobile-menu"
    class="fixed inset-0 z-[999] bg-br-dark-green text-gray-100 overflow-hidden"
    on:click|self={closeMenu}
    aria-modal="true"
    role="dialog"
  >
    <!-- Ambient glow accents -->
    <div
      class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl"
    ></div>

    <!-- Top bar: use SAME brand block to avoid position/size mismatch -->
    <div class="flex items-center justify-between px-5 pt-5">
      <a
        class="brand flex items-center"
        href="/#home"
        on:click={onLinkClick}
        aria-label="Go to home"
      >
        <img src="/favicon.png" class="brand-logo" alt="home" />
        <div class="brand-text">
          <span>Nexus</span>
          <span>Energy</span>
        </div>
      </a>
      <button
        class="relative h-10 w-10 inline-flex items-center justify-center"
        on:click={toggleMenu}
        aria-label="Close menu"
      >
        <span
          class="absolute block h-[2px] w-6 bg-white rounded transform rotate-45"
        ></span>
        <span
          class="absolute block h-[2px] w-6 bg-white rounded transform -rotate-45"
        ></span>
      </button>
    </div>

    <!-- Animated content -->
    <div class="h-full w-full">
      <div
        class="mx-auto flex h-full max-w-screen-md flex-col items-center justify-center px-6 py-10 animate-menuIn"
      >
        <nav class="w-full text-center">
          {#each navLinks as link, i (link.href)}
            <a
              href={link.href}
              on:click={onLinkClick}
              class="block py-3 text-xl sm:text-3xl font-medium tracking-wide text-white/95 hover:text-white transition-colors animate-linkIn"
              style={`animation-delay: ${150 + i * 60}ms`}
            >
              {link.label}
            </a>
          {/each}
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          class="mt-10 inline-flex items-center justify-center btn btn-primary !px-6 !py-3 animate-ctaIn"
          aria-label="Contact us via WhatsApp"
          style="animation-delay: 500ms"
        >
          Contact us
          <ion-icon name="logo-whatsapp" class="text-2xl ml-2" />
        </a>

        <div
          class="mt-8 text-center text-xs text-white/70 animate-fadeInSlow"
          style="animation-delay: 650ms"
        >
          © {new Date().getFullYear()} Nexus Energy Group
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Shared brand block to keep header/mobile perfectly matched */
  .brand-logo {
    height: 2rem;
  }
  @media (min-width: 640px) {
    .brand-logo {
      height: 2rem; /* match header for consistency */
    }
  }
  .brand-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.05;
    font-size: 0.75rem; /* text-xs */
    margin-left: 0.5rem; /* mr-2 equivalent when logo is left */
  }

  /* Animations for mobile menu */
  @keyframes menuIn {
    0% {
      opacity: 0;
      transform: translateY(12px) scale(0.985);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  @keyframes linkIn {
    0% {
      opacity: 0;
      transform: translateY(8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes ctaIn {
    0% {
      opacity: 0;
      transform: translateY(10px) scale(0.99);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  @keyframes fadeInSlow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .animate-menuIn {
    animation: menuIn 300ms ease-out both;
  }
  .animate-linkIn {
    animation: linkIn 320ms ease-out both;
  }
  .animate-ctaIn {
    animation: ctaIn 340ms ease-out both;
  }
  .animate-fadeInSlow {
    animation: fadeInSlow 450ms ease-out both;
  }
</style>
