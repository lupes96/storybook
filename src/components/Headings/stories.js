import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

const Heading = props => <h1 {...props}>{props.children}</h1>;

storiesOf('Headings', module).addWithJSX(
  'h1',
  withNotes(
    `
This is some code showing usage of the component and other inline documentation

  `
  )(() => <Heading>A Heading</Heading>, {
    skip: 1
  })
);
