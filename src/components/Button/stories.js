import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Button from './Button';

storiesOf('Buttons', module)
  .addWithJSX(
    'Semantic UI Button',
    withInfo(
      `
     ### Description or documentation about my component
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `
    )(
      withNotes(
        `
  This is some code with Info!!
  
    `
      )(() => (
        <div>

          <Button primary>a Button</Button>
        </div>
      ))
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'Semantic UI Basic Button',
    withNotes(
      `
  This is some code showing usage of the component and other inline documentation aha
  
    `
    )(
      () => (
        <div>

          <Button basic primary>a Button</Button>
        </div>
      ),
      { skip: 1 }
    )
  );
