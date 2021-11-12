<template>
  <div class='header'>
    <div class='logo'>
      <nuxt-link to='/' class='logo__link'>
        <img class='logo__image' src='~/assets/images/logo-dark-theme.svg' alt='logo-pnflv'>
      </nuxt-link>
      <span class='logo__description'>branding agency</span>
    </div>
    <div class='menu'>
      <NuxtLink class='menu__link' to="/">Работы</NuxtLink>
      <NuxtLink class='menu__link' to="/">Философия</NuxtLink>
      <NuxtLink class='menu__link' to="/">Контакты</NuxtLink>
      <burger-menu class='burger'/>
    </div>
  </div>
</template>

<script>
export default {
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
  }
}

.burger {
  margin-left: 8px;
}
</style>
