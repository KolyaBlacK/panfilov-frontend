<template>
  <div v-intersect="{ in: ['fade-in'] }" class="we-do opacity-0">
    <h5 class="we-do__title">{{$t('weDo.title')}}</h5>
    <div class="we-do__lists">
      <ul class="we-do__list">
        <li class="we-do__item">{{$t('weDo.list.item1')}}</li>
        <li class="we-do__item">{{$t('weDo.list.item2')}}</li>
        <li class="we-do__item">{{$t('weDo.list.item3')}}</li>

        <li class="we-do__item">{{$t('weDo.list.item4')}}</li>
        <li class="we-do__item">{{$t('weDo.list.item5')}}</li>
      </ul>
      <ul class="we-do__list we-do__list-last">
        <li class="we-do__item">{{$t('weDo.list.item6')}}</li>
        <!-- eslint-disable vue/no-v-html -->
        <li class="we-do__item" v-html="$t('weDo.list.item7')"></li>
        <!-- eslint-enable -->
        <li class="we-do__item">{{$t('weDo.list.item8')}}</li>
        <li class="we-do__item">{{$t('weDo.list.item9')}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
@import '~/assets/scss/variables.scss';
.we-do {
  margin-bottom: 6vw;
  @media #{$media-xs} {
    margin-bottom: 50px;
  }
  &__title {
    font-size: 3vw;
    line-height: 3vw;
    text-transform: uppercase;
    margin-bottom: 1em;
    @media #{$media-lg} {
      font-size: 3.4vw;
      line-height: 3.4vw;
    }
    @media #{$media-md} {
      font-size: 3.6vw;
      line-height: 3.6vw;
    }
    @media #{$media-xs} {
      font-size: 32px;
      margin-bottom: 32px;
    }
  }
  &__lists {
    display: flex;
    justify-content: space-between;
    @media #{$media-xs} {
      display: block;
    }
  }
  &__list {
    display: flex;
    font-size: 1.4vw;
    line-height: 1.6vw;
    flex-direction: column;
    @media #{$media-lg} {
      font-size: 1.6vw;
      line-height: 1.8vw;
    }
    @media #{$media-md} {
      font-size: 2vw;
      line-height: 2.2vw;
    }
    @media #{$media-xs} {
      font-size: 18px;
      line-height: 32px;
      display: block;
    }
    &-last {
      width: 55%;
      @media #{$media-xs} {
        width: auto;
      }
    }
  }
  &__item {
    margin-bottom: 1.6vw;
    text-transform: uppercase;
    @media #{$media-xs} {
      width: auto;
      margin-bottom: 24px;
    }
  }
}
</style>
