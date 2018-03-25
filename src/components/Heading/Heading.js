import React from 'react';
import { Header } from 'semantic-ui-react';
import styles from './Heading.scss';

const Heading = props => (
  <Header {...props}>
    {props.children}
  </Header>
);
export default Heading;
