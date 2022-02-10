<template>
  <div id="app">
    <Sidebar />
    <PageContent />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import PageContent from './components/PageContent.vue'
import spyScrolling from './scripts/spyscroll'

import "@/assets/css/style.css";

export default {
  name: 'App',
  components: {
    Sidebar,
    PageContent,
  },
  mounted() {
    spyScrolling();
    ScrollReveal().reveal('.reveal1', { delay: 300 });
    ScrollReveal().reveal('.reveal2', { delay: 500 });
    ScrollReveal().reveal('.reveal3', { delay: 700 });
    ScrollReveal().reveal('.reveal4', { delay: 900 });
  }
}
</script>
