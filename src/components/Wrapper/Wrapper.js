import React from 'react';
import styles from './Wrapper.scss';

const Wrapper = props => {
  return (
    <div
      className={[styles.Wrapper, props.left ? styles.WrapperLeft : '', props.small ? styles.WrapperSmall : ''].join(
        ' '
      )}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
