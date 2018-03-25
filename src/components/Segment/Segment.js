import React from 'react';
import { Segment } from 'semantic-ui-react';
import styles from './Segment.scss';

const SegmentUI = props => <Segment {...props} />;
SegmentUI.Group = Segment.Group;
export default SegmentUI;
