<template>
  <HeaderSection />
  <SectionBeers />
  <SectionContact />
</template>


<script>
export default {
  setup() {
    useHead(
      {
        title: "Brasserie Brignoli",
        meta: [
          {
            name: "description",
            content:
              "Brasserie de bière artisanal Suisse de la région de Rolle tenue par Yann Brignoli.",
          },
        ],
      },
      useSeoMeta({
        title: "Brasserie Brignoli",
        ogTitle: "Brasserie Brignoli",
        description: "Brasserie de bière artisanal Suisse de la région de Rolle tenue par Yann Brignoli.",
        ogDescription: "Brasserie de bière artisanal Suisse de la région de Rolle tenue par Yann Brignoli.",
        ogImage: "https://brasseriebrignoli.ch/images/logo_300_300.png",
        twitterCard: "summary_large_image",
      })
    );
  },
};
</script>