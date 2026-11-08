import type { PortfolioLocale } from '~/data/locale-messages';

export const usePortfolioLocale = () => {
  const locale = useState<PortfolioLocale>('portfolio-locale-state', () => 'ko');
  const setLocale = (nextLocale: PortfolioLocale) => { locale.value = nextLocale; };

  return { locale, setLocale };
};
