<template>
  <div class="key-clients">
    <div class="block-title">Ключевые клиенты</div>

    <div class="client-list">
      <div v-for="client in clients" :key="client.id" class="client-item">
        <div class="client-name">
          {{ client.Name }}
        </div>
        <div class="client-desc">
          {{ client.Description }}
        </div>
        <div v-if="client.Image" class="client-img">
          <img :src="$strapi.options.url + client.Image.url" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clients: [],
      error: null
    }
  },
  async mounted() {
    try {
      this.clients = await this.$strapi.$clients.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
.key-clients {
}

.client-list {
  position: relative;
}

.client-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;


  @media #{$media-sm-up} {
    border-bottom: 1px solid $blackGray;
  }

  &:hover {
    border-color: $styleRose;
    .client-name {
      color: $styleRose;
    }
    .client-desc {
      color: $white;
    }
    .client-img {
      opacity: 1;
    }
  }

  .client-name {
    cursor: pointer;
    font-size: $font-20;
    color: $white;

    @media #{$media-sm-up} {
      color: $blackGray;
      font-size: $font-32;
      width: 816px;
    }
  }

  .client-desc {
    color: $blackGray;
    font-size: $font-12;
    @media #{$media-sm-up} {
      font-size: $font-18;
      width: 480px;
    }
  }

  .client-img {
    transition: all .3s ease;
    position: absolute;
    left: 30%;
    top: 0;
    bottom: 0;
    opacity: 0;
    z-index: 5;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;

    @media #{$media-sm-up} {
      width: 477px;
    }

  }
}

</style>
