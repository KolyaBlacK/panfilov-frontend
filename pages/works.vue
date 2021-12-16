<template>
  <div>
    <div class="works-header">
      <div class="works-header__left">
        <v-select
          v-model="workType"
          class="work-type-select"
          :options="workTypes"
          :components="{Deselect}"
          label="title"
        ></v-select>
      </div>
      <div class="works-header__right">
        <div class="works-count">
          29 работ — Все работы
        </div>
        <div class="works-tagline">
          — В своей работе я стремлюсь создать продукт, способный не только наилучшим образом справляться со своей функцией, но и вдохновлять, украшать и давать новый опыт
        </div>
      </div>
    </div>
    <div class="works-page">
      <Works />
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      Deselect: {
        render: createElement => '',
      },
      workType: null,
      workTypes: [
        { title: 'Все работы' },
        { title: 'Сделано руками' },
        { title: 'Сделано руками 2' }
      ]
    }
  },
  mounted () {
    this.workType = this.workTypes[0]
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.works-header {
  background: url('~/assets/images/chair.png') center 0 no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 112px 15px 0;
  margin-bottom: 72px;
  @media #{$media-sm-up} {
    flex-direction: row;
    height: 100vh;
    padding: 16vw 2vw 4vw 6vw;
  }

  &__left {
    @media #{$media-sm-up} {
      margin-right: 10vw;
    }
  }

  &__right {
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
      line-height: 1.5vw;
      margin-bottom: 5.5vw;
      text-align: left;
    }
    @media #{$media-md-up} {
      font-size: 1.5vw;
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

