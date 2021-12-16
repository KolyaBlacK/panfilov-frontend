<template>
  <div class="image" :class="[widthClass]">
    <img :src="$strapi.options.url + image.url" alt="">
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {}
    },
    widthClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.image {
  &.width_100 {
    @media #{$media-sm-up} {
      img {
        width: 100vw;
      }
    }
  }
  &.width_50 {
    @media #{$media-sm-up} {
      img {
        width: 45vw;
      }
    }
  }
  &.width_35 {
    @media #{$media-sm-up} {
      img {
        width: 35vw;
      }
    }
  }
}
</style>
