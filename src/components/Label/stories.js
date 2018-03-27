import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Wrapper from '../Wrapper/Wrapper';
import Header from '../Heading/Heading';
import Icon from '../Icons/Icons';
import Image from '../Image/Image';
import Label from './Label';
import avatar from '../../assets/images/avatar.png';

storiesOf('Label', module).addWithJSX(
  'Labels',
  withNotes(
    `
  `
  )(() => (
    <Wrapper>
      <p>
        <Label>
          <Icon name="mail" /> 23
        </Label>
      </p>

      <div>
        <Label as="a" image>
          <img src={avatar} />
          Joe
        </Label>
        <Label as="a" image>
          <img src={avatar} />
          Elliot
        </Label>
        <Label as="a" image>
          <img src={avatar} />
          Stevie
        </Label>
      </div>

      <div>
        <Label as="a" color="blue" image>
          <img src={avatar} />
          Veronika
          <Label.Detail>Friend</Label.Detail>
        </Label>
        <Label as="a" color="teal" image>
          <img src={avatar} />
          Veronika
          <Label.Detail>Friend</Label.Detail>
        </Label>
        <Label as="a" color="yellow" image>
          <img src={avatar} />
          Helen
          <Label.Detail>Co-worker</Label.Detail>
        </Label>
      </div>

      <div>
        <Label image>
          <img src={avatar} />
          Adrienne
          <Icon name="delete" />
        </Label>
        <Label image>
          <img src={avatar} />
          Zoe
          <Icon name="delete" />
        </Label>
        <Label image>
          <img src={avatar} />
          Nan
          <Icon name="delete" />
        </Label>
      </div>
      <p>
        <Image fluid label={{ as: 'a', corner: 'left', icon: 'heart' }} src={avatar} size="small" centered />

      </p>

      <div>
        <Label as="a" tag>New</Label>
        <Label as="a" color="red" tag>Upcoming</Label>
        <Label as="a" color="teal" tag>Featured</Label>
      </div>
    </Wrapper>
  ))
);
