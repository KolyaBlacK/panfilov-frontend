<template>
  <div>
    <div class="work-page">
      <div class="work-page__header">
        <div class="back-btn">
          <nuxt-link :to="localePath(returnUrl)">
            <svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34 9C34.5523 9 35 8.55228 35 8C35 7.44772 34.5523 7 34 7V9ZM0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM34 7L1 7V9L34 9V7Z"
                :fill="arrowColor"
              />
            </svg>
            Назад к работам
          </nuxt-link>
        </div>
        <div class="work-title">
          {{ work.title }}
        </div>
      </div>

      <div class="work-page__body">
        <div class="work-info">
          <div class="work-info__left">
            <div class="date">{{ work.date }}</div>
            <div>{{ workCategoryName }}</div>
          </div>
          <div class="work-info__right">
            <div v-if="work.description" class="description">{{ work.description }}</div>
          </div>
        </div>

        <div class="web-page">
          <client-only>
            <div v-for="(comp, index) in work.WebPage" :key="index" class="web-page-components">
              <component :is="comp.__c" v-bind="comp" />
            </div>
          </client-only>
        </div>
        <div v-if="work.similarWorks" class="similar-works">
          <div class="title">Другие проекты</div>
          <Works :works="work.similarWorks" />
          <div v-intersect="{ in: ['fade-in'] }" class="right opacity-0">
            <nuxt-link :to="localePath('/works')" class="arrow-link">{{$t('allWorks.title')}}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

const COMPONENT_MAP = {
  'text.tekst': '_Text',
  'text.avtory': '_Authors',
  'image.image': '_Image',
  'video.video': '_Video',
  'empty.empty': '_Empty'
}

export default {
  async asyncData ({ app, params, store }) {
    try {
      const work = await app.$strapi.$works.findOne(params.id)
      if (work) {
        if (work.category) {
          work.similarWorks = await app.$strapi.$works.find([['category.id', work.category.id], ['id_ne', work.id], ['_locale', app.i18n.locale], ['_limit', '3']])
        }
        store.commit('work/setCurrent', work)

        if (process.server) {
          store.commit('ui/set', work.theme)
        }
      }
    } catch (error) {
      console.error(error)
    }
  },
  data () {
    return {
      categories: []
    }
  },
  head() {
    return {
      title: this.work?.metaTitle || 'PNFLV - портфолио агентства Дмитрия Панфилова',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.work?.metaDescription || 'Разработка логотипов, фирменных стилей, этикеток и упаковки, нейминга, иллюстрации.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.work?.metaTitle || 'PNFLV - портфолио агентства Дмитрия Панфилова'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.work?.metaDescription || 'Разработка логотипов, фирменных стилей, этикеток и упаковки, нейминга, иллюстрации.'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.work?.mainImage?.url ? 'https://pnflv.com/api' + this.work?.mainImage?.url : 'https://pnflv.com/og.jpg'
        }
      ],
    }
  },
  computed: {
    arrowColor () {
      return this.$store.state.ui.theme === 'dark' ? 'white' : 'black'
    },
    work () {
      return this.$store.state.work.currentWork
    },
    workCategoryName () {
      const workCategory = this.work.category ? this.categories.find(c => c.id === this.work.category.id) : null
      return workCategory ? workCategory.name : ''
    },
    returnUrl () {
      return '/works' + (this.$route.query.return_category_id ? '/' + this.$route.query.return_category_id : '')
    }
  },
  async mounted () {
    if (this.work.WebPage) {
      this.initComponents(this.work.WebPage)
    }
    this.$store.commit('ui/set', this.work.theme)
    this.categories = await this.$strapi.$categories.find({ _locale: this.$i18n.locale })
  },
  destroyed () {
    setTimeout(() => {
      this.$store.commit('ui/set', 'dark')
    }, 700)
  },
  methods: {
    initComponents (WebPageComponents = []) {
      WebPageComponents.forEach(component => {
        component.__c = () => import(`@/components/Works/${COMPONENT_MAP[component.__component]}.vue`)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.work-page {
  padding: 112px 15px 0;
  margin-bottom: 72px;
  @media #{$media-sm-up} {
    flex-direction: row;
    margin-bottom: 0px;
    padding: 8vw 2.5%;
  }

  &__header {
    display: flex;
    flex-direction: column;
    @media #{$media-sm-up} {
      flex-direction: row;
      justify-content: space-between;
    }

    .back-btn {
      font-size: 18px;
      line-height: 48px;
      min-width: 220px;

      @media #{$media-sm-up} {
        font-size: 2vw;
        line-height: 3vw;
        margin-right: 3vw;
      }

      @media #{$media-lg-up} {
        font-size: 1.6vw;
        line-height: 4vw;
      }
      a {
        svg {
          width: 2vw;
          height: 1vw;
          @media #{$media-lg} {
            width: 2.2vw;
            height: 1.3vw;
          }
          @media #{$media-md} {
            width: 2.5vw;
            height: 1.5vw;
          }
          @media #{$media-xs} {
            width: 25px;
            height: 12px;
          }
          path {
            transition: fill $textTimeTransition ease;
          }
        }
        &:hover {
          svg {
            path {
              fill: $styleRose;
            }
          }
        }
      }
    }

    .work-title {
      font-size: 24px;
      line-height: 40px;
      text-transform: uppercase;
      width: 64vw;

      @media #{$media-sm-up} {
        font-size: 3vw;
        line-height: 4vw;
      }

      @media #{$media-lg-up} {
        font-size: 2.6vw;
        line-height: 4.5vw;
      }
    }
  }

  &__body {
    .work-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      color: $darkGray;
      text-align: left;
      margin-right: 19vw;

      font-size: 16px;
      line-height: 24px;

      @media #{$media-sm-up} {
        font-size: 2vw;
        line-height: 3vw;
        flex-direction: row;
        padding: 6vw 4.8vw 6vw 2.7vw;
      }
      @media #{$media-lg-up} {
        font-size: 1vw;
        line-height: 2vw;
      }

      &__right {
        @media #{$media-sm-up} {
          width: 59vw;
        }
        .description {
          @media #{$media-sm-up} {
            width: 40vw;
          }
        }
        .description_en {
          margin-top: 6vw;
          @media #{$media-sm-up} {
            float: right;
            width: 40vw;
          }
        }
      }

      &__left {
        text-align: right;
        margin-bottom: 40px;

        @media #{$media-sm-up} {
          text-align: left;
        }
        .date {
          margin-bottom: 16px;
        }
      }
    }

    .web-page {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      .web-page-components {
        display: flex;
        align-items: flex-end;
      }
    }

    .similar-works::v-deep {
      border-top: 1px solid $darkGray;
      padding: 50px 0 0;
      .title {
        color: $darkGray;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 70px;
        @media #{$media-sm-up} {
          font-size: 2.2vw;
        }
        @media #{$media-lg-up} {
          font-size: 1.8vw;
        }
      }
      .works-list {
        .work-item {
          &:nth-child(1) {
            width: 30%;
          }
          &:nth-child(2) {
            width: 30%;
          }
          &:nth-child(3) {
            width: 33%;
          }
        }
      }
    }
  }
}
</style>

