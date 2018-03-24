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
          <ButtonUI animated>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </ButtonUI>
        </Wrapper>
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
