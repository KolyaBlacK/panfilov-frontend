<template>
  <div class='thanks-page'>
    <div class='thanks-page__text'>
      <div class='thanks-page__top'>
        <h1 class='title'>Спасибо!</h1>
        <NuxtLink class='close' to="/">Закрыть</NuxtLink>
      </div>
      <p class='text'>Ваш запрос успешно отправлен.</p>
      <p class='text'>Мы ответим вам в самое ближайшее время.</p>
    </div>
    <NuxtLink class='button' to="/">Хорошо</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'thanks'
}
</script>

<style lang='scss' scoped>
@import '~/assets/scss/variables.scss';
.thanks-page {
  min-height: 100vh;
  &__text {
    padding: 3%;
    @media #{$media-xs} {
      padding: 40px 15px 15px;
    }
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3vw;
    @media #{$media-xs} {
      margin-bottom: 48px;
    }
  }
}

.title {
  text-transform: uppercase;
  font-size: 2.5vw;
  @media #{$media-lg} {
    font-size: 4vw;
  }
  @media #{$media-md} {
    font-size: 4.5vw;
  }
  @media #{$media-xs} {
    font-size: 32px;
    line-height: 40px;
  }
}

.close {
  font-size: 1vw;
  @media #{$media-lg} {
    font-size: 1.4vw;
  }
  @media #{$media-md} {
    font-size: 1.6vw;
  }
  @media #{$media-xs} {
    font-size: 12px;
    line-height: 12px;
  }
}

.text {
  font-size: 1.4vw;
  margin: 1.2em 0;
  @media #{$media-lg} {
    font-size: 2vw;
  }
  @media #{$media-md} {
    font-size: 2.5vw;
  }
  @media #{$media-xs} {
    font-size: 18px;
    line-height: 28px;
  }
}

.button {
  display: block;
  width: 100%;
  background: $styleRose;
  text-transform: uppercase;
  font-size: 1.2vw;
  line-height: 2.8vw;
  margin-top: 3em;
  color: $white;
  text-align: center;
  cursor: pointer;
  transition: all $textTimeTransition ease;
  &:hover {
    background: $white;
    color: $styleRose;
  }
  @media #{$media-md} {
    font-size: 1.6vw;
    line-height: 3.2vw;
  }
  @media #{$media-xs} {
    font-size: 16px;
    line-height: 48px;
    height: 48px;
  }
}
</style>
