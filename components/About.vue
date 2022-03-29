<template>
  <div v-intersect="{ in: ['animate-line'] }" class="about top-border">
    <h4 v-intersect="{ in: ['fade-in'] }" class="block-title opacity-0">
      {{$t('aboutUs')}}
    </h4>
    <div v-intersect="{ in: ['fade-in'] }" class="about__top opacity-0">
      <div class="about__video-button--wrapper">
        <a class="about__video-button" href="#" @click.prevent="openAboutModal">
          <img v-lazy="'images/about.jpg'" class="about__image" alt="about" />
          <span class="about__video-text">{{$t('panfilov')}}</span>
          <svg
            class="about__video-icon"
            width="73"
            height="53"
            viewBox="0 0 73 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.8975 5.03719C67.9174 1.3686 65.7685 0.693802 61.393 0.437191C57.0221 0.128306 46.0311 0 36.5091 0C26.9689 0 15.9733 0.128306 11.607 0.432439C7.24069 0.693803 5.08719 1.36384 3.08881 5.03719C1.04938 8.70104 0 15.0118 0 26.1221C0 26.1316 0 26.1364 0 26.1364C0 26.1459 0 26.1506 0 26.1506V26.1602C0 37.223 1.04938 43.5812 3.08881 47.2071C5.08719 50.8757 7.23613 51.541 11.6024 51.8498C15.9733 52.116 26.9689 52.2728 36.5091 52.2728C46.0311 52.2728 57.0221 52.116 61.3976 51.8546C65.773 51.5457 67.922 50.8804 69.9021 47.2118C71.9598 43.586 73 37.2277 73 26.1649C73 26.1649 73 26.1506 73 26.1411C73 26.1411 73 26.1316 73 26.1269C73 15.0118 71.9598 8.70104 69.8975 5.03719ZM27.375 40.3926V11.8802L50.1875 26.1364L27.375 40.3926Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <p v-intersect="{ in: ['fade-in'] }" class="about__main-text opacity-0">
        <span class="ignore-br" v-html="$t('aboutUsMainText')"/>
      </p>
    </div>
    <div v-intersect="{ in: ['fade-in'] }" class="about__bottom opacity-0">
      <div class="about__bottom__left about__small-text ignore-br" v-html="$t('aboutUsSecondText')"/>
      <div class="about__bottom__right about__small-text ignore-br" v-html="$t('aboutUsSmallText')"/>
    </div>
    <!-- eslint-enable -->
    <we-do />
    <div v-intersect="{ in: ['fade-in'] }" class="right opacity-0">
      <nuxt-link class="arrow-link" :to="localePath('/agency')">{{$t('moreAboutUs')}}</nuxt-link>
    </div>
    <client-only>
      <modal
        ref="modalAbout"
        class="modal"
        name="modal-about"
        width="90%"
        height="90%"
        @closed="closedModal"
        @opened="openedModal"
      >
        <modal-about />
      </modal>
    </client-only>
  </div>
</template>
<script>
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'
export default {
  methods: {
    openAboutModal() {
      this.$modal.show('modal-about')
    },
    openedModal() {
      disableBodyScroll(this.$refs.modalAbout)
    },
    closedModal() {
      enableBodyScroll(this.$refs.modalAbout)
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/variables';
.about {
  &__top {
    display: flex;
    justify-content: space-between;
    @media #{$media-xs} {
      display: block;
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    @media #{$media-xs} {
      display: block;
    }
    &__left {
      @media #{$media-lg} {
        max-width: 40%;
        flex: 1;
      }
    }
    &__right {
      width: 55%;
    }
  }
  &__video-button {
    display: block;
    position: relative;
    &:hover {
      color: $white;
      path {
        fill: $styleRose;
      }
    }
    &--wrapper {
      @media #{$media-lg} {
        max-width: 40%;
        flex: 1;
      }
      @media #{$media-xs} {
        max-width: none;
      }
    }
  }
  &__image {
  }
  &__video-text {
    text-transform: uppercase;
    position: absolute;
    left: 8%;
    bottom: 22%;
    font-size: 1vw;
    @media #{$media-md} {
      font-size: 1.2vw;
      bottom: 25%;
    }
    @media #{$media-xs} {
      font-size: 14px;
    }
  }
  &__video-icon {
    position: absolute;
    left: 8%;
    bottom: 8%;
    path {
      transition: fill $textTimeTransition ease;
    }
  }
  &__main-text {
    font-size: 2vw;
    line-height: 2.6vw;
    text-transform: uppercase;
    color: $white;
    margin: 0;
    width: 55%;
    @media #{$media-lg} {
      font-size: 2.4vw;
      line-height: 2.8vw;
      margin-left: 2vw;
    }
    @media #{$media-xs} {
      width: auto;
      font-size: 22px;
      line-height: 36px;
      margin: 32px 0;
    }
    &__second::v-deep {
      display: inline-block;
      margin-top: 2.5vw;
      font-size: 1.2vw;
      line-height: 2vw;
      @media #{$media-lg} {
        margin-top: 2.5vw;
        font-size: 1.6vw;
        line-height: 2.2vw;
        br {
          display: none;
        }
      }
      @media #{$media-xs} {
        width: auto;
        font-size: 20px;
        line-height: 30px;
        margin-top: 32px;
        br {
          display: none;
        }
      }
    }
  }
  &__small-text {
    font-size: 1vw;
    line-height: 1.6vw;
    color: $darkGray;
    margin: 6em 0 0 0;
    display: inline-block;
    @media #{$media-lg} {
      font-size: 1.6vw;
      line-height: 2vw;
    }
    @media #{$media-md} {
      font-size: 1.8vw;
      line-height: 2vw;
    }
    @media #{$media-xs} {
      margin: 32px 0;
      font-size: 14px;
      line-height: 18px;
      width: auto;
      max-width: 100%;
      display: block;
    }
  }
}

.modal::v-deep {
  .vm--modal {
    background-color: $styleRose;
    border-radius: 0;
    box-shadow: none;
  }
}

.ignore-br::v-deep {
  @media #{$media-lg} {
    br {
      display: none;
    }
  }
}
</style>
