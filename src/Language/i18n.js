import i18n from "i18next"
import {initReactI18next} from "react-i18next";
import en from "./en/nav.json";
import de from "./de/nav.json";

i18n.use(initReactI18next).init({
    resources:{
        en:{translation:en},
        de:{translation:de},
//add more langs
    },

    lng:"en",
    fallbackLng: "en",

})

export default i18n
