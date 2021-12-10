<template>
  <div>
    <ul class="works-list">
      <work-item
        v-for="(work, index) in works"
        :key="index"
        v-intersect="{ in: ['fade-in'] }"
        class="opacity-0"
        :work="work"
      />
    </ul>
  </div>
</template>

<script>
import WorkItem from './WorkItem.vue'
export default {
  components: { WorkItem },
  data() {
    return {
      works: [
        {
          name: 'Chateau Tamagne Select & Grand Select',
          category: 'упаковка',
          image: '/images/works/work-1.jpg',
        },
        {
          name: 'Chateau Tamagne Select & Grand Select',
          category: 'упаковка',
          image: '/images/works/work-2.jpg',
        },
        {
          name: 'Chateau Tamagne Select & Grand Select',
          category: 'упаковка',
          image: '/images/works/work-3.jpg',
        },
        {
          name: 'Chateau Tamagne Select & Grand Select',
          category: 'упаковка',
          image: '/images/works/work-4.jpg',
        },
        {
          name: 'Chateau Tamagne Select & Grand Select',
          category: 'упаковка',
          image: '/images/works/work-5.jpg',
        },
        {
          name: 'Chateau Tamagne Select & Grand Select',
          category: 'упаковка',
          image: '/images/works/work-6.jpg',
        },
        {
          name: 'Chateau Tamagne Select & Grand Select',
          category: 'упаковка',
          image: '/images/works/work-7.jpg',
        },
        {
          name: 'Chateau Tamagne Select & Grand Select',
          category: 'упаковка',
          image: '/images/works/work-8.jpg',
        },
      ],
    }
  },
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
