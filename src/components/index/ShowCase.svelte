<script>
  import Container from "./../utils/Container.svelte";
  import { onMount } from "svelte";

  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/videos/08.mp4";
    vid.preload = "auto";
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.playsinline = true;
    vid["webkit-playsinline"] = true;
    vid.play();
  };

  onMount(() => {
    playVideo("showcase-vid");
  });
</script>

<div id="showcase" />

<div class="pb-16 hidden" />

<div class="h-[85vh] relative">
  <div class="media-overlay z-10 absolute top-0 left-0 right-0 bottom-0">
    <div class="absolute top-0 left-0 w-full right-0">
      <div class="pt-10 max-w-[76rem] mx-auto px-4 lg:px-2 flex justify-end">
        <img src="/favicon.png" class="h-10 object-cover" alt="home" />
      </div>
    </div>
  </div>

  <div class="video-container">
    <video id="showcase-vid" muted autoplay loop playsinline>
      <source type="video/mp4" />
    </video>
  </div>

  <div class="text-white h-full bg-black/10 relative z-20">
    <div class="h-full flex flex-col justify-between">
      <div class="h-full" />
      <!--  -->
      <!--  -->
      <div class="bottom-part">
        <div class="max-w-[76rem] mx-auto px-4 lg:px-2 mb-8">
          <div
            class="mt-10 w-full flex flex-col md:flex-row md:justify-between"
          >
            <div
              class="h-font tracking-wider font-extralight uppercase text-white glassmorph-0 px-2 py-2 sm:px-4 sm:py-4 rounded-md border border-white/10 text-base lg:text-xl md:mr-8"
            >
              Reliable rural electrification with small-scale hydropower.
              Practical, locally-led solutions that power homes, farms and small
              industry. built to last.
            </div>
            <div class="w-full md:w-[12.5rem] flex flex-col justify-between">
              <span
                class="animate-pulse hidden md:inline text-base md:mb-3 lg:mb-2 h-font font-thin uppercase tracking-widest"
              >
                Click here to contact us
              </span>
              <a
                href="/#contact"
                class="btn btn-primary mt-4 md:mt-0 !py-2 !px-2 !w-full !h-full !shadow-none md:!py-[2px]"
              >
                <span
                  class="material-symbols-outlined text-4xl hidden md:inline"
                >
                  enable
                </span>
                <span class="material-symbols-outlined text-3xl md:hidden">
                  enable
                </span>
                <span class="md:hidden ml-2 capitalize"> Contact US </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bg-patterns">
  <Container>
    <div class="">
      <div class="mx-auto max-w-[50rem] pt-10">
        <h3
          class="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2"
        >
          <span class="inline-block w-1.5 h-6 bg-emerald-600 rounded"></span>
          Partners
        </h3>
        <p class="text-gray-600 leading-relaxed">
          We collaborate with local cooperatives, donors, and technical
          institutions to ensure every installation is built for long-term
          success. Together, we create frameworks for sustainable growth,
          knowledge sharing, and locally managed energy systems.
        </p>

        <div class="mt-4 flex items-center justify-center">
          <img src="/favicon.png" class="h-20" alt="home" />
        </div>
      </div>
    </div>
  </Container>
</div>

<div class="py-3"></div>

<style>
  .bg-patterns {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%234CAF50' fill-opacity='0.04'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  /* TODO, Fallback background here */
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--primary-color)
      url("./https://traversymedia.com/downloads/cover.jpg") no-repeat center
      center/cover;
  }

  .video-container video {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  .video-container:after {
    content: "";
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.05);
    position: absolute;
  }

  .bottom-part {
    /* box-shadow: none; */
  }

  .media-overlay {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
</style>
