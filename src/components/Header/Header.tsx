import React, { FC } from 'react';
import styles from './Header.module.css';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher.lazy';

const Header: FC = () => (
  <div className={styles.Header}>
    <div className={styles.logo}>
        devFinder
    </div>
    <ThemeSwitcher />
  </div>
);

export default Header;
