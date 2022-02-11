<template>
    <div :id="cardId" class="card">
        <div class="front flex flex-jc-c flex-ai-c">
        <div class="front-bg"></div>
        <div class="card-text">
            <p v-for="title in cardFrontTitle" :key="title">
                {{ title }}
            </p>
        </div>
        </div>
        <div class="back">
        <h3>{{ cardName }}</h3>
        <p>{{ cardDesc }}</p>
        <div class="desc-container flex flex-jc-c flex-ai-c">
            <div class="desc-text">
            <p>Competenze:</p>
            <div class="desc-list flex flex-jc-c">
                <ul>
                <li v-for="skill in cardSkillsList" :key="skill">
                    {{ skill }}
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div class="github-link flex" :class="cardLinks.length > 1 ? 'flex-jc-sa' : 'flex-jc-c'">
            <a v-for="link in cardLinks" :key="link"
            :href="link" target="_blank">
                <i class="fab fa-github" aria-hidden="true" v-if="link.includes('github.com')"></i>
                <i class="fas fa-external-link-alt" v-if="link.includes('github.io')"></i>
            </a>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        cardList: Object,
    },
    data() {
        return {
            cardId: this.cardList.cardId,
            cardFrontTitle: this.cardList.cardFrontTitle,
            cardName: this.cardList.cardName,
            cardDesc: this.cardList.cardDesc,
            cardSkillsList: this.cardList.cardSkillsList,
            cardLinks: this.cardList.cardLinks,
        }
    },
}
</script>