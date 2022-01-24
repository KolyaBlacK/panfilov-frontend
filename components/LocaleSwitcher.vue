<template>
  <div class="wrapper-select">
    <v-select v-model="locale" class="select" :components="{Deselect}" :options="locales" label="name" :searchable="false">
  <!--    <option v-for="locale in locales" :key="locale.name">-->
  <!--      <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>-->
  <!--    </option>-->
    </v-select>
  </div>
</template>
<script>
export default {
  name: 'LocaleSwitcher',
  data () {
    return {
      Deselect: {
        render: createElement => '',
      }
    }
  },
  computed: {
    locales() {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    },
    locale: {
      get () {
        return this.$i18n.locales.filter(locale => locale.code === this.$i18n.locale)
      },
      set ({code}) {
        this.$router.push(this.switchLocalePath(code))
      }
    }
  },
  // methods: {
  //   changeLang (lang) {
  //     this.$store.commit('SET_LANG', lang)
  //     this.$router.push({path: `$ {this. $ router.currentRoute.path}? lang = $ {lang}`})
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
.select {
  line-height: 1.1vw;
  font-size: 0.9vw;
  outline: none;
  background: none;
  border: none;
  color: $white;
  transition: color $textTimeTransition ease;
  &:hover {
    color: $styleRose;
  }
  @media #{$media-lg} {
    font-size: 1.2vw;
  }
  @media #{$media-md} {
    font-size: 1.4vw;
  }
  @media #{$media-xs} {
    font-size: 15px;
  }
}

.select {
  cursor: pointer;
  width: 100%;
}
.select::v-deep .vs__dropdown-toggle {
  background: transparent;
  border: none;
  .vs__selected {
    color: $white;
    opacity: 1;
  }
}

.select::v-deep .vs__dropdown-menu {
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

.select::v-deep .vs__open-indicator {
  fill: $white;
}

.wrapper-select {
  min-width: 60px;
  width: 7vw;
}
</style>
