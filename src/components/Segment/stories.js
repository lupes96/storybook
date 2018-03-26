import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { Message } from 'semantic-ui-react';
import Wrapper from '../Wrapper/Wrapper';

import Segment from './Segment';
import Header from '../Heading/Heading';
import Icon from '../Icons/Icons';

storiesOf('Section', module)
  .addWithJSX(
    'Single Sections',
    withInfo()(
      withNotes(`  `)(() => (
        <Wrapper left>
          <Header as="h3">Standard</Header>
          <Segment>
            Pellentesque habitant morbi tristique senectus.
          </Segment>

          <Header as="h3">Emphasised</Header>

          <Segment secondary>
            I am pretty noticeable but you might check out other content before you look at me.
          </Segment>

          <Header as="h3">Aligned</Header>
          <div>
            <Segment textAlign="right">
              Right aligned content.
            </Segment>
            <Segment textAlign="left">
              Left aligned content.
            </Segment>
            <Segment textAlign="center">
              Center aligned content.
            </Segment>
          </div>

          <Header as="h3">Sizes</Header>
          <Segment size="mini">
            It's a  segment
          </Segment>
          <Segment size="tiny">
            It's a  segment
          </Segment>
          <Segment size="small">
            It's a  segment
          </Segment>
          <Segment size="large">
            It's a  segment
          </Segment>

        </Wrapper>
      ))
    )
  )
  .addWithJSX(
    'Group Sections',
    withInfo()(
      withNotes(`  `)(() => (
        <Wrapper left>

          <Header as="h3">Vertical</Header>
          <div>

            <Segment vertical>Te eum doming eirmod, nominati pertinacia argumentum ad his.</Segment>
            <Segment vertical>Pellentesque habitant morbi tristique senectus.</Segment>
            <Segment vertical>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</Segment>
          </div>

          <Header as="h3">Group</Header>
          <Segment.Group>
            <Segment>Top</Segment>
            <Segment>Middle</Segment>
            <Segment>Middle</Segment>
            <Segment>Middle</Segment>
            <Segment>Bottom</Segment>
          </Segment.Group>

          <Header as="h3">Complex group</Header>
          <div>
            <Header as="h3" attached="top">
              Dogs
            </Header>
            <Segment attached>
              Dogs are one type of animal.
            </Segment>
            <Header as="h3" attached>
              Cats
            </Header>
            <Segment attached>
              Cats are thought of as being related to dogs, but only humans think this.
            </Segment>
            <Segment attached>
              Cats are thought of as being related to dogs, but only humans think this.
            </Segment>
            <Segment attached>
              Cats are thought of as being related to dogs, but only humans think this.
            </Segment>
            <Header as="h3" attached>
              Lions
            </Header>
            <Segment attached>
              Humans don't think of lions as being like cats, but they are.
            </Segment>
            <Message warning attached="bottom">
              <Icon name="warning" />
              You've reached the end of this content segment!
            </Message>
          </div>

          <Header as="h3">Sizes</Header>
          <Segment.Group size="mini">
            <Segment>
              It's a  segment
            </Segment>
            <Segment>
              And it's a segment, too
            </Segment>
          </Segment.Group>

          <Segment.Group size="tiny">
            <Segment>
              It's a  segment
            </Segment>
            <Segment>
              And it's a segment, too
            </Segment>
          </Segment.Group>

          <Segment.Group size="small">
            <Segment>
              It's a  segment
            </Segment>
            <Segment>
              And it's a segment, too
            </Segment>
          </Segment.Group>

          <Segment.Group size="large">
            <Segment>
              It's a  segment
            </Segment>
            <Segment>
              And it's a segment, too
            </Segment>
          </Segment.Group>

        </Wrapper>
      ))
    )
  )
  .addWithJSX(
    'Colours',
    withInfo()(
      withNotes(`  `)(() => (
        <Wrapper left>
          <Header as="h3">Coloured</Header>
          <div>

            <Segment inverted color="yellow">Yellow</Segment>
            <Segment inverted color="yellow" secondary>Yellow</Segment>

            <Segment inverted color="green">Green</Segment>
            <Segment inverted color="green" secondary>Green</Segment>
            <Segment inverted color="red">Red</Segment>
            <Segment inverted color="red" secondary>
              Red
            </Segment>

            <Segment inverted color="blue">Blue</Segment>
            <Segment inverted color="blue" secondary>Blue</Segment>

            <Segment inverted color="grey">Grey</Segment>
            <Segment inverted color="grey" secondary>Grey</Segment>

          </div>

        </Wrapper>
      ))
    )
  );
