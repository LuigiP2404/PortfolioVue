<template>
    <div class="father">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'

export default {
  name: 'PageContent',
  components: {
      Home,
      About,
      Skills,
      Projects,
      Contact,
      Footer
  },
  data() {
    return {

    }
  }
}
</script>
