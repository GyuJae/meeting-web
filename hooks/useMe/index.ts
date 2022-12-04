import { gql, useQuery } from 'urql';

import { Result } from '@/types';

export const ME_QUERY = gql`
  query ME {
    result: me {
      id
      email
      name
    }
  }
`;

interface MeOutput {
  id: number;
  email: string;
  name: string;
}

export const useMe = () => {
  const [{ data, fetching }] = useQuery<Result<MeOutput>>({
    query: ME_QUERY,
  });

  return {
    user: data?.result,
    loading: fetching,
  };
};
