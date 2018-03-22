import React from "react";
import s from "./Button.css";

const Button = props => {
    return (
        <div>
            <h3>Default</h3>
            <button className={s.Button} {...props}>
                {props.children}
            </button>
            <h3>Lightest</h3>
            <button className={s.ButtonLightest} {...props}>
                {props.children}
            </button>
            <h3>Lighter</h3>
            <button className={s.ButtonLighter} {...props}>
                {props.children}
            </button>
            <h3>Light</h3>
            <button className={s.ButtonLight} {...props}>
                {props.children}
            </button>
            <h3>Base</h3>
            <button className={s.ButtonBase} {...props}>
                {props.children}
            </button>
            <h3>Dark</h3>
            <button className={s.ButtonDark} {...props}>
                {props.children}
            </button>
            <h3>Darker</h3>
            <button className={s.ButtonDarker} {...props}>
                {props.children}
            </button>
            <h3>Darkest</h3>
            <button className={s.ButtonDarkest} {...props}>
                {props.children}
            </button>

            <h3>Active</h3>
            <button className={s.ButtonActive} {...props}>
                {props.children}
            </button>
        </div>
    );
};

Button.displayName = "Button";

export default Button;
