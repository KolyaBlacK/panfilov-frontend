export default ({ app, store }) => {
  // store.commit('locale/SET_LANG', app.i18n.locale);

  app.nuxt.defaultTransition.beforeEnter = () => {
    // console.log(app.i18n)
    app.i18n.finalizePendingLocaleChange()
  }

  // Optional: wait for locale before scrolling for a smoother transition
  app.router.options.scrollBehavior = async (to, from, savedPosition) => {
    // Make sure the route has changed
    if (to.name !== from.name) {
      await app.i18n.waitForPendingLocaleChange()
    }
    return savedPosition || { x: 0, y: 0 }
  }
  app.router.beforeEach((to, from, next) => {
    app.i18n.finalizePendingLocaleChange().then(() => next())
  })
}
