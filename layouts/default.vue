<template>
  <div class="container" :class="[theme]">
    <burger-menu />
    <Header/>
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  computed: {
    theme () {
      return 'theme-' + this.$store.state.ui.theme
    }
  },
  watch: {
    theme(value) {
      document.getElementsByTagName( 'html' )[0].setAttribute( 'class', value );
    }
  },
  mounted() {
    document.getElementsByTagName( 'html' )[0].setAttribute( 'class', this.theme );
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
