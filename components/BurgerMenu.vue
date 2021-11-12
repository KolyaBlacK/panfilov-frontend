<template>
  <div>
    <button
      :class='{active: isActive, opacityAnimate: opacityAnimate}'
      class='burger-menu-button'
      @click='toggleMenu'
    >
      <span class='burger-menu-button__dot'></span>
      <span class='burger-menu-button__dot'></span>
      <span class='burger-menu-button__dot'></span>
    </button>
    <transition name="fadeInDown">
      <div v-if='isActive' class='burger-menu'>
        <div class='burger-menu__inner'>
          <button class='burger-menu__close-button' @click='toggleMenu'>Закрыть</button>
          <div class='burger-menu__left'>
            <a href='#' class='burger-menu__presentation'>Скачать презентацию</a>
            <div class='burger-menu__left__bottom'>
              <div class='burger-menu__contacts'>
                <a href='#'>+7 919 749 26 88</a>
                <div class='burger-menu__messengers-links'>
                  <a href='#'>Telegram</a>
                  <a href='#'>Whatsapp</a>
                </div>
                <a href='#'>panfiloffff@gmail.com</a>
              </div>
              <div class='burger-menu__address'>
                Ставрополь, Гражданская 8<br>
                3 этаж, офис 313
              </div>
            </div>
          </div>
          <div class='burger-menu__right'>
            <ul class='burger-menu__navigation'>
              <li class='burger-menu__navigation__item'>
                <NuxtLink to="/about">Работы</NuxtLink>
              </li>
              <li class='burger-menu__navigation__item'>
                <NuxtLink to="/about">Агенство</NuxtLink>
              </li>
              <li class='burger-menu__navigation__item'>
                <NuxtLink to="/about">Философия</NuxtLink>
              </li>
              <li class='burger-menu__navigation__item'>
                <NuxtLink to="/about">Контакты</NuxtLink>
              </li>
            </ul>
            <div class='burger-menu__footer'>
              <a href='#'>Facebook</a>
              <a href='#'>Instagram</a>
              <a href='#'>Behance</a>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      opacityAnimate: false
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
      if (!this.isActive) {
        this.opacityAnimate = true;
        setTimeout(() => {
          this.opacityAnimate = false;
        }, 400)
      }
    }
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
          transform: translate(0px, 14px);
        }
        &:last-child {
          transform: translate(0px, -14px);
        }
        &:nth-child(2n) {
          &:before {
            transform: translate(-19px, -14px);
            opacity: 1;
          }
          &:after {
            transform: translate(19px, 14px);
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

.burger-menu {
  width: 100%;
  height: 70%;
  background: $asphaltBlack;
  position: absolute;
  top: 0;
  left: 0;
  padding: 24px 32px 48px;
  &__inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: calc(85px + 45px);
    height: 100%;
  }
  &__close-button {
    font-size: 12px;
    line-height: 12px;
    color: $lightGray;
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 20px;
  }
  a {
    transition: color $baseTimeTransition / 2 ease;
    color: $lightGray;
    &:hover {
      color: $styleRose;
    }
  }
  &__left,
  &__right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__left {
    &__bottom {
      font-size: 16px;
      line-height: 24px;
    }
  }
  &__contacts {

  }
  &__messengers-links {
    margin: 24px 0;
    a {
      &:first-child {
        margin-right: 48px;
      }
    }
  }
  &__address {
    margin-top: 48px;
  }
  &__presentation {
    font-size: 14px;
    line-height: 14px;
  }
  &__navigation {
    display: flex;
    flex-direction: column;
    font-size: 28px;
    line-height: 48px;
    list-style: none;
    margin: 0;
    padding: 0;
    &__item {
      margin-bottom: 24px;
      &:last-child {
        margin: 0;
      }
    }
  }
  &__footer {
    margin-left: auto;
    font-size: 16px;
    line-height: 24px;
    a {
      padding: 0 57px;
    }
  }
}

.fadeInDown-enter-active {
  animation: fadeInDown $baseTimeTransition;
}
.fadeInDown-leave-active {
  animation: fadeInDown $baseTimeTransition reverse;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown {
  animation-name: fadeInDown;
}

</style>
