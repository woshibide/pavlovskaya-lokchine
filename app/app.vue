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
import { ref, onMounted, onBeforeMount } from 'vue'

//  loading animation timings
const TIMING = {
  // JavaScript delays (in milliseconds)
  FONT_LOADING_FALLBACK: 100,
  POST_FONT_DELAY: 300,
  FADE_OUT_WAIT: 600,
  FALLBACK_TIMEOUT: 1000,

  // CSS transition durations (in seconds) - applied dynamically to :root
  TEXT_ENTER_DURATION: 0.3,
  TEXT_LEAVE_DURATION: 1.5,
  LOADING_SCREEN_LEAVE_DURATION: 2.0,
  PAGE_TRANSITION_DURATION: 0.4,
}

// Apply CSS custom properties from JavaScript timing config
const applyTimingStyles = () => {
  const root = document.documentElement
  root.style.setProperty('--loading-text-enter-duration', `${TIMING.TEXT_ENTER_DURATION}s`)
  root.style.setProperty('--loading-text-leave-duration', `${TIMING.TEXT_LEAVE_DURATION}s`)
  root.style.setProperty('--loading-screen-leave-duration', `${TIMING.LOADING_SCREEN_LEAVE_DURATION}s`)
  root.style.setProperty('--page-transition-duration', `${TIMING.PAGE_TRANSITION_DURATION}s`)
}

const loading = ref(true)
const textVisible = ref(false)

const checkFontsLoaded = () => {
  if ('fonts' in document) {
    return document.fonts.ready
  }
  return new Promise(resolve => setTimeout(resolve, TIMING.FONT_LOADING_FALLBACK))
}

onBeforeMount(() => {
  // Apply timing styles before component mounts
  applyTimingStyles()
})

onMounted(async () => {
  textVisible.value = true

  try {
    await checkFontsLoaded()
    await new Promise(resolve => setTimeout(resolve, TIMING.POST_FONT_DELAY))

    textVisible.value = false
    await new Promise(resolve => setTimeout(resolve, TIMING.FADE_OUT_WAIT))

    loading.value = false
    document.body.classList.add('loaded')
    localStorage.setItem('visited', 'true')
  } catch (error) {
    setTimeout(() => {
      textVisible.value = false
      setTimeout(() => {
        loading.value = false
        document.body.classList.add('loaded')
        localStorage.setItem('visited', 'true')
      }, TIMING.FADE_OUT_WAIT)
    }, TIMING.FALLBACK_TIMEOUT)
  }
})
</script>

<style>
  :root {
    --thickness: 200;
    --circ: cubic-bezier( 0.785, 0.135, 0.15, 0.86 );

    /* These values are SET DYNAMICALLY by JavaScript from the TIMING config above */
    --loading-text-enter-duration: 0.3s;
    --loading-text-leave-duration: 1.5s;
    --loading-screen-leave-duration: 2s;
    --page-transition-duration: 0.4s;
  }

  * {
    color: black !important; 
    font-family: "cofo-sans-variable", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-variation-settings: "slnt" 0, "wght" var(--thickness);
    font-weight: var(--thickness);
    font-display: swap; /* Prevents FOUC by showing fallback font */

    font-variant-ligatures: common-ligatures;
    -moz-font-feature-settings: "liga", "clig";
    -webkit-font-feature-settings: "liga", "clig";
    font-feature-settings: "liga", "clig";

    font-variant-ligatures: discretionary-ligatures;
    -moz-font-feature-settings: "dlig";
    -webkit-font-feature-settings: "dlig";
    font-feature-settings: "dlig";

    scrollbar-width: none;
    line-height: normal !important;
  }

  sup{
    font-family: inherit;
  }

  .date {
    font-variant-numeric: ordinal;
    -moz-font-feature-settings: "ordn";
    -webkit-font-feature-settings: "ordn";
    font-feature-settings: "ordn";
  }

  a {
    text-decoration: solid 1px;
    text-underline-offset: 3px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    min-height: 99vh;
    /* Hide content until loading is complete to prevent FOUC */
    visibility: hidden;
  }

  body.loaded {
    visibility: visible;
  }

  .page-enter-active,
  .page-leave-active {
    transition: opacity var(--page-transition-duration) var(--circ);
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
    /* Ensure loading screen covers everything */
    opacity: 1;
    visibility: visible;
  }

  .loading-screen.fade-out {
    opacity: 0;
    visibility: hidden;
  }

  .loading-content {
    text-align: center;
  }

  .loading-content h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .text-enter-active {
    transition: opacity var(--loading-text-enter-duration) ease-in;
  }

  .text-enter-from {
    opacity: 0;
  }

  .text-leave-active {
    transition: opacity var(--loading-text-leave-duration) ease-out;
  }

  .text-leave-to {
    opacity: 0;
  }

  .loading-leave-active {
    transition: opacity var(--loading-screen-leave-duration) ease-out;
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