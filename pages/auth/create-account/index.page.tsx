import React, { ReactElement } from 'react';

import { NextPageWithLayout } from '@/pages/_app.page';

import { Layout } from '../components';

const CreateAccount: NextPageWithLayout = () => {
  return <div>CreateAccount</div>;
};

export default CreateAccount;

CreateAccount.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
