<script>
  import Footer from "./../components/layout/Footer.svelte";
  import Loading from "./../components/utils/Loading.svelte";
  /* STYLES IMPORTS */
  import "../styles/app.css";
  import "../styles/tailwind-output.css";
  /* JS IMPORTS */
  import NavBar from "../components/layout/NavBar.svelte";
  import { onMount } from "svelte";
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import lang from "../stores/lang";

  let root;

  onMount(() => {
    root = document.getElementsByTagName("html")[0];
    root?.classList.add("scroll-smooth");
  });

  beforeNavigate(() => {
    root?.classList.remove("scroll-smooth");
  });

  afterNavigate(() => {
    root?.classList.add("scroll-smooth");
  });

  let CURRENT_LANG = Math.random();

  $: {
    setTimeout(() => {
      CURRENT_LANG = `${$lang.currentLang}`;
    }, 350);
  }
</script>

{#key CURRENT_LANG}
  <div class={`bg-br-white text-gray-950 font-light w-full layout`} id="home">
    <NavBar />
    <slot />
    <Footer />
  </div>
{/key}

<div class="scroll-smooth shadow-2xl hidden" />

<style>
  .layout {
    width: 100%;
    overflow-x: hidden !important;
  }
</style>
