import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Icon from './Icons';

storiesOf('Icons', module).addWithJSX(
  'world',
  withNotes(
    `
World icon

  `
  )(() => <Icon name="home" />)
);
