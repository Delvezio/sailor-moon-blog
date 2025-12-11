<script lang="ts">
  export let cols: string = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  export let gap: string = 'gap-6';
  export let as: keyof HTMLElementTagNameMap = 'div';
  export let className: string = '';
</script>

<svelte:element this={as} class={`grid ${cols} ${gap} ${className}`}>
  <slot />
</svelte:element>
