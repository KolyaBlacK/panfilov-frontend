<template>
  <div class="public-page">
    <h1 v-intersect="{ in: ['fade-in'] }" class="public-title block-description opacity-0">
      — В своей работе я стремлюсь создать продукт, <br>
      способный не только наилучшим образом <br>
      справляться со своей функцией, но и <br>
      вдохновлять, украшать и давать новый опыт
    </h1>
    <div v-intersect="{ in: ['animate-line'] }" class="top-border items">
      <public-item v-for="(article, index) in articles" :key="index" v-intersect="{ in: ['fade-in'] }" :article="article" class="item opacity-0"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Public',
  async asyncData ({ app, params, store }) {
    try {
      const publics = await app.$strapi.$publics.find() || []
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
    padding: 15px 15px;
  }
}

.public-title {
  margin-bottom: 2em;
  @media #{$media-xs} {
    max-width: 100%;
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
