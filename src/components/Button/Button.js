import React from 'react';
import { Button } from 'semantic-ui-react';
import Icon from '../Icons/Icons';
import styles from './Button.scss';
// import myImage from '../../assets/images/logo.png';

const Buttons = props => (
  <div>
    <Button className={styles.ButtonStyles} {...props}>
      Click Here
    </Button>
    <Button primary>
      Basic bitch
    </Button>
    <Button icon>
      <Icon name="world" />
    </Button>
  </div>
);
export default Buttons;
