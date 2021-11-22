<template>
  <div class='about top-border'>
    <h4 class="block-title">О нас</h4>
    <div class='about__top'>
      <a href='#' class='about__video-button'>
        <img class='about__image' src='~/assets/images/about.jpg' alt='about'>
        <svg class='about__video-icon' width="73" height="53" viewBox="0 0 73 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M69.8975 5.03719C67.9174 1.3686 65.7685 0.693802 61.393 0.437191C57.0221 0.128306 46.0311 0 36.5091 0C26.9689 0 15.9733 0.128306 11.607 0.432439C7.24069 0.693803 5.08719 1.36384 3.08881 5.03719C1.04938 8.70104 0 15.0118 0 26.1221C0 26.1316 0 26.1364 0 26.1364C0 26.1459 0 26.1506 0 26.1506V26.1602C0 37.223 1.04938 43.5812 3.08881 47.2071C5.08719 50.8757 7.23613 51.541 11.6024 51.8498C15.9733 52.116 26.9689 52.2728 36.5091 52.2728C46.0311 52.2728 57.0221 52.116 61.3976 51.8546C65.773 51.5457 67.922 50.8804 69.9021 47.2118C71.9598 43.586 73 37.2277 73 26.1649C73 26.1649 73 26.1506 73 26.1411C73 26.1411 73 26.1316 73 26.1269C73 15.0118 71.9598 8.70104 69.8975 5.03719ZM27.375 40.3926V11.8802L50.1875 26.1364L27.375 40.3926Z" fill="white"/>
        </svg>
      </a>
      <p class='about__main-text'>
        — В своей работе я стремлюсь создать <br>
        продукт, способный не только <br>
        наилучшим образом справляться со <br>
        своей функцией, но и вдохновлять, <br>
        украшать и давать новый опыт.
      </p>
    </div>
    <p class='about__small-text'>
      Мы разрабатываем айдентику и фирменные стили, нейминг, основываясь на стратегическом анализе конкурентной среды, создаем упаковку с пониманием законов категории и специфики рынка. Мы строим бренды и помогаем реализовать их потенциал, как в физическом мире, так и в цифровом. Мы всегда рядом, чтобы наши клиенты добивались большего.
    </p>
    <div class='we-do'>
      <h5 class='we-do__title'>Мы делаем</h5>
      <ul class='we-do__list'>
        <li class='we-do__item'>
          Стратегия позиционирования
        </li>
        <li class='we-do__item'>
          Стратегия позиционирования
        </li>
        <li class='we-do__item'>
          Стратегия позиционирования
        </li>
        <li class='we-do__item'>
          Стратегия позиционирования
        </li>
        <li class='we-do__item'>
          Стратегия позиционирования
        </li>
        <li class='we-do__item'>
          Стратегия позиционирования
        </li>
      </ul>
    </div>
    <div class="wrapper-arrow-link">
      <a href="#" class="arrow-link">Больше про нас</a>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang='scss' scoped>
@import '~/assets/scss/variables';
.about {
  &__top {
    display: flex;
    justify-content: space-between;
  }
  &__video-button {
    position: relative;
    &:hover {
      path {
        fill: $styleRose;
      }
    }
  }
  &__image {

  }
  &__video-icon {
    position: absolute;
    left: 50px;
    bottom: 40px;
    path {
      transition: fill $textTimeTransition ease;
    }
  }
  &__main-text {
    font-size: 32px;
    line-height: 48px;
    text-transform: uppercase;
    color: $white;
    margin: 0;
    width: 55%;
  }
  &__small-text {
    font-size: 16px;
    line-height: 28px;
    color: $darkGray;
    margin-left: 50%;
    margin-bottom: 100px;
  }
}

.we-do {
  padding: 0 5%;
  margin-bottom: 100px;
  &__title {
    font-size: 40px;
    line-height: 48px;
    text-transform: uppercase;
    margin-bottom: 48px;
  }
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 24px;
    line-height: 24px;
  }
  &__item {
    width: 50%;
    margin-bottom: 24px;
  }
}

.wrapper-arrow-link {
  text-align: right;
}
</style>
