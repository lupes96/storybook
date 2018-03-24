import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './Icons.scss';

const Icons = props => {
  return (
    <Icon {...props}>
      {props.children}
    </Icon>
  );
};

export default Icons;
