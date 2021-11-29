<template>
  <li ref="scrollSections" class="work-item">
    <div :id="workId" class="image-container">
      <img
        class='work-item__image'
        src='~/assets/images/work.jpg'
        alt='work'
        data-load-src='~/assets/images/work.jpg'
        data-scroll
        data-scroll-speed="-1"
        :data-scroll-target="'#' + workId"
      />
    </div>
    <div class="work-item__text">
      <a href="#" class="work-item__title">Chateau Tamagne Select & Grand Select</a>
      <a href="#" class="work-item__description">упаковка</a>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      workId: 'work_id_' + this.getRandomInt(1, 10000)
    }
  },
  // beforeMount () {
  // },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
.work-item {
  margin-bottom: 70px;
  @media #{$media-xs} {
    width: 100%!important;
  }
  &:nth-child(1) {
    width: 58%;
  }
  &:nth-child(2) {
    width: 38%;
  }
  &:nth-child(3) {
    width: 38%;
  }
  &:nth-child(4) {
    width: 48%;
  }
  &:nth-child(5) {
    width: 50%;
  }
  &:nth-child(6) {
    width: 40%;
  }
  &:nth-child(7) {
    width: 40%;
  }
  &:nth-child(8) {
    width: 50%;
  }
  .image-container {
    display: block;
    border-radius: 0.375rem;
    overflow: hidden;
    transform: translate3d(0,0,0);
  }
  &__image {
    margin-top: -2.5625rem;
    margin-bottom: -2.5625rem;
  }
  &__text {
    display: flex;
    margin-top: 24px;
  }
  &__title {
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    margin: 0px 48px 0 0px;
    width: calc(50% - 24px);
    @media #{$media-lg} {
      width: calc(65% - 24px);
    }
    @media #{$media-md} {
      font-size: 18px;
      line-height: 22px;
    }
    @media #{$media-xs} {
      font-size: 16px;
      line-height: 22px;
      width: calc(60% - 24px);
      margin: 0px 24px 0 0px;
    }
  }
  &__description {
    font-size: 16px;
    line-height: 24px;
    color: $darkGray;
  }
  a {
    transition: color $textTimeTransition ease;
    &:hover {
      color: $styleRose;
    }
  }
}
</style>
