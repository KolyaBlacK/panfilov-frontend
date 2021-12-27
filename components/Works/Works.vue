<template>
  <div>
    <ul class="works-list">
      <work-item
        v-for="(work, index) in works"
        :key="index"
        v-intersect="{ in: ['fade-in'] }"
        class="opacity-0"
        :work="work"
        :return-category-id="returnCategoryId"
      />
    </ul>
  </div>
</template>

<script>
import WorkItem from './WorkItem.vue'
export default {
  components: { WorkItem },
  props: {
    works: {
      type: Array,
      default: () => []
    },
    returnCategoryId : {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.works-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
}
</style>
