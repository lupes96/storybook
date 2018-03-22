import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { WithNotes } from "@storybook/addon-notes";
import { withInfo } from "@storybook/addon-info";
import JSXAddon from "storybook-addon-jsx";
import Button from "../components/Button";

setAddon(JSXAddon);

const Test = ({ fontSize = "16px", fontFamily = "Arial", align = "left", color = "red", children }) => (
    <div style={{ color, fontFamily, fontSize, textAlign: align }}>{children}</div>
);

storiesOf("Button", module)
    .addWithJSX(
        "with text",
        withInfo({
            styles: {
                header: {
                    h1: {
                        color: "#ff6600"
                    }
                }
            },
            text: "String or React Element with docs about my component" // Warning! This option's name will be likely renamed to "summary" in 3.3 release. Follow this PR #1501 for details
            // other possible options see in Global options section below
        })(() => <Button onClick={action("clicked")}>Hello Button</Button>),
        { skip: 1 }
    )
    .add("with some emoji", () => (
        <div>
            <WithNotes notes={"Button with Emoji"} />
            <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
        </div>
    ))
    .addWithJSX("with more text", () => (
        <Test fontSize={45} fontFamily="Roboto" align="center" color="#CAF200" onClick={action("clicked")}>
            Hello
        </Test>
    ));
