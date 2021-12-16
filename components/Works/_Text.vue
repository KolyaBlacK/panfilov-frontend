<template>
  <div class="text" :class="[align, widthClass]">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    widthClass: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.text {
  color: $darkGray;
  font-size: 1.4vw;
  line-height: 2vw;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.width_605 {
  @media #{$media-sm-up} {
    width: 47vw;
  }
}
</style>
