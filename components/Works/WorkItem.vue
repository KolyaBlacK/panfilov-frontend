<template>
  <li ref="scrollSections" class="work-item">
    <NuxtLink v-if="work.mainImage" :to="workUrl" class="image-container">
      <img
        ref="image"
        v-lazy="$strapi.options.url + work.mainImage.url"
        class="work-item__image"
        alt="work"
      />
    </NuxtLink>
    <div class="work-item__text">
      <NuxtLink :to="workUrl" class="work-item__title">{{ work.title }}</NuxtLink>
      <NuxtLink v-if="work.category" :to="workUrl" class="work-item__description">{{ work.category.name }}</NuxtLink>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      windowHeight: 0,
      windowHeightHalf: 0
    }
  },
  computed: {
    workUrl () {
      return '/work/' + this.work.id
    }
  },
  mounted () {
    this.windowHeight = window.innerHeight
    this.windowHeightHalf = Math.round(this.windowHeight / 2)
    window.addEventListener('scroll', this.transformImage)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.transformImage)
  },
  methods: {
    transformImage (e) {
      if (!this.$refs.image) {
        return
      }
      const imageRect = this.$refs.image.getBoundingClientRect()
      if (this.windowHeight > imageRect.top && imageRect.bottom > 0) {
        // const ratio = Math.round(windowHeight / imageRect.height)
        const direction = imageRect.top > this.windowHeightHalf ? -1 : 1
        const offset = (direction * 45 * Math.abs(imageRect.top - this.windowHeightHalf)) / this.windowHeightHalf
        this.$refs.image.style.transform =
          'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
          offset +
          ', 0, 1)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
.work-item {
  margin-bottom: 6vw;
  @media #{$media-xs} {
    width: 100% !important;
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
    transform: translate3d(0, 0, 0);
    transition: opacity .6s cubic-bezier(.075, .82, .165, 1);
    &:hover {
      opacity: .75;
    }
  }
  &__image {
    margin-top: -1.5625rem;
    margin-bottom: -1.5625rem;
  }
  &__text {
    display: flex;
    margin-top: 1.6vw;
  }
  &__title {
    font-weight: normal;
    font-size: 1.2vw;
    line-height: 1.2vw;
    margin: 0px 2.5vw 0 0;
    width: calc(50% - 1.3vw);
    @media #{$media-lg} {
      width: calc(65% - 1.3vw);
      font-size: 1.6vw;
      line-height: 1.6vw;
    }
    @media #{$media-md} {
      font-size: 1.8vw;
      line-height: 1.8vw;
    }
    @media #{$media-xs} {
      font-size: 16px;
      line-height: 22px;
      width: calc(60% - 24px);
      margin: 0px 24px 0 0px;
    }
  }
  &__description {
    color: $darkGray;
    font-size: 1vw;
    line-height: 1.2vw;
    @media #{$media-lg} {
      font-size: 1.2vw;
      line-height: 1.4vw;
    }
    @media #{$media-md} {
      font-size: 1.6vw;
      line-height: 1.8vw;
    }
    @media #{$media-xs} {
      font-size: 16px;
      line-height: 24px;
    }
  }
  a {
    transition: color $textTimeTransition ease;
    &:hover {
      color: $styleRose;
    }
  }
}
</style>
