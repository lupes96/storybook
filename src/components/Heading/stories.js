import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Image from '../Image/Image';
import Wrapper from '../Wrapper/Wrapper';
import Icon from '../Icons/Icons';

import Header from './Heading';
import Segment from '../Segment/Segment';
import avatar from '../../assets/images/avatar.png';

storiesOf('Headings', module)
  .addWithJSX(
    'Page Headers',
    withInfo()(
      withNotes(`  `)(() => (
        <Wrapper left>
          <Header as="h1">Header H1</Header>
          <Header as="h2">Header H2</Header>
          <Header as="h3">Header H3</Header>
          <Header as="h4">Header H4</Header>
          <Header as="h5">Header H5</Header>
        </Wrapper>
      ))
    )
  )
  .addWithJSX(
    'Headers Colours',
    withInfo()(
      withNotes(`  `)(() => (
        <Wrapper left>
          <Header as="h1">Standard</Header>
          <Header as="h1" color="green">Green</Header>
          <Header as="h1" color="yellow">Yellow</Header>
          <Header as="h1" color="blue">Blue</Header>
          <Header as="h1" color="red">Red</Header>
          <Header as="h1" color="grey">Grey</Header>
        </Wrapper>
      ))
    )
  )
  .addWithJSX(
    'Icon Headers',
    withInfo()(
      withNotes(``)(() => (
        <Wrapper>
          <Header as="h2" icon>
            <Icon name="settings" />
            Account Settings
            <Header.Subheader>
              Manage your account settings
            </Header.Subheader>
          </Header>

          <Header as="h2">
            <Image circular src={avatar} />
            Patrick
          </Header>

          <Header as="h2" image={avatar} content="Learn More" />

        </Wrapper>
      ))
    )
  )
  .addWithJSX(
    'Block Headers',
    withInfo()(
      withNotes(
        `
    Block headers
    `
      )(() => (
        <Wrapper left>

          <Header as="h2">
            <Icon name="wifi" />
            <Header.Content>
              Icon header
              <Header.Subheader>
                Free internet
              </Header.Subheader>
            </Header.Content>
          </Header>

          <Header as="h3" block>
            Block Header
          </Header>

          <div>
            <Header as="h2" attached="top">
              Attached Header
            </Header>
            <Segment attached>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Segment>
          </div>

          <Header as="h3" dividing>
            Dividing Header
          </Header>

          <Header as="h2">
            Header Content
            <Header.Subheader>
              Sub Header
            </Header.Subheader>
          </Header>
        </Wrapper>
      ))
    )
  );
