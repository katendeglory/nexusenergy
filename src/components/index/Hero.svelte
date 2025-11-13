<script>
  import { onMount, onDestroy } from "svelte";
  import Container from "../utils/Container.svelte";

  let videoEl;

  const playVideo = (el, src = "/videos/01.mp4") => {
    if (!el) return;
    el.src = src;
    el.preload = "auto";
    el.muted = true;
    el.autoplay = true;
    el.loop = true;
    el.playsInline = true;
    el.setAttribute("playsinline", "");
    el.play().catch(() => {
      el.muted = true;
      el.play().catch(() => {});
    });
    el.addEventListener("error", () => {
      el.parentElement?.classList.add("video-fallback");
    });
  };

  let intersectionObserver;

  onMount(() => {
    const el = videoEl || document.getElementById("hero");
    playVideo(el);
    if (el) {
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) el.play().catch(() => {});
            else el.pause();
          });
        },
        { threshold: 0.2 },
      );
      intersectionObserver.observe(el);
    }
  });

  onDestroy(() => {
    intersectionObserver?.disconnect();
  });
</script>

<section class="showcase" id="home">
  <div class="video-container">
    <video
      id="hero"
      bind:this={videoEl}
      poster="/images/landscape.jpg"
      muted
      autoplay
      loop
      playsinline
      aria-label="Small hydropower video background"
    >
      <source type="video/mp4" />
    </video>
  </div>

  <div class="content text-gray-100">
    <Container>
      <div class="relative flex flex-col md:flex-row">
        <!-- Left: Copy -->
        <div class="relative z-10 h-screen w-full lg:w-3/5 flex items-center">
          <div class="relative z-10 h-full w-full flex flex-col justify-center">
            <div
              class="mb-4 inline-flex items-center gap-2"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="50"
            >
              <span
                class="inline-block h-2 w-2 rounded-full bg-br-green shadow-[0_0_0_3px_rgba(16,185,129,0.25)]"
              ></span>
              <span
                class="text-xs uppercase tracking-[0.35em] text-gray-100/80"
              >
                Nexus Energy Group
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="700"
              data-aos-delay="100"
              class="-ml-1 sm:-ml-2 md:-ml-4 h-font uppercase leading-[1.02] text-[2.9rem] sm:text-[3.6rem] md:text-[4.8rem] lg:text-[6.2rem]"
            >
              <span class="text-br-green block">Nexus</span>
              <span class="block lg:!-mt-1">Energy</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="700"
              data-aos-delay="350"
              class="mt-5 max-w-[58ch] text-base md:text-xl text-gray-100/90 leading-relaxed"
            >
              Reliable rural electrification with small-scale hydropower.
              Practical, locally led solutions powering homes, farms, and small
              industry—built to last.
            </p>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="700"
              data-aos-delay="600"
              class="mt-8"
            >
              <a
                href="/#about"
                class="btn btn-primary !w-[90%] sm:!w-min shadow-[0_12px_30px_-10px_rgba(16,185,129,0.6)] hover:shadow-[0_16px_40px_-10px_rgba(16,185,129,0.7)] transition-shadow"
              >
                Learn more
                <span class="material-symbols-outlined text-3xl ml-2">
                  trending_flat
                </span>
              </a>
            </div>

            <div
              class="mt-6 flex items-center gap-4 text-xs text-gray-200/80"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="750"
            >
              <div class="inline-flex items-center gap-2">
                <span
                  class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
                ></span>
                98% uptime
              </div>
              <div class="inline-flex items-center gap-2">
                <span
                  class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
                ></span>
                Local training on every site
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Brand mark / aesthetic -->
        <div
          class="w-full pb-12 md:pb-0 md:h-screen lg:w-2/5 hidden md:flex items-center justify-center relative z-10"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="250"
        >
          <div class="relative">
            <div
              class="absolute -inset-10 -z-10 blur-3xl opacity-30 bg-[radial-gradient(40%_40%_at_50%_50%,#10b981_0%,transparent_70%)]"
            ></div>
            <div
              class="relative aspect-square w-[12rem] md:w-[14rem] lg:w-[16rem] rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)] flex items-center justify-center"
            >
              <img
                src="/favicon.png"
                alt="Nexus Energy logo"
                class="w-[55%] drop-shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
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

  /* Video layer */
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
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

  /* Graceful fallback gradient if video fails */
  .video-container.video-fallback {
    background: radial-gradient(
      120% 80% at 20% 60%,
      #065f46 0%,
      #064e3b 40%,
      #022c22 100%
    );
  }

  /* Overlays for contrast and cinematic depth */
  .video-container::after {
    content: "";
    z-index: 1;
    height: 100%;
    width: 100%;
    position: absolute;
    inset: 0;
    background: radial-gradient(
        100% 70% at 18% 55%,
        rgba(0, 0, 0, 0.58) 0%,
        rgba(0, 0, 0, 0.32) 45%,
        rgba(0, 0, 0, 0.18) 70%,
        rgba(0, 0, 0, 0.08) 100%
      ),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  }
  .video-container::before {
    content: "";
    z-index: 1;
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.22) 0%,
      rgba(0, 0, 0, 0.1) 36%,
      rgba(0, 0, 0, 0.02) 62%,
      rgba(0, 0, 0, 0) 82%
    );
    pointer-events: none;
  }

  /* Foreground layer */
  .content {
    box-shadow: inset 40vw 0 70px -7px rgba(0, 0, 0, 0.12);
    position: absolute;
    inset: 0;
    z-index: 2;
    background-image: linear-gradient(
      to right top,
      #00000014,
      #00000014,
      #00000014,
      #00000014,
      #00000014
    );
  }

  @media (min-width: 1280px) {
    .content {
      box-shadow: inset 36vw 0 70px -7px rgba(0, 0, 0, 0.12);
    }
  }
</style>
