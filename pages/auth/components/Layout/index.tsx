import React, { FC, ReactNode } from 'react';

import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <main className={styles.wrapper}>{children}</main>;
};

export default Layout;
