<template>
  <div ref='header' class='header' :class="{ sticky: active && !isActiveMenu }">
    <div class='logo'>
      <nuxt-link to='/' class='logo__link'>
        <img class='logo__image' src='~/assets/images/logo-dark-theme.svg' alt='logo-pnflv'>
      </nuxt-link>
      <span class='logo__description hidden-xs' :class="{ 'fade-out': isActiveMenu, 'fade-in': fadeIn }">branding agency</span>
    </div>
    <div class='menu'>
      <button class='close-button' :class="{ 'fade-in': isActiveMenu, 'fade-out': fadeIn }" @click='closeMenu'>Закрыть</button>
      <NuxtLink class='menu__link hidden-xs' :class="{ 'fade-out': isActiveMenu, 'fade-in': fadeIn }" to="/">Работы</NuxtLink>
      <NuxtLink class='menu__link hidden-xs' :class="{ 'fade-out': isActiveMenu, 'fade-in': fadeIn }" to="/">Философия</NuxtLink>
      <NuxtLink class='menu__link hidden-xs' :class="{ 'fade-out': isActiveMenu, 'fade-in': fadeIn }" to="/">Контакты</NuxtLink>
      <burger-button class='burger'/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      isActiveMenu: false,
      fadeIn: false
    }
  },
  mounted() {
    this.$root.$on('toggleMenu', (isActive) => this.toggleMenu(isActive));
    window.document.onscroll = () => {
      this.active = window.scrollY > this.$refs.header.offsetTop;
    }
  },
  methods: {
    toggleMenu(isActive) {
      this.isActiveMenu = isActive;
      if (!isActive) {
        this.fadeIn = true;
        setTimeout(() => {
          this.fadeIn = false;
        }, 500)
      }
    },
    closeMenu() {
      this.$root.$emit('closeMenu');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 14px;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 24px;
  width: 100%;
  padding: 0 32px;
  transition: top $baseTimeTransition ease;
  @media #{$media-xs} {
    padding: 0 15px;
  }
  &.sticky {
    top: 0;
    //height: 32px;
  }
}

.logo {
  display: flex;
  align-items: center;
  &__image {
    margin-right: 26px;
  }
  &__description {
    color: $white;
  }
}

.menu {
  display: flex;
  align-items: center;
  &__link {
    display: inline-block;
    padding: 8px;
    color: $white;
    transition: color $textTimeTransition ease;
    &:hover {
      color: $styleRose;
    }
  }
}

.close-button {
  visibility: hidden;
  opacity: 0;
  font-size: 12px;
  line-height: 12px;
  color: $lightGray;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 15px;
  transition: color $textTimeTransition ease;
  &:hover {
    color: $styleRose;
  }
}

.burger {
  margin-left: 8px;
}

.fade-out {
  animation: fadeOut $baseTimeTransition;
  animation-fill-mode: forwards;
}

@keyframes fadeOut {
  from {
    visibility: visible;
    opacity: 1;
  }

  to {
    opacity: 0;
    visibility: hidden;
  }
}

.fade-in {
  visibility: visible;
  animation: fadeIn $baseTimeTransition;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>
