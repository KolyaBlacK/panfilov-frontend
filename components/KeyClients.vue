<template>
  <div v-intersect="{ in: ['animate-line'] }" class="key-clients top-border">
    <div v-intersect="{ in: ['fade-in'] }" class="block-title opacity-0">Ключевые клиенты</div>

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
          <img src='~/assets/images/client-img.jpg' alt="">
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
  mounted() {
    try {
      // this.clients = await this.$strapi.$clients.find()
      this.clients = [{"id":1,"Name":"Кубань вино","Description":"description","published_at":"2021-11-17T09:25:28.078Z","created_at":"2021-11-17T09:25:09.547Z","updated_at":"2021-11-17T09:25:28.092Z","Image":{"id":1,"name":"Rectangle 737.jpg","alternativeText":"","caption":"","width":477,"height":302,"formats":{"thumbnail":{"name":"thumbnail_Rectangle 737.jpg","hash":"thumbnail_Rectangle_737_e78b9499b6","ext":".jpg","mime":"image/jpeg","width":245,"height":155,"size":6.04,"path":null,"url":"/uploads/thumbnail_Rectangle_737_e78b9499b6.jpg"}},"hash":"Rectangle_737_e78b9499b6","ext":".jpg","mime":"image/jpeg","size":14.11,"url":"/uploads/Rectangle_737_e78b9499b6.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2021-11-17T09:24:48.798Z","updated_at":"2021-11-17T09:24:48.807Z"}},{"id":2,"Name":"Кубань вино","Description":"description","published_at":"2021-11-17T09:25:42.277Z","created_at":"2021-11-17T09:25:40.564Z","updated_at":"2021-11-17T09:25:42.298Z","Image":{"id":1,"name":"Rectangle 737.jpg","alternativeText":"","caption":"","width":477,"height":302,"formats":{"thumbnail":{"name":"thumbnail_Rectangle 737.jpg","hash":"thumbnail_Rectangle_737_e78b9499b6","ext":".jpg","mime":"image/jpeg","width":245,"height":155,"size":6.04,"path":null,"url":"/uploads/thumbnail_Rectangle_737_e78b9499b6.jpg"}},"hash":"Rectangle_737_e78b9499b6","ext":".jpg","mime":"image/jpeg","size":14.11,"url":"/uploads/Rectangle_737_e78b9499b6.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2021-11-17T09:24:48.798Z","updated_at":"2021-11-17T09:24:48.807Z"}},{"id":3,"Name":"Кубань вино","Description":"description","published_at":"2021-11-17T09:25:55.699Z","created_at":"2021-11-17T09:25:54.219Z","updated_at":"2021-11-17T09:25:55.711Z","Image":{"id":1,"name":"Rectangle 737.jpg","alternativeText":"","caption":"","width":477,"height":302,"formats":{"thumbnail":{"name":"thumbnail_Rectangle 737.jpg","hash":"thumbnail_Rectangle_737_e78b9499b6","ext":".jpg","mime":"image/jpeg","width":245,"height":155,"size":6.04,"path":null,"url":"/uploads/thumbnail_Rectangle_737_e78b9499b6.jpg"}},"hash":"Rectangle_737_e78b9499b6","ext":".jpg","mime":"image/jpeg","size":14.11,"url":"/uploads/Rectangle_737_e78b9499b6.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2021-11-17T09:24:48.798Z","updated_at":"2021-11-17T09:24:48.807Z"}},{"id":4,"Name":"Кубань вино","Description":"description","published_at":"2021-11-17T09:26:01.693Z","created_at":"2021-11-17T09:25:59.997Z","updated_at":"2021-11-17T09:26:01.704Z","Image":{"id":1,"name":"Rectangle 737.jpg","alternativeText":"","caption":"","width":477,"height":302,"formats":{"thumbnail":{"name":"thumbnail_Rectangle 737.jpg","hash":"thumbnail_Rectangle_737_e78b9499b6","ext":".jpg","mime":"image/jpeg","width":245,"height":155,"size":6.04,"path":null,"url":"/uploads/thumbnail_Rectangle_737_e78b9499b6.jpg"}},"hash":"Rectangle_737_e78b9499b6","ext":".jpg","mime":"image/jpeg","size":14.11,"url":"/uploads/Rectangle_737_e78b9499b6.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2021-11-17T09:24:48.798Z","updated_at":"2021-11-17T09:24:48.807Z"}}]
    } catch (error) {
      this.error = error
    }
  }
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
  padding: 1.3vw 0;
  @media #{$media-lg} {
    padding: 1.5vw 0;
  }
  @media #{$media-md} {
    padding: 1.8vw 0;
  }
  @media #{$media-xs} {
    padding: 20px 0;
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
