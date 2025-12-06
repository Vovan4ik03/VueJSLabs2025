import { createI18n } from 'vue-i18n'
import ua from './locales/ua.json'
import en from './locales/en.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages: {
    ua,
    en
  },
  modifiers: {
    upper: (str) => str.toUpperCase(),
    lower: (str) => str.toLowerCase(),
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    
    exclaim: (str) => `${str}!`
  }
})
