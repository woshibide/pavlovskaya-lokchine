<style>

:root {
  --thickness: 100;
}

* {
  /*  ucs2fqt */
  color: black !important; 
  font-family: "cofo-sans-variable", sans-serif;
  font-variation-settings: "slnt" 0, "wght" var(--thickness);
  font-weight: var(--thickness);
}
</style>

<style scoped>

h1{
  max-width: 75ch;
  
  text-align: left;
}

a, h1{
  font-size: 2rem;
}

.content-wrapper{
  width: 100vw;
}

.general-info{
  margin: 3rem 0;
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
}

/* Mobile styles */
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
    margin: 2rem 1rem;
  }

  .img-container {
    justify-content: center;
    margin: 1rem 1rem 0 1rem;
  }

  .img-container img {
    max-width: 100%;
    width: 100%;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.25rem;
  }

  a, h1 {
    font-size: 1.25rem;
  }

  .general-info {
    margin: 1.5rem 1rem;
  }

  .img-container {
    margin: 1rem 1rem 0 1rem;
  }
}
</style>


<template>
  <div class="content-wrapper">
    <div class="general-info">
      <h1>
          Alexandra Pavlovskaya-Lokchine is an emerging multidisciplinary artist focusing on the intersection of moving image, sculpture, painting and installation. 
      </h1>
      <a href="mailto:info@pavlovskaya-lokchine.com">
        info@pavlovskaya-lokchine.com
      </a>
    </div>
    <div class="img-container">
      <img src="/imgs/placeholder.jpg" alt="black and white photo of the artist (Alexandra Pavlovskaya Lokchine) standing behind her sculptures">
    </div>
  </div>
</template>

