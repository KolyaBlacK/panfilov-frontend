<template>
  <div class='agency-page'>
    <tag-line-agency />
    <div v-intersect="{ in: ['animate-line'] }" class="about top-border">
      <h4 v-intersect="{ in: ['fade-in'] }" class="block-title opacity-0">
        О нас
      </h4>
      <!-- eslint-disable vue/no-v-html -->
      <p v-intersect="{ in: ['fade-in'] }" class="about__main-text ignore-br opacity-0" v-html="$t('agency.mainText')" />
      <!-- eslint-enable -->
      <p v-intersect="{ in: ['fade-in'] }" class="about__small-text opacity-0">
        Наш подход это своеобразная бренд-терапия, осознание бренда не как <br>
        бездушный набор знаков и картинок, но как живой <br>
        механизм, который говорит с живым человеком. У него есть потребности, <br>
        цели и миссия, он эволюционирует и не теряет актуальности
      </p>
    </div>
    <key-clients />
    <we-do />
    <div class='counters'>
      <ul class='counters__list'>
        <li v-intersect="{ in: ['fade-in'] }" class='counters__item opacity-0'>
          <span class='counters__number'>405</span>
          <span class='counters__text'>проектов <br>по брендингу</span>
        </li>
        <li v-intersect="{ in: ['fade-in'] }" class='counters__item opacity-0'>
          <span class='counters__number'>102</span>
          <span class='counters__text'>проектов <br>по упаковке</span>
        </li>
        <li v-intersect="{ in: ['fade-in'] }" class='counters__item opacity-0'>
          <span class='counters__number'>207</span>
          <span class='counters__text'>проектов <br>по неймингу</span>
        </li>
      </ul>
      <p v-intersect="{ in: ['fade-in'] }" class='counters__description opacity-0'>
        МЫ ПОСТОЯННО НАБЛЮДАЕМ, УЧИМСЯ, <br>
        АНАЛИЗИРУЕМ СРЕДУ. ЛОГИЧЕСКИ, СИСТЕМНО, <br>
        ОСНОВЫВАЯСЬ НА ОПЫТЕ И ЭКСПЕРТНОСТИ <br>
        ПОДХОДИМ К РЕШЕНИЮ ЗАДАЧ. ГЛОБАЛЬНОЕ <br>
        ЧУВСТВО РЫНКА ДЛЯ ЛОКАЛЬНЫХ РЕШЕНИЙ. <br>
        НАМ ПРИЯТНО ВИДЕТЬ ВАШИ ДОСТИЖЕНИЯ И <br>
        СМОТРЕТЬ КАК ВЫ РАСТЕТЕ!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Agency',
  head: {
    title: 'PNFLV - дизайн агентство Дмитрия Панфилова Ставрополь: брендинг, дизайн упаковки, дизайн фирменного стиля, разработка логотипов, названий, слоганов',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Креативное агентство дизайнера Дмитрия Панфилова: создание бренда, разработка логотипа и фирменного стиля, брендинг, нейминг, дизайн упаковки и этикетки FMCG, b2b; 11 лет работы в Py-Group'
      }
    ],
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/scss/variables.scss';
.agency-page {
  padding: 2% 2.5% 0;
  @media #{$media-xs} {
    padding: 15px 15px;
  }
}

.about {
  &__main-text {
    margin: 0 0 3em;
    font-size: 2vw;
    line-height: 2.8vw;
    text-transform: uppercase;
    @media #{$media-lg} {
      font-size: 2.2vw;
      line-height: 3vw;
    }
    @media #{$media-md} {
      font-size: 2.6vw;
      line-height: 3.4vw;
    }
    @media #{$media-xs} {
      font-size: 32px;
      line-height: 48px;
      margin: 0 0 2em;
    }
    br {
      @media #{$media-xs} {
        display: none;
      }
    }
  }
  &__small-text {
    margin: 0 0 0 50%;
    font-size: 1vw;
    line-height: 1.6vw;
    @media #{$media-lg} {
      font-size: 1.6vw;
      line-height: 2.2vw;
    }
    @media #{$media-md} {
      font-size: 1.8vw;
      line-height: 2.4vw;
    }
    @media #{$media-xs} {
      font-size: 16px;
      line-height: 24px;
      margin: 0;
    }
    br {
      @media #{$media-lg} {
        display: none;
      }
    }
  }
}

.counters {
  margin-left: 5%;
  padding-bottom: 6vw;
  @media #{$media-md} {
    padding-bottom: 70px;
  }
  @media #{$media-xs} {
    margin-left: 0;
    margin-top: 64px;
    padding-bottom: 64px;
  }
  &__list {
    display: flex;
    justify-content: space-between;
    max-width: 75%;
    @media #{$media-xs} {
      display: block;
      max-width: none;
    }
  }
  &__item {
    @media #{$media-xs} {
      display: flex;
      align-items: center;
      margin-bottom: 34px;
    }
  }
  &__number {
    display: flex;
    align-items: center;
    font-size: 4vw;
    line-height: 0;
    &:before {
      content: '';
      display: block;
      background: url('~/assets/images/circle-rose.svg') center no-repeat;
      background-size: contain;
      width: 1vw;
      height: 1vw;
      margin-right: 2vw;
      @media #{$media-lg} {
        width: 1.4vw;
        height: 1.4vw;
        margin-right: 2vw;
      }
      @media #{$media-xs} {
        width: 15px;
        height: 15px;
        margin-right: 16px;
      }
    }
    @media #{$media-lg} {
      font-size: 4vw;
    }
    @media #{$media-md} {
      font-size: 4vw;
    }
    @media #{$media-xs} {
      font-size: 56px;
      width: 160px;
      line-height: 10px;
    }
  }
  &__text {
    display: block;
    text-transform: uppercase;
    margin: 1em 0 0;
    font-size: 2vw;
    line-height: 2.8vw;
    @media #{$media-lg} {
      font-size: 2.2vw;
      line-height: 3vw;
    }
    @media #{$media-md} {
      font-size: 2.6vw;
      line-height: 3.4vw;
    }
    @media #{$media-xs} {
      font-size: 20px;
      line-height: 28px;
      margin: 0;
    }
  }
  &__description {
    text-transform: uppercase;
    margin: 3em 0 0;
    font-size: 2vw;
    line-height: 2.8vw;
    display: flex;
    justify-content: flex-end;
    @media #{$media-lg} {
      font-size: 2.2vw;
      line-height: 3vw;
    }
    @media #{$media-md} {
      font-size: 2.6vw;
      line-height: 3.4vw;
    }
    @media #{$media-xs} {
      font-size: 16px;
      line-height: 28px;
      display: block;
    }
  }
}

.ignore-br::v-deep {
  @media #{$media-xs} {
    br {
      display: none;
    }
  }
}
</style>
