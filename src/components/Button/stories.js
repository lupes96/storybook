import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { Button, Label } from 'semantic-ui-react';
import ButtonUI from './Button';
import Icon from '../Icons/Icons';
import Heading from '../Heading/Heading';
import Wrapper from '../Wrapper/Wrapper';

storiesOf('Buttons', module)
  .addWithJSX(
    'Standard',
    withInfo()(
      withNotes(
        `
  This is some code with Info!!
  
    `
      )(() => (
        <div>
          <Wrapper>
            <Heading as="h3" textAlign="center">Standard</Heading>
            <ButtonUI>Default</ButtonUI>
            <ButtonUI primary>
              Primary
            </ButtonUI>
            <ButtonUI secondary>
              Secondary
            </ButtonUI>
            <ButtonUI success="true">
              Success
            </ButtonUI>
            <ButtonUI error="true">
              Error
            </ButtonUI>

            <ButtonUI positive>Positive</ButtonUI>

            <Heading as="h3" textAlign="center"> Disabled</Heading>

            <ButtonUI disabled>Default</ButtonUI>
            <ButtonUI primary disabled>
              Primary{' '}
            </ButtonUI>
            <ButtonUI secondary disabled>
              Secondary{' '}
            </ButtonUI>
          </Wrapper>
        </div>
      ))
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'Multiple Sizes',
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
            <ButtonUI compact>Compact</ButtonUI>
            <ButtonUI size="small">Small</ButtonUI>
            <ButtonUI size="medium">
              Medium
            </ButtonUI>
            <ButtonUI size="large">
              Large
            </ButtonUI>
            <ButtonUI size="big">
              Big
            </ButtonUI>
            <ButtonUI size="huge">
              Huge
            </ButtonUI>
            <ButtonUI size="massive">
              Massive
            </ButtonUI>
            <ButtonUI fluid>Full width</ButtonUI>
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

          <ButtonUI circular icon="address card" />

          <ButtonUI icon labelPosition="left" secondary circular>
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
        <div>
          <Wrapper>
            <Button.Group color="blue">
              <ButtonUI>One</ButtonUI>
              <ButtonUI>Two</ButtonUI>
              <ButtonUI active><Icon name="sass" /> Sass</ButtonUI>
            </Button.Group>
          </Wrapper>
          <Wrapper>
            <Button.Group basic>
              <ButtonUI> <Icon name="home" /> Home</ButtonUI>
              <ButtonUI>Two</ButtonUI>
              <ButtonUI active>Three</ButtonUI>
              <ButtonUI>Four</ButtonUI>
            </Button.Group>
          </Wrapper>
          <Wrapper>
            <Button.Group primary>
              <ButtonUI>One</ButtonUI>
              <ButtonUI active><Icon name="world" /> World</ButtonUI>
              <ButtonUI>Four</ButtonUI>
            </Button.Group>
          </Wrapper>
          <Wrapper>

            <Button.Group vertical>
              <Button>Vertical navigation menu</Button>
              <Button active>Link active</Button>
              <Button><Icon name="wifi" /> Internet</Button>
              <Button>link</Button>
            </Button.Group>
          </Wrapper>
        </div>
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
        <div>
          <Wrapper>

            <Button.Group basic>
              <ButtonUI icon>
                <Icon name="desktop" />
              </ButtonUI>
              <ButtonUI icon active>
                <Icon name="code" />
              </ButtonUI>
              <ButtonUI icon primary>
                <Icon name="terminal" />
              </ButtonUI>
              <ButtonUI icon>
                <Icon name="address card" />
              </ButtonUI>
            </Button.Group>
          </Wrapper>
          <Wrapper>
            <Button.Group secondary>
              <ButtonUI icon>
                <Icon name="envelope" />
              </ButtonUI>
              <ButtonUI icon active>
                <Icon name="wifi" />
              </ButtonUI>
              <ButtonUI icon>
                <Icon name="home" />
              </ButtonUI>
            </Button.Group>
          </Wrapper>
          <Wrapper>
            <Button.Group color="blue">
              <ButtonUI labelPosition="left" icon="left chevron" content="Back" />
              <ButtonUI icon="stop" content="Stop" active />
              <ButtonUI labelPosition="right" icon="right chevron" content="Forward" />
            </Button.Group>

          </Wrapper>
        </div>
      ),
      { skip: 1 }
    )
  );
