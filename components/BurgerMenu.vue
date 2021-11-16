<template>
  <transition name="fadeInDown">
    <div v-if='isActive' ref='burger-menu' class='burger-menu'>
      <div class='burger-menu__inner'>
        <button class='burger-menu__close-button fade-in' @click='toggleMenu'>Закрыть</button>
        <div class='burger-menu__left'>
          <a href='#' class='burger-menu__presentation fade-in' style='animation-delay: 0.8s'>Скачать презентацию</a>
          <div class='burger-menu__left__bottom'>
            <div class='burger-menu__contacts'>
              <a href='#' class='fade-in' style='animation-delay: 0.9s'>+7 919 749 26 88</a>
              <div class='burger-menu__messengers-links'>
                <a href='#' class='fade-in' style='animation-delay: 1s'>Telegram</a>
                <a href='#' class='fade-in' style='animation-delay: 1.1s'>Whatsapp</a>
              </div>
              <a href='#' class='fade-in' style='animation-delay: 1.2s'>panfiloffff@gmail.com</a>
            </div>
            <div class='burger-menu__address fade-in' style='animation-delay: 1.3s'>
              Ставрополь, Гражданская 8<br>
              3 этаж, офис 313
            </div>
          </div>
        </div>
        <div class='burger-menu__right'>
          <ul class='burger-menu__navigation'>
            <li class='burger-menu__navigation__item fade-in' style='animation-delay: 0.8s'>
              <NuxtLink to="/about">Работы</NuxtLink>
            </li>
            <li class='burger-menu__navigation__item fade-in' style='animation-delay: 0.9s'>
              <NuxtLink to="/about">Агенство</NuxtLink>
            </li>
            <li class='burger-menu__navigation__item fade-in' style='animation-delay: 1s'>
              <NuxtLink to="/about">Философия</NuxtLink>
            </li>
            <li class='burger-menu__navigation__item fade-in' style='animation-delay: 1.1s'>
              <NuxtLink to="/about">Контакты</NuxtLink>
            </li>
          </ul>

        </div>
        <div class='burger-menu__footer'>
          <a href='#' class='fade-in' style='animation-delay: 0.8s'>Facebook</a>
          <a href='#' class='fade-in' style='animation-delay: 0.9s'>Instagram</a>
          <a href='#' class='fade-in' style='animation-delay: 1s'>Behance</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    this.$root.$on('toggleMenu', (isActive) => this.toggleMenu(isActive));
  },
  methods: {
    toggleMenu(isActive) {
      this.isActive = isActive;
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/scss/variables';

.burger-menu {
  width: 100%;
  background: $asphaltBlack;
  position: fixed;
  top: 0;
  left: 0;
  padding: 24px 32px 48px;
  color: $lightGray;
  @media #{$media-xs} {
    height: 100vh;
    padding: 15px 15px 25px;
  }
  &__inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: calc(85px + 45px);
    height: 100%;
    @media #{$media-xs} {
      flex-direction: column;
      flex-wrap: nowrap;
      padding-top: calc(5% + 50px);
    }
  }
  &__close-button {
    font-size: 12px;
    line-height: 12px;
    color: $lightGray;
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 20px;
    transition: color $textTimeTransition ease;
    &:hover {
      color: $styleRose;
    }
    @media #{$media-xs} {
      top: 25px;
    }
  }
  a {
    transition: color $textTimeTransition ease;
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
    @media #{$media-xs} {
      width: auto;
      align-items: center;
    }
  }
  &__left {
    padding-top: 15px;
    @media #{$media-xs} {
      padding-top: 0;
      order: 2;
    }
    &__bottom {
      font-size: 16px;
      line-height: 24px;
      margin-top: 240px;
      @media #{$media-xs} {
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        margin-top: 0;
      }
    }
  }
  &__right {
    @media #{$media-xs} {
      order: 1;
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
    @media #{$media-xs} {
      margin-bottom: 14px;
    }
  }
  &__navigation {
    display: flex;
    flex-direction: column;
    font-size: 28px;
    line-height: 48px;
    list-style: none;
    margin: 0;
    padding: 0;
    @media #{$media-xs} {
      align-items: center;
      font-size: 25px;
      line-height: 25px;
    }
    &__item {
      margin-bottom: 24px;
      &:last-child {
        margin: 0;
      }
    }
  }
  &__footer {
    margin-left: auto;
    margin-top: -24px;
    font-size: 16px;
    line-height: 24px;
    order: 3;
    @media #{$media-xs} {
      margin: 40px 0 0;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
    }
    a {
      padding: 0 57px;
      @media #{$media-sm-up} {
        padding: 0 20px;
      }
      @media #{$media-xs} {
        font-size: 14px;
        line-height: 14px;
        padding: 0;
      }
      &:first-child {
        @media #{$media-sm-up} {
          padding-left: 0;
        }
      }
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeInDown {
  animation-name: fadeInDown;
}


.fade-in {
  opacity: 0;
  animation: fadeIn $baseTimeTransition;
  animation-fill-mode: forwards;
  animation-delay: $baseTimeTransition;
  @media #{$media-xs} {
    animation-delay: $baseTimeTransition!important;
  }
}
</style>
