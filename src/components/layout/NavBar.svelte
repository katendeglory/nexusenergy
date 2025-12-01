<script>
  import { onMount, onDestroy } from "svelte";
  import Container from "../utils/Container.svelte";
  import lang from "../../stores/lang";

  let { t } = $lang;

  function switchLanguage(newLang) {
    localStorage.setItem("lang", newLang);
    lang.update((prev) => ({ ...prev, currentLang: newLang }));
  }

  // Edit your nav items here
  const navLinks = [
    { label: { en: "About", fr: "À propos" }, href: "/#about" },
    { label: { en: "Vision", fr: "Vision" }, href: "/#vision" },
    { label: { en: "Services", fr: "Services" }, href: "/#services" },
    { label: { en: "Team", fr: "Équipe" }, href: "/#team" },
    { label: { en: "FAQ", fr: "FAQ" }, href: "/#faq" },
    { label: { en: "Contact", fr: "Contact" }, href: "/#contact" },
  ];

  const whatsappHref = "https://wa.me/+14192808399";

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
            {t(link.label.en, link.label.fr)}
          </a>
        {/each}
      </nav>

      <!-- Desktop action -->
      <div class="hidden lg:flex items-center gap-3">
        <!-- Language Switcher -->
        <div class="lang-switcher">
          <button
            on:click={() => switchLanguage("en")}
            class={`lang-btn ${$lang.currentLang === "en" ? "active" : ""}`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            on:click={() => switchLanguage("fr")}
            class={`lang-btn ${$lang.currentLang === "fr" ? "active" : ""}`}
            aria-label="Passer au français"
          >
            FR
          </button>
          <div
            class="lang-slider"
            class:slide-right={$lang.currentLang === "fr"}
          ></div>
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary !py-2 !px-4"
          aria-label="Contact us via WhatsApp"
        >
          {t("Contact us", "Contactez-nous")}
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
              {t(link.label.en, link.label.fr)}
            </a>
          {/each}
        </nav>

        <!-- Language Switcher Mobile -->
        <div class="lang-switcher-mobile">
          <button
            on:click={() => switchLanguage("en")}
            class={`lang-btn-mobile ${$lang.currentLang === "en" ? "active" : ""}`}
          >
            EN
          </button>
          <button
            on:click={() => switchLanguage("fr")}
            class={`lang-btn-mobile ${$lang.currentLang === "fr" ? "active" : ""}`}
          >
            FR
          </button>
          <div
            class="lang-slider-mobile"
            class:slide-right={$lang.currentLang === "fr"}
          ></div>
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          class="mt-6 inline-flex items-center justify-center btn btn-primary !px-6 !py-3 animate-ctaIn"
          aria-label="Contact us via WhatsApp"
          style="animation-delay: 500ms"
        >
          {t("Contact us", "Contactez-nous")}
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

  /* Language Switcher Styles */
  .lang-switcher {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 9999px;
    padding: 4px;
    overflow: hidden;
  }

  .lang-btn {
    position: relative;
    z-index: 2;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    transition: color 0.3s ease;
    background: transparent;
    border: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
  }

  .lang-btn:hover {
    color: white;
  }

  .lang-btn.active {
    color: #064e3b;
  }

  .lang-slider {
    position: absolute;
    top: 4px;
    left: 4px;
    width: calc(50% - 4px);
    height: calc(100% - 8px);
    background: white;
    border-radius: 9999px;
    transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
    z-index: 1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .lang-slider.slide-right {
    transform: translateX(calc(100% + 4px));
  }

  /* Mobile Language Switcher */
  .lang-switcher-mobile {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 9999px;
    padding: 6px;
    margin-top: 2rem;
    animation: ctaIn 340ms ease-out both;
    animation-delay: 450ms;
    overflow: hidden;
  }

  .lang-btn-mobile {
    position: relative;
    z-index: 2;
    padding: 8px 16px;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.3s ease;
    background: transparent;
    border: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
  }

  .lang-btn-mobile.active {
    color: #064e3b;
  }

  .lang-slider-mobile {
    position: absolute;
    top: 6px;
    left: 6px;
    width: calc(50% - 10px);
    height: calc(100% - 12px);
    background: white;
    border-radius: 9999px;
    transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
    z-index: 1;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  }

  .lang-slider-mobile.slide-right {
    transform: translateX(calc(100% + 8px));
  }
</style>
