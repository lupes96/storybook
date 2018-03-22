import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { WithNotes } from "@storybook/addon-notes";
import { withInfo } from "@storybook/addon-info";
import JSXAddon from "storybook-addon-jsx";
import Button from "../components/Button";

setAddon(JSXAddon);

storiesOf("Button", module)
    .addWithJSX(
        "with text",
        withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `)(() => <Button onClick={action("clicked")}>Hello Button</Button>),
        { skip: 1 }
    )
    .add("Another Button", () => (
        <div>
            <WithNotes notes={"Button with Emoji"} />
            <Button onClick={action("clicked")}>Button</Button>
        </div>
    ))
    .add("Another Button2", () => (
        <div>
            <WithNotes notes={"Button with Emoji"} />
            <Button onClick={action("clicked")}>Button 2</Button>
        </div>
    ))
    .add("Another Button3", () => (
        <div>
            <WithNotes notes={"Button with Emoji"} />
            <Button onClick={action("clicked")}>Button</Button>
        </div>
    ))
    .add("Another Button4", () => (
        <div>
            <WithNotes notes={"Button with Emoji"} />
            <Button onClick={action("clicked")}>Button</Button>
        </div>
    ))
    .add("Another Button5", () => (
        <div>
            <WithNotes notes={"Button with Emoji"} />
            <Button onClick={action("clicked")}>Button</Button>
        </div>
    ));
