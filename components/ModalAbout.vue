<template>
<div class="reel-container">
  <button-dots
    class='close-button'
    active
    @click="$modal.hide('example')"
  />
  123
  <iframe
    class="reel"
    src="https://www.youtube.com/embed/4NRXx6U8ABQ"
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

  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';

.reel-container {
  display: block;

  .reel {
    margin: 90px 24px 24px;
    height: calc(100% - 110px);
    width: calc(100% - 48px);
    z-index: 50;
  }
}

.close-button {
  position: absolute;
  top: 1%;
  right: 2%;
  z-index: 51;
  cursor: pointer;
}

</style>
