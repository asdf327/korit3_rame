// import i18n from "i18next";
// import {initReactI18next} from "react-i18next";

// import en from './i18n/en.json';
// import de from './i18n/de.json';

// i18n.use(initReactI18next).i18n({
//   resources: {
//     en: {translation: en},
//     de: {translation: de},
//   },
//   lng: 'en',
//   fallbacklng: 'en',
//   interpolation: {
//     escapeValue: false,
//   }
// })

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 예시: `en`, `de` 번역 파일 (이 부분은 실제 번역 파일을 적어야 합니다)
import en from './en.json'  // 영어 번역 파일
import de from './de.json';  // 독일어 번역 파일

// i18n 초기화
i18n
  .use(initReactI18next)  // react-i18next 플러그인 사용
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: 'en',  // 기본 언어 설정
    fallbackLng: 'en',  // fallback 언어 설정
    interpolation: {
      escapeValue: false,  // React는 XSS 보호가 되어 있으므로 escape가 필요하지 않음
    },
  });

export default i18n;