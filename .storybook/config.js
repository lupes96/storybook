import { configure } from "@storybook/react";
// import { configure } from "@storybook/addon-viewport";

function loadStories() {
    require("../src/stories/index.js");

    // You can require as many stories as you need.
}

configure(loadStories, module);
