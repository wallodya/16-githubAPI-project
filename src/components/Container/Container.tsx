import React, { FC } from 'react';
import styles from './Container.module.css';

interface ContainerProps {}

const Container: FC<ContainerProps> = () => (
  <div className={styles.Container}>
    Container Component
  </div>
);

export default Container;
