import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Wrapper from '../Wrapper/Wrapper';
import Header from '../Heading/Heading';

storiesOf('Input', module).addWithJSX(
  'Inputs',
  withNotes(
    `
  `
  )(() => (
    <Wrapper>
      <h1>input</h1>
    </Wrapper>
  ))
);
