import { createI18n } from "vue-i18n"
import en from "./en"
import pl from "./pl"

const i18n = createI18n({
  warnHtmlInMessage: 'off',
  locale: "pl",
  fallbackLocale: "en",
  messages: { en, pl }
})

export default i18n
