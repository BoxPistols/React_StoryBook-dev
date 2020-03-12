import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Font from ".";

const components = storiesOf("Font", module);
components
  .addDecorator(withKnobs)
  // .addDecorator(withInfo({ inline: true }))
  .add("Font", () => (
    <Font
      text= { text("text", "表示テキスト") }
    />
  ));
