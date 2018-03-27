import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Wrapper from '../Wrapper/Wrapper';
import Header from '../Heading/Heading';
import Icon from '../Icons/Icons';
import { Label } from 'semantic-ui-react';
import Input from './Input';

storiesOf('Input', module).addWithJSX(
  'Inputs',
  withNotes(
    `
  `
  )(() => (
    <Wrapper>
      <p>
        <Input placeholder="Search..." fluid />
      </p>
      <Input loading icon="user" placeholder="Search..." />
      <p>
        <Input disabled placeholder="Search..." />
      </p>
      <Input error placeholder="Search..." />
      <p>
        <Input icon="search" placeholder="Search..." fluid />
      </p>
      <Input icon="users" iconPosition="left" placeholder="Search users..." fluid />

      <div>
        <Input icon placeholder="Search...">
          <input />
          <Icon name="search" />
        </Input>
        <br />

        <Input iconPosition="left" placeholder="Email">
          <Icon name="at" />
          <input />
        </Input>
      </div>

      <p>
        <Input label="http://" placeholder="mysite.com" />
      </p>

      <p>
        <Input label={{ basic: true, content: 'kg' }} labelPosition="right" placeholder="Enter weight..." />
      </p>

      <p>
        <Input labelPosition="right" type="text" placeholder="Amount">
          <Label basic>£</Label>
          <input />
          <Label>.00</Label>
        </Input>
      </p>

      <p>
        <Input
          icon="tags"
          iconPosition="left"
          label={{ tag: true, content: 'Add Tag' }}
          labelPosition="right"
          placeholder="Enter tags"
        />
      </p>

      <p> <Input action="Search" placeholder="Search..." fluid /></p>
      <Input action={{ icon: 'search' }} placeholder="Search..." fluid />
      <p>
        <Input
          action={{ color: 'green', labelPosition: 'right', icon: 'copy', content: 'Copy' }}
          defaultValue="http://ww.short.url/c0opq"
        />
      </p>

      <div>
        <Input size="mini" icon="search" placeholder="Search..." />
        <br />
        <br />
        <Input size="small" icon="search" placeholder="Search..." />
        <br />
        <br />
        <Input size="large" icon="search" placeholder="Search..." />
        <br />
        <br />
        <Input size="big" icon="search" placeholder="Search..." />
        <br />
        <br />
        <Input size="huge" icon="search" placeholder="Search..." />
        <br />
        <br />
        <Input size="massive" icon="search" placeholder="Search..." />
      </div>
    </Wrapper>
  ))
);
