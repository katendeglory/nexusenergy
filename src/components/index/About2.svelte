<script>
  import Container from "./../utils/Container.svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<div id="team"></div>

<div class="bg-[#2b2b2b] min-h-screen">
  <div
    class="min-h-screen py-16"
    style="background-image: url(/images/mesh-2.svg); background-size: cover; background-position: left;"
  >
    <Container>
      <div class="h-font text-white text-4xl md:text-6xl font-bold">
        Une équipe d'experts,
        <div class="mt-4 text-br-green">A votre disposition...</div>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="text-gray-300">
          Notre équipe d'experts en énergies renouvelables est composée de
          professionnels passionnés et hautement qualifiés, dédiés à vous
          accompagner dans votre transition énergétique.
        </div>
      </div>

      <div class="mt-10 text-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="rounded-md shadow-md shadow-black/25 px-4 py-4 bg-black/20">
          <div
            class="text-2xl mb-4 text-br-green h-font font-semibold uppercase flex items-center"
          >
            <span class="material-symbols-outlined mr-2 text-4xl">
              webhook
            </span>
            Compétence technique
          </div>
          <div class="">
            Nos ingénieurs maîtrisent les technologies renouvelables comme le
            solaire et l'éolien. Ils intègrent des solutions innovantes à vos
            infrastructures, tout en restant à la pointe des avancées.
          </div>
        </div>
        <div class="rounded-md shadow-md shadow-black/25 px-4 py-4 bg-black/20">
          <div
            class="text-2xl mb-4 text-br-green h-font font-semibold uppercase flex items-center"
          >
            <span class="material-symbols-outlined mr-2 text-4xl">
              emoji_objects
            </span>
            Expérience terrain
          </div>
          <div class="">
            Forts de nombreuses interventions réussies, nos experts adaptent
            leurs solutions aux besoins spécifiques de chaque secteur,
            garantissant fiabilité et efficacité.
          </div>
        </div>
        <div class="rounded-md shadow-md shadow-black/25 px-4 py-4 bg-black/20">
          <div
            class="text-2xl mb-4 text-br-green h-font font-semibold uppercase flex items-center"
          >
            <span class="material-symbols-outlined mr-2 text-4xl">
              devices
            </span>
            Vision stratégique
          </div>
          <div class="">
            Nos spécialistes élaborent des plans énergétiques alignés sur vos
            objectifs financiers et environnementaux, assurant une croissance
            durable et optimisée.
          </div>
        </div>
        <div class="rounded-md shadow-md shadow-black/25 px-4 py-4 bg-black/20">
          <div
            class="text-2xl mb-4 text-br-green h-font font-semibold uppercase flex items-center"
          >
            <span class="material-symbols-outlined mr-2 text-4xl">
              engineering
            </span>
            Engagement écologique
          </div>
          <div class="">
            Animés par la préservation de la planète, nos experts veillent à
            intégrer des pratiques durables et à réduire l'empreinte carbone de
            chaque projet.
          </div>
        </div>
      </div>
    </Container>
  </div>
</div>
