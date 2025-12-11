<script lang="ts">
  export let id: string | undefined = undefined;
  export let className: string = '';
</script>

<section {id} class={`py-12 md:py-16 px-4 max-w-6xl mx-auto ${className}`}>
  <slot />
</section>
