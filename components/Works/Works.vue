<template>
  <div class="works top-border">
    <h4 class="block-title">Работы</h4>
    <p class="works__description block-description">
      Я создаю функциональный продукт, который вдхоновляет им пользоваться.
      Который органично интегрируется в среду, украшает ее и имеет собственный характер.
    </p>
    <ul class="works-list">
      <work-item />
      <work-item />
      <work-item />
      <work-item />
      <work-item />
      <work-item />
      <work-item />
      <work-item />
    </ul>
    <div class="wrapper-arrow-link">
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
  padding-bottom: 100px;
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
