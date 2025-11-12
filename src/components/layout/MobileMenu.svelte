<script>
  import { slide } from "svelte/transition";
  import get from "lodash.get";
  import config from "../../stores/config";

  let menuVisible = false;

  let toggleMenu = () => {
    menuVisible = !menuVisible;
  };

  let hideMenu = () => {
    menuVisible = false;
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    config.update((prev) => ({
      ...prev,
      currentUser: null,
    }));
    window.location = "/login";
  };
</script>

{#if menuVisible}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click|self={hideMenu}
    class="z-[850] bg-gray-500/5 fixed top-0 left-0 bottom-0 right-0 w-screen h-screen"
  />
{/if}

<div class="block lg:hidden text-br-green relative z-[999]">
  <button class="focus:outline-none" on:click={toggleMenu}>
    <ion-icon name="menu-outline" class="text-3xl" />
  </button>

  {#if menuVisible}
    <div
      transition:slide={{ duration: 250 }}
      class={`translate-y-[10px] absolute mt-8 top-0 right-0 w-56 flex flex-col px-4 pt-4 pb-2 rounded-md shadow-md bg-br-white text-gray-400`}
    >
      <a
        href="https://wa.me/+243820090304"
        target="_blank"
        class="mb-4 btn btn-primary !w-[100%] h-[3.2rem]"
      >
        Nous Contacter
        <ion-icon name="logo-whatsapp" class="text-2xl ml-2" />
      </a>
      <a class="mb-4" on:click={hideMenu} href="/#home">Acceuil</a>
      <a class="mb-4" on:click={hideMenu} href="/#about">A Propos</a>
      <a class="mb-4" on:click={hideMenu} href="/#services">Services</a>
      <a class="mb-4" on:click={hideMenu} href="/#team">Nos Experts</a>
      <a class="mb-4" on:click={hideMenu} href="/#contact">Contact</a>
    </div>
  {/if}
</div>
