<template>
    <div class="news-card">
        <NuxtLink :to="article._path">
            <NuxtImg v-if="article.image" :src="article.image" :alt="article.imageDescription" class="news-card-image" />
            <div class="news-card-text">
                <h3 class="news-card-title">{{ article.title }}</h3>
                <p class="news-card-description">{{ article.description }}</p>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    article: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.news-card {
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin-block: 5rem;
}

.news-card-image {
    width: 100%;
    height: 100%;
    max-height: 400px;
    object-fit: cover;
}

.news-card-text {
    padding: 1rem;
}

.news-card-title {
    margin: 0 0 0.5rem;
}
</style>
