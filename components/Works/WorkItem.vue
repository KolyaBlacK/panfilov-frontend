<template>
  <li ref="scrollSections" class="work-item">
    <div class="work-item__inner">
      <nuxt-link v-if="work.mainImage" :to="localePath(workUrl)" class="image-container">
        <img
          ref="image"
          v-lazy="$strapi.options.url + work.mainImage.url"
          class="work-item__image"
          alt="work"
        />
      </nuxt-link>
      <div class="work-item__text">
        <nuxt-link :to="localePath(workUrl)" class="work-item__title">{{ work.title }}</nuxt-link>
        <nuxt-link v-if="work.category" :to="localePath(workCategoryUrl)" class="work-item__description">{{ work.category.name }}</nuxt-link>
      </div>
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
    returnCategoryId: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      windowHeight: 0,
      windowHeightHalf: 0
    }
  },
  computed: {
    workUrl () {
      return '/work/' + this.work.id + (this.returnCategoryId ? '?return_category_id=' + this.returnCategoryId : '')
    },
    workCategoryUrl () {
      return '/works/' + this.work.category.id
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
    margin-bottom: 32px;
  }
  &__inner {
    display: inline-block;
  }
  &.nth-child-0 {
    width: 58%;
  }
  &.nth-child-1 {
    width: 38%;
  }
  &.nth-child-2 {
    width: 38%;
  }
  &.nth-child-3 {
    width: 48%;
  }
  &.nth-child-4 {
    width: 50%;
  }
  &.nth-child-5 {
    width: 40%;
  }
  &.nth-child-6 {
    width: 40%;
  }
  &.nth-child-7 {
    width: 50%;
  }
  .image-container {
    display: block;
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
    padding-right: 2em;
    justify-content: space-between;
    @media #{$media-xs} {
      display: block;
      margin-top: 16px;
      padding-right: 0;
    }
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
      width: 100%;
      margin: 0 0 8px;
      display: inline-block;
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
      font-size: 12px;
      line-height: 22px;
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
