<template>
    <section class="about sezione" id="about">
        <div class="max-width">
          <h2 class="title">About me</h2>
          <hr class="titlehr">
          <div class="about-container flex flex-jc-c flex-ai-c">
            <div class="about-content">
              <div class="about-title-container flex flex-jc-c">
                <h2 class="about-title-1">Luigi Paglionico</h2>
                <h2 class="about-title-2">Front-End</h2>
              </div>
              <p class="about-text">Mi chiamo Luigi, ho 18 anni e sono di Bari. Ho iniziato a studiare autonomamente, tramite libri e documentazioni online.
              Nel 2021 mi sono diplomato presso un Istituto Tecnico (Articolazione " Sistemi Informativi Aziendali ") e attualmente
              lavoro per IoAgri, come Front-End Developer</p>
            </div>
          </div>
          <a href="@/assets/download/CV-PaglionicoLuigi.pdf" download class="cvd">Scarica CV</a>
        </div>
      </section>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {

        }
    }
}
</script>
