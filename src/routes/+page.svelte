<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Grid from "$lib/components/ui/Grid.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import Badge from "$lib/components/ui/Badge.svelte";
</script>

<!-- HERO -->
<section class="relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-moon-cream to-white dark:from-zinc-900 dark:to-zinc-950"></div>
  <div class="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
    <div class="flex flex-col lg:flex-row items-center gap-8">
      <div class="flex-1">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
          🌙 Sailor <span class="text-pink-600">Moon</span> Blog
        </h1>
        <p class="prose dark:prose-invert mt-4">
          Articoli, video e guide su <strong>Anime</strong> e <strong>Manga</strong> dell’universo di Sailor Moon,
          curati da noi per divertirci e imparare insieme.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="/articoli" class="inline-flex items-center rounded-full bg-pink-600 text-white px-4 py-2 text-sm shadow-soft hover:opacity-95">Leggi gli articoli →</a>
          <a href="/video" class="inline-flex items-center rounded-full ring-1 ring-black/10 px-4 py-2 text-sm bg-white/70 backdrop-blur hover:bg-white dark:bg-zinc-900/70 dark:hover:bg-zinc-900">Guarda i video</a>
        </div>
      </div>

      <div class="flex-1">
        <div class="relative">
          <div class="absolute -inset-4 -z-10 blur-2xl opacity-30 bg-gradient-to-tr from-pink-300 via-moon-gold to-moon-lilac rounded-full"></div>
          <img
            src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1400&auto=format&fit=crop"
            alt="Sailor Moon vibe"
            class="w-full rounded-2xl ring-1 ring-black/10 shadow-soft object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SEZIONI PRINCIPALI -->
<Section id="sezioni" className="mt-4">
  <Heading level={2} className="mb-6">Esplora il blog</Heading>
  <Grid>
    <Card href="/articoli" title="Articoli" media="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1400&auto=format&fit=crop">
      <p>Approfondimenti, guide agli episodi, curiosità e opinioni.</p>
      <div slot="footer" class="mt-3 text-sm opacity-80">Vai agli articoli →</div>
    </Card>

    <Card href="/video" title="Video" media="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop">
      <p>Selezione di video da YouTube: sigle, trasformazioni, momenti iconici.</p>
      <div slot="footer" class="mt-3 text-sm opacity-80">Vai ai video →</div>
    </Card>

    <Card href="/categorie" title="Categorie" media="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop">
      <p>Dividi tra <strong>Anime</strong> e <strong>Manga</strong> e scorri le sezioni interne.</p>
      <div slot="footer" class="mt-3 text-sm opacity-80">Apri categorie →</div>
    </Card>
  </Grid>
</Section>

<!-- COLLECTIONS E TAG -->
<Section id="collezioni">
  <Heading level={2} className="mb-6">Raccolte e tag</Heading>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card href="/collections" title="Collections" media="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1400&auto=format&fit=crop">
      <p>Serie tematiche: guide episodi, personaggi, timeline e altro.</p>
      <div slot="footer" class="mt-3 text-sm opacity-80">Apri collections →</div>
    </Card>

    <div class="md:col-span-2 rounded-2xl ring-1 ring-black/10 bg-white dark:bg-zinc-900 p-4">
      <p class="prose dark:prose-invert mb-3">Tag popolari</p>
      <div class="flex flex-wrap gap-2">
        <Badge href="/tag/usagi">Usagi</Badge>
        <Badge href="/tag/ami">Ami</Badge>
        <Badge href="/tag/rei">Rei</Badge>
        <Badge href="/tag/makoto">Makoto</Badge>
        <Badge href="/tag/minako">Minako</Badge>
        <Badge href="/tag/transformation" variant="outline">Transformation</Badge>
        <Badge href="/tag/crystal" variant="outline">Crystal</Badge>
        <Badge href="/tag/stars" variant="outline">Stars</Badge>
      </div>
    </div>
  </div>
</Section>
