import React from 'react';
import { Label } from 'semantic-ui-react';
import styles from './Label.scss';

const LabelUI = props => {
  return <Label {...props} />;
};

LabelUI.Detail = Label.Detail;
export default LabelUI;
