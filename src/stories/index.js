import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
import Button from '../components/Button';
import UIButton from '../components/Button/UIButton';

setAddon(JSXAddon);

storiesOf('Button', module)
  .addWithJSX(
    'with text',
    withInfo(
      `
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `
    )(() => <Button onClick={action('clicked')}>Hello Button</Button>),
    { skip: 1 }
  )
  .add(
    'Semantic UI Button',
    () => (
      <div>
        <WithNotes notes={'Button from Semantic UI'} />
        <UIButton primary>a Button</UIButton>
      </div>
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'Semantic UI Basic Button',
    () => (
      <div>
        <WithNotes notes={'Button from Semantic UI'} />
        <UIButton basic primary>a Button</UIButton>
      </div>
    ),
    { skip: 1 }
  );

storiesOf('Aha', module).addWithJSX(
  'with texttt',
  withInfo(
    `
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `
  )(() => <Button onClick={action('clicked')}>Hello Button</Button>),
  { skip: 1 }
);
