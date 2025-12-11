<script lang="ts">
  import { onMount } from 'svelte';

  let isDark = false;

  function apply(theme: 'dark' | 'light') {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
    isDark = theme === 'dark';
  }

  function toggle() {
    apply(isDark ? 'light' : 'dark');
  }

  onMount(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (saved) apply(saved);
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      apply(prefersDark ? 'dark' : 'light');
    }
  });
</script>

<button
  type="button"
  class="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm ring-1 ring-black/10 bg-white/70 backdrop-blur hover:bg-white dark:bg-zinc-900/70 dark:hover:bg-zinc-900 transition"
  on:click={toggle}
  aria-label="Toggle theme"
>
  {#if isDark}
    <span>🌙</span><span>Dark</span>
  {:else}
    <span>☀️</span><span>Light</span>
  {/if}
</button>
