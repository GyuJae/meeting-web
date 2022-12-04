import { GetServerSidePropsContext } from 'next';
import React from 'react';

import { ME_QUERY, useMe } from '@/hooks';
import { serverQuery, withApi } from '@/libs';

import styles from './home.module.scss';

const Home = () => {
  const { user } = useMe();
  console.log(user);
  return <div className={styles.wrapper}>Home</div>;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return serverQuery(ME_QUERY, {}, context);
};

export default withApi(Home);
