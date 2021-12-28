<template>
  <div>
    <div class="works-header">
      <img
        v-if="filterCategory && filterCategory.imageUrl"
        class="back-image"
        :src="filterCategory.imageUrl"
        :alt="filterCategory.name"
      />
      <div class="works-header__left">
        <client-only>
          <v-select
            v-model="filterCategory"
            class="work-type-select"
            :searchable="false"
            :options="categories"
            :components="{Deselect}"
            label="name"
          ></v-select>
        </client-only>
      </div>
      <div class="works-header__right">
        <div class="works-count">
          {{ worksCount }}
        </div>
        <div v-if="filterCategory && filterCategory.description" class="works-tagline">
          {{ filterCategory.description }}
        </div>
      </div>
    </div>
    <div class="works-page">
      <Works :works="works" :return-category-id="returnCategoryId" />
    </div>
  </div>

</template>

<script>
export default {
  head: {
    title: 'PNFLV - портфолио агентства Дмитрия Панфилова',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Разработка логотипов, фирменных стилей, этикеток и упаковки, нейминга, иллюстрации.'
      }
    ],
  },
  async asyncData ({ app, params, store }) {
    try {
      const categories = await app.$strapi.$categories.find()
      const works = await app.$strapi.$works.find()
      if (categories) {
        store.commit('categories/setList', categories.map(c => ({
          id: c.id,
          name: c.name,
          description: c.description,
          imageUrl: c.image ? app.$strapi.options.url + c.image.url : ''
        })))
      }
      if (works) {
        store.commit('work/setList', works)
      }
      const filterCategory = params.id ? store.state.categories.list.find(c => c.id === parseInt(params.id)) : null
      if (filterCategory) {
        store.commit('categories/setFilterCategory', filterCategory)
      }
    } catch (error) {
      console.error(error)
    }
  },
  data () {
    return {
      Deselect: {
        render: createElement => '',
      }
    }
  },
  computed: {
    categories () {
      return [
        { id: null, name: 'Все работы', description: '— В своей работе я стремлюсь создать продукт, способный не только наилучшим образом справляться со своей функцией, но и вдохновлять, украшать и давать новый опыт', imageUrl: require(`../../assets/images/chair.png`) },
        ...this.$store.state.categories.list
      ]
    },
    filterCategory: {
      get () {
        return this.$store.state.categories.filterCategory
      },
      set (category) {
        this.$store.commit('categories/setFilterCategory', category)
        const categoryUrl = category.id ? '/works/' + category.id : '/works/'
        window.history.pushState("object or string", "Title", categoryUrl)
      }
    },
    returnCategoryId () {
      return this.filterCategory ? this.filterCategory.id : null
    },
    works () {
      return this.filterCategory && this.filterCategory.id
        ? this.$store.state.work.list.filter(work => work.category.id === this.filterCategory.id)
        : this.$store.state.work.list
    },
    worksCount () {
      return this.works.length + ' ' + this.$declOfNum(this.works.length, ['работа', 'работы', 'работ']) + (this.filterCategory ? ' — ' + this.filterCategory.name : '')
    },
  },
  mounted () {
    if (!this.filterCategory) {
      this.$store.commit('categories/setFilterCategory', this.categories[0])
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.works-header {
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 112px 15px 0;
  margin-bottom: 72px;
  position: relative;
  @media #{$media-sm-up} {
    flex-direction: row;
    height: 100vh;
    padding: 16vw 2vw 4vw 6vw;
  }

  .back-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__left {
    margin-bottom: 15px;
    z-index: 15;
    @media #{$media-sm-up} {
      margin-right: 8vw;
    }
  }

  &__right {
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .works-count {
    color: $gray;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    margin-bottom: 48px;

    @media #{$media-sm-up} {
      font-size: 2vw;
      line-height: 3.5vw;
      margin-bottom: 5.5vw;
      text-align: left;
    }
    @media #{$media-md-up} {
      font-size: 1.5vw;
      line-height: 2.8vw;
    }
  }

  .works-tagline {
    color: $white;
    font-size: 24px;
    line-height: 40px;

    text-transform: uppercase;
    @media #{$media-sm-up} {
      font-size: 2vw;
      line-height: 4vw;
    }
    @media #{$media-md-up} {
      font-size: 1.5vw;
      line-height: 3vw;
    }
  }
}
.works-page {
  padding: 2% 2.5% 0;
  @media #{$media-xs} {
    padding: 15px 15px;
  }
}
.work-type-select {
  cursor: pointer;
  font-size: 20px;
  width: 100%;
  margin-bottom: 20px;

  @media #{$media-sm-up} {
    font-size: 2vw;
    width: 20vw;
  }
  @media #{$media-md-up} {
    font-size: 1.5vw;
  }
}
.work-type-select::v-deep .vs__dropdown-toggle {
  background: transparent;
  border: none;
  .vs__selected {
    color: $white;
    opacity: 1;
  }
}
.work-type-select::v-deep .vs__dropdown-menu {
  background: $mainBlack;
  border: 1px solid $blackGray;

  .vs__dropdown-option {
    color: $white;
    background: $mainBlack;
    margin: 12px 0;
    &:hover {
      background: $mainBlack;
      color: $styleRose;
    }
  }
}

.work-type-select::v-deep .vs__open-indicator {
  fill: $white;
}

</style>

