<template>
  <div>
    <div>
      {{ text }}
    </div>
    <div>
      <img :src="$strapi.options.url + image.url" alt="">
    </div>

  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    image: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

</style>
