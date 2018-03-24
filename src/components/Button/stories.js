import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { Button } from 'semantic-ui-react';
import ButtonUI from './Button';
// import Icon from '../Icons/Icons';
import { Icon } from 'semantic-ui-react';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const Wrapper = ({ children }) => (
  <div style={styles}>
    {children}
  </div>
);

storiesOf('Buttons', module)
  .addWithJSX(
    'Standard',
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
        <Wrapper>

          <ButtonUI>Default</ButtonUI>
          <ButtonUI primary>
            Primary
          </ButtonUI>
          <ButtonUI secondary>
            Secondary
          </ButtonUI>
          <ButtonUI error="true">
            Error
          </ButtonUI>
          <ButtonUI success="true">
            Success
          </ButtonUI>

        </Wrapper>
      ))
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'Basic',
    withInfo(
      `

    
      ~~~js
      <Button basic>A basic button</Button>
      ~~~
    
    `
    )(
      withNotes(
        `
  This is some code with Info!!
  
    `
      )(
        () => (
          <Wrapper>
            <Button basic primary>a Button</Button>
          </Wrapper>
        ),
        { skip: 1 }
      )
    )
  )
  .addWithJSX(
    'Animated',
    withInfo(
      `
Animated buttons examples.

Need to import the Buttons Component from Semantic UI to get this to work

~~~js
import { Button } from 'semantic-ui-react';
~~~
  
    `
    )(
      () => (
        <Wrapper>
          <ButtonUI animated>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </ButtonUI>

          <ButtonUI animated="vertical" primary>
            <Button.Content hidden>Home</Button.Content>
            <Button.Content visible>
              <Icon name="home" />
            </Button.Content>
          </ButtonUI>

          <ButtonUI animated="fade" secondary>
            <Button.Content visible>
              <Icon name="help" /> Need help?
            </Button.Content>
            <Button.Content hidden>
              Contact Us
            </Button.Content>
          </ButtonUI>
        </Wrapper>
      ),
      { skip: 1 }
    )
  );
