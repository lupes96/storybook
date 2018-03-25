import React from 'react';
import { Button } from 'semantic-ui-react';
import Icon from '../Icons/Icons';
import styles from './Button.scss';
// import myImage from '../../assets/images/logo.png';

const Buttons = props => (
  <Button
    className={styles.ButtonStyles}
    {...props}
    color={props.color ? props.color : props.error === 'true' ? 'red' : props.success === 'true' ? 'green' : null}
  >
    {props.children}
  </Button>
);

Buttons.displayName = 'Button';
export default Buttons;
