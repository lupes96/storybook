import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { Label } from 'semantic-ui-react';
import Button from './Button';
import Icon from '../Icons/Icons';
import Heading from '../Heading/Heading';
import Wrapper from '../Wrapper/Wrapper';

storiesOf('Buttons', module)
  .addWithJSX(
    'Standard',
    withInfo()(
      withNotes(
        `
Standard Buttons
  
    `
      )(() => (
        <div>

          <Wrapper>
            <Heading as="h3" textAlign="center">Standard</Heading>
            <Button>Default</Button>
            <Button primary>
              Primary
            </Button>
            <Button secondary>
              Secondary
            </Button>
            <Button success="true">
              Success
            </Button>
            <Button error="true">
              Error
            </Button>

            <Button positive>Positive</Button>

            <Heading as="h3" textAlign="center"> Disabled</Heading>

            <Button disabled>Default</Button>
            <Button primary disabled>
              Primary{' '}
            </Button>
            <Button secondary disabled>
              Secondary{' '}
            </Button>

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
      <Button basic>A basic Button</Button>
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
            <Button compact>Compact</Button>
            <Button size="small">Small</Button>
            <Button size="medium">
              Medium
            </Button>
            <Button size="large">
              Large
            </Button>
            <Button size="big">
              Big
            </Button>
            <Button size="huge">
              Huge
            </Button>
            <Button size="massive">
              Massive
            </Button>
            <Button fluid>Full width</Button>
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
Animated Buttons examples.

 
    `
    )(
      () => (
        <Wrapper>
          <Button animated>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>

          <Button animated="vertical" primary>
            <Button.Content hidden>Home</Button.Content>
            <Button.Content visible>
              <Icon name="home" />
            </Button.Content>
          </Button>

          <Button animated="fade" secondary>
            <Button.Content visible>
              <Icon name="help" /> Need help?
            </Button.Content>
            <Button.Content hidden>
              Contact Us
            </Button.Content>
          </Button>
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
<Button icon primary>
<Icon name="world" />
</Button>

//shorthand
<Button icon="help" />
~~~
  
    `
    )(
      () => (
        <Wrapper>

          <Button icon="address card" />

          <Button icon labelPosition="left" secondary>
            <Icon name="pause" />
            Pause
          </Button>
          <Button icon>
            <Icon name="search" />
          </Button>
          <Button icon labelPosition="right" color="green">
            Next
            <Icon name="right arrow" />
          </Button>
        </Wrapper>
      ),
      { skip: 1 }
    )
  )
  .addWithJSX(
    'Button Groups',
    withInfo()(
      () => (
        <div>
          <Wrapper>
            <Button.Group color="blue">
              <Button>One</Button>
              <Button>Two</Button>
              <Button active><Icon name="sass" /> Sass</Button>
            </Button.Group>
          </Wrapper>
          <Wrapper>
            <Button.Group basic>
              <Button> <Icon name="home" /> Home</Button>
              <Button>Two</Button>
              <Button active>Three</Button>
              <Button>Four</Button>
            </Button.Group>
          </Wrapper>
          <Wrapper>
            <Button.Group primary>
              <Button>One</Button>
              <Button active><Icon name="world" /> World</Button>
              <Button>Four</Button>
            </Button.Group>
          </Wrapper>
          <Wrapper>

            <Button.Group vertical basic>
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
    withInfo()(
      () => (
        <div>
          <Wrapper>

            <Button.Group basic>
              <Button icon>
                <Icon name="desktop" />
              </Button>
              <Button icon active>
                <Icon name="code" />
              </Button>
              <Button icon primary>
                <Icon name="terminal" />
              </Button>
              <Button icon>
                <Icon name="address card" />
              </Button>
            </Button.Group>
          </Wrapper>
          <Wrapper>
            <Button.Group secondary>
              <Button icon>
                <Icon name="envelope" />
              </Button>
              <Button icon active>
                <Icon name="wifi" />
              </Button>
              <Button icon>
                <Icon name="home" />
              </Button>
            </Button.Group>
          </Wrapper>
          <Wrapper>
            <Button.Group color="blue">
              <Button labelPosition="left" icon="left chevron" content="Back" />
              <Button icon="stop" content="Stop" active />
              <Button labelPosition="right" icon="right chevron" content="Forward" />
            </Button.Group>

          </Wrapper>
        </div>
      ),
      { skip: 1 }
    )
  );
