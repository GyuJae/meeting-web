import { gql, useMutation } from 'urql';

import { CoreOutput, Input } from '@/types';

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($input: LoginInput!) {
    result: login(input: $input) {
      ok
      error
    }
  }
`;

interface LoginOutput extends CoreOutput {}

interface LoginVariables {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [{ fetching, error }, login] = useMutation<LoginOutput, Input<LoginVariables>>(LOGIN_MUTATION);

  return {
    login,
    fetching,
    error,
  };
};
