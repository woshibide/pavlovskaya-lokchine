<template>
  <div class="general-info">
    <h1>
      Alexandra Pavlovskaya-Lokchine is an emerging multidisciplinary artist focusing on the intersection of moving
      image, sculpture, painting and installation.
    </h1>
    <div class="links">
      <span>
        e-mail:
        <a href="mailto:info@pavlovskaya-lokchine.com">
          info@pavlovskaya-lokchine.com
        </a>
      </span>
      <span>
        instagram:
        <a href="https://www.instagram.com/pavlovskayaaaaa/" target="_blank">
          @pavlovskyaaaaa
        </a>
      </span>
    </div>
    <div class="img-container">
      <NuxtImg src="/imgs/placeholder.jpg"
        alt="black and white photo of the artist (Alexandra Pavlovskaya Lokchine) standing behind her sculptures" />
    </div>
  </div>
  <p class="notice">
    This website is currently under construction. To get a sense of my practice you are warmly invited to the
    opening of <a
      href="https://museumnachtdenhaag.nl/programma/weight-of-air-opening-tentoonstelling-the-year-of-young-art/"
      target="_blank">Weight of Air</a> in The Hague on <span class="date">11th</span> of October, and a portfolio is
    available
    upon request.</p>
</template>

<script setup>
useHead({
  title: 'A. P–L'
});
</script>

<style scoped>
* {
  font-size: 1.25rem;
}

.general-info {
  margin: 6rem 0 0 0;
  width: 50vw;
}

.notice {
  margin: 3rem 0 0 50vw;
  padding-inline: 2rem;
  width: 40vw;
}

h1 {
  text-align: left;
}

i {
  /* font-size: 2rem; */
  /* font-family: "century-old-style-std", serif; */
  /* font-style: normal;
  font-variation-settings: "slnt" 0, "wght" 400; */
}

.links span {
  display: flex;
  direction: row;
  margin-block: 0.5rem;
}

.links span a {
  white-space: nowrap;
  margin-left: 0.45rem;
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: left;
  margin: 1rem 0 0 0;
}

.img-container img {
  max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  * {
    font-size: 1.25rem;
  }

  h1 {
    max-width: 100%;
    text-align: left;
  }

  .general-info {
    margin: 0;
    padding-top: 2rem;
    width: auto;
  }

  .notice {
    padding: 0;
    margin: 4rem 0 4rem 4rem;
    width: auto;
  }

  .img-container {
    justify-content: center;
    margin-block: 4rem;
    height: 50vh;
  }

  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>