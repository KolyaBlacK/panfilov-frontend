<template>
  <div class="footer">
    <h4 class="title">Обратная связь</h4>
    <div class="footer__top">
      <div class="feedback">
        <button>
          Напишите нам о своем проекте
        </button>
        <div class="desc">
          мы всегда рады новым знакомствам и если можем помочь, то обязательно cделаем это
        </div>
      </div>
      <div class="contacts">
        <div class="phone">
          +7 919 749 26 88
        </div>
        <div class="messengers">
          <span>Telegram</span>
          <span>Whatsapp</span>
        </div>
        <div class="email">
          panfiloffff@gmail.com
        </div>
        <div class="address">
          Ставрополь, Гражданская 8 3 этаж, офис 313
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="social-links">
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Behance</li>
        </ul>
      </div>
      <div class="copyright">
        (c) 2003 - 2021
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.footer {
  border: 1px solid red;

  &__top, &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 600px) {
      flex-direction: row-reverse;
    }
  }

  .feedback {
    text-align: right;
    width: 800px;
    .desc {
      font-size: 32px;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    li {
      list-style-type: none;
      margin: 0 25px;
    }
  }
}
</style>
