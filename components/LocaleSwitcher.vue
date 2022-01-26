<template>
  <nuxt-link :to="localePath('/', locale.code)" class="link">{{ locale.name }}</nuxt-link>
</template>
<script>
export default {
  name: 'LocaleSwitcher',
  computed: {
    locale() {
      return this.$i18n.locales.find(locale => locale.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.link {
  @media #{$media-xs} {
    font-size: 14px;
  }
}
</style>
