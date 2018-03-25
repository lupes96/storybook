import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Wrapper from '../Wrapper/Wrapper';
import Heading from './Heading';
import { Header, Icon } from 'semantic-ui-react';

storiesOf('Headings', module)
  .addWithJSX(
    'Page Headers',
    withNotes(`  `)(() => (
      <Wrapper left>
        <Heading as="h1">Heading H1</Heading>
        <Heading as="h2">Heading H2</Heading>
        <Heading as="h3">Heading H3</Heading>
        <Heading as="h4">Heading H4</Heading>
        <Heading as="h5">Heading H5</Heading>
      </Wrapper>
    ))
  )
  .addWithJSX(
    'Content Headers',
    withNotes(
      `
    Content headings are sized with em and are based on the font-size of their container. 
    
    Use for content sections

  `
    )(() => (
      <Wrapper left>
        <Heading size="huge">Heading H1</Heading>
        <Heading size="large">Heading H2</Heading>
        <Heading size="medium">Heading H3</Heading>
        <Heading size="small">Heading H4</Heading>
        <Heading size="tiny">Heading H5</Heading>
      </Wrapper>
    ))
  );
