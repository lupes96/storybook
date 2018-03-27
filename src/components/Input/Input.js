import React from 'react';
import { Input } from 'semantic-ui-react';
import styles from './Input.scss';

const InputUI = props => {
  return <Input {...props} />;
};

InputUI.displayName = 'Input';
export default InputUI;
