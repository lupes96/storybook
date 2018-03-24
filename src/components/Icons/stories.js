import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Icon from './Icons';

storiesOf('Icon', module).addWithJSX(
  'world',
  withNotes(
    `
World icon

  `
  )(() => <Icon name="home" />)
);
