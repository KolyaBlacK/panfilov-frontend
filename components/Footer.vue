<template>
  <div class="footer">
    <div class="block-title">Обратная связь</div>
    <div class="footer__top">
      <div class="feedback">
        <button class="feedback__btn">
          <span>Напишите нам о своем проекте</span>
          <svg class="btn-icon" width="132" height="56" viewBox="0 0 132 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M106.71 1.42416L130.887 25.3449C132.371 26.8128 132.371 29.1927 130.887 30.6606L106.71 54.5814C105.226 56.0493 102.82 56.0493 101.337 54.5814C99.8531 53.1135 99.8531 50.7336 101.337 49.2657L119.029 31.7616L4.45699 31.7616C2.35878 31.7616 0.657837 30.0787 0.657837 28.0028C0.657837 25.9269 2.35878 24.244 4.45699 24.244L119.029 24.244L101.337 6.73989C99.8531 5.27199 99.8531 2.89206 101.337 1.42416C102.82 -0.0437321 105.226 -0.0437321 106.71 1.42416Z" fill="white"/></svg>
        </button>
        <div class="desc">
          мы всегда рады новым знакомствам
        </div>
        <div class="desc">
          и если можем помочь, то обязательно cделаем это
        </div>
      </div>
      <div class="contacts">
        <div class="contacts__row phone">
          <a href="tel:+79197492688">+7 919 749 26 88</a>
        </div>
        <div class="contacts__row messengers">
          <a href="#">Telegram</a>
          <a href="#">Whatsapp</a>
        </div>
        <div class="contacts__row email">
          <a href="mailto:panfiloffff@gmail.com">panfiloffff@gmail.com</a>
        </div>
        <div class="contacts__row address">
          Ставрополь, Гражданская 8 3 этаж, офис 313
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="social-links">
          <a class="social-link" href="#">Facebook</a>
          <a class="social-link" href="#">Instagram</a>
          <a class="social-link" href="#">Behance</a>
      </div>
      <div class="copyright">
        (c) 2003 - 2021
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~assets/scss/variables';

.footer {
  border-top: 1px solid $darkGray;
  margin-top: 50px;
  padding: 50px 0;
  &__top, &__bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media #{$media-sm-up} {
      flex-direction: row-reverse;
    }
  }

  &__top {
    margin-top: 44px;
    @media #{$media-sm-up} {
      margin-top: 74px;
    }
  }

  .feedback {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: right;

    .feedback__btn {
      background-color: transparent;
      border: none;
      color: $white;
      cursor: pointer;
      font-size: $font-32;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      text-align: left;
      padding: 0;
      padding-right: 32px;
      padding-bottom: 72px;

      @media #{$media-sm-up} {
        font-size: $font-88;
        width: 1030px;
      }

      .btn-icon {
        width: 45px;
        @media #{$media-sm-up} {
          width: 132px;
        }
        path {
          fill: $white;
        }
      }

      &:hover {
        color: $styleRose;
        .btn-icon {
          transform: rotate(315deg);
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
        font-size: $font-32;
        text-align: right;
      }
    }
  }

  .contacts {
    font-size: $font-16;
    width: 223px;
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

    @media #{$media-sm-up} {
      align-items: center;
      margin-top: 88px;
    }

    .social-links {
      display: flex;
      flex-direction: row;
      margin-bottom: 24px;
      @media #{$media-sm-up} {
        width: 830px;
      }
      .social-link {
        margin-right: 32px;
        @media #{$media-sm-up} {
          margin-right: 57px;
          width: 115px;
        }
      }
    }
  }
}
</style>
