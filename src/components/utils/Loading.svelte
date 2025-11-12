<script>
  import { Stretch } from "svelte-loading-spinners";
  export let text = "Chargement";
  export let desc = null;
</script>

<div class="w-full h-64 flex flex-col items-center justify-center">
  <h1
    class="mb-6 uppercase text-br-green text-xl animate-pulse tracking-widest"
  >
    {text}
  </h1>
  {#if desc}
    <div class="text-center mb-2">{desc}</div>
  {/if}
  <Stretch size="100" unit="px" color="#46a421" />
</div>
