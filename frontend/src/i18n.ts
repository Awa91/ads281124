import i18next from "i18next";
//import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
//import enNs1 from "./locales/en/ns1.json";
//import frNs1 from "./locales/fr/ns1.json";
import { useFetchEnNs1 } from "./hooks/useFetchEn";
import { fetchEnNs1 } from "./hooks/useFetchEn";


export const defaultNS = "ns1";

console.log(fetchEnNs1())
//const {data, isLoading, isError} = useFetchEnNs1();
//console.log(data)
//i18next.use(initReactI18next)
//i18next.use(HttpApi)
i18next.init({
  debug: true,
  fallbackLng: "fr",
  // interpolation: {
  //   escapeValue: false,
  // },
  defaultNS,
  resources: {
    en: {
      //ns1: enNs1,
      //ns1: data,
      ns1: fetchEnNs1()
    },
    fr: {
      //ns1: frNs1,
    },
  },
  
});

export default i18next;
