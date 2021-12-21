<template>
  <div class="main-page">
    <TagLine />
    <div v-intersect="{ in: ['animate-line'] }" class="works top-border">
      <h4 v-intersect="{ in: ['fade-in'] }" class="block-title opacity-0">
        Работы
      </h4>
      <p
        v-intersect="{ in: ['fade-in'] }"
        class="works__description block-description opacity-0"
      >
        Покупка это доверие, более привлекательные, эстетичные продукты, с
        проработанной психологией взаимодействия продаются лучше, становятся
        любимыми.
      </p>
      <Works :works="works" />
      <div v-intersect="{ in: ['fade-in'] }" class="wrapper-arrow-link opacity-0">
        <NuxtLink to="/works" class="arrow-link">Все работы</NuxtLink>
      </div>
    </div>
    <About />
    <KeyClients />
  </div>

</template>

<script>

export default {
  async asyncData ({ app, store }) {
    try {
      const works = await app.$strapi.$works.find()
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
  }
}
.wrapper-arrow-link {
  text-align: right;
}

</style>
