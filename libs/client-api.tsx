/* eslint-disable no-underscore-dangle */
import { SSRData } from '@urql/core/dist/types/exchanges/ssr';
import { cacheExchange, createClient, errorExchange, fetchExchange, Provider, ssrExchange } from 'urql';

import { NextPageWithLayout } from '@/pages/_app.page';
import { isAuthError } from '@/shared';

declare global {
  interface Window {
    __URQL_DATA__: SSRData;
  }
}

const isClient = typeof window !== 'undefined';

export const ssrCache = ssrExchange({
  isClient,
  initialState: isClient ? window.__URQL_DATA__ : undefined,
});

export const clientApi = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include',
  },
  exchanges: [
    cacheExchange,
    ssrCache,
    errorExchange({
      onError: (error) => {
        if (isAuthError(error)) {
          // TODO
          console.log('error');
        }
      },
    }),
    fetchExchange,
  ],
});

export const withApi = (Component: NextPageWithLayout) => {
  return function ApiWrappedComponent({ ...properties }) {
    if (properties.urqlState) {
      ssrCache.restoreData(properties.urqlState);
    }

    const getLayout = Component.getLayout ?? ((page) => page);

    return <Provider value={clientApi}>{getLayout(<Component {...properties} />)}</Provider>;
  };
};
