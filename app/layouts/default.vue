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
  max-width: 100vw;
}

.content-wrapper{
  margin: 0;
  padding: 0;
  max-width: 100vw;
}
</style>