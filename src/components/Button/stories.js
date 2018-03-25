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
        <div>
          <Wrapper>

            <ButtonUI size="small">Default Small</ButtonUI>
            <ButtonUI primary size="medium">
              Primary Medium
            </ButtonUI>
            <ButtonUI secondary size="large">
              Secondary Large
            </ButtonUI>
            <ButtonUI error="true" compact>
              Error Compact
            </ButtonUI>
            <ButtonUI success="true">
              Success
            </ButtonUI>
            <ButtonUI positive>Positive</ButtonUI>

            <ButtonUI fluid>
              Default Full width
            </ButtonUI>
          </Wrapper>

          <h1> Disabled</h1>
          <Wrapper>
            <ButtonUI size="small" disabled>Default Small</ButtonUI>
            <ButtonUI primary size="medium" disabled>
              Primary Medium
            </ButtonUI>
            <ButtonUI secondary size="large" disabled>
              Secondary Large
            </ButtonUI>
          </Wrapper>
        </div>
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
            <ButtonUI positive basic>Positive</ButtonUI>
            <ButtonUI fluid basic>Full width</ButtonUI>
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

          <ButtonUI icon="address card" />

          <ButtonUI icon labelPosition="left" secondary>
            <Icon name="pause" />
            Pause
          </ButtonUI>
          <ButtonUI icon>
            <Icon name="search" />
          </ButtonUI>
          <ButtonUI icon labelPosition="right" color="green">
            Next
            <Icon name="right arrow" />
          </ButtonUI>
        </Wrapper>
      ),
      { skip: 1 }
    )
  )
  .addWithJSX(
    'Button Groups',
    withInfo(
      `
Button Groups, import Button from the Semantic UI library

~~~js
import { Button } from 'semantic-ui-react'
~~~
  
    `
    )(
      () => (
        <Wrapper>
          <div>

            <Button.Group widths="3" color="blue">
              <ButtonUI>One</ButtonUI>
              <ButtonUI>Two</ButtonUI>
              <ButtonUI><Icon name="sass" /> Sass</ButtonUI>
            </Button.Group>

            <Button.Group>
              <ButtonUI> <Icon name="home" /> Home</ButtonUI>
              <ButtonUI>Two</ButtonUI>
              <ButtonUI>Three</ButtonUI>
              <ButtonUI>Four</ButtonUI>
            </Button.Group>

            <Button.Group primary>
              <ButtonUI>One</ButtonUI>
              <ButtonUI><Icon name="world" /> World</ButtonUI>
              <ButtonUI>Four</ButtonUI>
            </Button.Group>
          </div>
        </Wrapper>
      ),
      { skip: 1 }
    )
  )
  .addWithJSX(
    'Icon Groups',
    withInfo(
      `
Icon Groups, import Button from the Semantic UI library

~~~js
import { Button } from 'semantic-ui-react'
~~~
  
    `
    )(
      () => (
        <Wrapper>
          <div>

            <Button.Group>
              <ButtonUI icon>
                <Icon name="desktop" />
              </ButtonUI>
              <ButtonUI icon>
                <Icon name="code" />
              </ButtonUI>
              <ButtonUI icon primary>
                <Icon name="terminal" />
              </ButtonUI>
              <ButtonUI icon>
                <Icon name="address card" />
              </ButtonUI>
            </Button.Group>
            {' '}
            <Button.Group>
              <ButtonUI icon>
                <Icon name="envelope" />
              </ButtonUI>
              <ButtonUI icon secondary>
                <Icon name="wifi" />
              </ButtonUI>
              <ButtonUI icon>
                <Icon name="home" />
              </ButtonUI>
            </Button.Group>
            {' '}
            <Button.Group>
              <ButtonUI labelPosition="left" icon="left chevron" content="Back" />
              <ButtonUI icon="stop" content="Stop" />
              <ButtonUI labelPosition="right" icon="right chevron" content="Forward" />
            </Button.Group>
          </div>
        </Wrapper>
      ),
      { skip: 1 }
    )
  )
  .addWithJSX(
    'Social Buttons',
    withInfo(
      `
      Buttons with Social links.

  
    `
    )(
      () => (
        <Wrapper>
          <ButtonUI color="facebook">
            <Icon name="facebook" /> Facebook
          </ButtonUI>
          <ButtonUI color="twitter">
            <Icon name="twitter" /> Twitter
          </ButtonUI>
          <ButtonUI color="google plus">
            <Icon name="google plus" /> Google Plus
          </ButtonUI>

          <ButtonUI color="linkedin">
            <Icon name="linkedin" /> LinkedIn
          </ButtonUI>
          <ButtonUI color="instagram">
            <Icon name="instagram" /> Instagram
          </ButtonUI>
          <ButtonUI color="youtube">
            <Icon name="youtube" /> YouTube
          </ButtonUI>
        </Wrapper>
      ),
      { skip: 1 }
    )
  );
