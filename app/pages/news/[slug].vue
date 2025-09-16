<!-- [slug].vue renders the page and includes <ContentRenderer>, 
      which processes the markdown and injects the NewsPage component 
      where ::news-page appears in provided markdown files in /content/news 
      
      Responsible for: The overall page structure and top-level elements
-->

<script setup>
const route = useRoute();

// find the article by slug using the stem property
const targetSlug = route.params.slug;
const { data: allArticles } = await useAsyncData("all-articles", () => queryCollection("news").all());
const article = computed(() => {
  return allArticles.value?.find(a => a.stem === `news/${targetSlug}`) || null;
});

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' });
}

useHead({
  title: computed(() => article.value ? article.value.title : 'News')
});

// Use the news layout which includes breadcrumbs
definePageMeta({
  layout: 'news'
});
</script>

<template>
  <div v-if="article">
    <div>
      <h1>{{ article.title }}</h1>
    </div>
    <div>
      <!-- <NuxtImg
        :src="article.image"
        :alt="`image for ${article.title} article`"
      /> -->
      <ContentRenderer :value="article" class="prose" />
    </div>
  </div>
  <div v-else>
    <p>Article not found</p>
  </div>
</template>

<style scoped>

h1 {
    margin-block: 10rem;
}

</style>
