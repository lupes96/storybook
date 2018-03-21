import React from 'react';
import s from './Button.css';

const Button = props => {
  return (
    <div>
      <h3>Default</h3>
      <button className={s.Button} {...props}>{props.children}</button>
      <h3>Active</h3>
      <button className={s.ButtonActive} {...props}>{props.children}</button>
    </div>
  );
};

export default Button;
