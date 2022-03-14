<template>
  <div class="public-page">
    <div class="public-top-container">
      <!-- eslint-disable vue/no-v-html -->
      <h1 v-intersect="{ in: ['fade-in'] }" class="public-title block-description ignore-br opacity-0" v-html="$t('public.description')"/>
      <!-- eslint-enable -->
      <div class="wrapper-gif">
        <img :src="randomNumber" alt='gif'>
      </div>
    </div>
    <div v-intersect="{ in: ['animate-line'] }" class="top-border items">
      <public-item v-for="(article, index) in articles" :key="index" v-intersect="{ in: ['fade-in'] }" :article="article" class="item opacity-0"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Public',
  async asyncData ({ app, i18n }) {
    try {
      const publics = await app.$strapi.$publics.find({ _locale: i18n.locale }) || []
      return {
        articles: publics
      }
    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    randomNumber () {
      const min = 1
      const max = 5
      const number = Math.floor(Math.random() * (max - min)) + min
      return require(`../assets/gifs/${number}.gif`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
.public-page {
  padding: 10% 2.5% 0;
  @media #{$media-xs} {
    padding: 80px 15px 15px;
  }
}

.public-top-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
  @media #{$media-xs} {
    max-width: 100%;
    display: block;
  }
}

.wrapper-gif {
  flex: 1;
  img {
    display: block;
  }
}

.public-title {
  @media #{$media-lg} {
    max-width: 70%;
  }
  @media #{$media-xs} {
    max-width: 100%;
  }
}

.ignore-br::v-deep {
  @media #{$media-lg} {
    br {
      display: none;
    }
  }
}

.items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.item {
  width: 50%;
  margin-bottom: 6vw;
  @media #{$media-xs} {
    width: 100% !important;
    margin-bottom: 32px;
  }
  &:nth-child(2n) {
    padding-top: 5%;
    @media #{$media-xs} {
      padding-top: 0;
    }
  }
}
</style>
