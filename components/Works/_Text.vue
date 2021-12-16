<template>
  <div class="text" :class="[fontSize, color, align, widthClass]">
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
    fontSize: {
      type: String,
      default: ''
    },
    color: {
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
  padding: 5vw 0;
  @media #{$media-sm-up} {
    padding: 5vw;
  }
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.white {
  color: $white;
}

.gray {
  color: $darkGray;
}

.font_16 {
  font-size: 16px;
}

.font_24 {
  font-size: 18px;
  line-height: 40px;
  @media #{$media-sm-up} {
    font-size: 1.6vw;
    line-height: 3vw;
  }
  text-transform: uppercase;
}

.width_100 {
  @media #{$media-sm-up} {
    width: 100vw;
  }
}
.width_65 {
  @media #{$media-sm-up} {
    width: 65vw;
  }
}
.width_50 {
  @media #{$media-sm-up} {
    width: 45vw;
  }
}
.width_35 {
  @media #{$media-sm-up} {
    width: 35vw;
  }
}
</style>
