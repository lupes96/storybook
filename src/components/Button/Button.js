import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styles from './Button.scss';
// import myImage from '../../assets/images/logo.png';

const Buttons = props => (
  <Button
    {...props}
    color={props.color ? props.color : props.error === 'true' ? 'red' : props.success === 'true' ? 'green' : null}
  >
    {props.children}

  </Button>
);
Buttons.Content = Button.Content;
Buttons.Group = Button.Group;
Buttons.displayName = 'Button';
export default Buttons;
