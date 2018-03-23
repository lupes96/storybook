import React from 'react';
import s from './Button.scss';

const Button = props => {
  return (
    <div>

      <button className={s.ButtonLightest} {...props}>
        {props.children}
      </button>

      <button className={s.ButtonLighter} {...props}>
        {props.children}
      </button>

      <button className={s.ButtonLight} {...props}>
        {props.children}
      </button>

      <button className={s.ButtonBase} {...props}>
        {props.children}
      </button>

      <button className={s.ButtonDark} {...props}>
        {props.children}
      </button>

      <button className={s.ButtonDarker} {...props}>
        {props.children}
      </button>

      <button className={s.ButtonDarkest} {...props}>
        {props.children}
      </button>

      <button className={s.ButtonActive} {...props}>
        {props.children}
      </button>
    </div>
  );
};

Button.displayName = 'Button';

export default Button;
