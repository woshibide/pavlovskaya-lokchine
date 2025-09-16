<template>
  <div class="app-container">
    <div class="content-wrapper">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 98svh;
}

.content-wrapper{
  max-width: 100vw;
}
</style>