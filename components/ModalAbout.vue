<template>
<div class="reel-container">
  <button-dots
    class='close-button'
    active
    white
    @click="closeModal"
  />
  <iframe
    class="reel"
    src="https://www.youtube.com/embed/vcAtzpJWyx0"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$modal.hide('modal-about')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';

.reel-container {
  display: block;
  height: 100%;
  padding: 2%;
  text-align: right;

  .reel {
    width: 100%;
    height: calc(100% - 70px);
    margin-top: 70px;
    @media #{$media-lg-up} {
      height: calc(100% - 3.8vw);
      margin-top: 3.8vw;
    }
  }
}

.close-button {
  cursor: pointer;
  position: absolute;
  right: 2%;
  top: 2%;
}

</style>
