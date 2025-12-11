<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import { page } from "$app/stores";

  // Placeholder locale: poi leggeremo da Strapi
  const articles = [
    {
      slug: "benvenuti-nel-blog",
      title: "Benvenuti nel Sailor Moon Blog",
      cover: "https://images.unsplash.com/photo-1558980664-10ea5800c69b?q=80&w=1400&auto=format&fit=crop",
      content: `
        <p>Questo è il primo articolo del nostro progetto Sailor Moon! Troverai guide agli episodi, curiosità e video.</p>
        <h3>Obiettivi</h3>
        <ul>
          <li>Raccontare le saghe Classic → Stars</li>
          <li>Approfondire i personaggi</li>
          <li>Raccogliere le migliori clip da YouTube</li>
        </ul>
      `
    },
    {
      slug: "guida-agli-episodi",
      title: "Guida agli episodi: Classic → Stars",
      cover: "https://images.unsplash.com/photo-1520975922071-a0f4429d5e72?q=80&w=1400&auto=format&fit=crop",
      content: `
        <p>Panoramica rapida delle stagioni, con ordine consigliato.</p>
        <ol>
          <li>Classic</li>
          <li>R</li>
          <li>S</li>
          <li>SuperS</li>
          <li>Stars</li>
        </ol>
      `
    },
    {
      slug: "personaggi-preferiti",
      title: "I nostri personaggi preferiti",
      cover: "https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1400&auto=format&fit=crop",
      content: `
        <p>Usagi, Ami, Rei, Makoto e Minako: perché li amiamo.</p>
        <p>Scrivi anche tu la tua top 5!</p>
      `
    }
  ];

  $: slug = $page.params.slug;
  $: article = articles.find(a => a.slug === slug);
</script>

<Section>
  {#if article}
    <Heading level={1} className="mb-4">{article.title}</Heading>

    {#if article.cover}
      <img src={article.cover} alt={article.title} class="w-full rounded-2xl ring-1 ring-black/10 shadow-soft object-cover aspect-[16/9] mb-6" />
    {/if}

    <article class="prose dark:prose-invert max-w-none" on:click>
      {@html article.content}
    </article>

    <div class="mt-8">
      <a href="/articoli" class="underline hover:text-pink-600">← Torna agli articoli</a>
    </div>
  {:else}
    <Heading level={2} className="mb-4">Articolo non trovato</Heading>
    <p class="prose dark:prose-invert">Ops! Non esiste un articolo con questo slug.</p>
    <div class="mt-6">
      <a href="/articoli" class="underline hover:text-pink-600">← Torna agli articoli</a>
    </div>
  {/if}
</Section>
