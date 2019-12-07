import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Grid from '../Grid';

const components0 = storiesOf("Components0", module);
components0
  .addDecorator(withKnobs)
  // .addDecorator(withInfo({ inline: true }))
  .add("Grid", () => (
    <Grid
      text={text("テキスト", "ああああ")}
      flag={boolean("テキスト表示", true)}
      action={action("ぽちっとな")}
    />
  ));
