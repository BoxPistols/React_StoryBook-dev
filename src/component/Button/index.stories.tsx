import React from "react";

import { storiesOf } from "@storybook/react";
// import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ButtonComp from ".";

const components = storiesOf("Components", module);
components
  .addDecorator(withKnobs)
  // .addDecorator(withInfo({ inline: true }))
  .add("ButtonComp", () => (
    <ButtonComp
      text={text("テキスト", "ああああ")}
      flag2={boolean("", true)}
      flag={boolean("テキスト表示", true)}
      action={action("ぽちっとな")}
    />
  ));

  components
  .addDecorator(withKnobs)
  // .addDecorator(withInfo({ inline: true }))
  .add("ButtonComp2", () => (
    <ButtonComp
      text={text("テキスト", "ううう")}
      flag2={boolean("", false)}
      flag={boolean("テキスト表示", true)}
      action={action("ぽちっとな")}
    />
  ));
