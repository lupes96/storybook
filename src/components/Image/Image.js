import React from 'react';
import { Image } from 'semantic-ui-react';
import styles from './Image.scss';

const Images = props => <Image {...props} />;
Image.displayName = 'Image';
Images.Group = Image.Group;
export default Images;
