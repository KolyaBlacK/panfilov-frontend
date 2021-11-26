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
  padding: 17px 0;
  cursor: pointer;
  min-width: 52px;
  width: 3vw;
  &__dot {
    width: 14px;
    height: 14px;
    border: 4px solid $styleRose;
    border-radius: 50%;
    margin-right: 5px;
    transition: transform $baseTimeTransition ease;
    &:nth-child(2n) {
      position: relative;
      &:after,
      &:before {
        content: '';
        width: 14px;
        height: 14px;
        border: 4px solid $styleRose;
        border-radius: 50%;
        position: relative;
      }
      &:before {
        float: left;
        top: -4px;
        left: -4px;
        opacity: 0;
        transform: translate(0);
        transition: transform $baseTimeTransition ease;
      }
      &:after {
        float: right;
        top: -18px;
        left: 4px;
        opacity: 0;
        transform: translate(0);
        transition: transform $baseTimeTransition ease;
      }
    }
    &:last-child {
      margin-right: 0;
    }
    &:first-child,
    &:last-child {
      transition: transform $baseTimeTransition ease;
    }
  }
  &.active {
    .burger-menu-button {
      &__dot {
        &:first-child {
          transform: translate(3px, 14px);
        }
        &:last-child {
          transform: translate(-3px, -14px);
        }
        &:nth-child(2n) {
          &:before {
            transform: translate(-16px, -14px);
            opacity: 1;
          }
          &:after {
            transform: translate(16px, 14px);
            opacity: 1;
          }
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
    border-color: $white;
    &:nth-child(2n) {
      position: relative;
      &:after,
      &:before {
        border-color: $white;
      }
    }
  }
}
</style>
