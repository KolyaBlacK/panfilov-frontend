<template>
  <div v-intersect="{ in: ['animate-line'] }" class="footer top-border">
    <div v-intersect="{ in: ['fade-in'] }" class="block-title opacity-0">Обратная связь</div>
    <div v-intersect="{ in: ['fade-in'] }" class="footer__top opacity-0">
      <div class="feedback">
        <button class="feedback__btn" :class="[theme]" @click="$router.push('/contacts')">
          <span>Напишите нам о<br> своем проекте</span>
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
        <div class="desc">
          Мы изучаем все входящие заявки
        </div>
        <div class="desc">
          и гарантируем обратную связь
        </div>
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
          <a href="mailto:panfiloffff@gmail.com">panfiloffff@gmail.com</a>
        </div>
        <div class="contacts__row address">
          Ставрополь, Гражданская, 8 <br> 3 этаж, офис 313
        </div>
      </div>
    </div>
    <div v-intersect="{ in: ['fade-in'] }" class="footer__bottom opacity-0">
      <div class="social-links">
        <a class="social-link" href="https://www.facebook.com/panfilofff" target="_blank">Facebook</a>
        <a class="social-link" href="https://www.instagram.com/pnflv_agency/" target="_blank">Instagram</a>
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
  margin: 0 2.5%;
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
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: right;
    flex: 1;
    margin-left: 30px;
    @media #{$media-xs} {
      align-items: flex-start;
      margin-left: 0;
    }

    .feedback__btn {
      background-color: transparent;
      border: none;
      color: $mainBlack;
      cursor: pointer;
      font-size: $font-32;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      text-align: left;
      padding: 0 32px 72px;

      &.dark {
        color: $white;
      }

      @media #{$media-sm-up} {
        font-size: $font-36;
      }

      @media #{$media-md-up} {
        font-size: $font-60;
      }

      @media #{$media-lg-up} {
        font-size: $font-88;
      }

      @media #{$media-xs} {
        padding: 0 0 72px;
        font-size: 28px;
        line-height: 38px;
      }

      .btn-icon {
        width: 65px;
        margin-left: 25px;
        transition: transform $textTimeTransition ease;
        @media #{$media-sm-up} {
          width: 70px;
          margin: 0 10px 0 10px;
        }
        @media #{$media-md-up} {
          width: 100px;
          margin: 0 20px 0 30px;
        }
        @media #{$media-lg-up} {
          width: 120px;
          margin: 0 30px 0 45px;
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
      text-align: left;
      @media #{$media-sm-up} {
        text-align: right;
      }
      @media #{$media-md-up} {
        font-size: $font-28;
        text-align: right;
      }
      @media #{$media-lg-up} {
        font-size: $font-32;
        text-align: right;
      }
    }
  }

  .contacts {
    font-size: $font-16;
    width: 230px;
    padding-top: 50px;

    &__row {
      padding: 12px 0;
    }

    .messengers {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .address {
      margin-top: 20px;
    }
  }

  &__bottom {
    margin-top: 36px;
    justify-content: flex-end;

    @media #{$media-sm-up} {
      align-items: center;
      margin-top: 88px;
    }
    @media #{$media-md-up} {
      justify-content: space-between;
    }

    .social-links {
      display: flex;
      flex-direction: row;
      flex: 1;
      @media #{$media-sm-up} {
        margin-left: 80px;
      }
      @media #{$media-md-up} {
        width: 800px;
      }
      .social-link {
        margin-right: 32px;
        @media #{$media-sm-up} {
          margin-right: 57px;
          width: 115px;
        }
        @media #{$media-xs} {
          margin-bottom: 25px;
        }
      }
    }
  }
}
</style>
