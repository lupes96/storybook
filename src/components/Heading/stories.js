import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Wrapper from '../Wrapper/Wrapper';
import Heading from './Heading';

storiesOf('Headings', module).addWithJSX(
  'h',
  withNotes(
    `
World icon

  `
  )(() => (
    <Wrapper left>
      <Heading as="h1">Heading H1</Heading>
      <Heading as="h2" dividing>Heading H2</Heading>
      <Heading as="h3">Heading H3</Heading>
      <Heading as="h4">Heading H4</Heading>
      <Heading as="h5">Heading H5</Heading>
    </Wrapper>
  ))
);
