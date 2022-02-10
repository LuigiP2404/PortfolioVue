<template>
    <section class="contact sezione" id="contact">
        <div class="max-width">
          <h2 class="title">Contattami</h2>
          <hr class="titlehr">
          <div class="contact-content flex flex-jc-sb flex-ai-c">
            <form class="contact-form" action="../php/contact.php" method="post">
              <input type="text" name="name" placeholder="Nome*" class="form-input" required>
              <input type="email" name="email" placeholder="Email*" class="form-input" required>
              <input type="text" name="subject" placeholder="Oggetto" class="form-input">
              <textarea name="message" rows="4" cols="40" placeholder="Messaggio*" class="form-input" required></textarea>
              <div class="contact-end">
                <button type="submit" name="submit" class="form-submit">Invia</button>
              </div>
            </form>
            <div class="contact-second-col">
              <div class="contact-icons">
                <div class="contact-infos">
                  <div class="contact-infos-mobile">
                    <div class="contact-row flex flex-ai-c">
                      <i class="fas fa-user"></i>
                      <div class="info nome">
                        <h1 class="info-name">Nome</h1>
                        <p class="info-text">Luigi Paglionico</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="contact-infos">
                  <div class="contact-infos-mobile">
                    <div class="contact-row flex flex-ai-c">
                      <i class="fas fa-map-marker-alt"></i>
                      <div class="info localita">
                        <h1 class="info-name">Località</h1>
                        <p class="info-text">Bari, Italia</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="contact-infos">
                  <div class="contact-infos-mobile">
                    <div class="contact-row flex flex-ai-c">
                      <i class="fas fa-envelope"></i>
                      <div class="info email">
                        <h1 class="info-name">Email</h1>
                        <p class="info-text">luigipaglionicowd@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div class="social">
                  <a href="https://www.linkedin.com/in/luigi-paglionico-2551171b6" id="linkedin" target=”_blank”><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                  <a href="https://github.com/LuigiP2404" id="github" target=”_blank”><i class="fab fa-github" aria-hidden="true"></i></a>
                  <a href="https://www.instagram.com/luigipaglionico/" id="instagram" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>
          </div>
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