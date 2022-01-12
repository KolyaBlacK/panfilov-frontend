<template>
  <div>
    <button
      :class='{active: active, white, opacityAnimate: opacityAnimate}'
      class='burger-menu-button'
      @click='$emit("click")'
    >
      <span class='burger-menu-button__dot'></span>
      <span class='burger-menu-button__dot'></span>
      <span class='burger-menu-button__dot'></span>
      <span class='burger-menu-button__dot'></span>
      <span class='burger-menu-button__dot'></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    white: Boolean,
    opacityAnimate: Boolean
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/scss/variables';
.burger-menu-button {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  padding: 1vw 0;
  cursor: pointer;
  width: 3.8vw;
  height: 3.8vw;
  min-width: 64px;
  min-height: 60px;
  outline: none;
  @media #{$media-xs} {
    padding: 15px 0;
    min-width: 52px;
    min-height: 52px;
  }
  &__dot {
    // flex: 1;
    width: 1.1vw;
    height: 1.1vw;
    min-width: 20px;
    min-height: 20px;
    background: url('~/assets/images/dot.svg') no-repeat;
    background-size: contain;
    // transition: all $baseTimeTransition ease;
    position: absolute;
    @media #{$media-xs} {
      width: 15px;
      height: 15px;
      min-width: auto;
      min-height: auto;
    }

    &:nth-child(1) {
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &:nth-child(2) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    &:nth-child(3) {
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &:nth-child(4) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    &:nth-child(5) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }


    &:nth-child(2n) {
      // position: relative;
      // &:after,
      // &:before {
      //   content: '';
      //   position: absolute;
      //   width: 1.2vw;
      //   height: 1.2vw;
      //   min-width: 20px;
      //   min-height: 20px;
      //   background: url('~/assets/images/dot.svg') center no-repeat;
      //   background-size: contain;
      // }
      // &:before {
      //   display: block;
      //   opacity: 0;
      //   transform: translate(0);
      //   transition: transform $baseTimeTransition ease;
      // }
      // &:after {
      //   display: block;
      //   opacity: 0;
      //   transform: translate(0);
      //   transition: transform $baseTimeTransition ease;
      // }
    }
  }
  &.active {
    .burger-menu-button {
      &__dot {
        // &:first-child {
        //   transform: translate(0.2vw, 0.8vw);
        // }
        // &:last-child {
        //   transform: translate(-0.2vw, -0.8vw);
        // }
        // &:nth-child(2n) {
        //   &:before {
        //     transform: translate(-1vw, -0.8vw);
        //     opacity: 1;
        //   }
        //   &:after {
        //     transform: translate(1vw, 0.8vw);
        //     opacity: 1;
        //   }
        // }
        &:nth-child(1) {
          bottom: 6%;
          left: 6%;
          margin: 0;
          top: auto;
        }
        &:nth-child(2) {

        }
        &:nth-child(3) {
          right: 6%;
          top: 6%;
          margin: 0;
        }
        &:nth-child(4) {
          top: 6%;
          left: 6%;
          right: auto;
          bottom: auto;
        }
        &:nth-child(5) {
          bottom: 6%;
          right: 6%;
          top: auto;
          left: auto;
        }
      }
    }
  }
  &.opacityAnimate {
    .burger-menu-button {
      &__dot {
        &:nth-child(2n) {
          &:before,
          &:after {
            opacity: 1;
          }
        }
      }
    }
  }
}

.burger-menu-button.white {
  .burger-menu-button__dot {
    background: url('~/assets/images/dot-white.svg') no-repeat;
    background-size: contain;
  }
}
</style>
