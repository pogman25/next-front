import { useContext, useMemo } from 'react';
import LocaleContext from '../locale';
import { LocaleType } from '../locale/locales';

const useLocale = () => {
  const locales = useContext(LocaleContext);
  return useMemo(() => {
    return {
      setRU: () => locales.changeLocale('ru'),
      setEN: () => locales.changeLocale('en'),
      dictionary: locales[locales.current] as LocaleType,
    };
  }, [locales.current]);
};

export default useLocale;
