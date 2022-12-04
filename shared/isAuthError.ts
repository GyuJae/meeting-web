import { CombinedError } from 'urql';

export const isAuthError = (error?: CombinedError) => {
  return error?.graphQLErrors.some((e) => e.message === 'Unauthorized');
};
