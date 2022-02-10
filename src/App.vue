<template>
  <div id="app">
    <Sidebar />
    <PageContent />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import PageContent from './components/PageContent.vue'

import "@/assets/css/style.css";

export default {
  name: 'App',
  components: {
    Sidebar,
    PageContent,
  }
}
</script>
