<script lang="ts">
  export let href: string | null = null;
  export let title: string | undefined = undefined;
  export let media: string | null = null; // URL immagine opzionale
  export let className: string = '';
</script>

{#if href}
  <a href={href} class={`block rounded-2xl shadow-sm ring-1 ring-black/5 hover:shadow-md transition overflow-hidden bg-white dark:bg-zinc-900 ${className}`}>
    {#if media}
      <img src={media} alt={title ?? ''} class="w-full aspect-[16/9] object-cover" />
    {/if}
    <div class="p-4">
      {#if title}<h3 class="text-lg font-semibold tracking-tight">{title}</h3>{/if}
      <div class="prose prose-sm dark:prose-invert">
        <slot />
      </div>
      <slot name="footer" />
    </div>
  </a>
{:else}
  <div class={`rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden bg-white dark:bg-zinc-900 ${className}`}>
    {#if media}
      <img src={media} alt={title ?? ''} class="w-full aspect-[16/9] object-cover" />
    {/if}
    <div class="p-4">
      {#if title}<h3 class="text-lg font-semibold tracking-tight">{title}</h3>{/if}
      <div class="prose prose-sm dark:prose-invert">
        <slot />
      </div>
      <slot name="footer" />
    </div>
  </div>
{/if}
