import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { useRouter } from 'next/router';

import { graphQLClient } from '@/libs';
import { CoreOutput, Input, Result } from '@/types';

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

const login = async (variables: Input<LoginVariables>) => {
  const { result } = await graphQLClient.request<Result<LoginOutput>, Input<LoginVariables>>(LOGIN_MUTATION, variables);

  return result;
};

export const useLogin = () => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: ({ ok, error }) => {
      if (ok && !error) router.replace('/');
    },
  });

  return {
    login: mutate,
    isLoading,
  };
};
