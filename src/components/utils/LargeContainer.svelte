<script>
  export let overflowHidden = true;
</script>

<div
  class="mx-auto px-2 lg:px-2"
  class:overflow-hidden={overflowHidden}
>
  <slot />
</div>
