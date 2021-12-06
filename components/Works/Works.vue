<template>
  <div v-intersect="{ in: ['animate-line'] }" class="works top-border">
    <h4 v-intersect="{ in: ['fade-in'] }" class="block-title opacity-0">Работы</h4>
    <p v-intersect="{ in: ['fade-in'] }" class="works__description block-description opacity-0">
      Я создаю функциональный продукт, который вдхоновляет им пользоваться.
      Который органично интегрируется в среду, украшает ее и имеет собственный характер.
    </p>
    <ul class="works-list">
      <work-item v-intersect="{ in: ['fade-in'] }" class="opacity-0"/>
      <work-item v-intersect="{ in: ['fade-in'] }" class="opacity-0"/>
      <work-item v-intersect="{ in: ['fade-in'] }" class="opacity-0"/>
      <work-item v-intersect="{ in: ['fade-in'] }" class="opacity-0"/>
      <work-item v-intersect="{ in: ['fade-in'] }" class="opacity-0"/>
      <work-item v-intersect="{ in: ['fade-in'] }" class="opacity-0"/>
      <work-item v-intersect="{ in: ['fade-in'] }" class="opacity-0"/>
      <work-item v-intersect="{ in: ['fade-in'] }" class="opacity-0"/>
    </ul>
    <div v-intersect="{ in: ['fade-in'] }" class="wrapper-arrow-link opacity-0">
      <a href="#" class="arrow-link">Все работы</a>
    </div>
  </div>
</template>

<script>
import WorkItem from './WorkItem.vue'
export default {
  components: { WorkItem },

}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.works {
  &__description {
    max-width: 60%;
    padding-right: 5%;
    // margin: 100px 0 120px auto;
    margin: 3em 0 3.7em auto;
    @media #{$media-lg} {
      max-width: 70%;
    }
    @media #{$media-md} {
      max-width: 90%;
    }
    @media #{$media-xs} {
      max-width: 100%;
    }
  }
}

.works-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
}

.wrapper-arrow-link {
  text-align: right;
}
</style>
