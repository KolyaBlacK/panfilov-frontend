<template>
  <div ref='header' class='header' :class="{ sticky: active && !isActiveMenu }">
    <div class='logo'>
      <nuxt-link to='/' class='logo__link'>
        <img class='logo__image' src='~/assets/images/logo-dark-theme.svg' alt='logo-pnflv'>
      </nuxt-link>
      <span class='logo__description hidden-xs'>branding agency</span>
    </div>
    <div class='menu'>
      <NuxtLink class='menu__link hidden-xs' to="/">Работы</NuxtLink>
      <NuxtLink class='menu__link hidden-xs' to="/">Философия</NuxtLink>
      <NuxtLink class='menu__link hidden-xs' to="/">Контакты</NuxtLink>
      <burger-button class='burger'/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      isActiveMenu: false
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
  &__link {
    position: relative;
    z-index: 2;
  }
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

.burger {
  margin-left: 8px;
}
</style>
