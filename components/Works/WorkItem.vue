<template>
  <li ref="scrollSections" class="work-item">
    <div class="image-container">
      <img
        ref="image"
        class='work-item__image'
        src='~/assets/images/work.jpg'
        alt='work'
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
  mounted () {
    window.addEventListener('scroll', (e) => {
      const wH = window.innerHeight
      const wHM = Math.round(wH / 2)
      const imageRect = this.$refs.image.getBoundingClientRect()
      if (window.innerHeight > imageRect.top && imageRect.bottom > 0) {
        const direction = imageRect.top > wHM ? -1 : 1
        const offset = direction * 45 * Math.abs(imageRect.top - wHM) / wHM
        this.$refs.image.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + offset + ', 0, 1)'
      }
    })
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
