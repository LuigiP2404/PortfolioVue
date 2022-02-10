<template>
  <div class="sidebar-container">
    <div class="sidebar-mo">
      <ul class="sidebar-nav">
        <li class="sidebar-item">
          <a href="#home" class="sidebar-link links">
            <i class="fas fa-home"></i>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#about" class="sidebar-link links">
            <i class="far fa-address-card"></i>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#skills" class="sidebar-link links">
            <i class="fas fa-code"></i>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#progetti" class="sidebar-link links">
            <i class="far fa-list-alt"></i>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#contact" class="sidebar-link links">
            <i class="fas fa-file-signature"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidebar">
      <ul class="sidebar-nav">
        <li class="sidebar-logo">
          <img src="@/assets/img/logobianco.png" class="sidebar-logo-img">
        </li>
        <div class="sidebar-center">
          <li class="sidebar-item">
            <a href="#home" class="sidebar-link links active">
              <i class="fas fa-home"></i>
              <span class="sidebar-item-text">Home</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#about" class="sidebar-link links">
              <i class="far fa-address-card"></i>
              <span class="sidebar-item-text">About</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#skills" class="sidebar-link links">
              <i class="fas fa-code"></i>
              <span class="sidebar-item-text" style="margin-left: 12px;">Competenze</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#progetti" class="sidebar-link links">
              <i class="far fa-list-alt" style="margin-left: 24px"></i>
              <span class="sidebar-item-text">Progetti</span>
            </a>
          </li>
        </div>
        <li class="sidebar-item">
          <a href="#contact" class="sidebar-link links">
            <i class="fas fa-file-signature"></i>
            <span class="sidebar-item-text">Contatti</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
