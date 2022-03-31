<template>
  <div class="main-page">
    <tag-line />
    <div v-intersect="{ in: ['animate-line'] }" class="works top-border">
      <h4 v-intersect="{ in: ['fade-in'] }" class="block-title opacity-0">
        {{$t('works')}}
      </h4>
      <!-- eslint-disable vue/no-v-html -->
      <p
        v-intersect="{ in: ['fade-in'] }"
        class="works__description block-description opacity-0"
        v-html="$t('worksDescription')"
      />
      <!-- eslint-enable -->
      <works :works="works" />
      <div v-intersect="{ in: ['fade-in'] }" class="right opacity-0">
        <nuxt-link :to="localePath('/works')" class="arrow-link">{{$t('allWorks.title')}}</nuxt-link>
      </div>
    </div>
    <about />
    <key-clients />
  </div>

</template>

<script>

export default {
  name: 'HomePage',
  async asyncData ({ app, store }) {
    try {
      const works = await app.$strapi.$works.find([['_locale', app.i18n.locale],['_limit', '6'], ['_sort', 'date:desc']])
      if (works) {
        store.commit('work/setList', works)
      }
    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    works () {
      return this.$store.state.work.list
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.main-page {
  padding: 2% 2.5% 0;
  @media #{$media-xs} {
    padding: 15px 15px;
  }
}
.works {
  &__description {
    max-width: 60%;
    padding-right: 5%;
    // margin: 100px 0 120px auto;
    margin: 3em 0 3.7em auto;
    @media #{$media-lg} {
      max-width: 70%;
    }
    @media #{$media-md} {
      max-width: 90%;
    }
    @media #{$media-xs} {
      max-width: 100%;
      margin: 0 0 3.7em auto;
    }
    br {
      @media #{$media-xs} {
        display: none;
      }
    }
  }
}

</style>
