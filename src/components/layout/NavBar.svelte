<script>
  import Container from "../utils/Container.svelte";
  import MobileMenu from "./MobileMenu.svelte";
  import { onMount } from "svelte";
  import get from "lodash.get";
  import config from "../../stores/config";

  let PWAInstallBtn;
  // let is_chrome = !!window.chrome;
  let is_chrome = false;
  let clickListener;

  $: {
    if (PWAInstallBtn) {
      /*
        Attach the click event listener to the install button when it is shown,
        as on page load it's still hidden and waiting for the PWA to be ready. 
        The button will be rendered as soon as we have caught the beforeinstallprompt event.
        The event prompt will have to be manually triggered with the click of the button. 
        The beforeinstallprompt event will only trigger after the worker is installed, activated & ready.
        Otherwise it'll throw an exception and won't trigger.
      */
      PWAInstallBtn.addEventListener("click", clickListener);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    config.update((prev) => ({
      ...prev,
      currentUser: null,
    }));
    window.location = "/login";
  };

  onMount(() => {
    window.onscroll = (e) => {
      scrollFunction();
    };

    const scrollFunction = () => {
      // let innerHeader = document.getElementById("inner-header");
      let header = document.getElementById("header");

      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        // innerHeader.classList.replace("h-16", "h-12");
        // header.classList.add("shadow-sm");
        // header.classList.add("bg-br-white");
        // header.classList.replace("text-gray-300", "text-gray-800");
      } else {
        // innerHeader.classList.replace("h-12", "h-16");
        // header.classList.remove("shadow-sm");
        // header.classList.remove("bg-br-white");
        // header.classList.replace("text-gray-800", "text-gray-300");
      }
    };

    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      // showInstallPromotion();
      // Show button when app can be installed, it can now be installed
      is_chrome = !!window.chrome;
    });

    clickListener = (e) => {
      // Hide the app provided install promotion on click
      // hideMyInstallPromotion();
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt!");
        } else {
          console.log("User dismissed the install prompt!");
        }
      });
    };
  });
</script>

<div
  id="header"
  class="bg-br-dark-green navbar text-gray-300 fixed top-0 left-0 w-full z-50 transition-all
    duration-250 text-sm"
>
  <Container overflowHidden={false}>
    <div
      id="inner-header"
      class="h-[4.5rem] flex justify-between items-center transition-all duration-250"
    >
      <a class="nav-link flex items-center" href="#home">
        <img
          src="/favicon.png"
          class="h-[2rem] sm:h-8 object-cover mr-1"
          alt="home"
        />
        <div class="flex flex-col items-start !text-xs space-y-[1px]">
          <span>Nexus</span>
          <span>Energy</span>
        </div>
      </a>

      <div class="hidden lg:flex">
        {#if get($config, "currentUser.role") == "super-admin"}
          <a class="nav-link mr-4" href="/adm">Admin</a>
        {:else}
          <a class="nav-link mr-4" href="/#home">Acceuil</a>
        {/if}
        <a class="nav-link mr-4" href="/#about">A Propos</a>
        <a class="nav-link mr-4" href="/#services">Services</a>
        <a class="nav-link mr-4" href="/#team">Nos Experts</a>
        <a class="nav-link mr-4" href="/#contact">Contact</a>
      </div>

      <div class="lg:flex lg:items-center">
        <div class="hidden lg:flex items-center nav-link mr-8 lg:mr-0">
          {#if get($config, "currentUser.username")}
            <a href="/profile" class="btn btn-primary !py-1">
              Profile
              <span class="material-symbols-outlined text-2xl ml-2">
                person
              </span>
            </a>
            <div class="flex items-center">
              <button class="ml-2 pt-[4px]" on:click={handleLogout}>
                <ion-icon name="power-outline" class="text-2xl" />
              </button>
            </div>
          {:else}
            <a
              href="https://wa.me/+243820090304"
              target="_blank"
              class="btn btn-primary !py-1 h-[2.75rem]"
            >
              Nous Contacter
              <ion-icon name="logo-whatsapp" class="text-xl ml-2" />
            </a>
          {/if}
        </div>

        <div class="flex items-center">
          {#if is_chrome}
            <div class="mr-2 lg:ml-2 lg:mr-0">
              <button
                class="btn btn-primary shadow-sm pwa-btn"
                bind:this={PWAInstallBtn}
              >
                Install
                <ion-icon name="logo-pwa" class="text-2xl ml-2" />
              </button>
            </div>
          {/if}

          <MobileMenu />
        </div>
      </div>
    </div>
  </Container>
</div>
