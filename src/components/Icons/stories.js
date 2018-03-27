import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Wrapper from '../Wrapper/Wrapper';
import Header from '../Heading/Heading';
import Icon from './Icons';

storiesOf('Icons', module).addWithJSX(
  'world',
  withNotes(
    `
World icon

  `
  )(() => (
    <Wrapper>
      <Header as="h3">Web content</Header>
      <Icon name="search" size="large" />
      <Icon name="mail outline" size="large" />
      <Icon name="signal" size="large" />
      <Icon name="setting" size="large" />
      <Icon name="home" size="large" />
      <Icon name="inbox" size="large" />
      <Icon name="browser" size="large" />
      <Icon name="tag" size="large" />
      <Icon name="tags" size="large" />
      <Icon name="image" size="large" />
      <Icon circular inverted color="teal" name="users" size="large" />

      <Icon circular color="teal" name="users" size="large" />
    </Wrapper>
  ))
);
