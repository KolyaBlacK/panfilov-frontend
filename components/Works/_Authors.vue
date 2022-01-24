<script>
export default {
  functional: true,
  props: {
    authors: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'center'
    },
    widthClass: {
      type: String,
      default: ''
    }
  },
  render: (createElement, context) => {
    const rows = context.props.authors.split(/\r?\n/).map(row => {
      return createElement('div', row.split(':').map((rp, i, arr) => createElement('span', {
        class: i > 0 || arr.length === 1 ? ['value'] : ['key']
      }, rp + (i === 0 && arr.length > 1 ? ': ': ''))))
    })
    return createElement('div', {
      class: ['authors', context.props.align, context.props.widthClass]
    }, rows)
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.theme-dark .authors {
  .key {
    color: $darkGray;
  }

  .value {
    color: $white;
  }
}

.authors {
  margin: 4vw 0;
  font-size: 16px;
  line-height: 32px;

  @media #{$media-sm-up} {
    font-size: 1.5vw;
    line-height: 3vw;
  }

  @media #{$media-lg-up} {
    font-size: 1vw;
    line-height: 2vw;
  }

  .key {
    color: $mainBlack;
  }

  .value {
    color: $mainBlack;
  }
}

.font_16 {
  font-size: 16px;
}

.font_24 {
  font-size: 18px;
  line-height: 40px;
  @media #{$media-sm-up} {
    font-size: 1.6vw;
    line-height: 3vw;
  }
  text-transform: uppercase;
}

.width_100 {
  @media #{$media-sm-up} {
    width: 95vw;
  }
}
.width_65 {
  @media #{$media-sm-up} {
    width: 65vw;
  }
}
.width_50 {
  @media #{$media-sm-up} {
    width: 45vw;
  }
}
.width_35 {
  @media #{$media-sm-up} {
    width: 35vw;
  }
}
</style>
