<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Badge from "$lib/components/ui/Badge.svelte";

  // Placeholder: poi da Strapi
  const tags = [
    "Usagi", "Ami", "Rei", "Makoto", "Minako",
    "Chibiusa", "Luna", "Artemis",
    "Transformation", "Opening", "Crystal", "Stars"
  ];
</script>

<Section id="tag">
  <Heading level={1} className="mb-6">Tag</Heading>
  <p class="prose dark:prose-invert mb-8">
    Esplora i contenuti tramite etichette tematiche.
  </p>

  <div class="flex flex-wrap gap-2">
    {#each tags as t}
      <Badge href={`/tag/${t.toLowerCase()}`} variant="outline">{t}</Badge>
    {/each}
  </div>
</Section>
