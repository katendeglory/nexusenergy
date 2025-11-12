<script>
  export let name = "Jane DOE";
  export let img = "jane-doe.png";
  export let role = "C.E.O.";
</script>

<div class="bg-white shadow-xl rounded-md">
  <!-- Photo -->
  <div class="flex items-center justify-center pt-4 relative">
    <div
      class="pr-circle relative rounded-full flex items-center justify-center h-[9.5rem] w-[9.5rem]"
    >
      <div
        class="pr-bg rounded-full h-[9rem] w-[9rem] overflow-hidden bg-center bg-cover"
        style="background-image: url(/images/team/{img});"
      />
    </div>
  </div>
  <!-- Info -->
  <div class="mt-2 px-2 pb-4">
    <div class="h-font text-lg md:text-xl font-bold text-center">
      {name}
    </div>
    <div class="mt-2 text-sm text-gray-500 flex items-center justify-center">
      <span class="material-symbols-outlined text-xl mr-1 mb-[3px]">
        work
      </span>
      {role}
    </div>
    <div
      class="mt-2 tracking-widest text-xs uppercase text-br-green flex items-center justify-center"
    >
      Nourane Décor
    </div>
  </div>
</div>

<style>
  .pr-circle {
    background-image: linear-gradient(50deg, #000000 50%, #d1a45a 50%);
  }

  .pr-circle:hover .pr-bg {
    transition: 100ms all;
  }

  .pr-circle:hover .pr-bg {
    height: 9.3rem;
    width: 9.3rem;
  }
</style>
