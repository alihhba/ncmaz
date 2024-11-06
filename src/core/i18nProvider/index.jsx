// import i18n, {LOCALE_DATA} from './init';
//
// console.log(i18n);

// export default {
//     translate: (key, options, defaultMessage) => i18n.get(key, options).defaultMessage(defaultMessage || key),
//     changeLocale: (lang, options) => i18n.init({
//         currentLocale: lang,
//         locales: LOCALE_DATA,
//         ...options,
//     }),
//     getLocale: () => 'fa-IR',
// };

export default {
    translate: (key, options, defaultMessage) => key,
    changeLocale: (lang, options) => {},
    getLocale: () => 'fa-IR',
};