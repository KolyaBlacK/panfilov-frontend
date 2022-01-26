<template>
  <div class="container" :class="[theme]">
    <burger-menu />
    <Header/>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutContacts',
  layoutTransition: 'fade',
  computed: {
    theme () {
      return 'theme-' + this.$store.state.ui.theme
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/scss/variables';
.container.theme-dark {
  background-color: $mainBlack;
  color: $white;
}

.container.theme-light {
  background-color: $white;
  color: $mainBlack;
}

</style>
