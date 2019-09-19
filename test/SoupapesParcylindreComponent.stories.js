/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SoupapesParcylindre from "./SoupapesParcylindreComponent";

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

storiesOf("SoupapesParcylindre", module)
  .add("default", () => <SoupapesParcylindre {...myProps} {...actions} />)
  .add("pinned", () => (
    <SoupapesParcylindre {...myProps} pinned={true} {...actions} />
  ))
  .add("archived", () => (
    <SoupapesParcylindre {...myProps} archived={true} {...actions} />
  ));
