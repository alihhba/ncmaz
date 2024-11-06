import React, {useEffect, useState} from 'react';
import intl from 'react-intl-universal';
import faIR from '../../languages/fa.json';

const LOCALES_LIST = [
    {
        label: "Persian",
        value: "fa-IR",
    },
];

export const LOCALE_DATA = {
    "fa-IR": faIR,
}

const ReactIntlUniversalExample = (props) => {
    const [initDone, setInitDone] = useState(false);

    useEffect(() => {
        initializeIntl();
    }, []);

    const initializeIntl = () => {
        // 1. Get the currentLocale from url, cookie, or browser setting
        let currentLocale = intl.determineLocale({
            urlLocaleKey: 'lang', // Example: https://fe-tool.com/react-intl-universal?lang=en-US
            cookieLocaleKey: 'lang', // Example: "lang=en-US" in cookie
        });

        // 2. Fallback to "en-US" if the currentLocale isn't supported in LOCALES_LIST
        if (!LOCALES_LIST.some(item => item.value === currentLocale)) {
            currentLocale = "fa-IR"
        }

        // 3. Set currentLocale and load locale data
        setCurrentLocale(currentLocale);

        // 4. After loading locale data, start to render
        setInitDone(true);
    }

    const setCurrentLocale = (currentLocale) => {
        intl.init({
            currentLocale,
            locales: LOCALE_DATA,
        });
    };

    const onLocaleChange = (e) => {
        setCurrentLocale(e.target.value);
    }

    const localeSelector = (
        <select onChange={onLocaleChange} defaultValue="">
            <option value="" disabled>Change Language</option>
            {LOCALES_LIST.map(locale => (
                <option key={locale.value} value={locale.value}>{locale.label}</option>
            ))}
        </select>
    );

    return initDone && intl;
}

export default <ReactIntlUniversalExample />;