<script lang="ts">
  import "../routes/layout.css";
  import ThemeToggle from "$lib/components/ui/ThemeToggle.svelte";
  export let data;
</script>

<svelte:head>
  <title>{import.meta.env.PUBLIC_SITE_NAME || 'Sailor Moon Blog'}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="min-h-dvh bg-cream dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
  <!-- Header -->
  <header class="sticky top-0 z-40 border-b border-black/5 bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 font-extrabold tracking-tight">
        <span class="text-2xl">🌙</span>
        <span class="text-pink-600">Sailor</span><span class="text-moon-gold">Moon</span><span>Blog</span>
      </a>

      <nav class="hidden sm:flex items-center gap-4 text-sm">
        <a class="hover:text-pink-600" href="/articoli">Articoli</a>
        <a class="hover:text-pink-600" href="/video">Video</a>
        <a class="hover:text-pink-600" href="/categorie">Categorie</a>
        <a class="hover:text-pink-600" href="/collections">Collections</a>
        <a class="hover:text-pink-600" href="/tag">Tag</a>
      </nav>

      <div class="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </div>
  </header>

  <!-- Main -->
  <main class="max-w-6xl mx-auto px-4 py-10">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="mt-10 border-t border-black/5">
    <div class="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="opacity-80">
        © {new Date().getFullYear()} Sailor Moon Blog · Tema ispirato a <span class="text-pink-600">Usagi</span> &amp; co.
      </p>
      <p class="opacity-80">
        Made with <a class="underline hover:text-pink-600" href="https://kit.svelte.dev">SvelteKit</a> + <a class="underline hover:text-pink-600" href="https://tailwindcss.com">Tailwind</a>
      </p>
    </div>
  </footer>
</div>
