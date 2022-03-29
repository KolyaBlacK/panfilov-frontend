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
          <a href='mailto:hello@pnflv.com' class='fade-in' style='animation-delay: 0.9s'>hello@pnflv.com</a>
        </div>
        <!-- eslint-disable vue/no-v-html -->
        <div class='address fade-in' style='animation-delay: 1s' v-html="$t('address')" />
        <!-- eslint-enable -->
      </div>
      <div class='contacts-page__right'>
        <!-- eslint-disable vue/no-v-html -->
        <h1 class='contacts-page__title' v-html="$t('contacts.description')" />
        <!-- eslint-enable -->
        <Form class='form' />
      </div>
    </div>
    <div class='contacts-page__footer'>
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
  name: 'Contacts',
  layout: 'contacts',
  head() {
    return {
      title: this.$t('contacts.SEO.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('contacts.SEO.description')
        }
      ],
    }
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
