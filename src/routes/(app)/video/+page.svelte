<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Grid from "$lib/components/ui/Grid.svelte";
  import Card from "$lib/components/ui/Card.svelte";

  // Placeholder: in seguito leggeremo da Strapi
  const videos = [
    {
      slug: "sigla-italiana-classic",
      title: "Sigla italiana — Sailor Moon (Classic)",
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      slug: "transformation-compilation",
      title: "Transformation Compilation (Usagi & Team)",
      youtubeId: "5qap5aO4i9A"
    },
    {
      slug: "sailor-moon-crystal-op",
      title: "Sailor Moon Crystal — Opening",
      youtubeId: "9bZkp7q19f0"
    }
  ];

  const cover = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
</script>

<Section id="video">
  <Heading level={1} className="mb-6">Video</Heading>
  <p class="prose dark:prose-invert mb-8">
    Raccolta di video da YouTube: sigle, trasformazioni, opening e momenti iconici.
  </p>

  <Grid>
    {#each videos as v}
      <Card href={`/video/${v.slug}`} title={v.title} media={cover(v.youtubeId)}>
        <p>Guarda il video e la descrizione.</p>
        <div slot="footer" class="mt-3 text-sm opacity-80">Apri scheda video →</div>
      </Card>
    {/each}
  </Grid>
</Section>
