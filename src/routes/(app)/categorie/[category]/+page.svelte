<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Grid from "$lib/components/ui/Grid.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import { page } from "$app/stores";

  // Placeholder: in futuro leggeremo sezioni e contenuti da Strapi
  const dataByCategory: Record<string, { title: string; cover: string; sections: { slug: string; title: string; cover?: string; }[] }> = {
    anime: {
      title: "Anime",
      cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
      sections: [
        { slug: "classic", title: "Classic" },
        { slug: "r",       title: "R" },
        { slug: "s",       title: "S" },
        { slug: "supers",  title: "SuperS" },
        { slug: "stars",   title: "Stars" }
      ]
    },
    manga: {
      title: "Manga",
      cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop",
      sections: [
        { slug: "tankobon",  title: "Tankobon" },
        { slug: "kanzenban", title: "Kanzenban" },
        { slug: "short-stories", title: "Short Stories" }
      ]
    }
  };

  $: category = $page.params.category?.toLowerCase();
  $: cat = dataByCategory[category];
</script>

<Section>
  {#if cat}
    <Heading level={1} className="mb-4">{cat.title}</Heading>
    <div class="prose dark:prose-invert mb-6">
      <p>Seleziona una <em>sezione</em> per esplorare gli articoli relativi.</p>
    </div>

    <Grid>
      {#each cat.sections as s}
        <Card href={`/categorie/${category}/${s.slug}`} title={s.title} media={cat.cover}>
          <p>Apri la sezione {s.title}.</p>
          <div slot="footer" class="mt-3 text-sm opacity-80">Vai alla sezione →</div>
        </Card>
      {/each}
    </Grid>

    <div class="mt-8">
      <a href="/categorie" class="underline hover:text-pink-600">← Torna alle categorie</a>
    </div>
  {:else}
    <Heading level={2} className="mb-4">Categoria non trovata</Heading>
    <p class="prose dark:prose-invert">Ops! Non esiste questa categoria.</p>
    <div class="mt-6">
      <a href="/categorie" class="underline hover:text-pink-600">← Torna alle categorie</a>
    </div>
  {/if}
</Section>
