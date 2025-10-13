import type { Translation } from './locales/en.tsx';
import { type SupportedLocale } from './languageList.ts';
import en from './locales/en';
import zhHans from './locales/zh-hans';
import es from './locales/es';
import ar from './locales/ar';
import fr from './locales/fr';
import ru from './locales/ru';
import de from './locales/de';
import nl from './locales/nl';
import nbNO from './locales/nb-NO';
import da from './locales/da';
import sv from './locales/sv';
import fi from './locales/fi';
import it from './locales/it';
import ptPT from './locales/pt-PT';
import cs from './locales/cs';
import pl from './locales/pl';
import hu from './locales/hu';
import sl from './locales/sl';
import el from './locales/el';
import ro from './locales/ro';
import lt from './locales/lt';
import et from './locales/et';
import bg from './locales/bg';
import sr from './locales/sr';
import sq from './locales/sq';
import uk from './locales/uk';
import ptBR from './locales/pt-BR';
import frCA from './locales/fr-CA';
import ht from './locales/ht';
import ja from './locales/ja';
import ko from './locales/ko';
import he from './locales/he';
import vi from './locales/vi';
import th from './locales/th';
import ms from './locales/ms';
import id from './locales/id';
import fil from './locales/fil';
import uz from './locales/uz';
import my from './locales/my';
import ne from './locales/ne';
import bn from './locales/bn';
import ur from './locales/ur';
import tr from './locales/tr';
import fa from './locales/fa';
import si from './locales/si';
import hi from './locales/hi';
import mr from './locales/mr';
import te from './locales/te';
import ta from './locales/ta';
import gu from './locales/gu';
import kn from './locales/kn';
import ml from './locales/ml';
import or from './locales/or';
import pa from './locales/pa';
import sw from './locales/sw';
import yo from './locales/yo';
import ig from './locales/ig';
import ha from './locales/ha';
import af from './locales/af';
import am from './locales/am';
import om from './locales/om';
import rw from './locales/rw';
import wo from './locales/wo';
import mg from './locales/mg';
import ff from './locales/ff';
import so from './locales/so';
import kk from './locales/kk';
import tk from './locales/tk';
import mn from './locales/mn';
import km from './locales/km';
import lo from './locales/lo';

const translations: Record<SupportedLocale, Translation> = {
  en, "zh-hans": zhHans, es, fr, ar, ru, de, nl, "nb-NO": nbNO,
  da, sv, fi, it, "pt-PT": ptPT, cs, pl, hu, sl, el, ro, lt, et,
  bg, sr, sq, uk, "pt-BR": ptBR, "fr-CA": frCA, ht, ja, ko, he,
  vi, th, ms, id, fil, uz, my, ne, bn, ur, tr, fa, si, hi, mr,
  te, ta, gu, kn, ml, or, pa, sw, yo, ig, ha, af, am, om, rw, wo,
  mg, ff, so, kk, tk, mn, km, lo
};

export const getTranslations = (locale: SupportedLocale): Translation => {
  return translations[locale];
};