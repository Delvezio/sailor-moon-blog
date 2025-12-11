<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Grid from "$lib/components/ui/Grid.svelte";
  import Card from "$lib/components/ui/Card.svelte";

  // Placeholder: in seguito leggeremo da Strapi
  const articles = [
    {
      slug: "benvenuti-nel-blog",
      title: "Benvenuti nel Sailor Moon Blog",
      excerpt: "Introduzione al progetto di mio figlio: articoli, video e guide su anime e manga.",
      cover: "https://images.unsplash.com/photo-1558980664-10ea5800c69b?q=80&w=1400&auto=format&fit=crop"
    },
    {
      slug: "guida-agli-episodi",
      title: "Guida agli episodi: Classic → Stars",
      excerpt: "Panoramica delle saghe, con ordine di visione e curiosità.",
      cover: "https://images.unsplash.com/photo-1520975922071-a0f4429d5e72?q=80&w=1400&auto=format&fit=crop"
    },
    {
      slug: "personaggi-preferiti",
      title: "I nostri personaggi preferiti",
      excerpt: "Usagi, Ami, Rei, Makoto, Minako… e perché li amiamo.",
      cover: "https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1400&auto=format&fit=crop"
    }
  ];
</script>

<Section id="articoli">
  <Heading level={1} className="mb-6">Articoli</Heading>
  <p class="prose dark:prose-invert mb-8">
    Qui troverai post su <strong>Anime</strong>, <strong>Manga</strong>, approfondimenti sui personaggi e guide agli episodi.
  </p>

  <Grid>
    {#each articles as a}
      <Card href={`/articoli/${a.slug}`} title={a.title} media={a.cover}>
        <p>{a.excerpt}</p>
        <div slot="footer" class="mt-3 text-sm opacity-80">Leggi di più →</div>
      </Card>
    {/each}
  </Grid>
</Section>
