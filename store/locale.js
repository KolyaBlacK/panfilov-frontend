export const state = () => ({
  locales: ['ru-RU', 'en'],
  locale: 'ru-RU',
});

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
};
