import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Wrapper from '../Wrapper/Wrapper';
import Header from '../Heading/Heading';
import img from '../../assets/images/image.png';
import imgw from '../../assets/images/white-image.png';
import imgb from '../../assets/images/image-banner.png';
import Image from './Image';

storiesOf('Images', module).addWithJSX(
  'Rendering images',
  withNotes(
    `
  `
  )(() => (
    <Wrapper left small>
      <Header as="h3">Standard Image</Header>
      <Image src={img} size="medium" />

      <Header as="h3">Image with link</Header>
      <Image src={img} as="a" size="medium" href="#" target="_blank" />

      <Header as="h3">Bordered</Header>
      <Image src={imgw} size="medium" bordered />

      <Header as="h3">Full width</Header>
      <Image src={imgb} fluid />

      <Header as="h3">Rounded</Header>
      <Image src={img} rounded size="medium" />

      <Header as="h3">Align middle with text</Header>
      <Image src={img} size="tiny" verticalAlign="middle" /> <span>Middle Aligned</span>

      <Header as="h3">Centered</Header>
      <Image src={img} size="medium" centered />
    </Wrapper>
  ))
);
