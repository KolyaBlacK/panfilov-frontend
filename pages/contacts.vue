<template>
  <div class='contacts-page'>
    <div class='contacts-page__main'>
      <div class='contacts-page__left'>
        <div class='contacts'>
          <a href='tel:+79197492688' class='fade-in' style='animation-delay: 0.6s'>+7 919 749 26 88</a>
          <div class='messengers-links'>
            <a href='https://t.me/pnflvcom' class='fade-in' style='animation-delay: 0.7s' target="_blank">Telegram</a>
            <a href='https://wa.me/79197492688' class='fade-in' style='animation-delay: 0.8s' target="_blank">Whatsapp</a>
          </div>
          <a href='mailto:panfiloffff@gmail.com' class='fade-in' style='animation-delay: 0.9s'>panfiloffff@gmail.com</a>
        </div>
        <div class='address fade-in' style='animation-delay: 1s'>
          Ставрополь, Гражданская 8<br>
          3 этаж, офис 313
        </div>
      </div>
      <div class='contacts-page__right'>
        <h1 class='contacts-page__title'>
          Если у вас есть проект, который вы <br>
          хотели бы обсудить с нами — пишите <br>
          или звоните.
        </h1>
        <Form class='form' />
      </div>
    </div>
    <div class='contacts-page__footer'>
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
  name: 'Contacts',
  layout: 'contacts',
  head: {
    title: 'PNFLV - дизайн агентство: Контакты',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Мы близко! Ставрополь, Гражданская 8, оф. 313. +7 919 749 26 88'
      }
    ],
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/scss/variables';
.contacts-page {
  padding: 7vw 2.5% 3%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media #{$media-md} {
    padding: 12vw 2.5% 3%;
  }
  @media #{$media-xs} {
    padding: 78px 15px 15px;
  }
  &__main {
    display: flex;
    @media #{$media-xs} {
      flex-direction: column;
    }
  }
  &__left {
    width: 40%;
    font-size: 1.5vw;
    @media #{$media-md} {
      font-size: 1.8vw;
    }
    @media #{$media-xs} {
      order: 2;
      width: auto;
      font-size: 18px;
      line-height: 24px;
    }
  }
  &__right {
    @media #{$media-xs} {
      order: 1;
    }
  }
  &__title {
    font-size: 2.4vw;
    text-transform: uppercase;
    margin-bottom: 2.6vw;
    @media #{$media-xs} {
      font-size: 28px;
      line-height: 48px;
      br {
        display: none;
      }
    }
  }
  &__footer {
    font-size: 1vw;
    display: flex;
    justify-content: space-between;
    margin-top: 3em;
    @media #{$media-lg} {
      font-size: 1.4vw;
    }
    @media #{$media-md} {
      font-size: 1.6vw;
    }
    @media #{$media-xs} {
      font-size: 16px;
      line-height: 16px;
      display: block;
    }
  }
}

.contacts {
  margin-bottom: 2em;
}

.messengers-links {
  margin: 1em 0;
  a {
    &:first-child {
      margin-right: 2em;
    }
  }
}

.social-links {
  order: 2;
  @media #{$media-xs} {
    order: 1;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
}

.social-link {
  &:nth-child(2) {
    margin: 0 7vw;
    @media #{$media-xs} {
      margin: 0;
    }
  }
}

.copyright {
  order: 1;
  @media #{$media-xs} {
    order: 2;
  }
}

.form {
  @media #{$media-xs} {
    margin-bottom: 64px;
  }
}
</style>
