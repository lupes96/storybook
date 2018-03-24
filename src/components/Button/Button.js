import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './Button.scss';
// import myImage from '../../assets/images/logo.png';

const Buttons = props => (
  <Button className={styles.ButtonStyles} {...props}>
    Click Here
  </Button>
);
export default Buttons;
