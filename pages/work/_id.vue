<template>
  <div>
    <div class="work-page">
      <div class="work-page__header">
        <div class="back-btn">
          <NuxtLink to="/works">Назад к работам</NuxtLink>
        </div>
        <div class="work-title">
          {{ work.title }}
        </div>
      </div>

      <div class="work-page__body">
        <div class="work-info">
          <div class="work-info__left">
            <div>{{ work.date }}</div>
            <div>{{ workTypes[work.type] }}</div>
          </div>
          <div class="work-info__right">
            <div class="description">{{ work.description }}</div>
            <div class="description_en">{{ work.description_en }}</div>
          </div>
        </div>

        <div class="web-page">
          <div v-for="(comp, index) in work.WebPage" :key="index" class="web-page-componentы">
            <component :is="comp.__c" v-bind="comp" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      id: this.$route.params.id,
      work: {},
      workTypes: {
        'package_design': 'Дизайн упаковки'
      },
      componentMap: {
        'text.tekst': '_Text',
        'image.image': '_Image',
        'text-with-image.tekst-s-kartinkoj': '_TextWithImage'
      },
      error: null
    }
  },
  async mounted () {
    try {
      this.work = await this.$strapi.$works.findOne(this.id)
      console.log('>>>>>>>>>', this.work)
      this.initComponents(this.work.WebPage)
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    initComponents (WebPageComponents = []) {
      WebPageComponents.forEach(component => {
        component.__c = () => import(`@/components/Works/${this.componentMap[component.__component]}.vue`)
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
    padding: 8vw 2.5%;
  }

  &__header {
    display: flex;
    flex-direction: column;
    @media #{$media-sm-up} {
      flex-direction: row;
    }

    .back-btn {
      font-size: 2.2vw;
      line-height: 4.5vw;

      @media #{$media-sm-up} {
        margin-right: 12vw;
      }
    }

    .work-title {
      font-size: 2.6vw;
      line-height: 4.5vw;
      text-transform: uppercase;
    }
  }

  &__body {
    .work-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      color: $darkGray;
      font-size: 1vw;
      line-height: 2vw;
      text-align: left;
      margin-right: 19vw;
      padding: 6vw 4vw 6vw 5vw;

      &__right {
        width: 59vw;

        .description {
          width: 40vw;
        }
        .description_en {
          float: right;
          margin-top: 6vw;
          width: 40vw;
        }
      }
    }
  }
}
</style>

