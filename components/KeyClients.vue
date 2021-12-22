<template>
  <div v-intersect="{ in: ['animate-line'] }" class="key-clients top-border">
    <div v-intersect="{ in: ['fade-in'] }" class="block-title opacity-0">
      Ключевые клиенты
    </div>

    <div v-intersect="{ in: ['fade-in'] }" class="client-list opacity-0">
      <div v-for="client in clients" :key="client.id" class="client-item">
        <div class="client-name">
          {{ client.Name }}
        </div>
        <div class="client-desc">
          {{ client.Description }}
        </div>
        <div v-if="client.Image" class="client-img">
          <!-- <img :src="$strapi.options.url + client.Image.url" alt=""> -->
          <img src="~/assets/images/client-img.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [],
      error: null,
    }
  },
  async mounted() {
    try {
      this.clients = await this.$strapi.$clients.find()
    } catch (error) {
      this.error = error
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';

.client-list {
  position: relative;
}

.client-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2vw 0;
  @media #{$media-lg} {
    padding: 2.5vw 0;
  }
  @media #{$media-md} {
    padding: 2.8vw 0;
  }
  @media #{$media-xs} {
    padding: 30px 0;
  }

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
    font-size: 2vw;
    color: $white;

    @media #{$media-sm-up} {
      color: $blackGray;
      width: 816px;
    }
    @media #{$media-lg} {
      font-size: 2.2vw;
    }
    @media #{$media-md} {
      font-size: 2.4vw;
    }
    @media #{$media-xs} {
      font-size: 20px;
    }
  }

  .client-desc {
    color: $blackGray;
    font-size: 1.4vw;
    @media #{$media-sm-up} {
      width: 480px;
    }
    @media #{$media-md} {
      font-size: 1.8vw;
    }
    @media #{$media-xs} {
      font-size: $font-12;
    }
  }

  .client-img {
    transition: all 0.3s ease;
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
