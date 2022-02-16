<template>
    <section class="progetti sezione" id="progetti">
        <div class="max-width">
          <h2 class="title">Progetti</h2>
          <hr class="titlehr">

          <div class="card-row flex flex-jc-sb flex-ai-c">
            <project-card :cardList="cardList[0]" />
            <project-card :cardList="cardList[1]" />
          </div>

          <div class="card-row flex flex-jc-sb flex-ai-c">
            <project-card :cardList="cardList[2]" />
            <project-card :cardList="cardList[3]" />

            <!-- <div id="calcolatrice-card" class="card">
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
            </div> -->
          </div>
        </div>
      </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'Projects',
    components: {
      ProjectCard,
    },
    data() {
        return {
          cardList: [
            {
              cardFrontTitle: [
                'Portfolio',
              ],
              cardName: 'Portfolio',
              cardId: 'portfolio-card',
              cardDesc: "Il <span>portfolio</span> è stato il mio primo sito idealizzato e sviluppato, è stato creato a Febbraio 2021 all'età di 17 anni.",
              cardSkillsList: [
                'HTML',
                'SASS',
                'VueJS',
                'PHP'
              ],
              cardLinks: [
                'https://github.com/LuigiP2404/Portfolio',
              ],
            },
            {
              cardFrontTitle: [
                'Monster',
                ' vs ',
                'Player'
              ],
              cardName: 'Monster vs Player',
              cardId: 'monster-card',
              cardDesc: `<span>Monster vs Player</span> è una web app, per esattezza un piccolo gioco sviluppato in Vue JS, in cui ci sono un Giocatore
                  ed un Mostro, con dei bottoni per effettuare diverse azioni.`,
              cardSkillsList: [
                'HTML',
                'CSS',
                'VueJS',
              ],
              cardLinks: [
                'https://github.com/LuigiP2404/Player-vs-Monster',
                'https://luigip2404.github.io/Monster-vs-Player/'
              ],
            },
            {
              cardFrontTitle: [
                'To-Do List',
              ],
              cardName: 'To-Do List',
              cardId: 'todo-card',
              cardDesc: "Questa <span>To-Do List</span> è una piccola web app sviluppata in Vue, che permette di creare una lista aggiungendo e rimuovendo elementi.",
              cardSkillsList: [
                'HTML',
                'CSS',
                'VueJS',
              ],
              cardLinks: [
                'https://github.com/LuigiP2404/ToDoList',
                'https://luigip2404.github.io/ToDoList/',
              ],
            },
            {
              cardFrontTitle: [
                'Calcolatrice',
              ],
              cardName: 'Calcolatrice',
              cardId: 'calcolatrice-card',
              cardDesc: "Questa <span>calcolatrice</span> è una web app sviluppata in Vue JS e permette di fare operazioni algebriche basilari.",
              cardSkillsList: [
                'HTML',
                'CSS',
                'VueJS',
              ],
              cardLinks: [
                'https://github.com/LuigiP2404/Calcolatrice',
                'https://luigip2404.github.io/Calcolatrice',
              ],
            },
          ]
        }
    }
}
</script>