<script setup>
// use queryCollection instead of queryContent for defined collections
const { data: news } = await useAsyncData("news", () => queryCollection("news").all());

useHead({
  title: 'News'
});

// Use the news layout which includes breadcrumbs
definePageMeta({
  layout: 'news'
});
</script>

<template>
    <main>
        <h1>
            news
        </h1>
        <div>
            <div class="articles-list">
                <div class="article-listing" v-for="article in news" :key="article.path">
                    <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
                </div>
            </div>
            <NewsCard v-for="article in news" :key="article.path" :article="article" />
        </div>
    </main>
</template>

<style scoped>

* {
    margin-block: 1rem;
}

.articles-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.article-listing{
    outline: 1px solid black;
    min-width: 100px;
    padding: 8px 16px;
    background-color: #f0f0f0;
    display: inline-block;
}

</style>
