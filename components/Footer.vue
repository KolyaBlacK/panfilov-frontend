<template>
  <div v-intersect="{ in: ['animate-line'] }" class="footer top-border">
    <div v-intersect="{ in: ['fade-in'] }" class="block-title opacity-0">{{$t('feedback')}}</div>
    <div v-intersect="{ in: ['fade-in'] }" class="footer__top opacity-0">
      <div class="feedback">
        <button class="feedback__btn" :class="[theme]" @click="$router.push(localePath('/contacts'))">
          <!-- eslint-disable vue/no-v-html -->
          <span v-html="$t('footer.feedback.item1')"/>
          <!-- eslint-enable -->
          <svg
            class="btn-icon"
            width="132"
            height="56"
            viewBox="0 0 132 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M106.71 1.42416L130.887 25.3449C132.371 26.8128 132.371 29.1927 130.887 30.6606L106.71 54.5814C105.226 56.0493 102.82 56.0493 101.337 54.5814C99.8531 53.1135 99.8531 50.7336 101.337 49.2657L119.029 31.7616L4.45699 31.7616C2.35878 31.7616 0.657837 30.0787 0.657837 28.0028C0.657837 25.9269 2.35878 24.244 4.45699 24.244L119.029 24.244L101.337 6.73989C99.8531 5.27199 99.8531 2.89206 101.337 1.42416C102.82 -0.0437321 105.226 -0.0437321 106.71 1.42416Z"
                :fill="arrowColor"
              />
            </svg>
        </button>
        <!-- eslint-disable vue/no-v-html -->
        <div class="desc" v-html="$t('footer.feedback.item2')"/>
        <!-- eslint-enable -->
      </div>
      <div class="contacts">
        <div class="contacts__row phone">
          <a href="tel:+79197492688">+7 919 749 26 88</a>
        </div>
        <div class="contacts__row messengers">
          <a href='https://t.me/pnflvcom' target="_blank">Telegram</a>
          <a href='https://wa.me/79197492688' target="_blank">Whatsapp</a>
        </div>
        <div class="contacts__row email">
          <a href="mailto:hello@pnflv.com">hello@pnflv.com</a>
        </div>
        <!-- eslint-disable vue/no-v-html -->
        <div class="contacts__row address" v-html="$t('address')" />
        <!-- eslint-enable -->
      </div>
    </div>
    <div v-intersect="{ in: ['fade-in'] }" class="footer__bottom opacity-0">
      <div class="social-links">
        <a class="social-link" href="https://www.behance.net/PNFLV" target="_blank">Behance</a>
      </div>
      <div class="copyright">
        (c) 2003 - 2021
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    theme () {
      return this.$store.state.ui.theme
    },
    arrowColor () {
      return this.$store.state.ui.theme === 'dark' ? 'white' : 'black'
    },
  }
}
</script>

<style lang="scss">
@import '~assets/scss/variables';

.theme-light {
  a {
    transition: color $textTimeTransition ease;
    color: $asphaltBlack;
    &:hover {
      color: $styleRose;
    }
  }
}
.theme-dark {
  a {
    transition: color $textTimeTransition ease;
    color: $lightGray;
    &:hover {
      color: $styleRose;
    }
  }
}
.footer {
  margin: 0 2.5% 0;
  padding: 2% 0 3%;
  @media #{$media-xs} {
    margin: 0 15px;
    padding: 28px 0 25px;
  }

  &__top, &__bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media #{$media-sm-up} {
      flex-direction: row-reverse;
    }
  }

  .feedback {
    //display: flex;
    //flex-direction: column;
    //justify-content: right;
    //flex: 1;
    margin-left: 2vw;
    @media #{$media-xs} {
      align-items: flex-start;
      margin-left: 0;
      flex: 1;
    }

    .feedback__btn {
      background-color: transparent;
      border: none;
      color: $mainBlack;
      cursor: pointer;
      font-size: 6vw;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      text-align: left;
      padding: 0 0 3vw 0;

      &.dark {
        color: $white;
      }

      @media #{$media-sm-up} {
        font-size: 6vw;
      }

      @media #{$media-md-up} {
        font-size: 6vw;
      }

      @media #{$media-lg-up} {
        font-size: 6vw;
      }

      @media #{$media-xs} {
        padding: 0 0 40px;
        font-size: 28px;
        line-height: 38px;
      }

      .btn-icon {
        width: 4vw;
        margin-left: 2vw;
        transition: transform $textTimeTransition ease;
        @media #{$media-sm-up} {
          width: 5vw;
          margin: 0 0 0 1vw;
        }
        @media #{$media-md-up} {
          width: 7vw;
          margin: 0 0 0 3vw;
        }
        @media #{$media-lg-up} {
          width: 6vw;
          margin: 0 0 0 4vw;
        }
        @media #{$media-xs} {
          width: 35px;
          margin-left: 15px;
        }
      }

      &:hover {
        color: $styleRose;
        .btn-icon {
          transform: rotate(-50deg);
          path {
            fill: $styleRose;
          }
        }
      }
    }
    .desc {
      font-size: $font-20;
      padding-left: 0.2em;
      @media #{$media-md-up} {
        font-size: 2.4vw;
      }
      @media #{$media-lg-up} {
        font-size: 2.2vw;
      }
      @media #{$media-xs} {
        max-width: 400px;
        padding-left: 0;
      }
      br {
        @media #{$media-xs} {
          display: none;
        }
      }
    }
  }

  .contacts {
    padding-top: 1.2vw;
    font-size: 1vw;
    line-height: 1.4vw;
    @media #{$media-lg} {
      font-size: 1.4vw;
      line-height: 1.8vw;
    }
    @media #{$media-md} {
      font-size: 1.8vw;
      line-height: 2vw;
    }
    @media #{$media-xs} {
      font-size: 14px;
      line-height: 14px;
      padding-top: 0;
      margin-top: 40px;
    }

    .messengers {
      margin: 1.3vw 0;
      @media #{$media-xs} {
        margin: 15px 0;
      }
      a {
        &:first-child {
          margin-right: 2.6vw;
        }
      }
    }

    .address {
      margin-top: 1.3vw;
      @media #{$media-xs} {
        margin-top: 15px;
      }
    }
  }

  &__bottom {
    margin-top: 3vw;
    justify-content: space-between;
    //justify-content: flex-end;

    @media #{$media-sm-up} {
      align-items: center;
      margin-top: 7vw;
    }
    @media #{$media-xs} {
      margin-top: 40px;
    }

    .social-links {
      display: flex;
      flex-direction: row;
      @media #{$media-sm-up} {
        margin-left: 7vw;
      }
      @media #{$media-xs} {
        justify-content: space-between;
        margin-bottom: 24px;
      }
    }
    .social-link {
      padding: 0 2vw;
      font-size: 0.9vw;
      &:last-child {
        padding-right: 0;
      }
      @media #{$media-lg} {
        font-size: 1.2vw;
        line-height: 1.2vw;
      }
      @media #{$media-md} {
        font-size: 1.8vw;
        line-height: 1.8vw;
      }
      @media #{$media-xs} {
        padding: 0;
        font-size: 14px;
        line-height: 14px;
      }
    }
    .copyright {
      font-size: 0.9vw;
      @media #{$media-lg} {
        font-size: 1.2vw;
        line-height: 1.2vw;
      }
      @media #{$media-md} {
        font-size: 1.8vw;
        line-height: 1.8vw;
      }
      @media #{$media-xs} {
        font-size: 14px;
        line-height: 14px;
      }
    }
  }
}
</style>
