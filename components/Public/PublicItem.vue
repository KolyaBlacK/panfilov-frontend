<template>
  <div class="public">
    <p v-if="date" class="date">{{date}}</p>
    <p v-if="article.text" class="text">{{article.text}}</p>
    <a v-if="article.socialLink" :href="article.socialLink.link" target="_blank" class="link arrow-link">{{article.socialLink.socialName}}</a>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    date() {
      return new Date(this.article.published_at).toLocaleDateString()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
.public {
  padding-right: 10%;
  @media #{$media-xs} {
    padding-right: 0;
  }
}
.date {
  color: $darkGray;
  margin: 0 0 1em;
  @media #{$media-xs} {
    font-size: 14px;
  }
}

.text {
  font-size: 1.4vw;
  line-height: 1.8vw;
  @media #{$media-lg} {
    font-size: 1.8vw;
    line-height: 2.4vw;
  }
  @media #{$media-md} {
    font-size: 2.2vw;
    line-height: 2.8vw;
  }
  @media #{$media-xs} {
    font-size: 18px;
    line-height: 24px;
  }
}

.link {
  margin: 1em 0 0;
  float: right;
  @media #{$media-xs} {
    font-size: 16px;
  }
  &:after {
    @media #{$media-xs} {
      width: 20px;
      height: 10px;
      top: 0px;
      margin-left: 10px;
    }
  }
}
</style>
