import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './Icons.scss';

const Icons = props => {
  return (
    <Icon {...props} className={styles.ic}>
      {props.children}
    </Icon>
  );
};

export default Icons;
