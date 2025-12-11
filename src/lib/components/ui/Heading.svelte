<script lang="ts">
  export let level: 1 | 2 | 3 | 4 | 5 | 6 = 2;
  export let className: string = '';
  export let text: string | undefined = undefined;

  const Tag = (`h${level}`) as keyof HTMLElementTagNameMap;

  const base =
    level === 1 ? 'text-3xl md:text-4xl font-extrabold tracking-tight'
  : level === 2 ? 'text-2xl md:text-3xl font-bold tracking-tight'
  : level === 3 ? 'text-xl md:text-2xl font-semibold'
  : level === 4 ? 'text-lg md:text-xl font-semibold'
  : level === 5 ? 'text-base md:text-lg font-semibold'
  : 'text-sm md:text-base font-semibold';
</script>

<svelte:element this={Tag} class={`prose-headings:my-0 ${base} ${className}`}>
  {#if text}{text}{:else}<slot />{/if}
</svelte:element>
