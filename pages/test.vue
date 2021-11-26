<template>
  <div class="test">
    <section class="container">
      <div>
        <button @click="debugClick">Click</button>
        <button @touchstart="touchDebug">Touch</button>
      </div>

      <div class="log">{{ log }}</div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      log: ''
    }
  },
  methods: {
    debugClick () {
      this.log +=' click'
    },
    touchDebug () {
      this.log +=' touch'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';

.test {
  border: 1px solid red;
}

button {
  background: white;
  color: black;
  font-size: 32px;
  border: 1px solid red;
  padding: 10px;
}

</style>
