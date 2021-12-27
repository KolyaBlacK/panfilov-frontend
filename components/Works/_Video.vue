<template>
  <div class="video" :class="[widthClass]">
    <video autoplay loop muted>
      <source :src="$strapi.options.url + Video.url">
    </video>
  </div>
</template>

<script>
export default {
  props: {
    Video: {
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

.video {
  margin: 4vw 0;
  &.width_100 {
    @media #{$media-sm-up} {
      video {
        width: 100vw;
      }
    }
  }
  &.width_50 {
    @media #{$media-sm-up} {
      video {
        width: 45vw;
      }
    }
  }
  &.width_35 {
    @media #{$media-sm-up} {
      video {
        width: 35vw;
      }
    }
  }
}
</style>
