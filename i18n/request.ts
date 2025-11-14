import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async (params) => {
  if (!params.locale) {
    return {
      locale: 'uk',
      messages: (await import(`../translations/uk.json`)).default
    }
  }

  return {
    locale: params.locale,
    messages: (await import(`../translations/${params.locale}.json`)).default
  };
});