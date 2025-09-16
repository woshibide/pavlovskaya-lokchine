<template>
  <div>
    <div class="general-info">
      <h1>
          Alexandra Pavlovskaya-Lokchine is an emerging multidisciplinary artist focusing on the intersection of moving image, sculpture, painting and installation. 
      </h1>
      <a href="mailto:info@pavlovskaya-lokchine.com">
        info@pavlovskaya-lokchine.com
      </a>
    </div>
    <div class="img-container">
      <NuxtImg src="/imgs/placeholder.jpg" alt="black and white photo of the artist (Alexandra Pavlovskaya Lokchine) standing behind her sculptures" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Index'
});
</script>

<style scoped>
/* these styles are specific to the homepage content */
.general-info{
  margin: 3rem 0 0 0;
}

h1{
  max-width: 40ch;
  text-align: left;
}

a, h1{
  font-size: 2rem;
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: left;
  margin: 2rem 0 0 0;
}

.img-container img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  h1 {
    max-width: 100%;
    font-size: 1.5rem;
    text-align: left;
  }

  a, h1 {
    font-size: 1.5rem;
  }

  .general-info {
    margin: 1rem 0.5rem;
  }

  .img-container {
    justify-content: center;
    margin: 1rem 0 0 0;
    height: 70vh;
  }

  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>