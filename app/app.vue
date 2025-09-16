<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Transition name="loading">
    <div v-if="loading" class="loading-screen">
      <div class="loading-content">
        <Transition name="text">
          <h1 v-if="textVisible">Alexandra Pavlovskaya-Lokchine</h1>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const textVisible = ref(false)

onMounted(() => {
  if (!localStorage.getItem('visited')) {
    setTimeout(() => {
      textVisible.value = true
    }, 300)
    setTimeout(() => {
      textVisible.value = false
    }, 900)
    setTimeout(() => {
      loading.value = false
      localStorage.setItem('visited', 'true')
    }, 1400)
  } else {
    loading.value = false
  }
})
</script>

<style>
  /* these are global styles*/
  :root {
    --thickness: 200;
    --circ: cubic-bezier( 0.785, 0.135, 0.15, 0.86 );
  }

  * {
    color: black !important; 
    font-family: "cofo-sans-variable", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-variation-settings: "slnt" 0, "wght" var(--thickness);
    font-weight: var(--thickness);

    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    min-height: 99vh;
  }

  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.4s var(--circ);
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }

  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .loading-content {
    text-align: center;
  }

  .loading-content h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .text-enter-active {
    transition: opacity 0.3s ease-in;
  }

  .text-enter-from {
    opacity: 0;
  }

  .text-leave-active {
    transition: opacity 0.6s ease-out;
  }

  .text-leave-to {
    opacity: 0;
  }

  .loading-leave-active {
    transition: opacity 0.8s ease-out;
  }

  .loading-leave-to {
    opacity: 0;
  }

  @media (max-width: 768px) {
    .loading-content h1 {
      font-size: 1.5rem;
    }
  }
</style>