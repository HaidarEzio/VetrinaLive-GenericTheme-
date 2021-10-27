const { universalLanguageDetect } = require('@unly/universal-language-detector')
const config = require('./config')

const languageDetector = universalLanguageDetect({
  supportedLanguages: config.supportedLanguages,
  fallbackLanguage: config.fallbackLng
})

module.exports = languageDetector
