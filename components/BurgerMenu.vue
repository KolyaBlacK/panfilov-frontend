<template>
  <transition name="fadeInDown">
    <div v-if='isActive' ref='burgerMenu' class='burger-menu'>
      <div class='burger-menu__inner'>
        <div class="visible-xs burger-menu__presentation-mobile">
          <a href='#' class='burger-menu__presentation fade-in' style='animation-delay: 0.5s'>Скачать презентацию</a>
        </div>
        <div class='burger-menu__left'>
          <a href='#' class='burger-menu__presentation fade-in hidden-xs' style='animation-delay: 0.5s'>Скачать презентацию</a>
          <div class='burger-menu__left__bottom'>
            <div class='burger-menu__contacts'>
              <a href='tel:+79197492688' class='fade-in' style='animation-delay: 0.6s'>+7 919 749 26 88</a>
              <div class='burger-menu__messengers-links'>
                <a href='https://t.me/pnflvcom' target="_blank" class='fade-in' style='animation-delay: 0.7s'>Telegram</a>
                <a href='https://wa.me/79197492688' target="_blank" class='fade-in' style='animation-delay: 0.8s'>Whatsapp</a>
              </div>
              <a href='mailto:panfiloffff@gmail.com' class='fade-in' style='animation-delay: 0.9s'>panfiloffff@gmail.com</a>
            </div>
            <div class='burger-menu__address fade-in' style='animation-delay: 1s'>
              Ставрополь, Гражданская 8<br>
              3 этаж, офис 313
            </div>
          </div>
        </div>
        <div class='burger-menu__right'>
          <ul class='burger-menu__navigation'>
            <li class='burger-menu__navigation__item fade-in' style='animation-delay: 0.5s'>
              <NuxtLink to="/works">Работы</NuxtLink>
            </li>
            <li class='burger-menu__navigation__item fade-in' style='animation-delay: 0.6s'>
              <NuxtLink to="/agency">Агенство</NuxtLink>
            </li>
            <li class='burger-menu__navigation__item fade-in' style='animation-delay: 0.7s'>
              <NuxtLink to="/contacts">Контакты</NuxtLink>
            </li>
          </ul>

        </div>
        <div class='burger-menu__footer'>
          <a href='https://www.facebook.com/panfilofff' target="_blank" class='fade-in' style='animation-delay: 0.5s'>Facebook</a>
          <a href='https://www.instagram.com/pnflv_agency/' target="_blank" class='fade-in' style='animation-delay: 0.6s'>Instagram</a>
          <a href='https://www.behance.net/PNFLV' target="_blank" class='fade-in' style='animation-delay: 0.7s'>Behance</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { isMobileOnly } from 'mobile-device-detect';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'

export default {
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    this.$root.$on('toggleMenu', (isActive, changeRoute) => this.toggleMenu(isActive, changeRoute));
  },
  methods: {
    toggleMenu(isActive) {
      this.isActive = isActive;
      this.$nextTick(() => {
        if (isMobileOnly && this.isActive) {
          disableBodyScroll(this.$refs.burgerMenu)
        }
      })
      if (isMobileOnly && !this.isActive) {
        enableBodyScroll(this.$refs.burgerMenu)
      }
      if (isActive) {
        window.addEventListener('keyup',  this.closeMenu);
      } else {
        window.removeEventListener('keyup', this.closeMenu);
      }
    },
    closeMenu(event) {
      if (event.keyCode === 27) {
        this.$root.$emit('closeMenu');
      }
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
  padding: 2% 2.5% 5%;
  color: $lightGray;
  z-index: 20;
  @media #{$media-xs} {
    height: 100%;
    padding: 15px 15px 25px;
  }
  * {
    @media #{$media-xs} {
      animation-delay: 0s!important;
    }
  }
  &__inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 8vw;
    height: 100%;
    @media #{$media-xs} {
      flex-direction: column;
      flex-wrap: nowrap;
      padding-top: calc(10% + 50px);
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
      height: auto;
    }
  }
  &__left {
    padding-top: 0.5vw;
    @media #{$media-xs} {
      padding-top: 0;
      order: 3;
    }
    &__bottom {
      font-size: 1vw;
      line-height: 1.4vw;
      margin-top: 14vw;
      @media #{$media-lg} {
        font-size: 1.4vw;
        line-height: 1.8vw;
        margin-top: 18vw;
      }
      @media #{$media-md} {
        font-size: 1.8vw;
        line-height: 2vw;
        margin-top: 20vw;
      }
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
    margin: 1.3vw 0;
    a {
      &:first-child {
        margin-right: 2.6vw;
      }
    }
    @media #{$media-xs} {
      margin: 15px 0;
    }
  }
  &__address {
    margin-top: 15px;
  }
  &__presentation {
    font-size: 0.9vw;
    line-height: 1vw;
    @media #{$media-lg} {
      font-size: 1.4vw;
      line-height: 1.2vw;
    }
    @media #{$media-md} {
      font-size: 1.6vw;
      line-height: 1.4vw;
    }
    @media #{$media-xs} {
      font-size: 14px;
      line-height: 14px;
      margin-bottom: 32px;
    }
  }
  &__presentation-mobile {
    order: 2;
    text-align: center;
  }
  &__navigation {
    display: flex;
    flex-direction: column;
    font-size: 1.8vw;
    line-height: 3vw;
    list-style: none;
    margin: 0;
    padding: 0;
    @media #{$media-lg} {
      font-size: 2.2vw;
      line-height: 3.2vw;
    }
    @media #{$media-md} {
      font-size: 2.6vw;
      line-height: 3.6vw;
    }
    @media #{$media-xs} {
      align-items: center;
      font-size: 25px;
      line-height: 25px;
    }
    &__item {
      margin-bottom: 1.8vw;
      &:last-child {
        margin: 0;
      }
      @media #{$media-xs} {
        margin-bottom: 32px;
      }
    }
  }
  &__footer {
    margin-left: auto;
    margin-top: -1.4vw;
    font-size: 0.9vw;
    line-height: 1vw;
    order: 3;
    @media #{$media-lg} {
      margin-top: -1.8vw;
      font-size: 1.2vw;
      line-height: 1.2vw;
    }
    @media #{$media-md} {
      margin-top: -2vw;
      font-size: 1.8vw;
      line-height: 1.8vw;
    }
    @media #{$media-xs} {
      margin: 0;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
    }
    a {
      padding: 0 2vw;
      @media #{$media-sm-up} {
        // padding: 0 20px;
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
</style>
