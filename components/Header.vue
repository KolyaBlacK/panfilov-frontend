<template>
  <div ref='header' class='header' :class="{ sticky: active && !isActiveMenu }">
    <div class='logo'>
      <nuxt-link to='/' class='logo__link'>
        <img class='logo__image' :src="logoPath" alt='logo-pnflv'>
      </nuxt-link>
    </div>
    <div class='menu'>
      <button class='close-button' :class="{ 'fade-in': isActiveMenu, 'fade-out': fadeIn }" @click='closeMenu'>Закрыть</button>
      <NuxtLink class='menu__link hidden-xs' :class="{ 'fade-out': isActiveMenu, 'fade-in': fadeIn }" to="/works">Работы</NuxtLink>
      <NuxtLink class='menu__link hidden-xs' :class="{ 'fade-out': isActiveMenu, 'fade-in': fadeIn }" to="/">Философия</NuxtLink>
      <NuxtLink class='menu__link hidden-xs' :class="{ 'fade-out': isActiveMenu, 'fade-in': fadeIn }" to="/contacts">Контакты</NuxtLink>
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
  computed: {
    theme () {
      return this.$store.state.ui.theme
    },
    logoPath () {
      return require(`../assets/images/logo-${this.theme}-theme.svg`)
    }
  },
  watch: {
    $route() {
      if (this.isActiveMenu) {
        this.$root.$emit('closeMenu', true);
      }
    },
  },
  mounted() {
    this.$root.$on('toggleMenu', (isActive, changeRoute) => this.toggleMenu(isActive, changeRoute));
    window.addEventListener('scroll',this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      this.active = window.scrollY > this.$refs.header.offsetTop;
    },
    toggleMenu(isActive, changeRoute) {
      this.isActiveMenu = isActive;
      if (!isActive && !changeRoute) {
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
  line-height: 1.1vw;
  font-size: 0.9vw;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 1%;
  width: 100%;
  padding: 0 2.5%;
  transition: top $baseTimeTransition ease;
  @media #{$media-xs} {
    padding: 0 15px;
    top: 0;
  }
  @media #{$media-lg} {
    font-size: 1.2vw;
  }
  @media #{$media-md} {
    font-size: 1.4vw;
  }
  &.sticky {
    top: 0;
    //height: 32px;
  }
}

.logo {
  display: flex;
  align-items: center;
  &__link {
    min-width: 110px;
    width: 8vw;
    margin-right: 1.2vw;
  }
  &__image {
    width: 100%;
  }
}

.menu {
  display: flex;
  align-items: center;
  &__link {
    display: inline-block;
    padding: 0.5vw;
    transition: color $textTimeTransition ease;
    &:hover {
      color: $styleRose;
    }
  }
}

.close-button {
  visibility: hidden;
  opacity: 0;
  font-size: 1vw;
  color: $lightGray;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 1.2vw;
  transition: color $textTimeTransition ease;
  @media #{$media-lg} {
    font-size: 1.4vw;
    top: 2vw;
  }
  @media #{$media-md} {
    font-size: 1.6vw;
  }
  @media #{$media-xs} {
    font-size: 15px;
    top: 20px;
  }
  &:hover {
    color: $styleRose;
  }
}

.burger {
  margin-left: 1vw;
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
