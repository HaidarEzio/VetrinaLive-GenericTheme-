const NextI18Next = require('next-i18next').default
const config = require('./i18next/config')

module.exports = new NextI18Next({
  defaultLanguage: config.defaultLanguage,
  otherLanguages: config.otherLanguages,
  fallbackLng: config.fallbackLng
})
