<script>
  import Container from "../utils/Container.svelte";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let photos = [
    "/images/galerie/01.jpg",
    "/images/galerie/02.jpg",
    "/images/galerie/03.jpg",
    "/images/galerie/04.jpg",
    "/images/galerie/05.jpg",
    "/images/galerie/06.jpg",
    "/images/galerie/07.jpg",
    "/images/galerie/08.jpg",
    "/images/galerie/09.jpg",
    "/images/galerie/10.jpg",
  ];

  let SHOW_TIP = false;
  let SLIDE_CURRENT = 0;
  let SLIDE_TOTAL = 0;

  onMount(() => {
    const lightboxPhotos = GLightbox({
      selector: ".glightbox-photos",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      onOpen: () => {
        SHOW_TIP = true;
      },
      onClose: () => {
        SHOW_TIP = false;
      },
      // beforeSlideLoad: (slide, data) => {},
    });

    lightboxPhotos.on("slide_changed", (slide) => {
      SLIDE_CURRENT = slide.current.index;
      SLIDE_TOTAL = photos.length;
      console.log(`${SLIDE_CURRENT + 1} / ${SLIDE_TOTAL}`);
    });
  });
</script>

<svelte:head>
  <title>Galerie — Nourane Décor</title>
</svelte:head>

<div id="galerie" />

{#if SHOW_TIP}
  <div
    transition:fly={{ y: 500, duration: 2000 }}
    class="text-sm text-gray-400 z-[9999999] min-w-min fixed left-[50%] bottom-[4.5rem] translate-x-[-50%] md:left-2 md:bottom-2 md:translate-x-0 bg-black px-4 py-2 rounded-md"
  >
    <div class="flex items-center">
      <span class="material-symbols-outlined mr-1"> photo_library </span>
      {SLIDE_CURRENT + 1} / {SLIDE_TOTAL}
    </div>
  </div>

  <div
    transition:fly={{ y: 500, duration: 2000 }}
    class="z-[9999999] min-w-min fixed md:bottom-2 bottom-8 left-[50%] translate-x-[-50%] bg-black px-4 py-2 rounded-md"
  >
    <div class="btn-shine">
      <span class="material-symbols-outlined mr-1"> swipe </span>
      Glissez à gauche/droite pour voir plus
    </div>
  </div>
{/if}

<div class="bg-blurry">
  <div class="w-screen bg-spiral pt-2 md:pt-10 pb-24">
    <!--  -->
    <!--  -->
    <Container>
      <div class="h-font text-5xl md:text-6xl lg:text-7xl">
        <span class="text-gray-900">EN</span>
        <span class="text-br-green/80 uppercase">Images</span>
      </div>

      <div
        class="uppercase tracking-wider text-base h-font mt-8 mb-4 text-gray-800 flex items-center"
      >
        Cliquez sur les images pour derouler le diaporama
      </div>
    </Container>
    <!--  -->
    <Container>
      <!-- Gallery -->
      <div
        class="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {#each photos as photo}
          <!-- Image -->
          <a
            href={photo}
            class="glightbox-photos"
            data-gallery="gallery-photos"
          >
            <div
              class="shadow-lg photo-frame rounded-md flex items-center justify-center h-full w-full p-[0.15rem]"
            >
              <div
                class="relative gal-container h-[8rem] sm:h-[10rem] overflow-hidden w-full rounded-md bg-black/5 bg-center bg-blend-overlay"
                style="background-image: url({photo});"
              >
                <div
                  class="gal-inner transition-all duration-500 absolute left-0 top-0 opacity-0 right-0 bottom-0 hidden sm:flex items-center justify-center"
                >
                  <span
                    class="bg-black/50 flex items-center px-4 py-2 rounded-lg border border-gray-200/25 text-white text-xs tracking-wider h-font uppercase font-light"
                  >
                    <span class="material-symbols-outlined mr-2">
                      photo_camera
                    </span>
                    Cliquez pour voir
                  </span>
                </div>
              </div>
            </div>
          </a>
        {/each}
      </div>
      <!-- End Gallery -->
    </Container>
    <!--  -->
    <!--  -->
  </div>
</div>

<style>
  .gal-container {
    transition-property: all;
    transition-duration: 100ms;
    background-size: cover;
    background-position: center;
  }

  .gal-container:hover {
    /* background-position: top; */
  }

  .gal-container:hover .gal-inner {
    background: rgba(0, 0, 0, 0.4);
    opacity: 1;
  }

  .photo-frame {
    background-image: linear-gradient(50deg, #000000 50%, #d1a45a 50%);
  }

  .btn-shine {
    display: flex;
    align-items: center;
    color: #fff;
    /* background: linear-gradient(to right, #4d4d4d 0, #fff 10%, #4d4d4d 20%); */
    background: linear-gradient(to right, #737373 0, #fff 10%, #737373 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 2s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    white-space: nowrap;
  }

  @keyframes shine {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 300px;
    }
  }
</style>
