import React from 'react';
import { Button } from 'semantic-ui-react';
import Icon from '../Icons/Icons';
import styles from './Button.scss';
// import myImage from '../../assets/images/logo.png';

const Buttons = props => (
  <div>
    <Button className={styles.ButtonStyles} {...props}>
      {props.children}
    </Button>
    <Button icon="world" />
  </div>
);
export default Buttons;
