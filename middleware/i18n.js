export default function ({isHMR, app, store, route, params, error, redirect}) {
  const locale = app.i18n.locale
  if (isHMR) return
  // const locale = route.query.lang || defaultLocale
  // console.log('defaultLocale', locale)
  // if (!store.state.locale.locales.includes(locale)) {
  //   return error ({message: 'This page could not be found.', statusCode: 404})
  // }
  store.commit ('locale/SET_LANG', locale)
}


// export default function ({ isHMR, app, store, route, params, req, error, redirect }) {
//   if (isHMR) { // ignore if called from hot module replacement
//     return;
//   }
//
//   if (req) {
//     if (route.name) {
//       let locale = null;
//
//       // check if the locale cookie is set
//       if (req.headers.cookie) {
//         const cookies = req.headers.cookie.split('; ').map(stringCookie => stringCookie.split('='));
//         const cookie = cookies.find(cookie => cookie[0] === 'locale');
//
//         if (cookie) {
//           locale = cookie[1];
//         }
//       }
//
//       // if the locale cookie is not set, fallback to accept-language header
//       if (!locale) {
//         locale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substring(0, 2);
//       }
//
//       store.commit('SET_LANG', locale);
//       app.i18n.locale = store.state.locale;
//     }
//   }
// };
