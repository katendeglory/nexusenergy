<script>
  import { onMount } from "svelte";
  import Card1 from "./sub/Card1.svelte";
  import Container from "../utils/Container.svelte";
  import SectionHeading from "../utils/SectionHeading.svelte";

  let vision = [
    {
      icon: "ads_click",
      t1: "HELLO",
      t2: "WORLD 1",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, exercitationem consectetur quisquam cum quos omnis debitis atque ad quaerat sit assumenda.`,
    },
    {
      icon: "event_available",
      t1: "HELLO",
      t2: "WORLD 2",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, exercitationem consectetur quisquam cum quos omnis debitis atque ad quaerat sit assumenda.`,
    },
  ];

  onMount(() => {
    setVisionData();
  });
</script>

<div id="services" />
<div class="pt-20 pb-10 bg-[#111111] patterns">
  <SectionHeading text1="Nos" text2="Services" breakWord />

  <Container>
    <div class="text-gray-300">
      Consultance, audit et analyse énergétique, avec présentation d'études et
      de solutions techniques permettant d'accroître l'efficacité des
      équipements et installations.

      <div class="mt-4" />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
        {#each vision as v (v)}
          <Card1 {...v} />
        {/each}
      </div>
    </div>
  </Container>
</div>

<style>
  .patterns {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffffff' fill-opacity='0.0075' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
