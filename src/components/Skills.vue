<template>
    <section class="skills sezione" id="skills">
        <div class="max-width">
          <h2 class="title">Competenze</h2>
          <hr class="titlehr">
          <div class="skills-content flex flex-jc-sb flex-ai-c">
            <div class="card reveal1">
              <div class="box">
                <i class="fas fa-code"></i>
                <div class="text">HTML</div>
                <p>Creazione di pagine web in codice HTML</p>
              </div>
            </div>
            <div class="card reveal1">
              <div class="box">
                <i class="fab fa-sass"></i>
                <div class="text">CSS & SASS</div>
                <p>Formattazione pagine web con CSS e SASS</p>
              </div>
            </div>
          </div>
          <div class="skills-content flex flex-jc-sb flex-ai-c">
            <div class="card reveal2">
              <div class="box">
                <i class="fab fa-bootstrap"></i>
                <div class="text">Bootstrap</div>
                <p>Creazione pagine web con l'uso di componenti Bootstrap</p>
              </div>
            </div>

            <div class="card reveal2">
              <div class="box">
                <i class="fab fa-js-square"></i>
                <div class="text">JS & jQuery</div>
                <p>Creazione di funzioni con JavaScript e la libreria jQuery</p>
              </div>
            </div>
          </div>
          <div class="skills-content flex flex-jc-sb flex-ai-c">
            <div class="card reveal3">
              <div class="box">
                <i class="fab fa-vuejs"></i>
                <div class="text">Vue JS</div>
                <p>Creazione di pagine web reactive con il framework Vue JS</p>
              </div>
            </div>
            <div class="card reveal3">
              <div class="box">
                <i class="fab fa-php"></i>
                <div class="text">PHP</div>
                <p>Gestione dei dati inseriti, invio email ecc...</p>
              </div>
            </div>
          </div>
          <div class="skills-content flex flex-jc-sb flex-ai-c">
            <div class="card reveal4">
              <div class="box">
                <i class="fa fa-database"></i>
                <div class="text">MySQL</div>
                <p>Gestione dei database e interazione con essi</p>
              </div>
            </div>
            <div class="card reveal4">
              <div class="box">
                <i class="fab fa-wordpress"></i>
                <div class="text">WordPress</div>
                <p>Creazione di pagine web con il CMS WordPress</p>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    name: 'Skills',
    data() {
        return {

        }
    }
}
</script>