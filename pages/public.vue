<template>
  <div class="public-page">
    <!-- eslint-disable vue/no-v-html -->
    <h1 v-intersect="{ in: ['fade-in'] }" class="public-title block-description ignore-br opacity-0" v-html="$t('public.description')"/>
    <!-- eslint-enable -->
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

.public-title {
  margin-bottom: 2em;
  @media #{$media-xs} {
    max-width: 100%;
  }
}

.ignore-br::v-deep {
  @media #{$media-xs} {
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
