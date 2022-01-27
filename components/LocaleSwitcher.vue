<template>
  <a :href="href" class="link">{{ locale.name }}</a>
</template>
<script>
export default {
  name: 'LocaleSwitcher',
  computed: {
    locale() {
      return this.$i18n.locales.find(locale => locale.code !== this.$i18n.locale)
    },
    href() {
      return this.$i18n.locale === 'en' ? '/' : '/en'
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
