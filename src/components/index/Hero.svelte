<script>
  import { onMount } from "svelte";
  import Container from "../utils/Container.svelte";

  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/videos/01.mp4"
    vid.preload = "auto";
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.playsinline = true;
    vid["webkit-playsinline"] = true;
    vid.play();
    console.log(vid);
  };

  onMount(() => {
    playVideo("hero");
  });
</script>

<section class="showcase" id="home">
  <div class="video-container">
    <video id="hero" muted autoplay loop playsinline>
      <source type="video/mp4" />
    </video>
  </div>
  <div class="content text-gray-100">
    <Container>
      <div class="relative flex flex-col md:flex-row">
        <!--  -->
        <!--  -->
        <div class="relative z-10 h-screen w-full lg:w-3/5 flex items-center">
          <!--  -->
          <div class="relative z-10 h-full w-full flex flex-col justify-center">
            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="500"
              data-aos-delay="100"
              class="-ml-1 sm:-ml-2 md:-ml-4 mb-4 h-font text-[5rem] leading-[5rem] sm:text-6xl md:text-7xl lg:text-9xl uppercase"
            >
              <span class="text-br-green flex items-center"> Nexus </span>
              <div class="lg:!-mt-4">Energy</div>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="500"
              data-aos-delay="400"
              class="mb-5 md:text-xl"
            >
              Reliable rural electrification with small-scale hydropower.
              Practical, locally-led solutions that power homes, farms and small
              industry. built to last.
            </p>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="500"
              data-aos-delay="700"
              class="flex flex-col md:flex-row justify-center md:justify-start md:items-center"
            >
              <a href="/#about" class="btn btn-primary !w-[90%] sm:!w-min">
                Learn more
                <span class="material-symbols-outlined text-3xl ml-2">
                  trending_flat
                </span>
              </a>
            </div>
          </div>
        </div>
        <!--  -->
        <!--  -->

        <div
          class="w-full pb-12 md:pb-0 md:h-screen lg:w-2/5 hidden md:flex items-center justify-center relative z-10"
        >
          <img
            src="/favicon.png"
            class="w-[15rem] md:w-[12.5rem]"
            alt="favicon"
          />
        </div>
      </div>
    </Container>
  </div>
</section>

<style>
  .showcase {
    height: 100vh;
    position: relative;
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
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
  }

  .content {
    box-shadow: inset 50vw 0 70px -7px rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-image: linear-gradient(
      to right top,
      #00000020,
      #00000020,
      #00000020,
      #00000020,
      #00000020
    );
  }
</style>
