/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ModLe from "./ModLeComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("ModLe", module)
  .add("default", () => <ModLe {...myProps} {...actions} />)
  .add("pinned", () => <ModLe {...myProps} pinned={true} {...actions} />)
  .add("archived", () => <ModLe {...myProps} archived={true} {...actions} />);
