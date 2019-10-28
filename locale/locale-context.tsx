import { createContext } from 'react';

const LocaleContext = createContext({
  current: 'ru',
  ru: {},
  en: {},
  changeLocale: (e: string) => {},
});

export default LocaleContext;
