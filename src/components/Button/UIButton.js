import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './UIButton.scss';
// import myImage from '../../assets/images/logo.png';

const UIButton = props => (
  <Button className={styles.checkthis} {...props}>
    Click Here
  </Button>
);
export default UIButton;
