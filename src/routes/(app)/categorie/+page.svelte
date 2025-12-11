<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Grid from "$lib/components/ui/Grid.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import Badge from "$lib/components/ui/Badge.svelte";

  // Placeholder: poi arriveranno da Strapi
  const categories = [
    {
      slug: "anime",
      title: "Anime",
      cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
      sections: ["Classic", "R", "S", "SuperS", "Stars"]
    },
    {
      slug: "manga",
      title: "Manga",
      cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop",
      sections: ["Tankobon", "Kanzenban", "Short Stories"]
    }
  ];
</script>

<Section id="categorie">
  <Heading level={1} className="mb-6">Categorie</Heading>
  <p class="prose dark:prose-invert mb-8">
    Esplora per macro-argomenti: <strong>Anime</strong> e <strong>Manga</strong>.  
    Ogni categoria ha <em>sezioni</em> interne (es. “Classic”, “S”, “Kanzenban”…).
  </p>

  <Grid>
    {#each categories as c}
      <Card href={`/categorie/${c.slug}`} title={c.title} media={c.cover}>
        <p class="mb-3">Sezioni:</p>
        <div class="flex flex-wrap gap-2">
          {#each c.sections as s}
            <Badge variant="soft">{s}</Badge>
          {/each}
        </div>
        <div slot="footer" class="mt-3 text-sm opacity-80">Apri categoria →</div>
      </Card>
    {/each}
  </Grid>
</Section>
