<script lang="ts">
  export let href: string | null = null;
  export let variant: 'solid' | 'soft' | 'outline' = 'soft';
  export let className: string = '';
</script>

{#if href}
  <a
    href={href}
    class={`inline-flex items-center gap-1 rounded-full text-xs px-2.5 py-1
      ${variant === 'solid'   ? 'bg-pink-600 text-white' 
    : variant === 'outline' ? 'border border-pink-600 text-pink-700 dark:text-pink-300'
                             : 'bg-pink-50 text-pink-700 ring-1 ring-pink-200 dark:bg-pink-900/20 dark:text-pink-200 dark:ring-pink-800/60'}
      ${className}`}>
    <slot />
  </a>
{:else}
  <span
    class={`inline-flex items-center gap-1 rounded-full text-xs px-2.5 py-1
      ${variant === 'solid'   ? 'bg-pink-600 text-white' 
    : variant === 'outline' ? 'border border-pink-600 text-pink-700 dark:text-pink-300'
                             : 'bg-pink-50 text-pink-700 ring-1 ring-pink-200 dark:bg-pink-900/20 dark:text-pink-200 dark:ring-pink-800/60'}
      ${className}`}>
    <slot />
  </span>
{/if}
