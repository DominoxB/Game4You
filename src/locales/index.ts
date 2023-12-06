import { createI18n } from "vue-i18n"
import en from "./en"
import pl from "./pl"

const i18n = createI18n({
  warnHtmlInMessage: 'off',
  locale: "en",
  fallbackLocale: "pl",
  messages: { en, pl }
})

export default i18n
