<script>
  import Container from "./../utils/Container.svelte";

  let sending = false;

  let message = {
    name: "",
    email: "",
    tel: "",
    object: "",
    content: "",
  };

  let handleSubmit = () => {
    // Here here
    if (1 < 2) return;
    sending = true;
    let templateParams = message;
    emailjs
      .send("service_nourane_decor", "template_nourane_decor", templateParams)
      .then(
        (response) => {
          sending = false;
          console.log("SUCCESS!", response.status, response.text);
          alert(`🙂 Merci pour votre message !`);
          message = { name: "", email: "", tel: "", object: "", content: "" };
        },
        (error) => {
          console.log(`🙂 The email service is down!`);
          console.log("FAILED...", error);
          sending = false;
        },
      );
  };
</script>

<!-- https://www.pexels.com/photo/a-futuristic-looking-computer-screen-with-green-and-yellow-lines-18337644/ -->
<div
  style="background-image: url(/images/02.jpg); background-size: cover; background-position: left;"
>
  <Container>
    <div
      id="contact"
      class="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-16 pb-16"
    >
      <h1
        class="mb-4 col-span-full text-center py-1 text-transparent fill-current bg-clip-text bg-gradient-to-r from-br-green to-yellow-300 uppercase h-font font-bold text-5xl md:text-6xl"
      >
        Contactez Nous
      </h1>
      <div class="overflow-hidden px-1">
        <form
          on:submit|preventDefault={handleSubmit}
          class="w-full h-full grid grid-cols-1 gap-3 px-3 py-3 glassmorph-1 border border-br-green/10"
        >
          <h1 class="opacity-75 flex items-center text-br-white">
            <span class="material-symbols-outlined text-3xl mr-1 text-br-green">
              edit_note
            </span>
            <span> Remplissez ce formulaire </span>
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              bind:value={message.name}
              type="text"
              class={`w-full`}
              required
              placeholder="Votre nom"
            />
            <input
              bind:value={message.tel}
              type="text"
              class={`w-full`}
              required
              placeholder="Telephone"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              bind:value={message.email}
              type="email"
              class={`w-full`}
              required
              placeholder="Votre email"
            />
            <input
              bind:value={message.object}
              type="text"
              class={`w-full`}
              required
              placeholder="Object du message"
            />
          </div>

          <div class="">
            <textarea
              bind:value={message.content}
              class={`w-full`}
              required
              rows="3"
              placeholder="Message..."
            />
          </div>

          <div class="">
            <button
              disabled={sending}
              class={`btn btn-secondary !w-full !py-[0.35rem]`}
            >
              {#if sending}
                Patientez
                <span class="material-symbols-outlined text-3xl ml-2">
                  pending
                </span>
              {:else}
                <span> Envoyer </span>
                <span class="material-symbols-outlined text-3xl ml-2">
                  send
                </span>
              {/if}
            </button>
          </div>
        </form>
      </div>
      <!--  -->
      <!--  -->
      <!--  -->
      <div class="">
        <!-- other side of the screen -->
      </div>
    </div>
  </Container>
</div>

<style>
  .glass {
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
</style>
