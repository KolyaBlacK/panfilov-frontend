<template>
  <div class="empty" :class="[widthClass]"></div>
</template>

<script>
export default {
  props: {
    widthClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.empty {
  display: none;
  @media #{$media-sm-up} {
    display: block;
  }
}

.width_100 {
  @media #{$media-sm-up} {
    width: 100vw;
  }
}
.width_65 {
  @media #{$media-sm-up} {
    width: 60vw;
  }
}
.width_50 {
  @media #{$media-sm-up} {
    width: 45vw;
  }
}
.width_35 {
  @media #{$media-sm-up} {
    width: 30vw;
  }
}
</style>
