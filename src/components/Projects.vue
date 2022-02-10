<template>
    <section class="progetti sezione" id="progetti">
        <div class="max-width">
          <h2 class="title">Progetti</h2>
          <hr class="titlehr">

          <div class="card-row flex flex-jc-sb flex-ai-c">
            <div id="portfolio-card" class="card">
              <div class="front flex flex-jc-c flex-ai-c">
                <div class="front-bg"></div>
                <div class="card-text">
                  <p>Portfolio</p>
                </div>
              </div>
              <div class="back">
                <h3>Portfolio</h3>
                <p>Il <span>portfolio</span> è stato il mio primo sito idealizzato e sviluppato, è stato creato a Febbraio 2021 all'età di 17 anni.</p>
                <div class="desc-container flex flex-jc-c flex-ai-c">
                  <div class="desc-text">
                    <p>Competenze:</p>
                    <div class="desc-list flex flex-jc-c">
                      <ul>
                        <li>HTML</li>
                        <li>SASS</li>
                        <li>PHP</li>
                        <li>VueJS</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="github-link flex flex-jc-c">
                  <a href="https://github.com/LuigiP2404/Portfolio" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>

            <div id="monster-card" class="card">
              <div class="front flex flex-jc-c flex-ai-c">
                <div class="front-bg"></div>
                <div class="card-text">
                  <p>Monster</p>
                  <p> vs </p>
                  <p>Player</p>
                </div>
              </div>
              <div class="back">
                <h3>Monster vs Player</h3>
                <p><span>Monster vs Player</span> è una web app, per esattezza un piccolo gioco sviluppato in Vue JS, in cui ci sono un Giocatore
                  ed un Mostro, con dei bottoni per effettuare diverse azioni.</p>
                <div class="desc-container flex flex-jc-c flex-ai-c">
                  <div class="desc-text">
                    <p>Competenze:</p>
                    <div class="desc-list flex flex-jc-c">
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>VueJS</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="github-link flex flex-jc-sa">
                  <a href="https://github.com/LuigiP2404/Player-vs-Monster" target="_blank"><i class="fab fa-github"></i></a>
                  <a href="https://luigip2404.github.io/Monster-vs-Player/" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="card-row flex flex-jc-sb flex-ai-c">
            <div id="todo-card" class="card">
              <div class="front flex flex-jc-c flex-ai-c">
                <div class="front-bg"></div>
                <div class="card-text">
                  <p>To-Do List</p>
                </div>
              </div>
              <div class="back">
                <h3>To-Do List</h3>
                <p>Questa <span>To-Do List</span> è una piccola web app sviluppata in Vue, che permette di creare una lista aggiungendo e rimuovendo elementi.</p>
                <div class="desc-container flex flex-jc-c flex-ai-c">
                  <div class="desc-text">
                    <p>Competenze:</p>
                    <div class="desc-list flex flex-jc-c">
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>VueJS</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="github-link flex flex-jc-sa">
                  <a href="https://github.com/LuigiP2404/todo-list" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
                  <a href="https://luigip2404.github.io/todo-list" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                </div>
              </div>
            </div>

            <div id="calcolatrice-card" class="card">
              <div class="front flex flex-jc-c flex-ai-c">
                <div class="front-bg"></div>
                <div class="card-text">
                  <p>Calcolatrice</p>
                </div>
              </div>
              <div class="back">
                <h3>Calcolatrice</h3>
                <p>Questa <span>calcolatrice</span> è una web app sviluppata in Vue JS e permette di fare operazioni algebriche basilari.</p>
                <div class="desc-container flex flex-jc-c flex-ai-c">
                  <div class="desc-text">
                    <p>Competenze:</p>
                    <div class="desc-list flex flex-jc-c">
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>VueJS</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="github-link flex flex-jc-sa">
                  <a href="https://github.com/LuigiP2404/Calcolatrice" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
                  <a href="https://luigip2404.github.io/Calcolatrice/" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {

        }
    }
}
</script>