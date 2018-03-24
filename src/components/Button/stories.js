import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { Button, Label } from 'semantic-ui-react';
import ButtonUI from './Button';
import Icon from '../Icons/Icons';
import Wrapper from '../Wrapper/Wrapper';

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
          <ButtonUI positive>Positive Button</ButtonUI>
          <ButtonUI negative>Negative Button</ButtonUI>
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
            <ButtonUI basic>Default</ButtonUI>
            <ButtonUI primary basic>
              Primary
            </ButtonUI>
            <ButtonUI secondary basic>
              Secondary
            </ButtonUI>
            <ButtonUI error="true" basic>
              Error
            </ButtonUI>
            <ButtonUI success="true" basic>
              Success
            </ButtonUI>
            <ButtonUI positive basic>Positive Button</ButtonUI>
            <ButtonUI negative basic>Negative Button</ButtonUI>
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
  )
  .addWithJSX(
    'Icons',
    withInfo(
      `
Add Icons using both shorthand and longhand syntax

~~~js
// longhand
<ButtonUI icon primary>
<Icon name="world" />
</ButtonUI>

//shorthand
<ButtonUI icon="help" />
~~~
  
    `
    )(
      () => (
        <Wrapper>
          <ButtonUI icon color="blue">
            <Icon name="search" />
          </ButtonUI>
          <ButtonUI icon="address card" color="red" />

          <ButtonUI icon labelPosition="left" secondary>
            <Icon name="pause" />
            Pause
          </ButtonUI>
          <ButtonUI icon labelPosition="right" color="green">
            Next
            <Icon name="right arrow" />
          </ButtonUI>
        </Wrapper>
      ),
      { skip: 1 }
    )
  );
