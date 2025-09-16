<!-- This file controls the high-level layout of the individual news page
    (e.g., positioning the title above the content). It doesn't have much 
    custom CSS in the <style> block right now (it's mostly empty), so the 
    default browser styles apply unless you add more.
 
    Responsible for: The internal styling of the content rendered from the markdown body.
-->

<template>
    <div class="news-card-content">
        <NuxtImg v-if="image" :src="image" :alt="imageDescription" class="news-image" />
        <div class="news-card-text">
            <h2 class="news-title">
                <slot name="news-title" />
            </h2>
            <!-- TODO: what if there are multiple paragraphs? -->
            <p class="news-text">
                <slot name="news-text" />
            </p>
            <p>
                <slot name="news-date" />
            </p>
        </div>
    </div>
</template>

<script setup>

defineProps({
    image: {
        type: String,
        default: '/imgs/rect.png'
    },
    imageDescription: {
        type: String,
        default: 'photo describing the spirit of the news'
    }
})

</script>

<style scoped>

.news-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.news-card-content{
    display: flex;   
    flex-direction: column;
}

</style>