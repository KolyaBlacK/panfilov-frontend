<template>
  <div data-scroll-container>
    <TagLine />
    <Works />
    <About />
    <KeyClients />
  </div>

</template>

<script>
export default {
  data() {
    return {
      lmS: null
    };
  },
  mounted () {
    this.lmS = new this.LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: false
    });
  }

}
</script>
