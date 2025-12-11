<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Grid from "$lib/components/ui/Grid.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import { page } from "$app/stores";

  // Placeholder: in seguito arriveranno da Strapi filtrati per category/section
  const mockBySection: Record<string, { title: string; items: { slug: string; title: string; excerpt: string; cover?: string }[] }> = {
    "anime:classic": {
      title: "Anime · Classic",
      items: [
        { slug: "guida-episodi-classic", title: "Guida episodi — Classic", excerpt: "I primi passi di Usagi e del team.", cover: "https://images.unsplash.com/photo-1520975922071-a0f4429d5e72?q=80&w=1400&auto=format&fit=crop" },
        { slug: "nemici-classic", title: "Nemici principali", excerpt: "Dark Kingdom e le prime battaglie." }
      ]
    },
    "anime:s": {
      title: "Anime · S",
      items: [
        { slug: "talenti-s", title: "Nuovi Talenti", excerpt: "Saturn, Uranus, Neptune entrano in scena." }
      ]
    },
    "manga:kanzenban": {
      title: "Manga · Kanzenban",
      items: [
        { slug: "edizione-kanzenban", title: "Perché la Kanzenban è speciale", excerpt: "Carta, copertine e traduzioni." }
      ]
    }
  };

  $: category = $page.params.category?.toLowerCase();
  $: section  = $page.params.section?.toLowerCase();
  $: key = `${category}:${section}`;
  $: data = mockBySection[key];
</script>

<Section>
  {#if data}
    <Heading level={1} className="mb-4">{data.title}</Heading>
    <p class="prose dark:prose-invert mb-6">Contenuti relativi alla sezione selezionata.</p>

    <Grid>
      {#each data.items as it}
        <Card href={`/articoli/${it.slug}`} title={it.title} media={it.cover}>
          <p>{it.excerpt}</p>
          <div slot="footer" class="mt-3 text-sm opacity-80">Apri contenuto →</div>
        </Card>
      {/each}
    </Grid>

    <div class="mt-8 flex items-center gap-4">
      <a href={`/categorie/${category}`} class="underline hover:text-pink-600">← Torna alla categoria</a>
      <a href="/categorie" class="underline hover:text-pink-600">Torna a tutte le categorie</a>
    </div>
  {:else}
    <Heading level={2} className="mb-4">Sezione non trovata</Heading>
    <p class="prose dark:prose-invert">Ops! Non abbiamo ancora contenuti per questa sezione.</p>
    <div class="mt-6">
      <a href={`/categorie/${category}`} class="underline hover:text-pink-600">← Torna alla categoria</a>
    </div>
  {/if}
</Section>
