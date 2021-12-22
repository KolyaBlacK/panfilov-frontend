<template>
  <div class="container" :class="[theme]">
    <Nuxt />
  </div>
</template>

<script>
export default {
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
