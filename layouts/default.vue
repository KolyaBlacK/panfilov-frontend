<template>
  <div>
    <burger-menu />
    <Nuxt />
    <Footer/>
    <Footer/>
    <Footer/>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/scss/variables';
.container {
  margin: 0 auto;
  padding: 0 15px;
  @media #{$media-sm-up} {
    padding: 0 32px;
  }
  // width: 1440px;
}
</style>
