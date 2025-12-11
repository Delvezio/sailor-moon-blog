<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Grid from "$lib/components/ui/Grid.svelte";
  import Card from "$lib/components/ui/Card.svelte";

  // Placeholder: poi da Strapi
  const collections = [
    {
      slug: "guida-episodi",
      title: "Guida agli episodi",
      cover: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1400&auto=format&fit=crop",
      description: "Ordine di visione, saghe Classic → Stars, curiosità e filler."
    },
    {
      slug: "personaggi",
      title: "Approfondimenti personaggi",
      cover: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1400&auto=format&fit=crop",
      description: "Biografie, trasformazioni, poteri e relazioni."
    },
    {
      slug: "timeline",
      title: "Timeline",
      cover: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1400&auto=format&fit=crop",
      description: "Eventi principali nell’anime e nel manga."
    }
  ];
</script>

<Section id="collections">
  <Heading level={1} className="mb-6">Collections</Heading>
  <p class="prose dark:prose-invert mb-8">
    Serie tematiche di articoli organizzate per obiettivi (episodi, personaggi, timeline).
  </p>

  <Grid>
    {#each collections as c}
      <Card href={`/collections/${c.slug}`} title={c.title} media={c.cover}>
        <p>{c.description}</p>
        <div slot="footer" class="mt-3 text-sm opacity-80">Apri collection →</div>
      </Card>
    {/each}
  </Grid>
</Section>
